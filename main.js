const hoursContainer = document.querySelector('.hours');
const minutesContainer = document.querySelector('.minutes');
const secondsContainer = document.querySelector('.seconds');

function updateTime() {
  hoursContainer.innerHTML = String(new Date().getHours()).padStart(2, '0');
  minutesContainer.innerHTML = String(new Date().getMinutes()).padStart(2, '0');
  secondsContainer.innerHTML = String(new Date().getSeconds()).padStart(2, '0');
}

function render() {
  setInterval(() => {
    updateTime();
  }, 1000);
}

render();