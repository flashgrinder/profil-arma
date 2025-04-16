function showMoreText () {

    const buttonMore = document.querySelector('.js-show-more-text');

    if(buttonMore) {

        const buttonMoreText = document.querySelector('.js-show-more-text span');
        const shortText = document.querySelector('.product-description__excerpt');
        let isHidden = true;

        buttonMore.addEventListener('click', ()=> {

            buttonMoreText.textContent = isHidden
                ? 'Меньше текста'
                : 'Больше текста';

            shortText.classList.toggle('is-open');

            isHidden = !isHidden;
        })

    }

}

export default showMoreText;