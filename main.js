var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() 
{
document.getElementById("textbox").innerHTML = "";
recognition.start(); 
}

recognition.onresult = function run(event) {
    var Content = event.results[0][0].transcipt;

     document.getElementById("textbox").innerHTML = Content;
     if(Content=="take my selfie"){
         speak();

     }
}



function speak () {
var synth = window.speechSynthesis;

speak_data = "Taking you selfie in 5 seconds";

var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);
setTimeout( function() {
take_snapshot();
save();    
}, 5000);
}

window.set ({
width:360,
height:250,
image_format: 'png',
png_quality:90
});
camera = document.getElementById("camera");

    function take_snapshot () {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+date_uri+'"/>';

        });
    }

    function save () {
        link = document.getElementById ("link");
        Image = document.getElementById("selfie_image").src;
        link.href = image;
        link.click ();
    }