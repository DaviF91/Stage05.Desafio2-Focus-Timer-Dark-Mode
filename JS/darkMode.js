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
  buttonLight,
  buttonDark,
  body,
  volForest,
  volRain,
  volCoffee,
  volFireplace,
  sectionSound
} from './elements.js'

export default function (){
  function darkForest(){
    if(buttonLight.classList.contains('hide') == true){
      volForest.classList.add('volColor')
      volRain.classList.add('volColor')
      volCoffee.classList.add('volColor')
      volFireplace.classList.add('volColor')
    } else {
      volForest.classList.add('volColor')
      volRain.classList.remove('volColor')
      volCoffee.classList.remove('volColor')
      volFireplace.classList.remove('volColor')
    }
    
    volFireplace.value = 0.5
    volRain.value = 0.5
    volCoffee.value = 0.5
  }

  function darkRain(){
    if(buttonLight.classList.contains('hide') == true){
      volForest.classList.add('volColor')
      volRain.classList.add('volColor')
      volCoffee.classList.add('volColor')
      volFireplace.classList.add('volColor')
    } else {
      volRain.classList.add('volColor')
      volForest.classList.remove('volColor')
      volCoffee.classList.remove('volColor')
      volFireplace.classList.remove('volColor')
    }
  
    volFireplace.value = 0.5
    volCoffee.value = 0.5
    volForest.value = 0.5
  }

  function darkCoffee(){
    if(buttonLight.classList.contains('hide') == true){
      volForest.classList.add('volColor')
      volRain.classList.add('volColor')
      volCoffee.classList.add('volColor')
      volFireplace.classList.add('volColor')
    } else {
      volCoffee.classList.add('volColor')
      volRain.classList.remove('volColor')
      volForest.classList.remove('volColor')
      volFireplace.classList.remove('volColor')
    }
  
    volFireplace.value = 0.5
    volRain.value = 0.5
    volForest.value = 0.5
  }

  function darkFireplace(){
    if(buttonLight.classList.contains('hide') == true){
      volForest.classList.add('volColor')
      volRain.classList.add('volColor')
      volCoffee.classList.add('volColor')
      volFireplace.classList.add('volColor')
    } else {
      volFireplace.classList.add('volColor')
      volRain.classList.remove('volColor')
      volCoffee.classList.remove('volColor')
      volForest.classList.remove('volColor')
    }
  
    volCoffee.value = 0.5
    volRain.value = 0.5
    volForest.value = 0.5
  }

  function modeLight(){
    buttonDark.classList.remove('hide')
    buttonLight.classList.add('hide')
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
  }

  function modeDark(){
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

    if(buttonForest.classList.contains('on') == true){
      volForest.classList.add('volColor')
    } else {
      volForest.classList.remove('volColor')
    }

    if(buttonRain.classList.contains('on') == true){
      volRain.classList.add('volColor')
    } else {
        volRain.classList.remove('volColor')
      }

    if(buttonCoffee.classList.contains('on') == true){
    volCoffee.classList.add('volColor')
    } else {
      volCoffee.classList.remove('volColor')
    }
    
    if(buttonFireplace.classList.contains('on') == true){
      volFireplace.classList.add('volColor')
    } else {
      volFireplace.classList.remove('volColor')
    }

    sectionSound.classList.remove('sectionDark')
  }

  function resetColorsStop(){
    buttonRain.classList.remove('on')
    buttonForest.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFireplace.classList.remove('on')

    if(buttonLight.classList.contains('hide') == true){
      volForest.classList.add('volColor')
      volRain.classList.add('volColor')
      volCoffee.classList.add('volColor')
      volFireplace.classList.add('volColor')
    } else {
      volRain.classList.remove('volColor')
      volForest.classList.remove('volColor')
      volCoffee.classList.remove('volColor')
      volFireplace.classList.remove('volColor')
    }
    volFireplace.value = 0.5
    volCoffee.value = 0.5
    volRain.value = 0.5
    volForest.value = 0.5
  }
  return{
    darkForest,
    darkRain,
    darkCoffee,
    darkFireplace,
    modeLight,
    modeDark,
    resetColorsStop
  }
}