import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function officeSlider () {

    const officeSliderTrue = document.querySelector('.js-office-slider-init');
    if (officeSliderTrue) {
        const officeSlider = new Splide( '.js-office-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 1.5,
            focus: 0,
            trimSpace: false,
            autoplay: false,
            arrows: true,
            gap: '32px',
            pagination: false,
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
            },
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '8px',
                    arrows: false,
                },
            }
        } );

        officeSlider.mount();
    }

}

export default officeSlider;