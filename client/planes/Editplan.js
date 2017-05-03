Template.Editplan.helpers({
    editplan: function(){
        var currentPlan = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Planes.findOne({_id: new Meteor.Collection.ObjectID(currentPlan)});
    }/*,
    seleccionado: function(key){
      var currentPlanId = FlowRouter.getParam('_id');
      var currentPlan = Planes.findOne({_id: new Meteor.Collection.ObjectID(currentPlanId)});
      return key == currentPlan.responsable ? 'selected' : '';
      
   }*/
});

Template.Editplan.events({
    'submit .edit-plan': function(event){
        var _id = FlowRouter.getParam('_id');
        var fecha = event.target.fecha.value;
        var alcance = event.target.alcance.value;
        var objeto = event.target.objeto.value;
        var responsable = event.target.responsable.value;
        var documentacion = event.target.documentacion.value;
		var sistematica = event.target.sistematica.value;

		Meteor.call('editPlan', _id, fecha, alcance, objeto, responsable, documentacion, sistematica);

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
        FlowRouter.go('/planes');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/planes');
	},
    'click #deletePlan': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removePlan', _id);
        FlowRouter.go('/planes');   
        return false;

    }

});

Template.Editplan.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});


Template.Editplan.helpers({
    users: function(){
        return Meteor.users.find();
    }
});