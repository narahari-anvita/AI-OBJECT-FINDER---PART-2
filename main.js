status = "";

function preload(){
    
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function draw(){
    image(video,0,0,380,380);
}

function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
objectDetector = document.getElementById("status").innerHTML = "Status: Objects Detecting";
}

function modelLoaded(){
    console.log("Model Loaded!!")
    status = true;
}