Template.Addriesgo.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/riesgos');
	},
    'submit .add-riesgo': function(){
        var proceso = event.target.proceso.value;
        var responsable = event.target.responsable.value;
        var riesgo = event.target.riesgo.value;
        var oportunidad = event.target.oportunidad.value;
		var control = event.target.control.value;

		Meteor.call('addRiesgo', proceso, responsable, riesgo, oportunidad, control);

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
            
        toastr["success"]("Nuevo Riesgo/Oportunidad añadida");
        FlowRouter.go('/riesgos');
        

        return false;
    }

});

Template.Addriesgo.helpers({
    users: function(){
        return Meteor.users.find();
    },
    usersurname: function(){
        return this.profile.usersurname;
    },
    userEmail: function() {
        return this.emails[0].address;
    }
});