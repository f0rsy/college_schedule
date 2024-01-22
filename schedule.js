const groupSelect = document.getElementById('groupSelect');
const teacherSelect = document.getElementById('teacherSelect');
const classroomSelect = document.getElementById('classroomSelect');
const dayOfWeekSelect = document.getElementById('daySelect');
const loaderElement = document.getElementById('loader');
const scheduleViewElement = document.getElementById('scheduleContainer');
const showButtonElement = document.getElementById('showScheduleBtn');
const returnButtonElement = document.getElementById('returnBtn');
const buttonTextElement = document.getElementById('showButtonText');
const mainFormElement = document.getElementById('selectOptions');

const scheduleContainer = $("#scheduleContainer");
const showButton = $("#showScheduleBtn");
const returnButton = $("#returnBtn");
const mainForm = $("#selectOptions");
const errorPanel = $("#errorPanel");
const loader = $("#loader");
const buttonText = $("#showButtonText");

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let isAnimating = false;

var savedGroupSelect = "";
var savedTeacherSelect = "";
var savedClassroomSelect = "";
var savedDayofweekSelect = "";

function getScheduleData() {
    return $("#scheduleData");
}

function startLoader() {
    if (!isAnimating) {
        isAnimating = true;

        buttonTextElement.style.opacity = 0;

        setTimeout(function () {
            buttonText.hide();
        }, 200);
        setTimeout(function () {
            loader.show();
            setTimeout(function () {
                loaderElement.style.opacity = 1;
            }, 10);
        }, 200);
    }
}

function stopLoader() {
    if (isAnimating) {
        loaderElement.style.opacity = 0;
        setTimeout(function () {
            loader.hide();
            buttonText.show();
            buttonTextElement.style.opacity = 1;
            setTimeout(function () {
                isAnimating = false;
            }, 200);
        }, 200)
    }
}

showButtonElement.addEventListener("mouseenter", function () {
    loaderElement.style.stroke = "black";
});
showButtonElement.addEventListener("mouseleave", function () {
    loaderElement.style.stroke = "white";
});

function getSelectedOptionIndex(selectElement) {
    return selectElement.options[selectElement.selectedIndex].value;
}
function getGroupSelectIndex() {
    return getSelectedOptionIndex(groupSelect);
}
function getTeacherSelectIndex() {
    return getSelectedOptionIndex(teacherSelect);
}
function getClassroomSelectIndex() {
    return getSelectedOptionIndex(classroomSelect);
}
function getDayOfWeekSelectIndex() {
    return getSelectedOptionIndex(dayOfWeekSelect);
}
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function checkParameters() {
    var group = getGroupSelectIndex();
    var teacher = getTeacherSelectIndex();
    var classroom = getClassroomSelectIndex();
    var day = getDayOfWeekSelectIndex();

    if (group == "" && teacher == "" && classroom == "") {
        alert("Выберите пожалуйста один из вариантов для отображения расписания");
        return false;
    }
    if (day == "") {
        alert("Не выбран день недели для отображения расписания");
        return false;
    }
    if (savedGroupSelect == group && savedTeacherSelect == teacher && savedClassroomSelect == classroom && savedDayofweekSelect == day) {
        return false;
    }

    savedGroupSelect = group;
    savedTeacherSelect = teacher;
    savedClassroomSelect = classroom;
    savedDayofweekSelect = day;

    return true;
}

