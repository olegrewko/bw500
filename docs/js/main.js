(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

window.addEventListener("scroll", function () {
  document
    .getElementById("header-nav")
    .classList.toggle("headernav-scroll", window.scrollY > 135);
});

const offcanvasCartEl = document.getElementById("offcanvasCart");
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById("cart-open").addEventListener("click", (e) => {
  e.preventDefault();
  offcanvasCart.toggle();
});

document.querySelectorAll(".closecart").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    offcanvasCart.hide();
    let href = item.dataset.href;
    document.getElementById(href).scrollIntoView();
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });

  $("#top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  $(".owl-carousel-full").owlCarousel({
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
$(".radio input").on("click", function (e) {
  console.clear();
  console.log(this.checked); // всегда true;
  e.preventDefault();

  setTimeout(() => $(this).prop("checked", !this.checked).trigger("change"));
});
$(".menu a, .totop").on("click", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();

  //забираем идентификатор бока с атрибута href
  var id = $(this).attr("href"),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

  //анимируем переход на расстояние - top за 1500 мс
  $("body,html").animate(
    {
      scrollTop: top,
    },
    1500
  );
});
// offcanvas
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("open");
});
