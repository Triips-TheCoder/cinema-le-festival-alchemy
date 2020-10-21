const filmButtons = document.querySelectorAll('.film_nav');

filmButtons.forEach(function (button, index) {
    button.addEventListener('click', function() {
        activateFilm(index)
    });
});

function activateFilm (wantedFilmIndex) {
    const films = document.querySelectorAll('.description_container');
    
    films.forEach(function (film, index) {
        if (index === wantedFilmIndex) {
            film.classList.add('is-active');
        } else {
            film.classList.remove('is-active');
        }
    });

    filmButtons.forEach(function (button, index) {
        if (index === wantedFilmIndex) {
            button.classList.add('is-active');
        } else {
            button.classList.remove('is-active');
        }
    });
}