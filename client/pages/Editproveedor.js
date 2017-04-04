Template.Editproveedor.helpers({
    editproveedor: function(){
        var currentProveedor = FlowRouter.getParam('_id');
        return Proveedores.findOne({_id: currentProveedor});
    },
    seleccionado: function(key){
      var currentProveedorId = FlowRouter.getParam('_id');
      var currentProveedor = Proveedores.findOne({_id: currentProveedorId});
      return key == currentProveedor.eval ? 'selected' : '';
   }
});

Template.Editproveedor.events({
    'submit .edit-proveedor': function(){
        var _id = FlowRouter.getParam('_id');
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

		Meteor.call('editProveedor', _id, nombre, servicio, cif, direccion, telefono, persona, mail, pago, nc, eval, fechamodif);


        toastr.success('Modicaciones guardadas!')
        FlowRouter.go('/proveedores');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/proveedores');
	},
    'click #deleteProveedor': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeProveedor', _id);
        FlowRouter.go('/proveedores');   
        return false;

    }

});