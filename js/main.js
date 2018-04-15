$(document).ready(function () {


	var banner={//Esto es un objeto.

		padre:$('#banner'),//Propiedad padre: con esto se accede al Id banner.
		numeroSlides:$('#banner').children('.slide').length,//con esto se accede a los hijos del #banner con la clase slide 
		posicion: 1                                         //y con length nos cuenta cuantas fotos tenemos.
	}

	banner.padre.children('.slide').first().css({   //Accedo a banner padre y quero que encuentre tus hijos con la clase slide y al 
		                                           //primero le cambies el código css.La propiedad de left sea 0.
		'left': 0
	});

	var altoBanner = function(){ //Esta funcion se va a encargar de medir cuanto mide el banner para después darle una altura.
		var alto=banner.padre.children('.slide').outerHeight();//Con esto calculamos el alto de la clase slide.

		banner.padre.css({//Accedemos al elemento padre y le modificamos el css.
			'height':alto + 'px' //queremos que el alto sea igual al alto mas pixeles.
		});
	}

	altoBanner();//Con esto ejecutamos la función.

	$ (window).resize(function(){//Cuando la ventana (window) cambie de tamaño (.resize) queremos ejecutar una función.
		altoBanner(); //Esta es la variable que cacula el alto de las imágenes.

	});


//------------------------------
//-------banner
//------------------------------


      //Boton siguiente
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

		
});



