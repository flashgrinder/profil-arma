import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import mobileNav from './modules/mobile-nav.js';
import mobileCatalog from "./modules/mobile-catalog";
import specialistsSlider from "./modules/specialists-slider";
import tabs from "./modules/tabs";
import placeholderInputs from "./modules/placeholder-inputs";
import uploadFiles from "./modules/form-files";
import reviewsSlider from "./modules/reviews-slider";
import shipmentsSlider from "./modules/shipments-slider";
import clientsSlider from "./modules/clients-slider";
import officeSlider from "./modules/office-slider";
import certificatesSlider from "./modules/certificates-slider";

document.addEventListener('DOMContentLoaded', ()=> {

    mobileNav();
    mobileCatalog();
    specialistsSlider();
    tabs();
    placeholderInputs();
    uploadFiles();
    reviewsSlider();
    shipmentsSlider();
    clientsSlider();
    officeSlider();
    certificatesSlider();
    Fancybox.bind('[data-fancybox]');

})
// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });
