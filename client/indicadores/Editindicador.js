Template.Editindicador.helpers({
    editind: function(){
        var currentInd = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Indicadores.findOne({_id: new Meteor.Collection.ObjectID(currentInd)});
    }/*,
    seleccionado: function(key){
      var currentPlanId = FlowRouter.getParam('_id');
      var currentPlan = Planes.findOne({_id: new Meteor.Collection.ObjectID(currentPlanId)});
      return key == currentPlan.responsable ? 'selected' : '';
      
   }*/
});

Template.Editindicador.events({
    'submit .edit-ind': function(event){
        var _id = FlowRouter.getParam('_id');
        var indicador = event.target.indicador.value;
        var formula = event.target.formula.value;
        var proceso = event.target.proceso.value;
        var superior = parseInt(event.target.superior.value);
        var inferior = parseInt(event.target.inferior.value);
        var inicio = event.target.inicio.value;
		var fin = event.target.fin.value;


		Meteor.call('editInd', _id, indicador, formula, proceso, superior, inferior, inicio, fin);

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
        FlowRouter.go('/indicadores');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/indicadores');
	},
    'click #deleteInd': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeInd', _id);
        FlowRouter.go('/indicadores');   
        return false;

    }

});