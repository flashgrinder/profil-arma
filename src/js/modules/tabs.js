function customTabs () {

    let tabs = document.querySelectorAll('.tabs');

    tabs.forEach((tabSection) => {

        let tabTriggerBtns = tabSection.querySelectorAll('.tabs__button');

        tabTriggerBtns.forEach(function(tabTriggerBtn, index) {

            tabTriggerBtn.addEventListener('click', function() {

                if (this.dataset.tabTrigger == '0') {
                    let tabContentList = tabSection.querySelectorAll('.tabs__content');
                    tabContentList.forEach(function(tabContent) {
                        tabContent.classList.add('is-open');
                    });
                }
                else {
                    let currentTabData = tabSection.querySelector('.tabs__content[data-tab-content="' + this.dataset.tabTrigger + '"]');
                    tabSection.querySelector('.tabs__content.is-open').classList.remove('is-open');
                    currentTabData.classList.add('is-open');
                }

                tabSection.querySelector('.tabs__button.is-active').classList.remove('is-active');
                this.classList.add('is-active');

            });
        });

    })


}

export default customTabs;