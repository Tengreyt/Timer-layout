const dayTimer = document.querySelector('.timer__days');
const hoursTimer = document.querySelector('.timer__hours');
const minutesTimer = document.querySelector('.timer__minutes');
const secondsTimer = document.querySelector('.timer__seconds');

const textInner = document.querySelector('.text-title');


document.addEventListener('DOMContentLoaded', function (){
    const deadline = new Date(2024, 5, 26);

    let timerId = null;

    function declensionNum(num, words){
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 :[2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }


function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
  const textTitle = [
    "Ислам оставит игры",
    "Ваха ху даьш ву",
    "Хьамзат т1ер хумш",
    "Мооохь",
    "Муслим скинет вес",
    "Халид зверь"
  ];

  let shuffledTextTitle = shuffleArray([...textTitle]);
  let currentIndex = 0;

  const button = document.querySelector('.btn-text');
  const phraseElement = document.querySelector('.text-title');

  button.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * textTitle.length);
    const randomPhrase = shuffledTextTitle[currentIndex];
    currentIndex++;

    if (currentIndex >= shuffledTextTitle.length) {
      shuffledTextTitle = shuffleArray([...textTitle]);
      currentIndex = 0;
    }

    // Плавное исчезновение текста
    phraseElement.classList.remove('fade-in');
    phraseElement.classList.add('fade-out');

    // Обновляем текст после завершения анимации исчезновения
    setTimeout(() => {
      phraseElement.textContent = randomPhrase;
      phraseElement.classList.remove('fade-out');
      phraseElement.classList.add('fade-in');
    }, 500); // Время должно совпадать с transition в CSS
  });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});

