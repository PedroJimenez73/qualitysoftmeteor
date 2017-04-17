
Template.Addcliente.events({
	'click .cancel-add': function() {
    	FlowRouter.go('/clientes');
	},
    'submit .add-cliente': function(){
        var nombre = event.target.nombre.value;
        var cif = event.target.cif.value;
        var direccion = event.target.direccion.value;
        var telefono = event.target.telefono.value;
        var persona = event.target.persona.value;
        var mail = event.target.mail.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('addCliente', nombre, cif, direccion, telefono, persona, mail, fechamodif);

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
            
        toastr["success"]("Nuevo cliente añadido");
        FlowRouter.go('/clientes');
        

        return false;
    }

});