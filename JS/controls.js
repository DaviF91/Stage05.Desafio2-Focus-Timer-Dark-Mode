export default function Controls ({
  buttonPause,
  buttonPlay
}){

  function play() {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  return {
    reset,
    play
  }
}


