$(document).ready(function () {


	var banner={//Esto es un objeto.

		padre:$('#banner'),//Propiedad padre: con esto se accede al Id banner.
		numeroSlides:$('#banner').children('.slide').length,//con esto se accede a los hijos del #banner con la clase slide 
		posicion: 1                                         //y con length nos cuenta cuantas fotos tenemos.
	}
	var info={//Esto es un objeto.

		padre:$('#info'),//Propiedad padre: con esto se accede al Id banner.
		numeroSlides:$('#info').children('.slide').length,//con esto se accede a los hijos del #banner con la clase slide 
		posicion: 1                                         //y con length nos cuenta cuantas fotos tenemos.
	}

	banner.padre.children('.slide').first().css({   //Accedo a banner padre y quero que encuentre tus hijos con la clase slide y al 
		                                           //primero le cambies el código css.La propiedad de left sea 0.
		'left': 0
	});
	info.padre.children('.slide').first().css({   //Accedo a banner padre y quero que encuentre tus hijos con la clase slide y al 
		                                           //primero le cambies el código css.La propiedad de left sea 0.
		'left': 0
	});

	var altoBanner = function(){ //Esta funcion se va a encargar de medir cuanto mide el banner para después darle una altura.
		var alto=banner.padre.children('.slide').outerHeight();//Con esto calculamos el alto de la clase slide.

		banner.padre.css({//Accedemos al elemento padre y le modificamos el css.
			'height':alto + 'px' //queremos que el alto sea igual al alto mas pixeles.
		});
	}
	var altoInfo = function(){ //Esta funcion se va a encargar de medir cuanto mide el banner para después darle una altura.
		var alto=info.padre.children('.activo').outerHeight();//Con esto calculamos el alto de la clase slide.

		info.padre.animate({//Accedemos al elemento padre y le modificamos el css.
			'height':alto + 'px' //queremos que el alto sea igual al alto mas pixeles.
		});
	}

	var altoContenedor = function(){
		var altoVentana = $(window).height();

		if (altoVentana <= $('#contenedor').outerHeight() + 200){
			$('#contenedor').css({
				'height': ''
			});

		} else{
			$('#contenedor').css({
				'height': altoVentana + 'px'
			});
		} 
	};

	altoBanner();//Con esto ejecutamos la función.
	altoInfo();
	altoContenedor();

	$ (window).resize(function(){//Cuando la ventana (window) cambie de tamaño (.resize) queremos ejecutar una función.
		altoBanner(); //Esta es la variable que cacula el alto de las imágenes.
		altoInfo();
		altoContenedor();
	});
	$('#info').children('.slide').each(function(){//Por cada uno queremos ejecutar una función.
		$('#botones').append('<span>');

	});
	$('#botones').children('span').first().addClass('active');//Accedo al Id botones y a todos los hijos
	//span y al primero le añadimos la clase active.


//------------------------------
//-------banner
//------------------------------


      //Botón siguiente
    $('#banner-siguiente').on('click', function(e){//Queremos acceder al Id banner-siguiente y cuando alguien te de un click ejecutamos una función.
    	e.preventDefault();//Con esto evitamos que al pulsar en la flecha salga el simbolo # en la barra de navegación.

    	if(banner.posicion < banner.numeroSlides) {//Si la posición del banner es menor que el numero de slides ejecuta el codigo.

    		banner.padre.children().not('.activo').css({//todos los que no tengan la clase activo quiero que modifiques su codigo css.
    			'left':'100%'
    		});

    		$('#banner .activo').removeClass('activo').next().addClass('activo').animate({//Queremos acceder a banner con la clase .activo después quitamos
    	     //la clase ('activo') sin punto y movernos al siguiente elemento .next() al que le agregamos la clase ('activo')
    			'left':'0' //Y le decimos con .animate que la desplace a la izquierda 0.

    	    });

    	    $('#banner.activo').next().animate({
    	    	'left':'-100%'
    	    });

    	    banner.posicion = banner.posicion + 1;

    	} 

    	else {

    		$('#banner .activo').animate({
    			'left': '-100%'
    		});

    		banner.padre.children().not('.activo').css({//todos los que no tengan la clase activo quiero que modifiques su codigo css para que se desplacen a la izquierda.
    			'left':'100%'
    		});


    		$('#banner .activo').removeClass('activo');//Si la posición no es menor que el numero de slides entonces
    		                                           //accede a la clase activo y quita la clase activo.
    		banner.padre.children('.slide').first().addClass('activo').animate({//Accede a banner.padre y a los hijos que tengan la clase .slide y acceder al primero
    																			//y añade la clase activo.
    			'left':0																	
    		});
    																   
    		banner.posicion=1;
    	}

    }); 

      //Botón anterior
    $('#banner-anterior').on('click', function(e){
    	e.preventDefault();//Esto es para evitar que salga el caracter #.

    	if(banner.posicion > 1){

    		banner.padre.children().not('.activo').css({
    		   'left':'-100%'
    	    });
    	    $('#banner .activo').animate({
    		   'left':'100%'
    	    });
    	    $('#banner .activo').removeClass('activo').prev().addClass('activo').animate({
    	    	'left':0
    	    });

    	    banner.posicion=banner.posicion -1;

    	} else {
    		banner.padre.children().not('.activo').css({
    			'left':'-100%'
    		});
    		$('#banner .activo').animate({
    			'left':'100%'
    		});
    		$('#banner .activo').removeClass('activo');
    		banner.padre.children().last().addClass('activo').animate({
    			'left':0
    		});
    		banner.posicion=banner.numeroSlides;
    	}

    	
 
    });

//------------------------------
//-------info
//------------------------------


//Botón siguiente
$('#info-siguiente').on('click', function(e){//Queremos acceder al Id info-siguiente y cuando alguien te de un click ejecutamos una función.
    	e.preventDefault();//Con esto evitamos que al pulsar en la flecha salga el simbolo # en la barra de navegación.

    	if(info.posicion < info.numeroSlides) {//Si la posición del info es menor que el numero de slides ejecuta el codigo.

    		info.padre.children().not('.activo').css({//todos los que no tengan la clase activo quiero que modifiques su codigo css.
    			'left':'100%'
    		});

    		$('#info .activo').removeClass('activo').next().addClass('activo').animate({//Queremos acceder a info con la clase .activo después quitamos
    	     //la clase ('activo') sin punto y movernos al siguiente elemento .next() al que le agregamos la clase ('activo')
    			'left':'0' //Y le decimos con .animate que la desplace a la izquierda 0.

    	    });

    	    $('#info.activo').next().animate({
    	    	'left':'-100%'
    	    });

    	    $('#botones').children('.active').removeClass('active').next().addClass('active');

    	    info.posicion = info.posicion + 1;

    	} 

    	else {

    		$('#info .activo').animate({
    			'left': '-100%'
    		});

    		info.padre.children().not('.activo').css({//todos los que no tengan la clase activo quiero que modifiques su codigo css para que se desplacen a la izquierda.
    			'left':'100%'
    		});


    		$('#info .activo').removeClass('activo');//Si la posición no es menor que el numero de slides entonces
    		                                           //accede a la clase activo y quita la clase activo.
    		info.padre.children('.slide').first().addClass('activo').animate({//Accede a info.padre y a los hijos que tengan la clase .slide y acceder al primero
    																			//y añade la clase activo.
    			'left':0																	
    		});

    		$('#botones').children('.active').removeClass('active');
    		$('#botones').children('span').first().addClass('active');

    		//Reseteamos la posición 1.														   
    		info.posicion=1;
    	}
    	altoInfo();

    }); 

      //Botón anterior
    $('#info-anterior').on('click', function(e){
    	e.preventDefault();//Esto es para evitar que salga el caracter #.

    	if(info.posicion > 1){

    		info.padre.children().not('.activo').css({
    		   'left':'-100%'
    	    });
    	    $('#info .activo').animate({
    		   'left':'100%'
    	    });
    	    $('#info .activo').removeClass('activo').prev().addClass('activo').animate({
    	    	'left':0
    	    });

    	    $('#botones').children('.active').removeClass('active').prev().addClass('active');

    	    info.posicion=info.posicion -1;

    	} else {
    		info.padre.children().not('.activo').css({
    			'left':'-100%'
    		});
    		$('#info .activo').animate({
    			'left':'100%'
    		});
    		$('#info .activo').removeClass('activo');
    		info.padre.children().last().addClass('activo').animate({
    			'left':0
    		});

    		$('#botones').children('.active').removeClass('active');
    		$('#botones').children('span').last().addClass('active');

    		info.posicion=info.numeroSlides;
    	}
    	altoInfo();

    	
 
    });

		
});







