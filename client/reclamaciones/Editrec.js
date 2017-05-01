Template.Editrec.helpers({
    editrec: function(){
        var currentRec = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Reclamas.findOne({_id: new Meteor.Collection.ObjectID(currentRec)});
    },
    seleccionado2: function(key){
      var currentRecId = FlowRouter.getParam('_id');
      var currentRec = Reclamas.findOne({_id: new Meteor.Collection.ObjectID(currentRecId)});
      return key == currentRec.seguimiento ? 'selected' : '';
      
   }
});

Template.Editrec.events({
    'submit .edit-rec': function(){
        var _id = FlowRouter.getParam('_id');
        var fecha = event.target.fecha.value;
        var departamento = event.target.departamento.value;
        var descripcion = event.target.descripcion.value;
        var seguimiento = $('#seguimiento').val();

		Meteor.call('editRec', _id, fecha, departamento, descripcion, seguimiento);

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
        FlowRouter.go('/reclamaciones');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/reclamaciones');
	},
    'click #deleteRec': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeRec', _id);
        FlowRouter.go('/reclamaciones');   
        return false;

    }

});