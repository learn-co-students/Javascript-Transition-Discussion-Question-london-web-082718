// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const button = document.querySelector('#save_lincoln')
const time = document.querySelector('#interval')
const zombie = document.querySelector('#foreground')

button.addEventListener('click', saveLincoln)

function saveLincoln() {
  
  zombie.style.opacity = 1.0

  let interval = parseInt(time.value) || 10000

  const tick = interval / 100;

  fadeOut(tick);
}

function fadeOut(tick) {
  zombie.style.opacity -= 0.01
  if (zombie.style.opacity > 0) { setTimeout( () => fadeOut(tick), tick) }
}