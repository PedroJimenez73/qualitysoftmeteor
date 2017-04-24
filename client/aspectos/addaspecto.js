
Template.Addaspecto.events({
	'click .cancel-add': function() {
    	FlowRouter.go('/aspectos');
	},
    'submit .add-aspecto': function(){
        var actividad = event.target.actividad.value;
        var aspecto = event.target.aspecto.value;
        var cuno = event.target.cuno.value;
        var cdos = event.target.cdos.value;
        var ctres = event.target.ctres.value;
        var ccuatro = event.target.ccuatro.value;
		var significancia = event.target.significancia.value;

		Meteor.call('addAspecto', actividad, aspecto, cuno, cdos, ctres, ccuatro, significancia);

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
            
        toastr["success"]("Nuevo Aspecto añadido");
        FlowRouter.go('/aspectos');
        

        return false;
    }

});