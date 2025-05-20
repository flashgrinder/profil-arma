import Swup from 'swup';

function animationPage() {
    const swup = new Swup({
        containers: ["#swup"],
        ignoreVisit: (url, { el } = {}) => el?.closest('[data-fancybox]'),
        cache: false,
    });
}

export default animationPage;