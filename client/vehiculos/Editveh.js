Template.Editveh.helpers({
    editvehiculo: function(){
        var currentVehiculo = FlowRouter.getParam('_id');
        return Vehiculos.findOne({_id: currentVehiculo});
    }
});

Template.Editveh.events({
    'submit .edit-veh': function(){
        var _id = FlowRouter.getParam('_id');
        var numero = event.target.numero.value;
        var nombre = event.target.nombre.value;
        var modelo = event.target.modelo.value;
        var matricula = event.target.matricula.value;
        var anyo = event.target.anyo.value;
        var perioitv = event.target.perioitv.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('editVeh', _id, numero, nombre, modelo, matricula, anyo, perioitv, fechamodif);


        toastr.success('Modicaciones guardadas!')
        FlowRouter.go('/vehiculos');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/vehiculos');
	},
    'click #deleteVehiculo': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeVehiculo', _id);
        FlowRouter.go('/vehiculos');   
        return false;

    }

});