//---------------------Código hecho por el autor---------------------

/*
$(document).ready(function(){

	// Objeto del Banner
	var banner = {
		padre: $('#banner'),
		numeroSlides: $('#banner').children('.slide').length,
		posicion: 1
	};

	// Objeto del Slider de Info
	var info = {
		padre: $('#info'),
		numeroSlides: $('#info').children('.slide').length,
		posicion: 1
	}

	// Establecemos que el primer slide aparecera desplazado
	banner.padre.children('.slide').first().css({
		'left': 0
	});

	// Establecemos que el primer slide aparecera desplazado
	info.padre.children('.slide').first().css({
		'left': 0
	});	
	
	// Funcion para calcular el alto que tendran los contenedores padre
	var altoBanner = function(){
		var alto = banner.padre.children('.slide').outerHeight();
		banner.padre.css({
			'height': alto + 'px'
		});
	}

	var altoInfo = function(){
		var alto = info.padre.children('.active').outerHeight();
		info.padre.animate({
			'height': alto + 'px'
		});
	}

	// Establecemos que el #contenedor tenga el 100% del alto de la pagina. 
	// Para despues centrarlo verticalente con flexbox.
	var altoContenedor = function(){
		var altoVentana = $(window).height();

		if (altoVentana <= $('.contenedor').outerHeight() + 200) {
			$('#contenedor').css({'height': ''});
		} else {
			$('#contenedor').css({'height': altoVentana + 'px'});
		}
	}

	// Ejecutamos las funciones para calcular los altos.
	altoBanner();
	altoContenedor();
	altoInfo();

	// Si cambiamos el tamaño de la pantalla se
	// ejecuta esta funcion para saber el nuevo
	// tamaño del elemento padre
	$(window).resize(function(){
		altoBanner();
		altoContenedor();
	});

	// Agregamos un puntito por cada slide que tengamos
	$('#info').children('.slide').each(function(){
		$('#botones').append('<span>');
	});

	// Declaramos que el primer elemento inicie con su clase active
	$('#botones').children('span').first().addClass('active');

// ---------------------------------------
// ----- Banner
// ---------------------------------------

	// Boton Siguiente

	$('#banner-next').on('click', function(e){
		e.preventDefault();

		if (banner.posicion < banner.numeroSlides){
			// Nos aseguramos de que las demas slides empiecen desde la derecha.
			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			// Quitamos la clase active y se la ponemos al siguiente elemento.Y lo animamos
			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left': 0
			});

			// Animamos el slide anterior para que se deslaza hacia la izquierda
			$('#banner .active').prev().animate({
				'left': '-100%'
			});

			banner.posicion = banner.posicion + 1;
		} else {
			// Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
			$('#banner .active').animate({
				'left': '-100%'
			});

			// Seleccionamos todos los slides que no tengan la clase .active
			// y los posicionamos a la derecha
			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			// Eliminamos la clase active y se la ponemos al primer elemento.
			// Despues lo animamos.
			$('#banner .active').removeClass('active');
			banner.padre.children().first().addClass('active').animate({
				'left': 0
			});

			// Reseteamos la posicion a 1
			banner.posicion = 1;
		}
	});

	// Boton Anterior
		$('#banner-prev').on('click', function(e){
			e.preventDefault();

			if (banner.posicion > 1){

				// Nos asegramos de todos los elementos hijos (que no sean) .active
				// se posicionen a la izquierda
				banner.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Deslpazamos el slide activo de izquierda a derecha
				$('#banner .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al slide anterior.
				// Y lo animamos
				$('#banner .active').removeClass('active').prev().addClass('active').animate({
					'left': 0
				});

				// Reiniciamos la posicion a 1
				banner.posicion = banner.posicion - 1;
			} else {

				// Nos aseguramos de que los slides empiecen a la izquierda
				banner.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Animamos el slide activo hacia la derecha
				$('#banner .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al primer elemento.
				// Despues lo animamos.
				$('#banner .active').removeClass('active');
				banner.padre.children().last().addClass('active').animate({
					'left': 0
				});

				// Reseteamos la posicion a 1
				banner.posicion = banner.numeroSlides;
			}

		});

// ---------------------------------------
// ----- Slider Info
// ---------------------------------------
// Boton Siguiente

	$('#info-next').on('click', function(e){
		e.preventDefault();

		if (info.posicion < info.numeroSlides){
			// Nos aseguramos de que las demas slides empiecen desde la derecha.
			info.padre.children().not('.active').css({
				'left': '100%'
			});

			// Quitamos la clase active y se la ponemos al siguiente elemento.Y lo animamos
			$('#info .active').removeClass('active').next().addClass('active').animate({
				'left': 0
			});

			// Animamos el slide anterior para que se deslaza hacia la izquierda
			$('#info .active').prev().animate({
				'left': '-100%'
			});

			// Eliminamos la clase active y se la ponemos al siguiente elemento
			$('.botones').children('.active').removeClass('active').next().addClass('active');
				
			// Incrementamos la posicion en 1
			info.posicion = info.posicion + 1;
		} else {
			// Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
			$('#info .active').animate({
				'left': '-100%'
			});

			// Seleccionamos todos los slides que no tengan la clase .active
			// y los posicionamos a la derecha
			info.padre.children().not('.active').css({
				'left': '100%'
			});

			// Eliminamos la clase active y se la ponemos al primer elemento
			// Despues lo animamos.
			$('#info .active').removeClass('active');
			info.padre.children().first().addClass('active').animate({
				'left': 0
			});

			// Eliminamos la clase active y se la ponemos al primer elemento
			$('.botones').children('.active').removeClass('active');
			$('.botones').children('span').first().addClass('active');

			// Reseteamos la posicion a 1
			info.posicion = 1;
		}

		altoInfo();
	});

	// Boton Anterior
		$('#info-prev').on('click', function(e){
			e.preventDefault();

			if (info.posicion > 1){

				// Nos asegramos de todos los elementos hijos (que no sean) .active
				// se posicionen a la izquierda
				info.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Deslpazamos el slide activo de izquierda a derecha
				$('#info .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al slide anterior.
				// Y lo animamos
				$('#info .active').removeClass('active').prev().addClass('active').animate({
					'left': 0
				});

				$('#botones').children('.active').removeClass('active').prev().addClass('active');

				// Reiniciamos la posicion a 1
				info.posicion = info.posicion - 1;
			} else {

				// Nos aseguramos de que los slides empiecen a la izquierda
				info.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Animamos el slide activo hacia la derecha
				$('#info .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al primer elemento.
				// Despues lo animamos.
				$('#info .active').removeClass('active');
				info.padre.children().last().addClass('active').animate({
					'left': 0
				});

				$('#botones').children('.active').removeClass('active');
				$('#botones').children('span').last().addClass('active');

				// Reseteamos la posicion a 1
				info.posicion = info.numeroSlides;
			}

			altoInfo();
		});
});
*/



