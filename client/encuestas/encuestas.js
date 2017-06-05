Template.Encuestas.helpers({
    encuestas: function(){
        return Encuestas.find();
    }
});


Meteor.subscribe('encuestas');

Template.Encuestas.events({
	'click .envmasivo': function() {

        var encuestas = Encuestas.find();
        encuestas.forEach(function(encuesta){
            var cliente = encuesta.cliente;
            var currentEnc = encuesta._id;
            var urlEnc = 'https://www.qualitysoft.es/resenc/'+currentEnc;
            console.log(cliente);
            console.log(urlEnc);
		    Meteor.call('sendMailEnc', cliente, urlEnc);

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
            
        toastr["success"]("Encuestas Enviadas a Cliente");
        FlowRouter.go('/encuestas');
        

        return false;
        })

    }
});

