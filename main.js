bowx = 0;
bowy = 0;

function preload(){
    bow = loadImage("https://i.postimg.cc/FHzZ2RsT/367-3676275-bow-png-image-with-transparent-background-red-bow-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose",gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        bowx = results[0].pose.nose.x-40;
        bowy = results[0].pose.nose.y-130;
        console.log("bow x = " + bowx);
        console.log("bow y = "+ bowy);
    }
}

function modelLoaded(){
    console.log("PoseNet is Loaded!")
}

function draw(){
    image(video,0,0,450,450);
    image(bow,bowx,bowy,90,75)
}

function takeSnapshot(){
    save("bowfilter.jpg")
}