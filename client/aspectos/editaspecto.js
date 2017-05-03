Template.Editaspecto.helpers({
    editaspecto: function(){
        var currentAspecto = FlowRouter.getParam('_id');
        return Aspectos.findOne({_id: new Meteor.Collection.ObjectID(currentAspecto)});
    }
   
});

Template.Editaspecto.events({
    'submit .edit-aspecto': function(event){
        var _id = FlowRouter.getParam('_id');
        var actividad = event.target.actividad.value;
        var aspecto = event.target.aspecto.value;
        var cuno = event.target.cuno.value;
        var cdos = event.target.cdos.value;
        var ctres = event.target.ctres.value;
        var ccuatro = event.target.ccuatro.value;
		var significancia = event.target.significancia.value;

		Meteor.call('editAspecto', _id, actividad, aspecto, cuno, cdos, ctres, ccuatro, significancia);


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
        FlowRouter.go('/aspectos');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/aspectos');
	},
    'click #deleteAspecto': function(){
		   
        var _id = FlowRouter.getParam('_id');
		Meteor.call('removeAspecto', _id);
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
            
        toastr["success"]("Aspecto eliminado")
        FlowRouter.go('/aspectos');   
        return false;

    }

});