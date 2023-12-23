const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true, 
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true ,
  },
  navigation: 
    false 
})




$(function() {
  let header = $(".header-sticky");
  let backTop = $('#back-top');
  let initialPosition = $(window).scrollTop();

  if (initialPosition < 400) {
    header.removeClass("sticky-bar");
    backTop.hide();
  }

  $(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    if (scroll < 400 && initialPosition < 400) {
      header.removeClass("sticky-bar");
      backTop.fadeOut(500);
    } else {
      header.addClass("sticky-bar");
      backTop.fadeIn(500);
    }
  });

  $('#back-top a').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

//PHONE
$('.info-phone__hover').on('click',function(){
  $('.info-modal-offer').addClass('active');
})
$('.info-modal__overlay').on('click',function(){
  $('.info-modal-offer').removeClass('active');
})
$('.info-modal__exit').on('click',function(){
  $('.info-modal-offer').removeClass('active');
})

$('.message-for__exit').on('click',function(){
  $('.for-user-offer').toggle();
})
$('.for-user__overlay').on('click',function(){
  $('.for-user-offer').toggle();
})
//VALIDATOR
$.validator.addMethod("regex",function (value, element, regexp){
  var regExsp = new RegExp(regexp);
  return regExsp.test(value);
},"PLease chech yuor input."
);
// form отправка 

$(document).ready(function  () {
 $('[data-submit]').on('click',function (e) {
  e.preventDefault();
  $(this).parent('form').submit();
 })
 $.validator.addMethod("regex", function (value,element,regexp) {
   var regExsp = new RegExp(regexp);
   return this.optional(element) || regExsp.test(value);
 },"Please check yuor input." );
 function valEL(el) {
  el.validate({
    rules: {
      tel: {
        required: true,
        regex: '([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
   },
   name: { 
    required: true 
   },
   email: {
    required: true,
    email: true
   }
  },
  messages: {
    tel: { 
      required: 'Введите правильный номер телефона',
      regex: 'Телефон может содержать символы + - ()'
  },
  name: {
    required: 'Поле обязательно для заполнения',
  },
  email: {
    required: 'Поле обязательно для заполнения',
    email: 'Неверный формат E-mail'
  }
},

   submitHandler: function (form) {
   $('#preloader-active').fadeIn();
   var $form = $(form);
   var $formId = $(form).attr('id');

   switch ($formId) {
  case 'form-modal':
    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: $form.serialize()
    })
    .done(function (){
      console.log('fail');
    })
    .always(function () {
      console.log('Always');
      setTimeout(function () {
        $form.trigger('reset');
        $('#preloader-active').fadeIn();
      },1100);
      setTimeout(function () {
        $('#preloader-active').fadeOut();
        $('.info-modal-offer').fadeOut();
        $('.for-user-offer').fadeIn();
      },1900);
    });
    break;
  }
  return false;

 }
});
}
$('.js-form').each(function () {
  valEL($(this));
});
});

// BURGER-MENU
$('.burger-menu').on('click',function(){
  $('.burger-menu__list').toggle();
})



// TABS AND PRELOADER
function showPreloader() {
  $('#preloader-active').fadeIn('fast');
  $(window).scrollTop(0);
}

function hidePreloader() {
  $('#preloader-active').delay(450).fadeOut('slow');
  $('body').delay(450).css({
    'overflow': 'visible'
  });
}

$(document).ready(function() {
  showPreloader();

  var img = new Image();
  img.onload = function() {
    hidePreloader();
  };
  img.src = $('img').attr('src');
});

$('.properties__item').on('click', function (e) {
  e.preventDefault();
  let currtab = $(this).index();
  $('.properties__item').removeClass('active');
  $(this).addClass('active');
  $('.navigeishon-blok__shop').removeClass('active');
  $('.navigeishon-blok__shop').eq(currtab).addClass('active');
  showPreloader();

  var img = new Image();
  img.onload = function() {
    hidePreloader();
  };
  img.src = $('img').attr('src');
});



// CONFIG-PRODUCT
$('.size__blok').on('click', function (e) {
  e.preventDefault();
  let currtab = $(this).index();
  $('.size__blok').removeClass('active');
  $(this).addClass('active');
});

$('.color__blok').on('click', function (e) {
  e.preventDefault();
  let currtab = $(this).index();
  $('.color__blok').removeClass('active');
  $(this).addClass('active');
});

$('.add-basket__btn').on('click', function(e) {
  if (!$('.size__blok').hasClass('active') || !$('.color__blok').hasClass('active')) {
    e.preventDefault();
  }
});

//VALIDATOR
$.validator.addMethod("regex",function (value, element, regexp){
  var regExsp = new RegExp(regexp);
  return regExsp.test(value);
},"PLease chech yuor input."
);
// form отправка 

$(document).ready(function  () {
 $('[data-submit]').on('click',function (e) {
  e.preventDefault();
  $(this).parent('form-connection').submit();
 })
 $.validator.addMethod("regex", function (value,element,regexp) {
   var regExsp = new RegExp(regexp);
   return this.optional(element) || regExsp.test(value);
 },"Please check yuor input." );
 function valEL(el) {
  el.validate({
    rules: {
      tel: {
        required: true,
        regex: '([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
   },
   name: { 
    required: true 
   },
   email: {
    required: true,
    email: true
   },
   text: {
    required: true
  }
  },
  messages: {
    tel: { 
      required: 'Введите правильный номер телефона',
      regex: 'Телефон может содержать символы + - ()'
  },
  name: {
    required: 'Поле обязательно для заполнения',
  },
  email: {
    required: 'Поле обязательно для заполнения',
    email: 'Неверный формат E-mail'
  },
  messages: { 
      required: 'Введите правильное сообщение',
  },
  text: { 
    required: 'Вы можете указать время в которое лучше позвонить',
  }
},

   submitHandler:
   function (form) {
   $('#preloader-active').fadeIn();
   var $form = $(form);
   var $formId = $(form).attr('id');
   switch ($formId) {
  case 'form-connect':
    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: $form.serialize()
    })
    .done(function (){
      console.log('fail');
    })
    .always(function () {
      console.log('Always');
      setTimeout(function () {
        $form.trigger('reset');
        $('#preloader-active').fadeIn();
      },1100);
      setTimeout(function () {
        $('#preloader-active').fadeOut();
        $('.sent-form').fadeIn();
      },1900);
    });
    break;
  }
  return false;

 }
});
}

