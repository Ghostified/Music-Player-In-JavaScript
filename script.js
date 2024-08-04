//variables
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");


// progress value 
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    
}

//update the song icons on play and pause
function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}
//console.log(playPause);
//update the slider  at every 500 milli second
if (song.play()){
    setInterval(() => {
        progress.value = song.currentTime
    }, 500);
}

//Play song on clicking anywhere on the slide
progress.onchange = function(){
    song.play();
    //Also update the song current time
    song.currentTime = progress.value;

    //also update the icon
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}


