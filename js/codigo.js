	$(document).ready(function(){
		//animación flecha para bajar

	/*$('.flecha').on('click', function(){
		$('.contenedores').animate({
			scrollTop:'700%'
		},1500,'easeInOutQuart');

		/*}, function () {
			$('body').css({overflowX: 'scroll', overflowY: 'hidden'});*/
	

		//desplazamiento horizontal con botones
		$('.menu1 a').on('click', function(e){
			e.preventDefault();
			var atributo = $(this).attr('href');
			$('body, html').stop().animate({
				scrollLeft: $(atributo).offset().left
			}, 1500, 'easeInOutQuart');
		});

		var triangulo = '<div class="triangulo">';

		$('.menu1 ul li a').on({
		mouseenter: function(){
			//$('.triangulo').fadeIn();
			$(this).append(triangulo);
			$('.triangulo').fadeIn();
		}
		,
		mouseleave: function(){
			$('.menu1 ul li .triangulo').fadeOut();
			$(this).find('.triangulo').remove();
		}
	});
		$('.flecha').on('click', function(e){
			e.preventDefault();
			var atributoUno = $(this).attr('href');
			$('body, html').stop().animate({
				scrollTop: $(atributoUno).offset().top
			}, 1500, 'easeInOutQuart');
		});
		$('.flecha2').on('click',function(){
			$('body, html').animate({
				scrollTop:'0px'
			},1500,'easeInOutQuart');
		});
		var altoCaja = $('.uno').offset().top
		$(window).on('scroll',function(){
			if ($(window).scrollTop() > altoCaja-100) {
				$('.menu1').css('display','block');
				$("body").css('overflow','scroll');
				$("body").css('overflow-y','hidden');

			}else{
				$('.menu1').css('display','none');
				$("body").css('overflow-x','hidden');
			}
		});
		$('.imagen').click(function(){
			$(this).modal({fadeDuration: 150});
		})
		$('.imagenJuego').click(function(){
			$(this).modal();
		}) 
		
});

