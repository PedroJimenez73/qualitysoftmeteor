Template.Addprog.helpers({
    addprogram: function(){
        var currentPlan = FlowRouter.getParam('_id');
        return Planes.findOne({_id: currentPlan});
    }
});

Template.Addprog.events({
    'click .cancel-add': function() {
    	FlowRouter.go('/planes');
	},

    'submit .add-prog': function(){
        var _id = FlowRouter.getParam('_id');
        var array_asist = $('#asistentes').val();
        var fecha = event.target.fecha.value;
        var hora = event.target.hora.value;
        var lugar = event.target.lugar.value;
		
		Meteor.call('addProg', _id, array_asist, fecha, hora, lugar);
        Meteor.call('sendMailReu', array_asist, fecha, hora, lugar);
        

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
            
        toastr["success"]("Nuevo Reunión añadida, se ha enviado un mail a cada asistente");
        FlowRouter.go('/planes');
        

        return false;
    }
});

Template.Addprog.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});


Template.Addprog.helpers({
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