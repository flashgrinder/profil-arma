function showHideItems() {

    const button = document.querySelector('.js-button-show-hide');

    const hiddenItems = Array.from(document.querySelectorAll('.js-hidden-item'));
    let isHidden = true;

    button.addEventListener('click', () => {
        button.textContent = isHidden
            ? 'Скрыть'
            : 'Раскрыть';

        button.classList.toggle('is-open');

        isHidden = !isHidden;

        hiddenItems.forEach((item, i) => {
            item.classList.toggle('is-hidden')
        });
    });

}

export default showHideItems;