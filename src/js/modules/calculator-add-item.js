import SlimSelect from 'slim-select';
import "../../../node_modules/slim-select/dist/slimselect.css";
import selectCalculator from "./calculator-select";

function cloneCalculatorItem() {

    const addBtnItem = document.querySelector(".js-calculator-add-item");
    addBtnItem.onclick = function() {

        let container = document.querySelector(".js-calculator-container");
        let containerTop = document.querySelector(".calculator__items");
        let section = document.querySelector(".js-calculator-item");

        // let elem = document.createElement("div");
        // elem.className ="calculator__item-wrap";

        // Клонируем содержимое шаблона для того, чтобы переиспользовать его несколько раз
        containerTop.append(container.content.cloneNode(true));
        // containerTop.prepend(section);
        const allSelectCalculator = document.querySelectorAll('.js-calculator-select');
        allSelectCalculator.forEach(function (el) {
            new SlimSelect({
                select: el,
                settings: {
                    showSearch: false,
                    focusSearch: false,
                }
            })
        })

    }

}

export default cloneCalculatorItem;