$('.js-form-contacts').each(function () {
  valEL($(this));
});
});

$(document).ready(function() {
  let couponInput = $('.control-kypon__input');
  let successMsg = $('.control-kypon__text');
  let errorMsg = $('.control-kypon__false');
  $('form.control-kypon').submit(function(event) {
event.preventDefault();
if (couponInput.val().toUpperCase() === '20SELBY') {
  successMsg.show();
  errorMsg.hide();
} else {
  successMsg.hide();
  errorMsg.show();
}
  });
});


//кнопка обновления корзины
$('.control-kypon__basket').on('click', function() {
  // Показываем прелоадер
  $('#preloader-active').fadeIn('fast');
  // Запускаем функцию hidePreloader() через 3 секунды
  setTimeout(hidePreloader, 1500);
});
// Функция, которая скрывает прелоадер
function hidePreloader() {
  $('#preloader-active').delay(450).fadeOut('slow');
  $('body').css({
'overflow': 'visible'
  });
}


$.validator.addMethod("regex",function (value, element, regexp){
  var regExsp = new RegExp(regexp);
  return regExsp.test(value);
},"PLease chech yuor input."
);
// form отправка 

$(document).ready(function  () {
 $('[data-submit]').on('click',function (e) {
  e.preventDefault();
  $(this).parent('checkout-form').submit();
 })
 $.validator.addMethod("regex", function (value,element,regexp) {
   var regExsp = new RegExp(regexp);
   return this.optional(element) || regExsp.test(value);
 },"Please check yuor input." );
 function valEL(el) {
  el.validate({
    rules: {
      tel: {
        required: true,
        regex: '([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
   },
   name: { 
    required: true 
   },
   email: {
    required: true,
    email: true
   },
   text: {
    required: true
  }
  },
  messages: {
    tel: { 
      required: 'Введите правильный номер телефона',
      regex: 'Телефон может содержать символы + - ()'
  },
  name: {
    required: 'Поле обязательно для заполнения',
  },
  email: {
    required: 'Поле обязательно для заполнения',
    email: 'Неверный формат E-mail'
  },
  // messages: { 
  //     required: 'Введите правильное сообщение',
  // },
  text: { 
    required: 'Поле обязательно для заполнения',
  },
  gorod: { 
    required: 'Поле обязательно для заполнения',
  },
  yliha: { 
    required: 'Поле обязательно для заполнения',
  },
  dom: { 
    required: 'Поле обязательно для заполнения',
  } ,
  kvartira: { 
    required: 'Поле обязательно для заполнения',
  }
},

   submitHandler: function (form) {
   $('#preloader-active').fadeIn();
   var $form = $(form);
   var $formId = $(form).attr('id');
   switch ($formId) {
  case 'big-form':
    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: $form.serialize()
    })
    .done(function (){
      console.log('fail');
    })
    .always(function () {
      console.log('Always');
      setTimeout(function () {
        $form.trigger('reset');
        $('#preloader-active').fadeIn();
      },1100);
      setTimeout(function () {
        $('#preloader-active').fadeOut();
      },1900);
    });
    break;
  }
  return false;

 }
});
}
$('.checkout-form').each(function () {
  valEL($(this));
});
});




// $('.payment-selection__btn').on('click',function(){
//   $('.payment-selection__btn').addClass('active');
// })

const next = document.querySelector('.button-next');
const prev = document.querySelector('.button-prev');
const sliders = document.querySelectorAll('.dream-team__photo');
const dots = document.querySelectorAll('.point');
let index = 0;

const setActiveSlide = (n) => {
  sliders.forEach((slide) => {
    slide.classList.remove('active');
  });
  sliders[n].classList.add('active');
};

const setActiveDot = (n) => {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[n].classList.add('active');
};

const nextSlide = () => {
  if (index === sliders.length - 1) {
    index = 0;
    setActiveSlide(index);
  } else {
    index++;
    setActiveSlide(index);
  }
  setActiveDot(index);
};

const prevSlide = () => {
  if (index === 0) {
    index = sliders.length - 1;
    setActiveSlide(index);
  } else {
    index--;
    setActiveSlide(index);
  }
  setActiveDot(index);
};

dots.forEach((dot, indexDot) => {
  dot.addEventListener('click', () => {
    index = indexDot;
    setActiveSlide(index);
    setActiveDot(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 3500);



function redirectToSuccessPage() {
  // Получаем ссылку на форму
  const form = document.getElementById('big-form');

  // Проверяем, заполнена ли форма
  if (form.checkValidity()) {
    // Если форма заполнена, перенаправляем на другую страницу
    window.location.href = 'http://womazing9.zzz.com.ua/success.html';
  } else {
    // Если форма не заполнена, выведите сообщение об ошибке или выполните другие действия
    alert("Пожалуйста, заполните все обязательные поля формы.");
  }
}