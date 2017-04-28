Template.Addmatriz.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/matrices');
	},
    'submit .add-matriz': function(){
        var proceso = event.target.proceso.value;
        var responsable = event.target.responsable.value;
        var riesgo = event.target.riesgo.value;
        var oportunidad = event.target.oportunidad.value;
        var control = event.target.control.value;

		Meteor.call('addMatriz', proceso, responsable, riesgo, oportunidad, control);

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
            
        toastr["success"]("Nuevo riesgo/oportunidad añadido");
        FlowRouter.go('/matrices');
        

        return false;
    }

});

Template.Addmatriz.helpers({
    users: function(){
        return Meteor.users.find();
    },
    usersurname: function(){
        return this.profile.usersurname;
    },
    userEmail: function() {
        return this.emails[0].address;
    },
});