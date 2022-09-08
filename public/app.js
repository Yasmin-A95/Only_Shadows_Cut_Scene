let files = [];
let loaded;
const fullURL = location.protocol + '//' + location.host;

$(document).ready(function() {
function preloadImage(url) {
    var img=new Image();
    img.src=url;    
};

fileNames = [];
preloadImage();

// can use fetch to get images from back end to front end, .fetch is a browser api

// display them on fullscreen

// change on keypress

fetch(fullURL)
.then((res) => res.json())
.then((data) => {
    files = data.files;
    // event listener is files.next (find index for whatever the current img is)
    $('#the-img').attr("src", `/assets/${data.files[0]}`)
});

$('body').on('keydown', (e) => {
    const currentIndex = files.indexOf($("#the-img").attr("src").replace('/assets/', ''));
    $("#the-img").attr('src', `/assets/${files[currentIndex+1]}`);
    console.log(`${files[currentIndex+1]}`)
}); 
// get the src from the image on screen then remove the folder stuff so it's just the file name like in the array and use that to find the current index




// no delete
});


