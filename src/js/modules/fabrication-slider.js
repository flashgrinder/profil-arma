import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function fabricationSliders() {

    const allSliders = document.querySelectorAll('.js-fabrication-sliders');
    if (allSliders) {

        allSliders.forEach((sliders) => {

            let bigSlider = sliders.querySelector('.js-fabrication-slider-big-init');
            let thumbSlider = sliders.querySelector('.js-fabrication-slider-thumb-init');

            if (bigSlider && thumbSlider) {

                let main = new Splide(bigSlider, {
                    type: 'fade',
                    speed: 800,
                    rewind: true,
                    keyboard: true,
                    pagination: false,
                    arrows: false,
                });
                let thumbs = new Splide(thumbSlider, {
                    fixedWidth: 110,
                    fixedHeight: 64,
                    gap: 10,
                    rewind: true,
                    keyboard: true,
                    pagination: false,
                    arrows: false,
                    isNavigation: true,
                    breakpoints: {
                        768: {
                            fixedWidth: false,
                            perPage: 3,
                        }
                    }
                });
                main.sync(thumbs);
                main.mount();
                thumbs.mount();

            }

        })

    }

}

export default fabricationSliders;