$(document).ready(function () {
  //  *Главная страница - заполнение circle* //
  canvas();
  let btn = document.querySelectorAll(".tooltip-text");
  btn.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
      // event.target.classList.add("hiden");
      /*setTimeout(() => {
				event.target.classList.add("hiden");
			}, 1000);

			setTimeout(() => {
				event.target.classList.remove("hiden");
			}, 3000);*/
    });
  });

  $(".samp-bottom__list").isotope({
    itemSelector: ".samp-bottom__item",
    masonry: {
      columnWidth: 100,
      horizontalOrder: true,
    },
  });

  var tab = $("#tabs .tabs-items > div");

  $("#tabs .tabs-nav a").click(function () {
    tab.hide();
    tab.filter(this.hash).show();
    $("#tabs .tabs-nav a").removeClass("active");
    $(this).addClass("active");
    return false;
  });

  $(".tabs-target").click(function () {
    $("#tabs .tabs-nav a[href=" + $(this).data("id") + "]").click();
  });

  $(window).scroll(function () {
    //if($(this).scrollTop()>100) $('.scrollup').fadeIn();
    //else $('.scrollup').fadeOut();
  });
});

//  *Копирует текст из tooltip* //
var copytexttimeout = 0;
var copytexthidetimeout = 0;

function copytext(el) {
  var $tmp = $("<input>");
  $("body").append($tmp);
  $tmp.val($("#" + el).text()).select();
  document.execCommand("copy");
  $tmp.remove();

  //var btn = document.querySelectorAll('.tooltip-'+'text');
  //alert(el);
  var btn = document.getElementById("tooltip-" + el);
  btn.innerHTML = "Скопировано";
  copytexttimeout = setTimeout(
    ($this) => {
      $this.innerHTML = "Скопировать";
      copytexttimeout = 0;
    },
    3000,
    btn
  );
  copytexthidetimeout = setTimeout(
    ($this) => {
      $this.classList.add("hiden");
      copytexthidetimeout = 0;
    },
    1000,
    btn
  );
  //setTimeout(($this)=>{$this.classList.remove("hiden");},3000,btn);
}

function onservermouseover(el) {
  if (copytexttimeout) {
    clearTimeout(copytexttimeout);
    copytexttimeout = 0;
  }
  if (copytexthidetimeout) {
    clearTimeout(copytexthidetimeout);
    copytexthidetimeout = 0;
  }
  var btn = document.getElementById("tooltip-" + el);
  btn.innerHTML = "Скопировать";
  btn.classList.remove("hiden");
}

//  *Аккордеон* //
var accordion = (function () {
  var $accordion = $(".faq__list");
  var $accordion_header = $accordion.find(".faq__item-title");
  var settings = {
    speed: 400,
    oneOpen: false,
  };
  return {
    init: function ($settings) {
      $accordion_header.on("click", function () {
        accordion.toggle($(this));
      });
      $.extend(settings, $settings);
      if (settings.oneOpen && $(".faq__item.active").length > 1) {
        $(".faq__item.active:not(:first)").removeClass("active");
      }
      $(".faq__item.active").find("> .faq__item-content").show();
    },
    toggle: function ($this) {
      if (
        settings.oneOpen &&
        $this[0] !=
          $this
            .closest(".faq__list")
            .find("> .faq__item.active > .faq__item-title")[0]
      ) {
        $this
          .closest(".faq__list")
          .find("> .faq__item")
          .removeClass("active")
          .find(".faq__item-content")
          .slideUp();
      }
      $this.closest(".faq__item").toggleClass("active");
      $this.next().stop().slideToggle(settings.speed);
    },
  };
})();

$(document).ready(function () {
  accordion.init({
    speed: 300,
    oneOpen: true,
  });
});

//  *Кастомный scroll* //
let simpleBarOne = document.getElementById("log__left");
let simpleBarTwo = document.getElementById("log__leftt");

if (simpleBarOne) {
  new SimpleBar(simpleBarOne);
}

if (simpleBarTwo) {
  new SimpleBar(simpleBarTwo);
}

//  *Start-play - открытие кнопки* //
let startPlay = document.getElementById("start-play");
let startPlayList = document.querySelector(".start-play__list");

if (startPlay)
  if (startPlayList) {
    startPlay.addEventListener("click", function () {
      startPlayList.classList.toggle("active");
    });
  }

// Донат
const donatSub = document.querySelector(".donat-form__submit");
const ipInput = document.querySelector(".ip-input");
const donatInput = document.querySelector(".donat-input");

if (ipInput) {
  ipInput.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^\d.]/g, "");
  });
}

if (donatInput) {
  donatInput.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
    if (
      e.keyCode == 69 ||
      e.keyCode == 189 ||
      e.currentTarget.value.length >= 100
    ) {
      event.preventDefault();
    }
  });

  donatInput.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^\d.]/g, "");

    //donatSub.setAttribute('value', `Пополнить баланс на ${this.value}`)
  });
}

