function adjustBulbs() {
    const maxBulbs = window.innerWidth / 45 + 1; // количество лампочек для маленьких экранов
    const wire = document.getElementById('wire');
    while (wire.children.length < maxBulbs) {
        const bulb = document.createElement('li');
        wire.appendChild(bulb);
    }
}

// Вызов функции при загрузке страницы и при изменении размера окна
window.onload = adjustBulbs;
window.onresize = adjustBulbs;