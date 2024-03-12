// var audio=document.createElement('audio');
// audio.setAttribute('src','sound.mp3');
// audio.loop=true;
// audio.muted=true;
// audio.play();

// function playSound(audioName) {
//     let audio = new Audio(audioName);
//     audio.loop = true;
//     audio.play();
// }
// playSound("sound.mp3");

// {/* <audio src ="sound.mp3" id="my_audio" loop="loop" autoplay="autoplay"></audio>
// window.onload=function(){
//     document.getElementById("my_audio").play();
// } */}

window.addEventListener('click', () => {
    document.getElementById("sound").play();
    sound.loop = true;
});

