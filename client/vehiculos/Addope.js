Template.Addope.helpers({
    addoperacion: function(){
        var currentVehiculo = FlowRouter.getParam('_id');
        return Vehiculos.findOne({_id: currentVehiculo});
    }
});

Template.Addope.events({
    'submit .add-ope': function(){
        var _id = FlowRouter.getParam('_id');
        var operacion = event.target.operacion.value;
        var fecha = event.target.fecha.value;
        var importe = event.target.importe.value;
        var kms = event.target.kms.value;
        var garantia = event.target.garantia.value;
        var varios = event.target.varios.value;
		
		Meteor.call('addOperacion', _id, operacion, fecha, importe, kms, garantia, varios);

		FlowRouter.go('/vehiculos');
        

        return false;
    }
});