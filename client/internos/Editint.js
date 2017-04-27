Template.Editint.helpers({
    editint: function(){
        var currentDocint = FlowRouter.getParam('_id');
        return Internos.findOne({_id: currentDocint});
    },
    seleccionado: function(key){
      var currentDocintId = FlowRouter.getParam('_id');
      var currentDocint = Internos.findOne({_id: currentDocintId});
      return key == currentDocint.destino ? 'selected' : '';
   },
    seleccionado2: function(key){
      var currentDocintId = FlowRouter.getParam('_id');
      var currentDocint = Internos.findOne({_id: currentDocintId});
      return key == currentDocint.revision ? 'selected' : '';
   }
});

Template.Editint.events({
    'submit .edit-int': function(){
        var _id = FlowRouter.getParam('_id');
        var nombre = event.target.nombre.value;
        var revision = event.target.revision.value;
		var destino = event.target.destino.value;
        var modifAt = new Date()

		Meteor.call('editDocint', _id, nombre, revision, destino, modifAt);
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
            
        toastr["success"]("Modificaciones guardadas")
        FlowRouter.go('/internos');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/internos');
	},
    'click #deleteDocint': function(){
		   
        var _id = FlowRouter.getParam('_id');
		
        Internos.remove({_id: _id});

        FlowRouter.go('/internos');   
        return false;

    }

});