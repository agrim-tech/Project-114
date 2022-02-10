function setup(){
    c=createCanvas(380,300);
    c.position(495,200);
    webcam=createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam,0,0,380,300);
}