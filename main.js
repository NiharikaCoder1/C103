Webcam.set({
    width:300,
    height:275,
    image_format: 'png',
    png_quality: 90
})

cam = document.getElementById('cam');

Webcam.attach('#cam')

function capture(){
Webcam.snap(function(data_uri)
{
    document.getElementById('snap').innerHTML="<img id='shot' src="+data_uri+">"
}
)
}
console.log('ml5 version is', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0VrBbnFPH/model.json', modelLoaded)