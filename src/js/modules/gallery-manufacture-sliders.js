import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)')

function galleryManufactureSliders () {
    const allSliders = document.querySelectorAll('.js-gallery-manufacture-slider-init');
    if (allSliders) {
        const buildCatalogSlider = sliderElm => {
            const sliderIdentifier = sliderElm.dataset.id;
            return new Splide(`#${sliderElm.id}`, {
                type   : 'loop',
                height: '478px',
                perPage: 2.5,
                perMove: 1,
                gap: '16px',
                autoplay: true,
                pagination: false,
                classes: {
                    arrows: 'splide__arrows slider-nav__splide-arrows',
                    arrow : 'splide__arrow slider-nav__splide-arrow',
                    prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                    next  : 'splide__arrow--next slider-nav__splide-arrow--next',
                },
                breakpoints: {
                    768: {
                        perPage: 1.2,
                        height: '250px',
                    }
                }
            } );
        }

        allSliders.forEach(slider => buildCatalogSlider(slider).mount());

    }

}

export default galleryManufactureSliders;