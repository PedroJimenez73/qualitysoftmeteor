Template.Editriesgo.helpers({
    editriesgo: function(){
        var currentRiesgo = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Riesgos.findOne({_id: new Meteor.Collection.ObjectID(currentRiesgo)});
    }/*,
    seleccionado: function(key){
      var currentPlanId = FlowRouter.getParam('_id');
      var currentPlan = Planes.findOne({_id: new Meteor.Collection.ObjectID(currentPlanId)});
      return key == currentPlan.responsable ? 'selected' : '';
      
   }*/
});

Template.Editriesgo.events({
    'submit .edit-riesgo': function(event){
        var _id = FlowRouter.getParam('_id');
        var proceso = event.target.proceso.value;
        var responsable = event.target.responsable.value;
        var riesgo = event.target.riesgo.value;
		var oportunidad = event.target.oportunidad.value;
        var control = event.target.control.value;

		Meteor.call('editRiesgo', _id, proceso, responsable, riesgo, oportunidad, control);

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
        FlowRouter.go('/riesgos');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/riesgos');
	},
    'click #deleteRiesgo': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeRiesgo', _id);
        FlowRouter.go('/riesgos');   
        return false;

    }

});

Template.Editriesgo.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});


Template.Editriesgo.helpers({
    users: function(){
        return Meteor.users.find();
    }
});