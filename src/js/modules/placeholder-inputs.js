function placeholderInputs() {
    const inputs = document.querySelectorAll('.js-input');

    inputs.forEach(el => {
        el.addEventListener('blur', e => {
            if(e.target.value) {
                e.target.classList.add('is-dirty');
            } else {
                e.target.classList.remove('is-dirty');
            }
        })
    })
}

export default placeholderInputs;