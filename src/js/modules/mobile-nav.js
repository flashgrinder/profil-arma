function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.js-mobile-nav-burger');
	const nav = document.querySelector('.js-mobile-menu');
	const btnSearchMobile = document.querySelector('.js-search-btn-header-mobile');
	// const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		navBtn.classList.toggle('is-active');
		btnSearchMobile.classList.toggle('is-active');
		nav.classList.toggle('is-open');
		// menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;