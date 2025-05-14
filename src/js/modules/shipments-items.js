function shipmentsItems(container = document) {

    let sliderItems = document.querySelectorAll('.js-shipments-item');

    if(sliderItems) {

        sliderItems.forEach((el) => {
            let photosSlide = el.querySelectorAll('.js-shipments-photo');

            photosSlide.forEach((photo, i) => {
                photo.addEventListener('click', ()=> {
                    if(photo.length) {
                        photo.classList.remove("is-active")
                    } else {
                        el.querySelector('.js-shipments-photo.is-active').classList.remove('is-active');
                        photo.classList.add('is-active');
                    }
                })
            })
        })

    }

}

export default shipmentsItems;