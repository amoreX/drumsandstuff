function playaudio(audioId){
    var audio = new Audio();
    audio.src = document.getElementById(audioId).src;
    audio.play();
}