const images = [
    "집10.jpg","집1.png","집2.png","집3.jpeg","집4.png","집5.png","집6.jpeg","집7.png","집8.png","집9.jpeg"
]
const selectedImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImage}`;
document.body.appendChild(bgImage);