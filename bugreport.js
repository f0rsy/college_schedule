$(document).ready(async function () {
    $('#bugReportForm').on('submit', async function (event) {
        event.preventDefault();

        var formData = new FormData(this);

        let response = await fetch('schedule/bug-report', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert("Успешно!");
            $("#bugReportForm").trigger("reset");
            $('#bugReportModal').modal('hide');
            return;
        }

        let result = await response.text();

        try {
            var obj = JSON.parse(result);
            var errorMsg = "";

            var pairCount = Object.keys(obj).length;

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    errorMsg += "Ошибка параметра: " + obj[key];                  
                    if (pairCount > 1) {
                        errorMsg += "\n";
                    }
                    pairCount--;
                }
            }

            alert(errorMsg);
        } catch {
            alert('Ошибка: ' + result);
        }
    });
});
