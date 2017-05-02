Template.Viewvers.helpers({
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



Template.Viewvers.events({

    'click #deleteVer': function(){
		   
        var versiones = this;
        

        Meteor.call('removeVer', versiones);
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
        var _id = FlowRouter.getParam('_id');
    	var url = '/viewvers/'+_id;
        FlowRouter.go(url);  

        return false;

    },
    'click .cancel-add': function() {
    	var _id = FlowRouter.getParam('_id');
    	var url = '/viewvers/'+_id;
        FlowRouter.go(url);
	},

});

