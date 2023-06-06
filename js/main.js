import * as debouce from "./modules/debounces/debounce.js";
import SlideNav from "./modules/slides/slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-control");
