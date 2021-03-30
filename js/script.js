$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

jQuery(document).ready(function() {
   
    $(function(){
      $("#date").datepicker({
          minDate: 0
      });
      $("#time").timepicker()
  });
  
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });





});

$('.popup-btn').on('click',  function(event) {
  event.preventDefault();
  $('.popup').fadeIn();
$('body').addClass('stop');
$('.header').addClass('none');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
  var popup = $("#popup-dialog"); // тут указываем ID элемента
  var close = $(".popup-close");
  $('body').addClass('stop');
  if (!popup.is(e.target)// если клик был не по нашему блоку
      && popup.has(e.target).length === 0 // и не по его дочерним элементам
      || close.is(e.target)) { 
          $('body').addClass('stop');
          event.preventDefault();
          $('.popup').fadeOut();
    $('body').removeClass('stop');
    $('.header').removeClass('none');
  }
});

function slowScroll(id){
	var offset = 10;
	$('html,body').animate ({
		scrollTop: $(id).offset ().top - offset
	},1000);
	$('body').removeClass('lock');
	$('.header__burger,.header__menu').removeClass('active');
	return false;
}

jQuery(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').addClass('active');
    });
});