Template.Addmatriz.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/matrices');
	},
    'submit .add-matriz': function(){
        var proceso = event.target.proceso.value;
        var responsable = event.target.responsable.value;
        var causacambio = event.target.causacambio.value;
        var riesgo = event.target.riesgo.value;
        var oportunidad = event.target.oportunidad.value;
        var controlfrecuencia = event.target.controlfrecuencia.value;
		var impacto = event.target.impacto.value;
		var probabilidad = event.target.probabilidad.value;
		var ponderacion = event.target.ponderacion.value;
		var accion = event.target.accion.value;

		Meteor.call('addMatriz', proceso, responsable, causacambio, riesgo, oportunidad, controlfrecuencia, impacto, probabilidad, ponderacion, accion);

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
            
        toastr["success"]("Nuevo proceso añadido");
        FlowRouter.go('/matrices');
        

        return false;
    }

});