Template.Editacc.helpers({
    editacc: function(){
        var currentAcc = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Acciones.findOne({_id: new Meteor.Collection.ObjectID(currentAcc)});
    },
    seleccionado: function(key){
      var currentAccId = FlowRouter.getParam('_id');
      var currentAcc = Acciones.findOne({_id: new Meteor.Collection.ObjectID(currentAccId)});
      return key == currentAcc.tipo ? 'selected' : '';
      
   },
    seleccionado2: function(key){
      var currentAccId = FlowRouter.getParam('_id');
      var currentAcc = Acciones.findOne({_id: new Meteor.Collection.ObjectID(currentAccId)});
      return key == currentAcc.seguimiento ? 'selected' : '';
      
   }
});

Template.Editacc.events({
    'submit .edit-acc': function(event){
        var _id = FlowRouter.getParam('_id');
        var accion = event.target.accion.value;
        var ncasoc = event.target.ncasoc.value;
        var tipo = $('#tipo').val();
        var fecha = event.target.fecha.value;
        var tareas = event.target.tareas.value;
        var seguimiento = $('#seguimiento').val();

		Meteor.call('editAcc', _id, accion, ncasoc, tipo, fecha, tareas, seguimiento);

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
        FlowRouter.go('/acciones');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/acciones');
	},
    'click #deleteAcc': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeAcc', _id);
        FlowRouter.go('/acciones');   
        return false;

    }

});