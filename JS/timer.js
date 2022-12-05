import Sounds from "./sounds.js"


export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  
  let time = 5

  function addTimer() {
    let soma = Number(minutesDisplay.textContent) + time
    minutesDisplay.textContent = String(soma).padStart(2, '0')
  }

  function subtractTimer() {
    let subtract = Number(minutesDisplay.textContent) - time
    minutesDisplay.textContent = String(subtract).padStart(2, '0')
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        resetControls()
        updateDisplay()
        Sounds().endTimer()
        return
      }

      if (seconds <= 0) {
        seconds = 60

        --minutes
      }

      updateDisplay(minutes, String(seconds) - 1)

      countdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    addTimer,
    subtractTimer,
    hold
  }
}
