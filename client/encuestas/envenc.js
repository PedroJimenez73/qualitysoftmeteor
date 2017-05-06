Template.Envenc.helpers({
    envenc: function(){
        var currentEnc = FlowRouter.getParam('_id');
        return Encuestas.findOne({_id: new Meteor.Collection.ObjectID(currentEnc)});
    }
});

Template.Envenc.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/encuestas');
	},
    'submit .env-enc': function(event){
        var cliente = event.target.cliente.value;
        var currentEnc = FlowRouter.getParam('_id');
        var urlEnc = 'http://qualitysoft.firstbook.es/resenc/'+currentEnc;
		
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
            
        toastr["success"]("Encuesta Enviada a Cliente");
        FlowRouter.go('/encuestas');
        

        return false;
    }

});

