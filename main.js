var SpeechRecognition = window.webKitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log(event);
    document.getElementById("textbox").innerHTML = Content;
}