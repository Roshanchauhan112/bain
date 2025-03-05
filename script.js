let flag = 0;

function controller(x) {
    flag += x;
    slideshow(flag);
}

function slideshow(num) {
    let slides = document.getElementsByClassName("slide");

    if (num >= slides.length) {
        flag = 0;
    }

    if (num < 0) {
        flag = slides.length - 1;
    }

    for (let y of slides) {
        y.style.display = "none";
    }

    slides[flag].style.display = "block";
}

// Call slideshow initially
slideshow(flag);

// Auto-slide every 3 seconds
setInterval(() => {
    flag++;
    slideshow(flag);
}, 3000);
