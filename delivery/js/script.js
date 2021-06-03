$(document).ready(function () {
  $('.header__burger, .menu__list').click(function (event) {
    $('.header__burger, .menu__list, .overlay').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(document).ready(function () {
    $('.menu__link').click(function (event) {
      $('.header__burger, .menu__list, .overlay').removeClass('active');
      $('body').removeClass('lock')
    });
  });
});


$(document).ready(function () {
  $('.carousel').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });


  $('.btn-price').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.card-item__wrap_descr').eq(i).toggleClass('card-item__wrap_descr-active');
      $('.card-item__hover').eq(i).toggleClass('card-item__hover_active');
    });
  });
  $('[data-modal=call_back]').on('click', function () {
    $('.overlay__modal, #modal__call-back').fadeIn('slow');
    $('.modal__close, .modal__close-thanks').on('click', function () {
      $('.overlay__modal, #modal__call-back, #thanks').fadeOut();
    });
  });


  $('.btn-promo').on('click', function () {
    $('.overlay__modal, .modal-calc').fadeIn('slow');
    $('.modal-calc__close').on('click', function () {
      $('.overlay__modal, .modal-calc').fadeOut();
    });
  });




  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Введите пожалуйста имя",
        phone: "Пожалуйста, введите номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно ввели свою почту"
        }
      }
    });
  }

  valideForms('#modal__call');
  valideForms('#form-consultation');
  valideForms('#form-questions');



});



var btn = document.querySelector('#btn'),
  out = document.querySelector('#out'),
  weight = document.querySelector('#weight'),
  vol = document.querySelector('#vol'),
  load = document.querySelector('#load'),
  del = document.querySelector('#del'),
  frag = document.querySelector('#frag'),
  range = document.querySelector('#range'),
  rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 500;
weight = document.querySelector('#weight'),
  vol = document.querySelector('#vol'),
  kg = 1,
  kub = 10,
  km = 1;

range.onchange = function () {
  var rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
};

btn.onclick = function () {
  if (weight.value != '' && vol.value != '') {
    if (load.checked) {
      load.value = 1500;
    }
    else {
      load.value = 0;
    }
    if (del.checked) {
      del.value = 10;
    }
    else {
      del.value = 0;
    }
    if (frag.checked) {
      frag.value = 20;
    }
    else {
      frag.value = 0;
    }

    var sum = (weight.value * kg) + (vol.value * kub) + Number(load.value) + + Number(del.value) + Number(frag.value) + (range.value * km);
    out.innerHTML = sum;
  } else {
    alert('Введите вес и объем груза');
  }
};



$('input[name=phone]').mask('+38(999)-999-99-99');



$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href^='#']").click(function () {
  let _href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
  return false;
});




$('form').submit(function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function () {
    $(this).find("input").val(" ");
    $('#modal__call-back, .modal, .overlay').fadeOut();
    $('#thanks').fadeIn('slow');
    $('form').trigger('reset');
  });
  return false;
});







