function mobileCatalog () {

    const catalogMenu = document.querySelectorAll('.js-mobile-menu');
    const catalogItem = document.querySelectorAll('.js-menu');

    catalogItem.forEach((el, index) => {

        el.addEventListener('click', () => {

            if (catalogMenu[index].classList.contains('can-animate')) {
                setTimeout(()=> {
                    catalogMenu[index].classList.remove('is-open');
                }, 500)
                catalogMenu[index].classList.remove('can-animate');
            } else {
                    catalogMenu[index].classList.add('is-open');
                setTimeout(()=> {
                    catalogMenu[index].classList.add('can-animate');
                }, 500)
            }

        })

    })

}

export default mobileCatalog;