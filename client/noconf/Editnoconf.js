Template.Editnoconf.helpers({
    editnoconf: function(){
        var currentNoconf = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Noconfs.findOne({_id: new Meteor.Collection.ObjectID(currentNoconf)});
    },
    seleccionado: function(key){
      var currentNoconfId = FlowRouter.getParam('_id');
      var currentNoconf = Noconfs.findOne({_id: new Meteor.Collection.ObjectID(currentNoconfId)});
      return key == currentNoconf.tipo ? 'selected' : '';
      
   },
    seleccionado2: function(key){
      var currentNoconfId = FlowRouter.getParam('_id');
      var currentNoconf = Noconfs.findOne({_id: new Meteor.Collection.ObjectID(currentNoconfId)});
      return key == currentNoconf.seguimiento ? 'selected' : '';
      
   }
});

Template.Editnoconf.events({
    'submit .edit-noconf': function(event){
        var _id = FlowRouter.getParam('_id');
        var numero = event.target.numero.value;
        var fecha = event.target.fecha.value;
        var tipo = $('#tipo').val();
        var departamento = event.target.departamento.value;
        var descripcion = event.target.descripcion.value;
		var causa = event.target.causa.value;
        var seguimiento = $('#seguimiento').val();

		Meteor.call('editNoconf', _id, numero, fecha, tipo, departamento, descripcion, causa, seguimiento);

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
        FlowRouter.go('/noconfs');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/noconfs');
	},
    'click #deleteNoconf': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeNoconf', _id);
        FlowRouter.go('/noconfs');   
        return false;

    }

});