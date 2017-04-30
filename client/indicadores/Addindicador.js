Template.Addindicador.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/indicadores');
	},
    'submit .add-ind': function(){
        var indicador = event.target.indicador.value;
        var riesgo = event.target.riesgo.value;
        var responsable = event.target.responsable.value;
        var formula = event.target.formula.value;
        var proceso = event.target.proceso.value;
        var superior = parseInt(event.target.superior.value);
        var inferior = parseInt(event.target.inferior.value);
        var inicio = event.target.inicio.value;
		var fin = event.target.fin.value;

		Meteor.call('addInd', indicador, riesgo, responsable, formula, proceso, superior, inferior, inicio, fin);

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
            
        toastr["success"]("Nuevo Indicador añadido");
        FlowRouter.go('/indicadores');
        

        return false;
    }

});

Template.Addindicador.helpers({
    users: function(){
        return Meteor.users.find();
    },
    usersurname: function(){
        return this.profile.usersurname;
    },
    userEmail: function() {
        return this.emails[0].address;
    },
    matriz: function(){
        var currentRiesgo = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Riesgos.findOne({_id: new Meteor.Collection.ObjectID(currentRiesgo)});
    }
});