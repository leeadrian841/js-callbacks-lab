var body = document.querySelector('body')
var reset = body.querySelector('#reset')
var start = body.querySelector('#start')
var pause = body.querySelector('#pause')
var seconds = 0
var timerId

// var updateButton = setInterval(updateTime, 1000)
// var pauseButton =
// var resetButton = clearInterval()

function updateTime () {
  var head1 = body.querySelector('#timer')
  head1.textContent = 'Time elapsed: ' + seconds + 's'
  seconds++
}
function updateClick () {
  timerId = setInterval(updateTime, 1000)
}

function pauseClick () {
  clearInterval(timerId)
}

function resetClick () {
  clearInterval(timerId)
  var head1 = body.querySelector('#timer')
  head1.textContent = 'Stop Watch'
  seconds = 0
}

start.addEventListener('click', updateClick)
pause.addEventListener('click', pauseClick)
reset.addEventListener('click', resetClick)
