function setup(){
    video = createCapture(VIDEO);
    video.size(567,666);
    canvas = createCanvas(567,666);
    canvas.position(567,123);
    posNet = ml5.poseNet(video,modelLoaded);
    posNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("OH MY GOSH! I CANT BELEIVE IT! JHONNY! i ment... JOHNNY!!! I AM A HUGE FAN YALL IT IS AWESOME I HAVE A REALLY NOISY KEYBOARD YAY OK IGTG BAIIII CYA WONT WANNA BE YA! :D :D :D");
}

 function gotPoses(result){
     if (result.length > 0){
         console.log(result);
         leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.righttWrist.x;
        difference = floor(leftWristX - rightWristX);
        leftWristX = result[0].pose.LWrist.x;
        rightWristX = result[0].pose.RWrist.x;
        difference= floor(LWristX - RWristY);
        console.log('hi i like doggos they are cute and cuddley... PS: sorry penguins');
     }
 }

 function draw(){
     background('#FF0000');
     text('Wizzy', 50, 40);
 }  

