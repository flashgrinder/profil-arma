import $ from "jquery";

function mapDeliveryTooltip() {
    // let tabTriggerBtns = document.querySelectorAll('.js-region-path');
    let contentRegion = Array.from(document.querySelectorAll('.js-content-region'));
    if(contentRegion) {
        const onClick = e => contentRegion.forEach(n => n.classList.toggle('is-open', n === e.currentTarget))
        contentRegion.forEach((region) => {
            region.addEventListener('click', onClick);
        })

        $("body").click(function(e) {
            if ($(e.target).closest(".js-content-region").length == 0) {
                $(".js-content-region").attr('class', 'delivery-map__tooltip js-content-region ');
                // $('.js-region-path').attr('class', 'js-region-path ');
            }
        });
    }

    // tabTriggerBtns.forEach(function(tabTriggerBtn, index) {
    //
    //     tabTriggerBtn.addEventListener('click', function() {
    //
    //         if (this.dataset.region == '0') {
    //             let tabContentList = document.querySelectorAll('.js-content-region');
    //             tabContentList.forEach(function(tabContent) {
    //                 tabContent.classList.add('is-open');
    //             });
    //             console.log('Work IF');
    //         }
    //         else {
    //             let currentTabData = document.querySelector('.js-content-region[data-content-region="' + this.dataset.region + '"]');
    //             console.log('Work ELSE');
    //             let isOpenRegion = document.querySelector('.js-content-region');
    //             if(isOpenRegion.classList.contains('is-open')) {
    //                 document.querySelector('.js-content-region.is-open').classList.remove('is-open');
    //             }
    //             currentTabData.classList.add('is-open');
    //         }
    //
    //         let isActivePath =  document.querySelector('.js-region-path');
    //         if(isActivePath.classList.contains('is-active')) {
    //             document.querySelector('.js-region-path.is-active').classList.remove('is-active');
    //         }
    //         this.classList.add('is-active');
    //
    //     });
    // });


}
export default mapDeliveryTooltip;