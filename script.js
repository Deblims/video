let video = document.getElementById("video1");
let controles = document.getElementById("controles")
let container = document.getElementById("container");

container.addEventListener("mouseover", aparecer);
container.addEventListener("mouseout", desaparecer);

function aparecer() {
    controles.style.display = "block";
}

function desaparecer() {
    controles.style.display = "none";
}

function retroceder(){
    video.currentTime -=15;

}
function avancar(){
    video.currentTime +=15;
}
function diminuir_vel(){
    video.playbackRate -= 0.1;
}
function aumentar_vel(){
    video.playbackRate += 0.1;
}
function pause(){
    video.pause();
     
}
function play(){
 video.play();
}
function stop(){
    video.pause();
    video.currentTime=0; 
}
