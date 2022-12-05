export default function(){
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const soundForest = new Audio("./sounds/Floresta.wav")
  const soundRain = new Audio("./sounds/Chuva.wav")
  const soundCoffee = new Audio("./sounds/Cafeteria.wav")
  const soundFireplace = new Audio("./sounds/Lareira.wav")

  
  soundForest.loop = true
  soundRain.loop = true
  soundCoffee.loop = true
  soundFireplace.loop = true

  function pressButton(){
    buttonPressAudio.play()
  }

  function endTimer(){
    kitchenTimer.play()
  }


  return {
    pressButton,
    endTimer,
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace,
  }
}