function renderTable(scheduleObject) {

    var groupTableHeader = "<table class=\"table\"><thead><tr><th>Пара</th><th>Преподаватель</th><th>Кабинет</th><th>Начало</th><th>Конец</th></tr></thead><tbody id=\"scheduleData\"></tbody></table>";
    var teacherTableHeader = "<table class=\"table\"><thead><tr><th>Пара</th><th>Группа</th><th>Кабинет</th><th>Начало</th><th>Конец</th></tr></thead><tbody id=\"scheduleData\"></tbody></table>";
    var classroomTableHeader = "<table class=\"table\"><thead><tr><th>Пара</th><th>Группа</th><th>Преподаватель</th><th>Начало</th><th>Конец</th></tr></thead><tbody id=\"scheduleData\"></tbody></table>";

    scheduleContainer.empty();

    if (getDayOfWeekSelectIndex() == "AllWeek") {
        if (getGroupSelectIndex() != "") {
            scheduleContainer.append(groupTableHeader);
            var scheduleData = getScheduleData();
            for (var day = 0; day < daysOfWeek.length; day++) {
                var lectures = scheduleObject[daysOfWeek[day]].Lectures;
                var dayOfWeek = scheduleObject[daysOfWeek[day]].Date;

                scheduleData.append("<br>");
                scheduleData.append($("<table class=\"table\"><thead><tr><th>" + dayOfWeek + "</th></tr></thead></table>"));

                for (var i = 0; i < lectures.length; i++) {
                    var subject = i + 1 + " " + lectures[i].Subject;
                    scheduleData.append($("<tr><td>" + subject + "</td><td>" + lectures[i].Teacher + "</td><td>" +
                        lectures[i].Classroom + "</td><td>" + lectures[i].StartTime + "</td><td>" + lectures[i].EndTime + "</td></tr>"));
                }
            }
        }
        else if (getTeacherSelectIndex() != "") {
            scheduleContainer.append(teacherTableHeader);
            var scheduleData = getScheduleData();
            for (var day = 0; day < daysOfWeek.length; day++) {
                var lectures = scheduleObject[daysOfWeek[day]].Lectures;
                var dayOfWeek = scheduleObject[daysOfWeek[day]].Date;

                scheduleData.append("<br>");
                scheduleData.append($("<table class=\"table\"><thead><tr><th>" + dayOfWeek + "</th></tr></thead></table>"));

                for (var i = 0; i < lectures.length; i++) {
                    var subject = i + 1 + " " + lectures[i].Subject;
                    scheduleData.append($("<tr><td>" + subject + "</td><td>" + lectures[i].Group + "</td><td>" +
                        lectures[i].Classroom + "</td><td>" + lectures[i].StartTime + "</td><td>" + lectures[i].EndTime + "</td></tr>"));
                }
            }
        }
        else if (getClassroomSelectIndex() != "") {
            scheduleContainer.append(classroomTableHeader);
            var scheduleData = getScheduleData();
            for (var day = 0; day < daysOfWeek.length; day++) {
                var lectures = scheduleObject[daysOfWeek[day]].Lectures;
                var dayOfWeek = scheduleObject[daysOfWeek[day]].Date;

                scheduleData.append("<br>");
                scheduleData.append($("<table class=\"table\"><thead><tr><th>" + dayOfWeek + "</th></tr></thead></table>"));

                for (var i = 0; i < lectures.length; i++) {
                    var subject = i + 1 + " " + lectures[i].Subject;
                    scheduleData.append($("<tr><td>" + subject + "</td><td>" + lectures[i].Group + "</td><td>" +
                        lectures[i].Teacher + "</td><td>" + lectures[i].StartTime + "</td><td>" + lectures[i].EndTime + "</td></tr>"));
                }
            }
        }
    }
    else {
        if (getGroupSelectIndex() != "") {
            scheduleContainer.append(groupTableHeader);
            var scheduleData = getScheduleData();
            var lectures = scheduleObject.Lectures;
            var dayOfWeek = scheduleObject.Date;

            scheduleData.append("<br>");
            scheduleData.append($("<table class=\"table\"><thead><tr><th>" + dayOfWeek + "</th></tr></thead></table>"));

            for (var i = 0; i < lectures.length; i++) {
                var subject = i + 1 + " " + lectures[i].Subject;
                scheduleData.append($("<tr><td>" + subject + "</td><td>" + lectures[i].Teacher + "</td><td>" +
                    lectures[i].Classroom + "</td><td>" + lectures[i].StartTime + "</td><td>" + lectures[i].EndTime + "</td></tr>"));
            }
        }
        else if (getTeacherSelectIndex() != "") {
            scheduleContainer.append(teacherTableHeader);
            var scheduleData = getScheduleData();
            var lectures = scheduleObject.Lectures;
            var dayOfWeek = scheduleObject.Date;

            scheduleData.append("<br>");
            scheduleData.append($("<table class=\"table\"><thead><tr><th>" + dayOfWeek + "</th></tr></thead></table>"));

            for (var i = 0; i < lectures.length; i++) {
                var subject = i + 1 + " " + lectures[i].Subject;
                scheduleData.append($("<tr><td>" + subject + "</td><td>" + lectures[i].Group + "</td><td>" +
                    lectures[i].Classroom + "</td><td>" + lectures[i].StartTime + "</td><td>" + lectures[i].EndTime + "</td></tr>"));
            }
        }
        else if (getClassroomSelectIndex() != "") {
            scheduleContainer.append(classroomTableHeader);
            var scheduleData = getScheduleData();
            var lectures = scheduleObject.Lectures;
            var dayOfWeek = scheduleObject.Date;

            scheduleData.append("<br>");
            scheduleData.append($("<table class=\"table\"><thead><tr><th>" + dayOfWeek + "</th></tr></thead></table>"));

            for (var i = 0; i < lectures.length; i++) {
                var subject = i + 1 + " " + lectures[i].Subject;
                scheduleData.append($("<tr><td>" + subject + "</td><td>" + lectures[i].Group + "</td><td>" +
                    lectures[i].Teacher + "</td><td>" + lectures[i].StartTime + "</td><td>" + lectures[i].EndTime + "</td></tr>"));
            }
        }
    }
}

