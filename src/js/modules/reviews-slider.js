import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function reviewsSlider () {

    const reviewsSliderTrue = document.querySelector('.js-reviews-slider-init');
    if (reviewsSliderTrue) {
        const reviewsSlider = new Splide( '.js-reviews-slider-init', {
            type   : 'slider',
            height: 'auto',
            perPage: 1.3,
            focus: 0,
            trimSpace: false,
            autoplay: false,
            arrows: true,
            gap: '34px',
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
                768: {
                    perPage: 1,
                    gap: '8px',
                    // arrows: false,
                },
            }
        } );

        reviewsSlider.mount();
    }

}

export default reviewsSlider;