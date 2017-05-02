Template.Editman.helpers({
    editman: function(){
        var currentDocman = FlowRouter.getParam('_id');
        return Manuales.findOne({_id: currentDocman});
    },
    seleccionado2: function(key){
      var currentDocmanId = FlowRouter.getParam('_id');
      var currentDocman = Procesos.findOne({_id: currentDocmanId});
      return key == currentDocman.revision ? 'selected' : '';
   }
});

Template.Editman.events({
    'submit .edit-man': function(){
        var _id = FlowRouter.getParam('_id');
        var version = event.target.version.value;
        var revision = event.target.revision.value;
        var modifAt = new Date();

		Meteor.call('editDocman', _id, version, revision, modifAt);
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
        FlowRouter.go('/manualcm');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/manualcm');
	},
    'click #deleteDocman': function(){
		   
        var _id = FlowRouter.getParam('_id');
		
        Manuales.remove({_id: _id});

        FlowRouter.go('/manualcm');   
        return false;

    }

});