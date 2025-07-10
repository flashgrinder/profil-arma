import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function specialistsSlider () {

    const specialistsSliderTrue = document.querySelector('.js-specialists-slider-init');
    if (specialistsSliderTrue) {
        const specialistsSlider = new Splide( '.js-specialists-slider-init', {
            type   : 'slide',
            height: 'auto',
            perPage: 4.2,
            perMove: 1,
            focus: 0,
            // trimSpace: false,
            autoplay: true,
            arrows: true,
            gap: '48px',
            pagination: false,
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '8px',
                    arrows: false,
                    pagination: true,
                },
            }
        } );

        specialistsSlider.mount();
    }

}

export default specialistsSlider;