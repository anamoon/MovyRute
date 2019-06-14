	$(document).ready(function(){

		$('body, html').animate({
				scrollTop:'0px',
				scrollLeft:'0px'
			},1500,'easeInOutQuart');
		
		var secciones={
			uno: $('#sec1').offset().left,
			dos: $('#sec2').offset().left,
			tres: $('#sec3').offset().left,
			cuatro: $('#sec4').offset().left,
			cinco: $('#sec5').offset().left,
			seis: $('#sec6').offset().left,
			siete: $('#sec7').offset().left,
			ocho: $('#sec8').offset().left,
			nueve: $('#sec9').offset().left,
			diez: $('#sec10').offset().left,
			once: $('#sec11').offset().left,
		}



		//animación flecha para bajar

	/*$('.flecha').on('click', function(){
		$('.contenedores').animate({
			scrollTop:'700%'
		},1500,'easeInOutQuart');

		/*}, function () {
			$('body').css({overflowX: 'scroll', overflowY: 'hidden'});*/
		$('.boton1 .triangulo').addClass('activo');
		$(window).scroll(function(){
			if ($(window).scrollLeft()>=secciones.dos-300) {

				$('.triangulo').removeClass('activo');
				$('.boton2 .triangulo').addClass('activo');
				
			}else {
				$('.triangulo').removeClass('activo');
				$('.boton1 .triangulo').addClass('activo');
			}

			if($(window).scrollLeft()>=secciones.tres-300){
				$('.triangulo').removeClass('activo');
				$('.boton3 .triangulo').addClass('activo');
			}
			if($(window).scrollLeft()>=secciones.cuatro-300){
				$('.triangulo').removeClass('activo');
				$('.boton4 .triangulo').addClass('activo');
			}
			if($(window).scrollLeft()>=secciones.cinco-300){
				$('.triangulo').removeClass('activo');
				$('.boton5 .triangulo').addClass('activo');
			}
			if($(window).scrollLeft()>=secciones.seis-300){
				$('.triangulo').removeClass('activo');
				$('.boton6 .triangulo').addClass('activo');
			}
			if($(window).scrollLeft()>=secciones.siete-300){
				$('.triangulo').removeClass('activo');
				$('.boton7 .triangulo').addClass('activo');
			}
			if($(window).scrollLeft()>=secciones.ocho-300){
				$('.triangulo').removeClass('activo');
				$('.boton8 .triangulo').addClass('activo');
			}
			if($(window).scrollLeft()>=secciones.nueve-300){
				$('.triangulo').removeClass('activo');
				$('.boton9 .triangulo').addClass('activo');
			}
			if($(window).scrollLeft()>=secciones.diez-300){
				$('.triangulo').removeClass('activo');
				$('.boton10 .triangulo').addClass('activo');
			}
			if($(window).scrollLeft()>=secciones.once-300){
				$('.triangulo').removeClass('activo');
				$('.boton11 .triangulo').addClass('activo');
			}
			
		})
		
		//desplazamiento horizontal con botones
		$('.menu1 a').on('click', function(e){
			e.preventDefault();
			var atributo = $(this).attr('href');
			$('body, html').stop().animate({
				scrollLeft: $(atributo).offset().left
				

			}, 1500, 'easeInOutQuart', function(){
				$("body").css('overflow-x','hidden');
			})
		});

		

		// $('.menu1 ul li a').on({
		// mouseenter: function(){
		// 	//$('.triangulo').fadeIn();
		// 	$(this).append(triangulo);
		// 	$('.triangulo').fadeIn();
		// }
		// ,
		// mouseleave: function(){
		// 	$('.menu1 ul li .triangulo').fadeOut();
		// 	$(this).find('.triangulo').remove();
		// }
		// });
		/*$('.menu1 ul li a').click (function(){
			//$('.triangulo').fadeIn();
			$(this).append(triangulo);
			$('.triangulo').toggle();
		});*/

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
		$('.principal').click(function(){
			$(this).modal()
		})


		var miAnimacion = document.getElementById("ruta");


		$('.boton2').click(function(){
			miAnimacion.play();
		})
		$('.pausar').click(function(){
			miAnimacion.pause();	
		})
		$('.boton1').click(function(){
			miAnimacion.pause();
		})
		$('.boton3').click(function(){
			miAnimacion.pause();
		})
		$('.boton4').click(function(){
			miAnimacion.pause();
		})
		$('.boton5').click(function(){
			miAnimacion.pause();
		})
		$('.boton6').click(function(){
			miAnimacion.pause();
		})
		$('.boton7').click(function(){
			miAnimacion.pause();
		})
		$('.boton8').click(function(){
			miAnimacion.pause();
		})
		$('.boton9').click(function(){
			miAnimacion.pause();
		})
		$('.boton10').click(function(){
			miAnimacion.pause();
		})
		$('.boton11').click(function(){
			miAnimacion.pause();
		})
		$('.flecha2').click(function(){
			miAnimacion.pause();
		})
		$('.continuar').click(function(){
			miAnimacion.play();
		})





		var miAnimacionDos = document.getElementById("pista");
		$('.boton5').click(function(){
			miAnimacionDos.play();
		})
		$('.pausar_dos').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton1').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton2').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton3').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton4').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton6').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton7').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton8').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton9').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton10').click(function(){
			miAnimacionDos.pause();
		})
		$('.boton11').click(function(){
			miAnimacionDos.pause();
		})
		$('.flecha2').click(function(){
			miAnimacionDos.pause();
		})
		$('.continuar_dos').click(function(){
			miAnimacionDos.play();
		})


		var miAnimacionTres = document.getElementById("montana");
		$('.boton8').click(function(){
			miAnimacionTres.play();
		})
		$('.pausar_tres').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton1').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton2').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton3').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton4').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton5').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton6').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton7').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton9').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton10').click(function(){
			miAnimacionTres.pause();
		})
		$('.boton11').click(function(){
			miAnimacionTres.pause();
		})
		$('.flecha2').click(function(){
			miAnimacionTres.pause();
		})
		$('.continuar_tres').click(function(){
			miAnimacionTres.play();
		})


		var miAnimacionCuatro = document.getElementById("bmx");
		$('.boton10').click(function(){
			miAnimacionCuatro.play();
		})
		$('.pausar_cuatro').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton1').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton2').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton3').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton4').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton5').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton6').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton7').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton8').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton9').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.boton11').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.flecha2').click(function(){
			miAnimacionCuatro.pause();
		})
		$('.continuar_cuatro').click(function(){
			miAnimacionCuatro.play();
		})


		/*var animacionPrincipal = document.getElementById("principal");
		$('.vi').click(function(){
			animacionPrincipal.play();
		})
		$('.a.close-modal').click(function(){
			animacionPrincipal.pause();
		})*/
		/*function play(){
			if(miAnimacion.paused){
				miAnimacion.play();
			}
			else{
				miAnimacion.pause();
			}
		}*/

		/*$(.boton2).on('click', function(){
			if (miAnimacion.paused) {
				miAnimacion.play();

			}
			else{
				miAnimacion.pause();
			}
		})	*/	
		
});


