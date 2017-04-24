Template.Addplan.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/planes');
	},
    'submit .add-plan': function(){
        var fecha = event.target.fecha.value;
        var alcance = event.target.alcance.value;
        var objeto = event.target.objeto.value;
        var responsable = event.target.responsable.value;
        var documentacion = event.target.documentacion.value;
		var sistematica = event.target.sistematica.value;

		Meteor.call('addPlan', fecha, alcance, objeto, responsable, documentacion, sistematica);

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
            
        toastr["success"]("Nuevo plan añadido");
        FlowRouter.go('/planes');
        

        return false;
    }

});