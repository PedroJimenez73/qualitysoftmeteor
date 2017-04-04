Template.Evalpro.events({
    'click #indiceClick': function (evt) {
        $('html, body').animate({
        scrollTop: $("#indice").offset().top
    	}, 1000);
  	},
	'click #indiceObjeto': function (evt) {
        $('html, body').animate({
        scrollTop: $("#objeto").offset().top
    	}, 1000);
  	},
		'click #indiceRelacion': function (evt) {
        $('html, body').animate({
        scrollTop: $("#relacion").offset().top
    	}, 1000);
  	},
	  	'click #indiceAlcance': function (evt) {
        $('html, body').animate({
        scrollTop: $("#alcance").offset().top
    	}, 1000);
  	},
	  	'click #indiceDescripcion': function (evt) {
        $('html, body').animate({
        scrollTop: $("#descripcion").offset().top
    	}, 1000);
  	},	
	  	'click #indiceResponsabilidades': function (evt) {
        $('html, body').animate({
        scrollTop: $("#responsabilidades").offset().top
    	}, 1000);
  	},
	  	'click #indiceAnexo': function (evt) {
        $('html, body').animate({
        scrollTop: $("#anexo").offset().top
    	}, 1000);
  	},
	    'click #toppage': function (evt) {
			$('html, body').animate({ scrollTop: 0 }, 5000);
	}
	
});