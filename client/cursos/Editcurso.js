Template.Editcurso.helpers({
    editcurso: function(){
        var currentCurso = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Cursos.findOne({_id: new Meteor.Collection.ObjectID(currentCurso)});
    }
});

Template.Editcurso.events({
    'submit .edit-curso': function(event){
        var _id = FlowRouter.getParam('_id');
        var titulo = event.target.titulo.value;
        var organizador = event.target.organizador.value;
        var horas = event.target.horas.value;
        var asistentes = event.target.asistentes.value;
        var fechas = event.target.fechas.value;
        var observaciones = event.target.observaciones.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('editCurso', _id, titulo, organizador, horas, asistentes, fechas, observaciones, fechamodif);

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
            
        toastr["success"]("Modificaciones guardadas");
        FlowRouter.go('/planesform');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/planesform');
	},
    'click #deleteCurso': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeCurso', _id);
        FlowRouter.go('/planesform');   
        return false;

    }

});