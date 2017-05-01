Template.Addacc.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/acciones');
	},
    'submit .add-acc': function(){
        var accion = event.target.accion.value;
        var ncasoc = event.target.ncasoc.value;
        var tipo = $('#tipo').val();
        var responsable = event.target.responsable.value;
        var fecha = event.target.fecha.value;
        var tareas = event.target.tareas.value;
        var seguimiento = $('#seguimiento').val();


		Meteor.call('addAcc', accion, ncasoc, tipo, responsable, fecha, tareas, seguimiento);

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
            
        toastr["success"]("Nueva Acción añadida");
        FlowRouter.go('/acciones');
        

        return false;
    }

});

Template.Addacc.helpers({
    users: function(){
        return Meteor.users.find();
    },
    usersurname: function(){
        return this.profile.usersurname;
    },
    userEmail: function() {
        return this.emails[0].address;
    },
    noconf: function(){
        var currentNoconf = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Noconfs.findOne({_id: new Meteor.Collection.ObjectID(currentNoconf)});
    }
});