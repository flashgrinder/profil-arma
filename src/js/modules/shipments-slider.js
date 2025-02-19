import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function shipmentsSlider () {

    const shipmentsSliderTrue = document.querySelector('.js-shipments-slider-init');
    if (shipmentsSliderTrue) {
        const shipmentsSlider = new Splide( '.js-shipments-slider-init', {
            type   : 'fade',
            height: 'auto',
            // perPage: 1,
            // focus: 0,
            trimSpace: false,
            autoplay: false,
            arrows: false,
            gap: '34px',
            pagination: false,
            // isNavigation: true,
            // classes: {
            //     arrows: 'splide__arrows slider-nav__splide-arrows',
            //     arrow : 'splide__arrow slider-nav__splide-arrow',
            //     prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
            //     next  : 'splide__arrow--next slider-nav__splide-arrow--next',
            //     pagination: 'splide__pagination slider-pagination-text',
            //     page      : 'splide__pagination__page slider-pagination-text__page',
            // },
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '8px',
                    // arrows: false,
                },
            }
        } );

        // shipmentsSlider.mount();

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
                768: {
                    destroy: true
                },
            }
        } );

        shipmentsSlider.sync( shipmentsTextSlider );
        shipmentsSlider.mount();
        shipmentsTextSlider.mount();
    }

    let sliderItems = document.querySelectorAll('.shipments__item');

    sliderItems.forEach((el) => {
        let photosSlide = el.querySelectorAll('.shipments__item-photo');
        console.log(photosSlide);

        photosSlide.forEach((photo, i) => {
            photo.addEventListener('click', ()=> {
                if(photo.length) {
                    photo.classList.remove("is-active")
                } else {
                    el.querySelector('.shipments__item-photo.is-active').classList.remove('is-active');
                    photo.classList.add('is-active');
                }
            })
        })
    })

}

export default shipmentsSlider;