import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function certificatesSlider () {

    const certificatesSliderTrue = document.querySelector('.js-certificates-slider-init');
    if (certificatesSliderTrue) {
        const certificatesSlider = new Splide( '.js-certificates-slider-init', {
            type   : 'slider',
            height: '530px',
            perPage: 5.2,
            focus: 0,
            trimSpace: false,
            autoplay: false,
            arrows: true,
            gap: '16px',
            pagination: false,
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
                // pagination: 'splide__pagination slider-pagination-dotted',
                // page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                1500: {
                    perPage: 4.2,
                },
                1200: {
                    perPage: 3.2,
                },
                768: {
                    height: '475px',
                    perPage: 1.2,
                    gap: '16px',
                    arrows: false,
                },
            }
        } );

        certificatesSlider.mount();
    }

}

export default certificatesSlider;