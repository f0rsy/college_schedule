$(document).ready(function() {
    $('#input-select').selectize({
        plugins: ["restore_on_backspace"],
        persist: false,
        maxItems: 1,
        create: false,
        sortField: 'text',
        options: [
            { value: 'exe1', text: 'Сегодня' },
            { value: 'exe2', text: 'Понедельник' },
            { value: 'exe3', text: 'Вторник' },
            { value: 'exe4', text: 'Среда' },
            { value: 'exe5', text: 'Четверг' },
            { value: 'exe6', text: 'Пятница' },
            { value: 'exe7', text: 'Суббота' }
            // Add more options as needed
        ]
    });
});

$(document).ready(function() {
    $('#input-group').selectize({
        plugins: ["restore_on_backspace"],
        persist: false,
        maxItems: 1,
        create: false,
        sortField: 'text',
        options: [
            { value: 'exe1', text: 'ИС' },
            { value: 'exe2', text: 'СД' },
            { value: 'exe3', text: 'ДО' },
            { value: 'exe4', text: 'ССА' },
            { value: 'exe5', text: 'ГД' }
            // Add more options as needed
        ]
    });
});

$(document).ready(function() {
    $('#input-teacher').selectize({
        plugins: ["restore_on_backspace"],
        persist: false,
        maxItems: 1,
        create: false,
        sortField: 'text',
        options: [
            { value: 'exe1', text: 'Пинах' },
            { value: 'exe2', text: 'Волков' },
            { value: 'exe3', text: 'Брейнерт' },
            { value: 'exe4', text: 'Амеленко' },
            { value: 'exe5', text: 'Габышев' }
            // Add more options as needed
        ]
    });
});

$(document).ready(function() {
    $('#input-class').selectize({
        plugins: ["restore_on_backspace"],
        persist: false,
        maxItems: 1,
        create: false,
        sortField: 'text',
        options: [
            { value: 'exe1', text: '18' },
            { value: 'exe2', text: '22' },
            { value: 'exe3', text: '19' },
            { value: 'exe4', text: '25' },
            { value: 'exe5', text: '27' }
            // Add more options as needed
        ]
    });
});