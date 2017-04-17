Template.Addcurso.events({
	'click .cancel-add': function() {
    	FlowRouter.go('/planesform');
	},
    'submit .add-curso': function(){
        var titulo = event.target.titulo.value;
        var organizador = event.target.organizador.value;
        var horas = event.target.horas.value;
        var asistentes = event.target.asistentes.value;
        var fechas = event.target.fechas.value;
        var observaciones = event.target.observaciones.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('addCurso', titulo, organizador, horas, asistentes, fechas, observaciones, fechamodif);

		toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "3000",
                "extendedTimeOut": "500",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
                };
            
        toastr["success"]("Nuevo curso añadido");
        FlowRouter.go('/planesform');
        
        return false;
    }

});