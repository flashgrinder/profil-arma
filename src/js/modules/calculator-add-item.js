import $ from "jquery";

function cloneCalculatorItem() {
    const parentContainer = document.querySelector('.js-container');
    if (!parentContainer) {
        console.error('Контейнер .js-container не найден');
        return;
    }

    // Блокируем события на <select>
    document.querySelectorAll('.calculator__select').forEach(select => {
        select.addEventListener('click', (e) => {
            console.log('Клик на <select> заблокирован:', select);
            e.preventDefault();
            e.stopPropagation();
        });
    });

    // Функция для синхронизации custom-select
    function syncCustomSelect(select) {
        const customSelect = select.nextElementSibling;
        if (customSelect) {
            const selected = customSelect.querySelector('.custom-select-selected');
            const options = customSelect.querySelector('.custom-select-options');
            if (selected && options) {
                selected.textContent = select.options[select.selectedIndex].text;
                options.innerHTML = Array.from(select.options)
                    .map(opt => `<div class="custom-select-option" data-value="${opt.value}" data-index="${opt.index}" ${opt.selected ? 'class="selected"' : ''}>${opt.text}</div>`)
                    .join('');
                if (select.disabled) {
                    customSelect.classList.add('disabled');
                    console.log('Селект отключен при синхронизации:', select);
                } else {
                    customSelect.classList.remove('disabled');
                    console.log('Селект активен при синхронизации:', select);
                }
            }
        }
    }

    parentContainer.addEventListener('click', (event) => {
        // Отладка: логируем, на чем произошел клик
        console.log('Клик на элементе (parentContainer):', event.target, 'Путь:', event.path || event.composedPath());

        // Делегирование для кнопки копирования
        if (event.target.closest('.js-copy-btn')) {
            const elementToClone = document.querySelector('.js-element-to-clone');
            if (!elementToClone) {
                console.error('Элемент .js-element-to-clone не найден');
                return;
            }

            const targetContainer = document.querySelector('.js-target-container');
            if (!targetContainer) {
                console.error('Контейнер .js-target-container не найден. Проверяйте HTML.');
                return;
            }

            // Клонируем элемент
            const clonedElement = elementToClone.cloneNode(true);

            // Обновляем data-row для уникальности формы
            const rowCount = targetContainer.querySelectorAll('.js-calculator-item').length + 1;
            clonedElement.setAttribute('data-row', rowCount);

            // Добавляем склонированный элемент в целевой контейнер
            targetContainer.appendChild(clonedElement);

            // Синхронизация кастомных селектов после клонирования
            const clonedSelects = clonedElement.querySelectorAll('.calculator__select');
            clonedSelects.forEach((select) => {
                syncCustomSelect(select);
                // Блокируем события на клонированном <select>
                select.addEventListener('click', (e) => {
                    console.log('Клик на клонированный <select> заблокирован:', select);
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
        }

        // Делегирование для открытия/закрытия кастомного селекта
        const clickedElement = event.target;
        if (clickedElement.closest('.custom-select') || clickedElement.closest('.custom-select-selected')) {
            const customSelectWrapper = clickedElement.closest('.custom-select-wrapper');
            console.log('Найден custom-select-wrapper:', customSelectWrapper, 'Состояние disabled:', customSelectWrapper.querySelector('.custom-select')?.classList.contains('disabled'));
            const options = customSelectWrapper.querySelector('.custom-select-options');
            if (options && !customSelectWrapper.querySelector('.custom-select')?.classList.contains('disabled')) {
                options.classList.add('active');
                console.log('Добавлен .active для:', options, 'Состояние:', options.classList.contains('active'));
            } else if (customSelectWrapper.querySelector('.custom-select')?.classList.contains('disabled')) {
                console.log('Селект отключен, действие заблокировано');
            } else {
                console.error('Не найден .custom-select-options в:', customSelectWrapper);
            }
        } else {
            // Закрываем селект, если клик вне .custom-select-wrapper
            const activeOptions = document.querySelectorAll('.custom-select-options.active');
            activeOptions.forEach((options) => {
                const customSelectWrapper = options.closest('.custom-select-wrapper');
                if (!customSelectWrapper.contains(event.target)) {
                    options.classList.remove('active');
                    console.log('Закрыт .active для:', options, 'из-за клика вне');
                }
            });
        }

        // Делегирование для выбора опции
        const option = event.target.closest('.custom-select-option');
        if (option) {
            const optionsContainer = option.closest('.custom-select-options');
            if (optionsContainer) {
                const customSelect = optionsContainer.closest('.custom-select');
                const selected = customSelect.querySelector('.custom-select-selected');
                const select = customSelect.previousElementSibling;
                if (selected && select && !customSelect.classList.contains('disabled')) {
                    const value = option.getAttribute('data-value');
                    const index = option.getAttribute('data-index');
                    selected.textContent = option.textContent;
                    select.value = value;
                    select.selectedIndex = parseInt(index);

                    // Удаляем класс selected у всех опций и добавляем только для выбранной
                    optionsContainer.querySelectorAll('.custom-select-option').forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');

                    // Триггерим событие change для <select> с отладкой
                    console.log('Триггерим событие change на:', select);
                    const eventTriggered = new Event('change', { bubbles: true });
                    select.dispatchEvent(eventTriggered);
                    $(select).trigger('change');

                    optionsContainer.classList.remove('active');
                    console.log('Обновлено value:', select.value, 'Селект закрыт после выбора');
                } else if (customSelect.classList.contains('disabled')) {
                    console.log('Выбор заблокирован, селект отключен');
                } else {
                    console.error('Не найдены selected или select:', { customSelect, selected, select });
                }
            } else {
                console.error('Не найден optionsContainer:', option);
            }
        }
    });

    // Инициализация кастомных селектов при загрузке
    document.querySelectorAll('.calculator__select').forEach((select) => {
        syncCustomSelect(select);
    });
}

export default cloneCalculatorItem;