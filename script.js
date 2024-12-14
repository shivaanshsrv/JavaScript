console.log("Welcome To Rythm");
let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
    {songName: "Espresso", filePath: "song1.mp3", coverPath:"cover.jpg"},
    {songName: "Espresso", filePath: "song1.mp3", coverPath:"cover.jpg"},
    {songName: "Espresso", filePath: "song1.mp3", coverPath:"cover.jpg"},
    {songName: "Espresso", filePath: "song1.mp3", coverPath:"cover.jpg"},
]

// audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity =0;
    }
})
//listen to events
myProgressBar.addEventListener('timeupdate', ()=> {
    console.log('timeupdate')
    //update seekbar

})