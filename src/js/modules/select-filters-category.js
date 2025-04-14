import SlimSelect from 'slim-select';
import "../../../node_modules/slim-select/dist/slimselect.css";

function selectFiltersCategory () {
    const allSelectFiltersCategory = document.querySelectorAll('.js-select-filter-category');

    const buildSelectForm = selectElem => {
        return new SlimSelect({
            select: selectElem,
            settings: {
                showSearch: false,
                focusSearch: false,
            }
        });
    }

    allSelectFiltersCategory.forEach(selectElemFilter => { buildSelectForm(selectElemFilter) });

}

export default selectFiltersCategory;