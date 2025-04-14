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
import galleryManufactureSliders from "./modules/gallery-manufacture-sliders";
import contentsAnchors from "./modules/contents-anchors";
import otherPostsSlider from "./modules/other-posts-slider";
import initAccordion from "./modules/accordion";
import fabricationSliders from "./modules/fabrication-slider";
import animationPage from "./modules/animation-page";
import otherShipmentsSlider from "./modules/other-shipments-slider";
import shipmentsItems from "./modules/shipments-items";
import multiSelectFilters from "./modules/MultiSelect";
import selectFiltersCategory from "./modules/select-filters-category";

document.addEventListener('DOMContentLoaded', ()=> {

    animationPage();
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
    galleryManufactureSliders();
    contentsAnchors();
    otherPostsSlider();
    initAccordion();
    fabricationSliders();
    otherShipmentsSlider();
    shipmentsItems();
    // multiSelectFilters();
    selectFiltersCategory();
    Fancybox.bind('[data-fancybox]');

})
// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });
