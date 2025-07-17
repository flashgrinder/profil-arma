function  uploadFiles() {

    const forms = Array.from(document.querySelectorAll(".js-form"));
    let btnFile = document.querySelectorAll('.js-file');
    let textSelectorFile = document.querySelectorAll(".js-name-file");

    let removeBtn = document.querySelectorAll('.js-remove-file');

    forms.forEach((form, index)=> {
        let fileList;

        btnFile[index].addEventListener('change', () => {
            fileList = [];
            for (let i = 0; i < btnFile[index].files.length; i++) {
                fileList.push(btnFile[index].files[i]);
            }

            // Проверка размера файла
            for (let file of fileList) {
                if (file.size > 15 * 1024 * 1024) {
                    alert("Файл должен быть не более 15 МБ.");
                    // Очистить выбранные файлы
                    btnFile[index].value = '';
                    fileList = [];
                    textSelectorFile[index].textContent = '';
                    // Скрыть кнопку удаления
                    if (removeBtn[index]) {
                        removeBtn[index].style.display = 'none';
                    }
                    return;
                }
            }

            // Обновление отображения выбранных файлов
            if (fileList.length > 0) {
                if (fileList.length > 1) {
                    if (fileList.length <= 4) {
                        textSelectorFile[index].textContent = `Выбрано ${fileList.length} файла`;
                    } else {
                        textSelectorFile[index].textContent = `Выбрано ${fileList.length} файлов`;
                    }
                } else {
                    textSelectorFile[index].textContent = fileList[0].name;
                }
                // Показываем кнопку удаления
                if (removeBtn[index]) {
                    removeBtn[index].style.display = 'block';
                }
            }
        });

        if (removeBtn[index]) {
            // Обработка удаления файла
            removeBtn[index].addEventListener('click', () => {

                removeBtn[index].style.display = 'none';
                // Очистить выбранные файлы
                btnFile[index].value = '';
                fileList = [];
                // Обновить отображение
                textSelectorFile[index].textContent = 'Прикрепить файл';
            });
        }

    })

}

export default uploadFiles;