// Удаление класса у меню
if (document.documentElement.clientWidth < 515)
  if (document.getElementById("input__placeholder"))
    document.getElementById("input__placeholder").placeholder = "";
if (document.documentElement.clientWidth < 515)
  if (document.getElementById("searchtext"))
    document.getElementById("searchtext").placeholder = "";

// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");

const theme = localStorage.getItem("theme");
if (theme === null) {
  localStorage.setItem("theme", "light");
  document.body.className = "light";
  document.querySelector(".img-mob").srcset = "./img/logomobile.png";
  document.querySelector(".img-desk").src = "./img/logo.png";
}
if (theme === "dark") {
  document.body.className = "dark";
  document.querySelector(".img-mob").srcset = "./img/logomobile-dark.png";
  document.querySelector(".img-desk").src = "./img/logo-dark.png";
}

if (btn) {
  function clickHandler() {
    btn.addEventListener("click", function () {
      const theme = localStorage.getItem("theme");
      const logoM = localStorage.getItem(
        "document.querySelector('.img-mob').srcset = './img/logomobile.png'"
      );
      const logo = localStorage.getItem(
        "document.querySelector('.img-desk').src = './img/logo.png'"
      );
      const logoMd = localStorage.getItem(
        "document.querySelector('.img-mob').srcset = './img/logomobile-dark.png'"
      );
      const logod = localStorage.getItem(
        "document.querySelector('.img-desk').src = './img/logo-dark.png'"
      );
      if (theme === "dark") {
        localStorage.setItem("theme", "light");
        localStorage.setItem("logoM", "logoM");
        localStorage.setItem("logo", "logo");
        document.body.className = "light";
        document.querySelector(".img-mob").srcset = "./img/logomobile.png";
        document.querySelector(".img-desk").src = "./img/logo.png";
      } else if (theme === "light") {
        localStorage.setItem("theme", "dark");
        localStorage.setItem("logoMd", "logoMd");
        localStorage.setItem("logod", "logod");
        document.body.className = "dark";
        document.querySelector(".img-mob").srcset = "./img/logomobile-dark.png";
        document.querySelector(".img-desk").src = "./img/logo-dark.png";
      }
    });
  }
  clickHandler();
}

// drag and drop
let opDnD = {
  buff: null,
  items: document.getElementsByClassName(`index-server__item`),
  events: {
    beforeunload: () =>
      window.localStorage.setItem(
        `key123456789`,
        Array.from(opDnD.items, (elem) => elem.innerHTML).join`;`
      ),
    load: () =>
      window.localStorage.getItem(`key123456789`)
        ? window.localStorage.getItem(`key123456789`).split`;`.forEach(
            (v, i) => (opDnD.items[i].innerHTML = v)
          )
        : void 0,
    dragstart: (e) => {
      opDnD.buff = e.currentTarget;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.currentTarget.innerHTML);
    },
    dragover: (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    },
    drop: (e) => {
      opDnD.buff.innerHTML = e.currentTarget.innerHTML;
      e.currentTarget.innerHTML = e.dataTransfer.getData("text/html");
      let animate = false;
      canvas(animate);
    },
  },
};
//console.log(Array.from(opDnD.items, elem => elem.innerHTML).join`;`);
[`beforeunload`, `load`].forEach((evt) =>
  window.addEventListener(evt, opDnD.events[evt])
);
Array.from(opDnD.items, (elem) => {
  [`dragstart`, `dragover`, `drop`].forEach((evt) =>
    elem.addEventListener(evt, opDnD.events[evt])
  );
});

function canvas(animation) {
  //  *Главная страница - заполнение circle* //
  $(".pl")
    .circleProgress({
      fill: {
        color: "#1F85FE",
      },
      lineCap: "round",
      animation,
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .html(Math.round(1000 * stepValue));
    });

  $(".chr")
    .circleProgress({
      fill: {
        color: "#1F85FE",
      },
      lineCap: "round",
      animation,
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .html(Math.round(1000 * stepValue));
    });

  $(".ti")
    .circleProgress({
      fill: {
        color: "#1F85FE",
      },
      lineCap: "round",
      animation,
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .html(Math.round(1000 * stepValue));
    });

  $(".ay")
    .circleProgress({
      fill: {
        color: "#1F85FE",
      },
      lineCap: "round",
      animation,
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .html(Math.round(1000 * stepValue));
    });

  $(".li")
    .circleProgress({
      fill: {
        color: "#1F85FE",
      },
      lineCap: "round",
      animation,
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .html(Math.round(1000 * stepValue));
    });

  $(".de")
    .circleProgress({
      fill: {
        color: "#1F85FE",
      },
      lineCap: "round",
      animation,
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .html(Math.round(1000 * stepValue));
    });
}