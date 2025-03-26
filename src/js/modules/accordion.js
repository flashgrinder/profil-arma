import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

function initAccordion() {

    const accordions = Array.from(document.querySelectorAll(".js-accordion"));
    new Accordion(accordions, {
        elementClass: 'js-accordion-item',
        triggerClass: 'js-accordion-trigger',
        panelClass: 'js-accordion-panel',
        showMultiple: true,
        // openOnInit: (el) => {
        //     el.open(0);
        // }
    });

}

export default initAccordion;