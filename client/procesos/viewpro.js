Template.Viewpro.helpers({
    viewpro: function(){
        var currentPro = FlowRouter.getParam('_id');
        return Procesos.findOne({_id: currentPro});

    },
    createdAtForm: function() {
        return moment(this.createdAt).format('DD-MM-YYYY');
    },
    modifAtForm: function(){
        return moment(this.modifAt).format('DD-MM-YYYY');
    }
});

Template.Viewpro.events({

    'click #deleteVersion': function(){
		   
        var versiones = this;

        Meteor.call('removeVers', versiones);
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
            
        toastr["success"]("Versión eliminada correctamente");  
        return false;

    },
    'click .cancel-add': function() {
    	FlowRouter.go('/procesos');
	},

});