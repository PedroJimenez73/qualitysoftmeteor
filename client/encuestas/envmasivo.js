
Template.Envmasivo.helpers({
    encuestas: function(){
        return Encuestas.find();
    }
});


Meteor.subscribe('encuestas');

Template.Envmasivo.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/encuestas');
	},
    'submit .env-mas': function(event){
        var array_clientes = $('#clientes').val();
        console.log(array_clientes);
		
		Meteor.call('sendMailEnc', array_clientes);

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
            
        toastr["success"]("Encuesta Enviada a Cliente");
        FlowRouter.go('/encuestas');
        

        return false;
    }

});