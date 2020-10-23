var positionbase = window.scrollY;

window.addEventListener("scroll", function() {
    var scollY = window.scrollY;
    if (scrollY < positionbase) {
        document.getElementById("myHeader").style.top = "0px";
    } else {
        doscument.getElementById("myHeader").style.top = "-120px";
        if (scollY < 100) {
            document.getElementById("myHeader").style.top = "0px";
        }
    }
    positionbase = scrollY;
});

const filmButtons = document.querySelectorAll('.film_nav');

filmButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        activateFilm(index)
    });
});

function activateFilm(wantedFilmIndex) {
    const films = document.querySelectorAll('.description_container');
    const video = document.querySelectorAll('.video_film');

    films.forEach(function(film, index) {
        if (index === wantedFilmIndex) {
            film.classList.add('is-active');
        } else {
            film.classList.remove('is-active');
        }
    });

    video.forEach(function(film, index) {
        if (index === wantedFilmIndex) {
            film.classList.remove('video-unactive');
        } else {
            film.classList.add('video-unactive');
        }
    });

    filmButtons.forEach(function(button, index) {
        if (index === wantedFilmIndex) {
            button.classList.add('is-active');
        } else {
            button.classList.remove('is-active');
        }
    });
}

// Function movie film animation

const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const filmNav = document.querySelector('.films_navigation');
let filmIndex = -1
const offset = -10

arrowLeft.addEventListener('click', (event) => {
    filmIndex -= 1
    if (filmIndex == -2) {
        filmIndex += 1;
        return;
    }
    filmNav.style.left = (offset * filmIndex) + "%"
    activateFilm(filmIndex)
})

arrowRight.addEventListener('click', (event) => {
    filmIndex += 1
    if (filmIndex == 5) {
        filmIndex -= 1;
        return;
    }
    filmNav.style.left = (offset * filmIndex) + "%"
    activateFilm(filmIndex)
})