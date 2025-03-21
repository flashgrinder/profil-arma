import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function otherPostsSlider() {

    const otherPostsSlider = document.querySelector('.js-other-posts-slider-init');

    if (otherPostsSlider) {

        const otherPostsSlider = new Splide( '.js-other-posts-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 3,
            focus: 0,
            trimSpace: false,
            autoplay: false,
            arrows: true,
            gap: '48px',
            pagination: false,
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
            },
            breakpoints: {
                768: {
                    destroy: true,
                    arrows: false,
                },
            }
        } );

        otherPostsSlider.mount();

    }

}

export default otherPostsSlider;