Template.Editcliente.helpers({
    editcliente: function(){
        var currentCliente = FlowRouter.getParam('_id');
        return Clientes.findOne({_id: new Meteor.Collection.ObjectID(currentCliente)});
    }
   
});

Template.Editcliente.events({
    'submit .edit-cliente': function(event){
        var _id = FlowRouter.getParam('_id');
        var nombre = event.target.nombre.value;
        var cif = event.target.cif.value;
        var direccion = event.target.direccion.value;
        var telefono = event.target.telefono.value;
        var persona = event.target.persona.value;
        var mail = event.target.mail.value;

		Meteor.call('editCliente', _id, nombre, cif, direccion, telefono, persona, mail);


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
        FlowRouter.go('/clientes');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/clientes');
	},
    'click #deleteCliente': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeCliente', _id);
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
            
        toastr["success"]("Cliente eliminado")
        FlowRouter.go('/clientes');   
        return false;

    }

});