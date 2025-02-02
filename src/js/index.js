import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import mobileNav from './modules/mobile-nav.js';
import mobileCatalog from "./modules/mobile-catalog";

document.addEventListener('DOMContentLoaded', ()=> {

    mobileNav();
    mobileCatalog();
    Fancybox.bind('[data-fancybox]');

})
// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });
