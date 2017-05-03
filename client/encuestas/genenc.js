Template.Genenc.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/encuestas');
	},
    'submit .gen-enc': function(event){
        var cliente = event.target.cliente.value;
		var fecha = event.target.fecha.value;

		Meteor.call('genEnc', cliente, fecha);

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
            
        toastr["success"]("Nuevo Encuesta Generada");
        FlowRouter.go('/encuestas');
        

        return false;
    }

});

Template.Genenc.helpers({
    clientes: function(){
        return Clientes.find();
    },
    nombre: function(){
        return this.nombre;
    },
    mail: function() {
        return this.mail;
    }
});