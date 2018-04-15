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
		
});