const menu = document.querySelector(".nav"),
  burger = document.querySelector(".burger"),
  mobileBack = document.querySelector(".mobile-back"),
  overlay = document.querySelector(".overlay");

const lockScroll = () => {
  document.body.classList.add("lock");
};

const unlockScroll = () => {
  document.body.classList.remove("lock");
};

const initialMenu = () => {
  document
    .querySelector(".nav__list--dropdown")
    .classList.remove("transformation");
  document
    .querySelector(".nav")
    .querySelector(".nav__list")
    .classList.remove("transformation");
  scrollTop();
};

const scrollTop = () => {
  menu.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

burger.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.classList.add("open");
  lockScroll();
  initialMenu();
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.remove("open");
  unlockScroll();
});

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__link--drop")) {
    e.preventDefault();
    e.target.closest(".nav__list").classList.add("transformation");
    e.target
      .closest(".nav__item")
      .querySelector(".nav__list--dropdown")
      .classList.add("transformation");
    scrollTop();
  }

  if (e.target.classList.contains("mobile-back__link")) {
    e.preventDefault();
    e.target.closest(".nav__list--dropdown").classList.remove("transformation");
    e.target
      .closest(".nav")
      .querySelector(".nav__list")
      .classList.remove("transformation");
    scrollTop();
  }

  if (
    e.target.classList.contains("nav__link") &&
    !e.target.classList.contains("nav__link--drop")
  ) {
    menu.classList.remove("open");
    overlay.classList.remove("open");
    unlockScroll();
  }
});

// Удаление класса у меню
if (document.documentElement.clientWidth < 1021) {
  const el = document.getElementById("el");
  el.classList.remove("nav__link--drop");
}

const navItems = document.querySelectorAll(".nav__item");

let isMouseHover = false;
let isItem = false;
let test = document.getElementById("test");

// document.addEventListener('mouseover', (e) => {
// 	console.log(e.target);
// 	if (!e.target.classList.contains('nav__item') && !e.target.closest('.nav__item')) {
// 		isItem = false;
// 	}
// });

// navItems.forEach(el => {
// 	el.addEventListener("mouseleave", function (event) {
// 		if (event.toElement) {
// 			if (!event.toElement.classList.contains('nav__item') && !event.toElement.classList.contains('nav__link')) {
// 				el.classList.add('delay');

// 				setTimeout(() => {
// 					el.classList.remove('delay');
// 				}, 2000);
// 			}
// 		}

// 	}, false);
// });

$(document).ready(function () {
  var hovertimeout;
  var $this;
  var hovertimeoutmain;
  var $thismain;

  $("#nav ul").hover(
    function () {
      //mouse enter
      if (hovertimeout) {
        $this.parents("li").removeClass("hover");
        clearTimeout(hovertimeout);
        hovertimeout = 0;
      }
      $(this).parents("li").addClass("hover");
    },
    function () {
      //mouse leave
      $this = $(this);
      hovertimeout = setTimeout(function () {
        $this.parents("li").removeClass("hover");
      }, 1000);
    }
  );

  $("#nav li.hassubmenu.nav__item").hover(
    function () {
      //mouse enter
      if (hovertimeoutmain) {
        $thismain.removeClass("hover");
        clearTimeout(hovertimeoutmain);
        hovertimeoutmain = 0;
      }
      $(this).addClass("hover");
    },
    function () {
      //mouse leave
      $thismain = $(this);
      hovertimeoutmain = setTimeout(function () {
        $thismain.removeClass("hover");
      }, 1000);
    }
  );
});
