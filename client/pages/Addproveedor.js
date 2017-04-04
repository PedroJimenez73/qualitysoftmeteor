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

		FlowRouter.go('/proveedores');
        

        return false;
    }

});