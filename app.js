let progress=document.getElementById("progress")
let audio=document.getElementById("music_audio")
let playpause=document.getElementById("playpause")
console.log(audio,"..");
audio.addEventListener("loadedmetadata",()=>{
    progress.max = audio.duration;
	progress.value = audio.currentTime;
})
playpause.addEventListener(("click"),()=>{
    if(playpause.classList.contains("fa-play")){
        audio.play()
        playpause.classList.remove("fa-play")
        playpause.classList.add("fa-pause")
    }
    else{
        audio.pause()
        playpause.classList.add("fa-play")
        playpause.classList.remove("fa-pause")
    }
})
audio.onplaying=()=>{
setInterval(() => {
    progress.value=audio.currentTime
}, 500);
}

progress.addEventListener("change",()=>{
    audio.play()
    audio.currentTime=progress.value
    playpause.classList.remove("fa-play")
    playpause.classList.add("fa-pause")
})