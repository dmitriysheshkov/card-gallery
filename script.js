(function() {
    const sliders = document.querySelectorAll('.slider__card');

    for (const slide of sliders) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('slider__card--active');
        });
    }

    function clearActiveClasses() {
        sliders.forEach((slide) => {
            slide.classList.remove('slider__card--active');
        });
    }
})();