showButton.on("click", async function () {

    if (!checkParameters() || isAnimating) {
        return;
    }

    try {
        startLoader();

        var formData = new FormData(mainFormElement);

        let response = await fetch('schedule/Owl-I-See-Happiness-Only-In-You', {
            method: 'POST',
            body: formData
        });

        var responseText = await response.text();
        var scheduleData = JSON.parse(responseText);

        if (scheduleViewElement.style.opacity == 1) {
            scheduleViewElement.style.opacity = 0;

            setTimeout(function () {
                renderTable(scheduleData);

                scheduleContainer.show();
                returnButton.show();

                setTimeout(function () {
                    scheduleViewElement.style.opacity = 1;
                }, 10);
                setTimeout(function () {
                    returnButtonElement.style.opacity = 1;
                }, 10);
                setTimeout(function () {
                    stopLoader();
                }, 300);
            }, 500);

            return;
        }

        renderTable(scheduleData);

        scheduleContainer.show();
        returnButton.show();

        setTimeout(function () {
            scheduleViewElement.style.opacity = 1;
        }, 10);
        setTimeout(function () {
            returnButtonElement.style.opacity = 1;
        }, 10);
        setTimeout(function () {
            stopLoader();
        }, 300);
    }
    catch {
        stopLoader();

        isAnimating = true;

        showButtonElement.style.opacity = 0;

        setTimeout(function () {
            showButton.hide();
            scheduleContainer.hide();
            scheduleContainer.empty();
            returnButton.hide();
            errorPanel.show();
        }, 500);
    }
});

returnButton.on("click", function () {

    if (isAnimating) {
        return;
    }

    isAnimating = true;

    savedGroupSelect = "";
    savedTeacherSelect = "";
    savedClassroomSelect = "";
    savedDayofweekSelect = "";

    scheduleViewElement.style.opacity = 0;
    returnButtonElement.style.opacity = 0;

    setTimeout(function () {
        scheduleContainer.hide();
        scheduleContainer.empty();
        returnButton.hide();
        isAnimating = false;
    }, 500);
});
