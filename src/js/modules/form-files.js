function  uploadFiles() {

    const forms = Array.from(document.querySelectorAll(".js-form"));
    let btnFile = document.querySelectorAll('.js-file');
    let textSelectorFile = document.querySelectorAll(".js-name-file");

    forms.forEach((form, index)=> {
        let fileList;

        btnFile[index].addEventListener('change', (file)=> {

            fileList = [];
            for (let i = 0; i < btnFile[index].files.length; i++) {
                fileList.push(btnFile[index].files[i]);
            }

            fileList.forEach(file => {
                if (file.size > 5 * 1024 * 1024) {
                    alert("Файл должен быть не более 5 МБ.");
                    return;
                }

                // Показ загружаемых файлов
                if (file && file.length > 1) {
                    if ( file.length <= 4 ) {
                        textSelectorFile[index].textContent = `Выбрано ${file.length} файла`;
                    }
                    if ( file.length > 4 ) {
                        textSelectorFile[index].textContent = `Выбрано ${file.length} файлов`;
                    }
                } else {
                    textSelectorFile[index].textContent = file.name;
                }
            });
        })
    })

}

export default uploadFiles;