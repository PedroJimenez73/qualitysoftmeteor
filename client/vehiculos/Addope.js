Template.Addope.helpers({
    addoperacion: function(){
        var currentVehiculo = FlowRouter.getParam('_id');
        return Vehiculos.findOne({_id: currentVehiculo});
    }
});

Template.Addope.events({
    'click .cancel-add': function() {
    	FlowRouter.go('/vehiculos');
	},
    'submit .add-ope': function(){
        var _id = FlowRouter.getParam('_id');
        var operacion = event.target.operacion.value;
        var fecha = event.target.fecha.value;
        var importe = event.target.importe.value;
        var kms = event.target.kms.value;
        var garantia = event.target.garantia.value;
        var varios = event.target.varios.value;
		
		Meteor.call('addOperacion', _id, operacion, fecha, importe, kms, garantia, varios);

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
            
        toastr["success"]("Nuevo operación añadida");
        FlowRouter.go('/vehiculos');
        

        return false;
    }
});