// search
const search = document.getElementById('search');
search.onclick = search_event;
const sClose = document.getElementById('search-close');
sClose.onclick = search_event;

function search_event() {
  console.log('search');
  searchView();
}

const searchOverlay = document.getElementsByClassName('search-overlay');
const searchDesign1 = document.getElementsByClassName('search-design1');
const searchDesign2 = document.getElementsByClassName('search-design2');
const searchClose = document.getElementsByClassName('search-overlay__close');
const searchOverlayWrap = document.getElementsByClassName('search-overlay__content-wrap');

function searchView() {
  searchOverlay[0].classList.toggle('active');
  searchDesign1[0].classList.toggle('active');
  searchDesign2[0].classList.toggle('active');
  searchClose[0].classList.toggle('active');
  searchOverlayWrap[0].classList.toggle('active');
}

// menu
const btn = document.getElementById('btn');
btn.onclick = btn_event;
const bgClick = document.getElementById('bgoverlay');
bgClick.onclick = btn_event;

function btn_event() {
  btn.classList.toggle('active');
  dropdown();
}

const navMobile = document.getElementsByClassName('nav-mobile');
const navDrop = document.getElementsByClassName('nav-mobile__dropdown-design');
const navDropSec1 = document.getElementsByClassName('nav-mobile__dropdown-section-1');
const navDropSec2 = document.getElementsByClassName('nav-mobile__dropdown-section-2');
const navDropSec3 = document.getElementsByClassName('nav-mobile__dropdown-section-3');
const bgoverlay = document.getElementsByClassName('bgoverlay');

function dropdown() {
  // console.log('click');
  navMobile.item(0).classList.toggle('active');
  navDrop[0].classList.toggle('active');
  bgoverlay[0].classList.toggle('active');
  navDropSec1[0].classList.toggle('active');
  navDropSec2[0].classList.toggle('active');
  navDropSec3[0].classList.toggle('active');
}

// fun
const heroHeadline = document.getElementsByClassName('hero__headline');
const heroEffect = document.getElementsByClassName('hero__infobox__effect');
const heroWrap = document.getElementsByClassName('hero__wrap');

window.onscroll = () => {
  let scroll_val = window.pageYOffset;
  console.log(scroll_val);
  if (scroll_val <= 200) {
    heroHeadline[0].style.opacity = 1 - (scroll_val/200);
    heroHeadline[0].style.transform = 'translate(0%, ' + (scroll_val/2) +'%)';
    heroWrap[0].style.marginBottom = (100 - (scroll_val/4)) + 'px';
  }
  if (scroll_val <= 360) {
    heroEffect[0].style.transform = 'translate(0%, ' + (120 - scroll_val/3) +'%)';
  }
}

// .hero__wrap {
//   position: relative;
//   padding-top: var(--header-height);
//   margin-bottom: 100px;
// }
