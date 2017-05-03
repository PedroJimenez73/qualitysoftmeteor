Template.Addnoconf.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/noconfs');
	},
    'submit .add-noconf': function(event){
        var numero = event.target.numero.value;
        var fecha = event.target.fecha.value;
        var tipo = $('#tipo').val();
        var departamento = event.target.departamento.value;
        var descripcion = event.target.descripcion.value;
		var causa = event.target.causa.value;
        var responsables = $('#responsables').val();        
        var seguimiento = $('#seguimiento').val();

		Meteor.call('addNoconf', numero, fecha, tipo, departamento, descripcion, causa, responsables, seguimiento);

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
            
        toastr["success"]("Nueva No Conformidad añadida, se ha enviado un mail de alerta a los responsables");
        
        Meteor.call('sendMailNC', fecha, tipo, departamento, descripcion, responsables);

        FlowRouter.go('/noconfs');
        

        return false;
    }

});

Template.Addnoconf.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});


Template.Addnoconf.helpers({
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