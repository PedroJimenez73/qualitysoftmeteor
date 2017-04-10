Template.Addcurso.events({
	'click .cancel-add': function() {
    	FlowRouter.go('/planesform');
	},
    'submit .add-curso': function(){
        var titulo = event.target.titulo.value;
        var organizador = event.target.organizador.value;
        var horas = event.target.horas.value;
        var asistentes = event.target.asistentes.value;
        var fechas = event.target.fechas.value;
        var observaciones = event.target.observaciones.value;
		var fechamodif = event.target.fechamodif.value;

		Meteor.call('addCurso', titulo, organizador, horas, asistentes, fechas, observaciones, fechamodif);

		FlowRouter.go('/planesform');
        
        return false;
    }

});