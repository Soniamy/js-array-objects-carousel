// -----------------------------------------------
//                    OBJECT
// -----------------------------------------------

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];
// -----------------------------------------------
//                    VARIABILI
// -----------------------------------------------
const $leftSlider = document.getElementById('left-slider');
const $rightSlider = document.getElementById('right-slider');
const $infoTitle = document.getElementById('info-title');
const $infoText = document.getElementById('info-text');
$infoTitle.innerHTML = images[0].title;
$infoText.innerHTML = images[0].text;
// -----------------------------------------------
//                    SLIDER LEFT
// -----------------------------------------------
for (i = 0; i < images.length; i++) {
    const $singleImg = document.createElement('img');
    $singleImg.src = images[i].url;
    $singleImg.classList.add('left-slider-img');

    if (i === 0) {
        $singleImg.classList.add('active');
    }

    $leftSlider.append($singleImg);
}

// -----------------------------------------------
//                    SLIDER RIGHT
// -----------------------------------------------

for (i = 0; i < images.length; i++) {
    const $singleImg = document.createElement('img');
    $singleImg.src = images[i].url;
    $singleImg.classList.add('right-slider-img');

    if (i === 0) {
        $singleImg.classList.add('selected');
    }
    $rightSlider.append($singleImg);
}
// -----------------------------------------------
//                    VARIABILI
// -----------------------------------------------
let currentImg = 0;
const $listLeftImg = document.querySelectorAll('.left-slider-img');
const $listRightImg = document.querySelectorAll('.right-slider-img');

const $upButton = document.getElementById('up-button');
const $downButton = document.getElementById('down-button');
// ---------------------------------------------------------
//  INVOCAZIONE DELLE FUNZIONI ED ESECUZIONE DEL CODICE
// ---------------------------------------------------------

function next() {
    $listLeftImg[currentImg].classList.remove('active');
    $listRightImg[currentImg].classList.remove('selected');

    currentImg++;

    if (currentImg === images.length) {
        currentImg = 0;
    }

    $listLeftImg[currentImg].classList.add('active');
    $listRightImg[currentImg].classList.add('selected');
    $infoTitle.innerHTML = images[currentImg].title;
    $infoText.innerHTML = images[currentImg].description;
}

function previous() {
    $listLeftImg[currentImg].classList.remove('active');
    $listRightImg[currentImg].classList.remove('selected');

    if (currentImg === 0) {
        currentImg = images.length;
    }

    currentImg--;

    $listLeftImg[currentImg].classList.add('active');
    $listRightImg[currentImg].classList.add('selected');
    $infoTitle.innerHTML = images[currentImg].title;
    $infoText.innerHTML = images[currentImg].description;
}

$downButton.addEventListener('click', function () {
    next();
});

$upButton.addEventListener('click', function () {
    previous();
});

const autoSlide = setInterval(next, 2000);
