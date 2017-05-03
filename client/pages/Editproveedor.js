Template.Editproveedor.helpers({
    editproveedor: function(){
        var currentProveedor = FlowRouter.getParam('_id');
        return Proves.findOne({_id: new Meteor.Collection.ObjectID(currentProveedor)});
    },
    seleccionado: function(key){
      var currentProveedorId = FlowRouter.getParam('_id');
      var currentProveedor = Proves.findOne({_id: new Meteor.Collection.ObjectID(currentProveedorId)});
      return key == currentProveedor.eval ? 'selected' : '';
      
   }
   
});

Template.Editproveedor.events({
    'submit .edit-proveedor': function(event){
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
            
        toastr["success"]("Modificaciones guardadas");
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