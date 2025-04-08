import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function otherShipmentsSlider() {

    const otherShipmentsSlider = document.querySelector('.js-other-shipments-slider-init');

    if (otherShipmentsSlider) {

        const otherShipmentsSlider = new Splide( '.js-other-shipments-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 3,
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
                    arrows: false,
                },
            }
        } );

        otherShipmentsSlider.mount();

    }

}

export default otherShipmentsSlider;