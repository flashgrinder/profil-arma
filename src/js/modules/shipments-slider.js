import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function shipmentsSlider () {

    const shipmentsSliderTrue = document.querySelector('.js-shipments-slider-init');
    if (shipmentsSliderTrue) {
        const shipmentsSlider = new Splide( '.js-shipments-slider-init', {
            type   : 'fade',
            height: 'auto',
            trimSpace: false,
            autoplay: false,
            arrows: false,
            gap: '34px',
            pagination: false,
            breakpoints: {
                1024: {
                    destroy: true,
                },
            }
        } );

        const shipmentsTextSlider = new Splide( '.js-shipments-slider-tab-init', {
            height: 'auto',
            fixedWidth: 'auto',
            rewind: true,
            perPage: 4,
            pagination: false,
            isNavigation: true,
            arrows: true,
            gap: '48px',
            drag: false,
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
            },
            breakpoints: {
                1024: {
                    destroy: true
                },
            }
        } );

        shipmentsSlider.sync( shipmentsTextSlider );
        shipmentsSlider.mount();
        shipmentsTextSlider.mount();

    }


}

export default shipmentsSlider;