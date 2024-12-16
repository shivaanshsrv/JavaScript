console.log("Welcome To Rythm");
let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
    {songName: "Espresso- Sabrina Carpenter", filePath: "songs/song1.mp3", coverPath:"cover/song1.jpg"},
    {songName: "APT- Bruno Mars, ROSE", filePath: "songs/song2.mp3", coverPath:"cover/song2.jpeg"},
    {songName: "I Ain't Worried- One Republic", filePath: "songs/song3.mp3", coverPath:"cover/song3.jpeg"},
    {songName: "Come And Get Your Love- Star Lord", filePath: "songs/song4.mp3", coverPath:"cover/song4.jpeg"},
    {songName: "Venom- Eminem", filePath: "songs/song5.mp3", coverPath:"cover/song5.jpeg"},
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
audioElement.addEventListener('timeupdate', ()=> {
    // console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})