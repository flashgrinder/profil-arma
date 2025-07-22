import SlimSelect from 'slim-select';
import "../../../node_modules/slim-select/dist/slimselect.css";

// function cloneCalculatorItem() {
//
//     const addBtnItem = document.querySelector(".js-calculator-add-item");
//     if(addBtnItem) {
//         addBtnItem.addEventListener('click', () => {
//             let container = document.querySelector(".js-calculator-container");
//             let containerTop = document.querySelector(".calculator__items");
//             let section = document.querySelector(".js-calculator-item");
//
//             // let elem = document.createElement("div");
//             // elem.className ="calculator__item-wrap";
//
//             // Клонируем содержимое шаблона для того, чтобы переиспользовать его несколько раз
//             containerTop.append(container.content.cloneNode(true));
//             // containerTop.prepend(section);
//             const allSelectCalculator = document.querySelectorAll('.js-calculator-select');
//             allSelectCalculator.forEach(function (el) {
//                 new SlimSelect({
//                     select: el,
//                     settings: {
//                         showSearch: false,
//                         focusSearch: false,
//                     }
//                 })
//             })
//         })
//         // addBtnItem.onclick = function() {
//         //
//         //     let container = document.querySelector(".js-calculator-container");
//         //     let containerTop = document.querySelector(".calculator__items");
//         //     let section = document.querySelector(".js-calculator-item");
//         //
//         //     // let elem = document.createElement("div");
//         //     // elem.className ="calculator__item-wrap";
//         //
//         //     // Клонируем содержимое шаблона для того, чтобы переиспользовать его несколько раз
//         //     containerTop.append(container.content.cloneNode(true));
//         //     // containerTop.prepend(section);
//         //     const allSelectCalculator = document.querySelectorAll('.js-calculator-select');
//         //     allSelectCalculator.forEach(function (el) {
//         //         new SlimSelect({
//         //             select: el,
//         //             settings: {
//         //                 showSearch: false,
//         //                 focusSearch: false,
//         //             }
//         //         })
//         //     })
//         //
//         // }
//     }
//
// }

// const allSelectCalculator = document.querySelectorAll('.js-calculator-select');
// allSelectCalculator.forEach(function (el) {
//     new SlimSelect({
//         select: el,
//         settings: {
//             showSearch: false,
//             focusSearch: false,
//         }
//     })
// })


// Функция для инициализации SlimSelect
// function initializeSlimSelect(selectElements) {
//     selectElements.forEach((el) => {
//         if (!el.slim) { // Проверяем, не инициализирован ли уже SlimSelect
//             try {
//                 new SlimSelect({
//                     select: el,
//                     settings: {
//                         showSearch: false,
//                         focusSearch: false,
//                     }
//                 });
//                 console.log('SlimSelect инициализирован для:', el);
//             } catch (error) {
//                 console.error('Ошибка инициализации SlimSelect:', error);
//             }
//         }
//     });
// }
//
// // Функция для клонирования элементов
// function cloneCalculatorItem() {
//     const parentContainer = document.querySelector('.js-container');
//     if (!parentContainer) {
//         console.error('Контейнер .js-container не найден');
//         return;
//     }
//
//     parentContainer.addEventListener('click', (event) => {
//         if (event.target.closest('.js-copy-btn')) {
//             const elementToClone = document.querySelector('.js-element-to-clone');
//             if (!elementToClone) {
//                 console.error('Элемент .js-element-to-clone не найден');
//                 return;
//             }
//
//             const targetContainer = document.querySelector('.js-target-container');
//             if (!targetContainer) {
//                 console.error('Контейнер .js-target-container не найден');
//                 return;
//             }
//
//             // Клонируем элемент
//             const clonedElement = elementToClone.cloneNode(true);
//
//             // Обрабатываем все <select> в клонированном элементе
//             const newSelects = clonedElement.querySelectorAll('.js-calculator-select');
//             newSelects.forEach((el, index) => {
//                 // Удаляем атрибуты SlimSelect
//                 el.removeAttribute('data-ssid');
//                 el.removeAttribute('data-select-id');
//                 el.removeAttribute('data-slim');
//
//                 // Уничтожаем существующий экземпляр SlimSelect, если он есть
//                 if (el.slim) {
//                     try {
//                         el.slim.destroy();
//                     } catch (error) {
//                         console.warn('Ошибка при уничтожении SlimSelect:', error);
//                     }
//                 }
//
//                 // Удаляем обертку SlimSelect, если она существует
//                 const parent = el.parentElement;
//                 if (parent && parent.classList.contains('slim-select')) {
//                     // Заменяем обертку на оригинальный <select> без изменения структуры
//                     parent.replaceWith(el.cloneNode(true));
//                 }
//
//                 // Устанавливаем уникальный ID для <select>
//                 el.id = `select-clone-${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`;
//
//                 // Восстанавливаем видимость и очищаем стили
//                 el.style.display = 'block';
//                 el.removeAttribute('style');
//             });
//
//             // Обновляем data-row для уникальности формы
//             const rowCount = targetContainer.querySelectorAll('.js-calculator-item').length + 1;
//             clonedElement.setAttribute('data-row', rowCount);
//
//             // Добавляем склонированный элемент в целевой контейнер
//             targetContainer.appendChild(clonedElement);
//
//             // Инициализируем SlimSelect для новых <select> после добавления в DOM
//             const updatedSelects = clonedElement.querySelectorAll('.js-calculator-select');
//             setTimeout(() => {
//                 initializeSlimSelect(updatedSelects);
//             }, 0); // Небольшая задержка для гарантированного обновления DOM
//         }
//     });
// }
//
// // Инициализация SlimSelect для исходных элементов
// document.addEventListener('DOMContentLoaded', () => {
//     const allSelectCalculator = document.querySelectorAll('.js-calculator-select[data-select-id]');
//     initializeSlimSelect(allSelectCalculator);
//     // cloneCalculatorItem();
// });
//
// // Проверяем, загружена ли библиотека SlimSelect
// if (typeof SlimSelect === 'undefined') {
//     console.error('Библиотека SlimSelect не загружена');
// }

