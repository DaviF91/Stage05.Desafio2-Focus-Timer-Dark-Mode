import Controls from './controls.js'
import Timer from './timer.js'
import {
  buttonPlay,
  buttonStop,
  buttonPause,
  buttonAdd,
  buttonSubtract,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay,
  buttonLight,
  buttonDark,
  volForest,
  volRain,
  volCoffee,
  volFireplace,
} from './elements.js'
import Sounds from './sounds.js'
import darkMode from './darkMode.js'

const DarkMode = darkMode()
const sound = Sounds()

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function () {
  controls.reset()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.pressButton()

  sound.soundForest.pause()
  sound.soundRain.pause()
  sound.soundCoffee.pause()
  sound.soundFireplace.pause()

  DarkMode.resetColorsStop()

})

buttonAdd.addEventListener('click', function () {
  timer.addTimer()
  sound.pressButton()
})

buttonSubtract.addEventListener('click', function () {
  timer.subtractTimer()
  sound.pressButton()
})

buttonForest.addEventListener('click', function () {
  buttonRain.classList.remove('on')
  buttonForest.classList.add('on')
  buttonCoffee.classList.remove('on')
  buttonFireplace.classList.remove('on')

  sound.soundForest.play()
  sound.soundRain.pause()
  sound.soundCoffee.pause()
  sound.soundFireplace.pause()
  sound.pressButton()
  
  DarkMode.darkForest()
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.add('on')
  buttonForest.classList.remove('on')
  buttonCoffee.classList.remove('on')
  buttonFireplace.classList.remove('on')

  sound.soundForest.pause()
  sound.soundRain.play()
  sound.soundCoffee.pause()
  sound.soundFireplace.pause()
  sound.pressButton()

  DarkMode.darkRain()
})

buttonCoffee.addEventListener('click', function () {
  buttonCoffee.classList.add('on')
  buttonRain.classList.remove('on')
  buttonForest.classList.remove('on')
  buttonFireplace.classList.remove('on')

  sound.soundForest.pause()
  sound.soundRain.pause()
  sound.soundCoffee.play()
  sound.soundFireplace.pause()
  sound.pressButton()

  DarkMode.darkCoffee()
})

buttonFireplace.addEventListener('click', function () {
  buttonFireplace.classList.add('on')
  buttonCoffee.classList.remove('on')
  buttonRain.classList.remove('on')
  buttonForest.classList.remove('on')

  sound.soundForest.pause()
  sound.soundRain.pause()
  sound.soundCoffee.pause()
  sound.soundFireplace.play()
  sound.pressButton()

  DarkMode.darkFireplace()
})

buttonLight.addEventListener('click', function(){
  sound.pressButton()
  DarkMode.modeLight()
})

buttonDark.addEventListener('click', function(){
  sound.pressButton()
  DarkMode.modeDark()
})

volForest.addEventListener('input', function(){
  sound.soundForest.volume = volForest.value
})

volRain.addEventListener('input', function(){
  sound.soundRain.volume = volRain.value
})

volCoffee.addEventListener('input', function(){
  sound.soundCoffee.volume = volCoffee.value
})

volFireplace.addEventListener('input', function(){
  sound.soundFireplace.volume = volFireplace.value
})