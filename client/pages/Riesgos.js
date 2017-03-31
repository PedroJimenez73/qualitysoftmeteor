Template.Riesgos.events({
	'click .list-proveedores': function() {
    	FlowRouter.go('/proveedores');
	},
    'click #indiceClick2': function (evt) {
        $('html, body').animate({
        scrollTop: $("#indice2").offset().top
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
	  	'click #indiceDefiniciones': function (evt) {
        $('html, body').animate({
        scrollTop: $("#definiciones").offset().top
    	}, 1000);
  	},	'click #indiceDesarrollo': function (evt) {
        $('html, body').animate({
        scrollTop: $("#desarrollo").offset().top
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