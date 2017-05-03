Template.Editveh.helpers({
    editvehiculo: function(){
        var currentVehiculo = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Vehiculos.findOne({_id: new Meteor.Collection.ObjectID(currentVehiculo)});
    }
});

Template.Editveh.events({
    'submit .edit-veh': function(event){
        var _id = FlowRouter.getParam('_id');
        var numero = event.target.numero.value;
        var nombre = event.target.nombre.value;
        var modelo = event.target.modelo.value;
        var matricula = event.target.matricula.value;
        var anyo = event.target.anyo.value;
        var perioitv = event.target.perioitv.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('editVeh', _id, numero, nombre, modelo, matricula, anyo, perioitv, fechamodif);


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