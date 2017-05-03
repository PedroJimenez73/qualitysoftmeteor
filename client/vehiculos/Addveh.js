Template.Addveh.events({
	'click .cancel-add': function() {
    	FlowRouter.go('/vehiculos');
	},
    'submit .add-veh': function(event){
        var numero = event.target.numero.value;
        var nombre = event.target.nombre.value;
        var modelo = event.target.modelo.value;
        var matricula = event.target.matricula.value;
        var anyo = event.target.anyo.value;
        var perioitv = event.target.perioitv.value;
		var fechamodif = event.target.fechamodif.value;

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
            
        toastr["success"]("Nuevo vehículo añadido");
		Meteor.call('addVeh', numero, nombre, modelo, matricula, anyo, perioitv, fechamodif);


		FlowRouter.go('/vehiculos');
        

        return false;
    }

});