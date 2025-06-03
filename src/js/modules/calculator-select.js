import SlimSelect from 'slim-select';
import "../../../node_modules/slim-select/dist/slimselect.css";

function selectCalculator () {
    const allSelectCalculator = document.querySelectorAll('.js-calculator-select');

    const buildSelectCalculator = selectElem => {
        return new SlimSelect({
            select: selectElem,
            settings: {
                showSearch: false,
                focusSearch: false,
            }
        });
    }

    allSelectCalculator.forEach(selectElemFilter => { buildSelectCalculator(selectElemFilter) });

}

export default selectCalculator;