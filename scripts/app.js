let i = 0; 
let path = new Array();

path[0] = "./images/hero-image-0.jpg";
path[1] = "./images/hero-image-1.jpg";
path[2] = "./images/hero-image-2.jpg";
path[3] = "./images/hero-image-3.jpg";
let image = document.getElementsByClassName("image");
const start = () => {
    setInterval('swapImage()', 2000);
}  
function swapImage() {
    image[0].style.backgroundImage = `url(./images/hero-image-${i}.jpg)`;
    if (i < path.length - 1) {
        i++;
    } else {
        i = 0;
    } 
}

start();