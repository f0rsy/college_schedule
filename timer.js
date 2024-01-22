 // Функция для обновления таймера
 function updateCountdown() {
    // Получаем текущую дату и дату нового года
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    // Вычисляем разницу во времени между текущей датой и новым годом
    const timeDiff = newYear - now;

    // Вычисляем количество дней, часов, минут и секунд
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    // Обновляем отображение таймера
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m`;
  }

  // Устанавливаем интервал для обновления таймера каждую секунду
  setInterval(updateCountdown, 1000);

  // Запускаем обновление таймера сразу после загрузки страницы
  updateCountdown();