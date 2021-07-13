nosex = 0;
nosey = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/kggD1TwR/Moustache-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, nosex - 40, nosey, 70, 30);

}
function take_snapshot(){
    save("Moustache.png");
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
    }
}