Template.Addproveedor.events({
	'click .cancel-add': function() {
    	FlowRouter.go('/proveedores');
	},
    'submit .add-proveedor': function(){
        var nombre = event.target.nombre.value;
        var servicio = event.target.servicio.value;
        var cif = event.target.cif.value;
        var direccion = event.target.direccion.value;
        var telefono = event.target.telefono.value;
        var persona = event.target.persona.value;
        var mail = event.target.mail.value;
		var pago = event.target.pago.value;
		var nc = event.target.nc.value;
		var eval = event.target.eval.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('addProveedor', nombre, servicio, cif, direccion, telefono, persona, mail, pago, nc, eval, fechamodif);

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
            
        toastr["success"]("Nuevo proveedor añadido");
        FlowRouter.go('/proveedores');
        

        return false;
    }

});