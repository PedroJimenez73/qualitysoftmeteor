Template.Editpro.helpers({
    editpro: function(){
        var currentDocpro = FlowRouter.getParam('_id');
        return Procesos.findOne({_id: currentDocpro});
    },
    seleccionado: function(key){
      var currentDocproId = FlowRouter.getParam('_id');
      var currentDocpro = Procesos.findOne({_id: currentDocproId});
      return key == currentDocpro.destino ? 'selected' : '';
   },
    seleccionado2: function(key){
      var currentDocproId = FlowRouter.getParam('_id');
      var currentDocpro = Procesos.findOne({_id: currentDocproId});
      return key == currentDocpro.revision ? 'selected' : '';
   }
});

Template.Editpro.events({
    'submit .edit-pro': function(event){
        var _id = FlowRouter.getParam('_id');
        var nombre = event.target.nombre.value;
        var revision = event.target.revision.value;
		var destino = event.target.destino.value;
        var modifAt = new Date();

		Meteor.call('editDocpro', _id, nombre, revision, destino, modifAt);
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
        FlowRouter.go('/procesos');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/procesos');
	},
    'click #deleteDocpro': function(){
		   
        var _id = FlowRouter.getParam('_id');
		
        Procesos.remove({_id: _id});

        FlowRouter.go('/procesos');   
        return false;

    }

});