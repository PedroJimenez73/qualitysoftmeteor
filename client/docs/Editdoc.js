Template.Editdoc.helpers({
    editdocumento: function(){
        var currentDocumento = FlowRouter.getParam('_id');
        return Products.findOne({_id: currentDocumento});
    },
    seleccionado: function(key){
      var currentDocumentoId = FlowRouter.getParam('_id');
      var currentDocumento = Products.findOne({_id: currentDocumentoId});
      return key == currentDocumento.destino ? 'selected' : '';
   }
});

Template.Editdoc.events({
    'submit .edit-documento': function(){
        var _id = FlowRouter.getParam('_id');
        var nombre = event.target.nombre.value;
		var destino = event.target.destino.value;

		Meteor.call('editDocumento', _id, nombre, destino);

        toastr.success('Modificaciones guardadas!')
        FlowRouter.go('/documentos');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/documentos');
	},
    'click #deleteDocumento': function(){
		   
        var _id = FlowRouter.getParam('_id');
		
	   
        Products.remove({_id: _id});

        FlowRouter.go('/documentos');   
        return false;

    }

});