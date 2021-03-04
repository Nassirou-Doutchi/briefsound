var Music = new Audio();
// jouer une musique
var sound = function playSound(touche, char){
    // touche
    touche.style.backgroundColor = "grey";
    // player audio
    // var audio = new Audio(touche.dataset.music);
    // audio.play();
    console.log(char)
    var x = document.getElementById('myAudio-'+char).duration;
    console.log(x)
    setTimeout(function(){ touche.style.backgroundColor = ""; }, 1000*x);
    Music.src = touche.dataset.music;
    Music.play();
    
}

export default sound;