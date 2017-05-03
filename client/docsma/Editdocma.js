Template.Editdocma.helpers({
    editdocma: function(){
        var currentDocma = FlowRouter.getParam('_id');
        return Docs.findOne({_id: currentDocma});
    },
    seleccionado: function(key){
      var currentDocmaId = FlowRouter.getParam('_id');
      var currentDocma = Docs.findOne({_id: currentDocmaId});
      return key == currentDocma.destino ? 'selected' : '';
   }
});

Template.Editdocma.events({
    'submit .edit-docma': function(event){
        var _id = FlowRouter.getParam('_id');
        var nombre = event.target.nombre.value;
		var destino = event.target.destino.value;

		Meteor.call('editDocma', _id, nombre, destino);

        toastr.success('Modificaciones guardadas!')
        FlowRouter.go('/docsma');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/docsma');
	},
    'click #deleteDocma': function(){
		   
        var _id = FlowRouter.getParam('_id');
		
	   
        Docs.remove({_id: _id});

        FlowRouter.go('/docsma');   
        return false;

    }

});