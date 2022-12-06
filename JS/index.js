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
  body,
  volForest,
  volRain,
  volCoffee,
  volFireplace,
  sectionSound
} from './elements.js'
import Sounds from './sounds.js'

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
  
  
  volForest.classList.add('volColor')
  // volRain.classList.remove('volColor')
  // volCoffee.classList.remove('volColor')
  // volFireplace.classList.remove('volColor')

  volFireplace.value = 0.5
  volRain.value = 0.5
  volCoffee.value = 0.5
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

  volRain.classList.add('volColor')
  // volForest.classList.remove('volColor')
  // volCoffee.classList.remove('volColor')
  // volFireplace.classList.remove('volColor')

  volFireplace.value = 0.5
  volCoffee.value = 0.5
  volForest.value = 0.5
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

  volCoffee.classList.add('volColor')
  // volRain.classList.remove('volColor')
  // volForest.classList.remove('volColor')
  // volFireplace.classList.remove('volColor')

  volFireplace.value = 0.5
  volRain.value = 0.5
  volForest.value = 0.5

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

  volFireplace.classList.add('volColor')
  // volRain.classList.remove('volColor')
  // volCoffee.classList.remove('volColor')
  // volForest.classList.remove('volColor')

  volCoffee.value = 0.5
  volRain.value = 0.5
  volForest.value = 0.5
  
})

buttonLight.addEventListener('click', function(){
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')
  body.classList.add('active')
  buttonForest.classList.add('Dark')
  buttonCoffee.classList.add('Dark')
  buttonRain.classList.add('Dark')
  buttonFireplace.classList.add('Dark')

  buttonPlay.classList.add('Dark')
  buttonPause.classList.add('Dark')
  buttonStop.classList.add('Dark')
  buttonAdd.classList.add('Dark')
  buttonSubtract.classList.add('Dark')

  volForest.classList.add('volColor')
  volRain.classList.add('volColor')
  volCoffee.classList.add('volColor')
  volFireplace.classList.add('volColor')

  sectionSound.classList.add('sectionDark')
  
})

buttonDark.addEventListener('click', function(){
  buttonLight.classList.remove('hide')
  buttonDark.classList.add('hide')
  body.classList.remove('active')
  buttonForest.classList.remove('Dark')
  buttonCoffee.classList.remove('Dark')
  buttonRain.classList.remove('Dark')
  buttonFireplace.classList.remove('Dark')

  buttonPlay.classList.remove('Dark')
  buttonPause.classList.remove('Dark')
  buttonStop.classList.remove('Dark')
  buttonAdd.classList.remove('Dark')
  buttonSubtract.classList.remove('Dark')

  volForest.classList.remove('volColor')
  volRain.classList.remove('volColor')
  volCoffee.classList.remove('volColor')
  volFireplace.classList.remove('volColor')

  sectionSound.classList.remove('sectionDark')
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