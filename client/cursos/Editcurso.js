Template.Editcurso.helpers({
    editcurso: function(){
        var currentCurso = FlowRouter.getParam('_id');
        return Cursos.findOne({_id: currentCurso});
    }
});

Template.Editcurso.events({
    'submit .edit-curso': function(){
        var _id = FlowRouter.getParam('_id');
        var titulo = event.target.titulo.value;
        var organizador = event.target.organizador.value;
        var horas = event.target.horas.value;
        var asistentes = event.target.asistentes.value;
        var fechas = event.target.fechas.value;
        var observaciones = event.target.observaciones.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('editCurso', _id, titulo, organizador, horas, asistentes, fechas, observaciones, fechamodif);


        toastr.success('Modicaciones guardadas!')
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