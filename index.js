// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  let myFadeOut = document.querySelector('#foreground');
  myFadeOut.style.opacity = 0;
myFadeOut.style.transition = `opacity ${interval}ms`;
}


const myButton = document.querySelector('#save_lincoln')
myButton.addEventListener('click', event => {
  let intervalValue = document.querySelector('#interval');
  saveLincoln(parseInt(intervalValue.value));
})