function cloneCalculatorItem() {
    const parentContainer = document.querySelector('.js-container');
    if (!parentContainer) {
        console.error('Контейнер .js-container не найден');
        return;
    }

    parentContainer.addEventListener('click', (event) => {
        // Отладка: логируем, на чем произошел клик
        console.log('Клик на элементе:', event.target, 'Путь:', event.path || event.composedPath());

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
                const customSelect = select.nextElementSibling;
                if (customSelect) {
                    const selected = customSelect.querySelector('.custom-select-selected');
                    const options = customSelect.querySelector('.custom-select-options');
                    if (selected && options) {
                        selected.textContent = select.options[select.selectedIndex].text;
                        options.innerHTML = Array.from(select.options)
                            .map(opt => `<div class="custom-select-option" data-value="${opt.value}" data-index="${opt.index}" ${opt.selected ? 'class="selected"' : ''}>${opt.text}</div>`)
                            .join('');
                    }
                }
            });
        }

        // Делегирование для открытия/закрытия кастомного селекта
        const clickedElement = event.target;
        if (clickedElement.closest('.custom-select') || clickedElement.closest('.custom-select-selected')) {
            const customSelect = clickedElement.closest('.custom-select') || clickedElement.closest('.custom-select-selected')?.closest('.custom-select');
            console.log('Найден custom-select:', customSelect);
            const options = customSelect.querySelector('.custom-select-options');
            if (options) {
                options.classList.toggle('active');
                console.log('Тoggle .active для:', options, 'Состояние:', options.classList.contains('active'));
            } else {
                console.error('Не найден .custom-select-options в:', customSelect);
            }
        } else if (clickedElement.closest('.calculator__select')) {
            console.log('Клик на скрытый <select>, игнорируем');
            event.stopPropagation();
        }

        // Делегирование для выбора опции
        const option = event.target.closest('.custom-select-option');
        if (option) {
            const optionsContainer = option.closest('.custom-select-options');
            if (optionsContainer) {
                const customSelect = optionsContainer.closest('.custom-select');
                const selected = customSelect.querySelector('.custom-select-selected');
                const select = customSelect.previousElementSibling;
                if (selected && select) {
                    const value = option.getAttribute('data-value');
                    const index = option.getAttribute('data-index');
                    selected.textContent = option.textContent;
                    select.value = value;
                    select.selectedIndex = parseInt(index);

                    // Удаляем класс selected у всех опций и добавляем только для выбранной
                    optionsContainer.querySelectorAll('.custom-select-option').forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');

                    optionsContainer.classList.remove('active');
                    console.log('Обновлено value:', select.value);
                } else {
                    console.error('Не найдены selected или select:', { customSelect, selected, select });
                }
            } else {
                console.error('Не найден optionsContainer:', option);
            }
        }
    });

    // Закрытие выпадающего списка при клике вне селекта
    document.addEventListener('click', (e) => {
        const customSelect = e.target.closest('.custom-select');
        if (!customSelect) {
            document.querySelectorAll('.custom-select-options.active').forEach((options) => {
                options.classList.remove('active');
                console.log('Закрыт .active для:', options);
            });
        }
    });

    // Инициализация кастомных селектов при загрузке
    document.querySelectorAll('.calculator__select').forEach((select) => {
        const customSelect = select.nextElementSibling;
        if (customSelect) {
            const selected = customSelect.querySelector('.custom-select-selected');
            const options = customSelect.querySelector('.custom-select-options');
            if (selected && options) {
                selected.textContent = select.options[select.selectedIndex].text;
                options.innerHTML = Array.from(select.options)
                    .map(opt => `<div class="custom-select-option" data-value="${opt.value}" data-index="${opt.index}" ${opt.selected ? 'class="selected"' : ''}>${opt.text}</div>`)
                    .join('');
            }
        }
    });
}

// Инициализация при загрузке DOM
// document.addEventListener('DOMContentLoaded', () => {
//     cloneCalculatorItem();
// });

export default cloneCalculatorItem;