

function _drawClock() {
  let clock = new Date()
  // console.log(clock.toTimeString(), setInterval(_drawClock, 3000));
  clock.toLocaleTimeString()
  let clockElem = document.getElementById('clock')
  clockElem.innerHTML = clock.toLocaleTimeString()
}

export class ClockController {
  constructor() {
    // console.log("clock");
    setInterval(_drawClock, 1000)
    _drawClock()
  }
}