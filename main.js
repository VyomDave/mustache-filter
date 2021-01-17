noseX = 0;
noseY = 0;


function preload(){
 img = loadImage("https://static.thenounproject.com/png/19583-200.png")
}

function setup(){
  canvas = createCanvas(500,400)
  canvas.center()
  video = createCapture(VIDEO)
  video.size(500 , 400)
  video.hide()
  
  poseNet = ml5.poseNet(video,modelloaded)
  poseNet.on("pose",gotposes)
  
}
function draw(){
    image(video,0,0,500,400)  
    image(img,noseX,noseY,40,40)
}

function take_snap(){
    save("mypicture.png")
}

function modelloaded(){
  console.log("Model loading")
}
function gotposes(results){
   if (results.length>0){
     console.log(results)
     noseX=results[0].pose.nose.x - 35;
     noseY=results[0].pose.nose.y - 15;
     console.log("Nose X = " + noseX);
     console.log("Nose Y = " + noseY);
   }
}
