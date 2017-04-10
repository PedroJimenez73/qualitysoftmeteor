Template.Addveh.events({
	'click .cancel-add': function() {
    	FlowRouter.go('/vehiculos');
	},
    'submit .add-veh': function(){
        var numero = event.target.numero.value;
        var nombre = event.target.nombre.value;
        var modelo = event.target.modelo.value;
        var matricula = event.target.matricula.value;
        var anyo = event.target.anyo.value;
        var perioitv = event.target.perioitv.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('addVeh', numero, nombre, modelo, matricula, anyo, perioitv, fechamodif);

		FlowRouter.go('/vehiculos');
        

        return false;
    }

});