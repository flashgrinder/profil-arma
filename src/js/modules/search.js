function toggleSearch() {

    let searchButtons = document.querySelectorAll('.js-search-btn-header');
    let searchForm = document.querySelector('.js-search-form');
    let searchCloseBtn = document.querySelector('.js-search-close');

    searchButtons.forEach((searchBtn)=> {

        searchBtn.addEventListener('click', () => {
            searchForm.classList.add('is-open');
            searchBtn.classList.add('is-open');
        })
        searchCloseBtn.addEventListener('click', () => {
            searchForm.classList.remove('is-open');
            searchBtn.classList.remove('is-open');
        })

    })

}

export default toggleSearch;