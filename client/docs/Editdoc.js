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
    'submit .edit-documento': function(event){
        var _id = FlowRouter.getParam('_id');
        var nombre = event.target.nombre.value;
		var destino = event.target.destino.value;

		Meteor.call('editDocumento', _id, nombre, destino);

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