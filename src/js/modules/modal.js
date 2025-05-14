import HystModal from "hystmodal";
const modalForms = new HystModal({
    linkAttributeName: "data-hystmodal",
    catchFocus: false,
})
function modalWindow(container = document) {
    modalForms.init();
}

function modalThanks() {
    modalForms.open('#thanks');
}

export {modalWindow, modalThanks};