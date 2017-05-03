Template.Soporte.helpers({
    tickets: function(){
        return Tickets.find();
    },
    dateFormat: function() {
        return moment(this.fecha).format('LLLL');
    }
});


Meteor.subscribe('tickets');

Template.Soporte.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/inicio');
	},
    'submit .add-ticket': function(event){

		var fecha = new Date();
        var consulta = event.target.consulta.value;
        var currentUser = Meteor.userId();
        var user =  Meteor.users.findOne({_id: currentUser});
        var usuario = user.username;
        var mail = user.emails[0].address;

		Meteor.call('addTicket', fecha, consulta, usuario, mail);

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
            
        toastr["success"]("Su incidencia ha sido tramitada");
        
        FlowRouter.go('/inicio');
        return false;
    },
    'click #closeTicket': function(){
		   
        var ticket = this;
        var _id = ticket._id._str;
		Meteor.call('removeTicket', _id);
        FlowRouter.go('/soporte');   
        toastr["success"]("Incidencia cerrada");
        return false;

    }

});

Template.Soporte.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});


Template.Soporte.helpers({
    users: function(){
        return Meteor.users.find();
    }
});