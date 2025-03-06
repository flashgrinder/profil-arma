import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';

function clientsSlider () {

    const clientsSliderTrue = document.querySelector('.js-clients-logos-slider-init');
    if (clientsSliderTrue) {
        const clientsSlider = new Splide( '.js-clients-logos-slider-init', {
            type   : 'loop',
            height: 'auto',
            drag   : 'free',
            perPage: 6,
            preMove: 6,
            trimSpace: false,
            autoplay: false,
            arrows: false,
            focus: 'center',
            gap: '150px',
            pagination: false,
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
            },
            autoScroll: {
                speed: 0.5,
                pauseOnHover: false,
            },
            breakpoints: {
                1024: {
                    perPage: 4,
                    perMove: 4,
                    gap: '60px',
                    arrows: true,
                },
                768: {
                    perPage: 3,
                    perMove: 1,
                    gap: '32px',
                    arrows: true,
                },
            }
        } );

        const clientsTextSlider = new Splide( '.js-clients-text-slider-init', {
            height: 'auto',
            fixedWidth: 'auto',
            rewind: true,
            perPage: 4,
            preMove: 6,
            pagination: false,
            autoplay: true,
            arrows: true,
            gap: '48px',
            isNavigation: true,
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

        clientsSlider.sync( clientsTextSlider );
        clientsSlider.mount({AutoScroll});
        clientsTextSlider.mount();
    }

}

export default clientsSlider;