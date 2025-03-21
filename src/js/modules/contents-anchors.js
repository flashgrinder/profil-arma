function contentsAnchors() {

    let anchorItems = document.querySelectorAll('.js-contents-anchor');
    if(anchorItems) {

        let active = document.querySelector('.js-contents-anchor.is-active') || anchorItems[0];

        function toggleActive() {
            active.classList.remove('is-active');
            this.classList.add('is-active');

            active = this;
        }

        for (let i = 0; i < anchorItems.length; i++) {
            anchorItems[i].addEventListener('click', toggleActive);
        }

    }

}

export default contentsAnchors;