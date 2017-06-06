Template.Viewplan.helpers({
    editplan: function(){
        var currentPlan = FlowRouter.getParam('_id');
        return Planes.findOne({_id: new Meteor.Collection.ObjectID(currentPlan)});

    }
});

Template.Viewplan.events({

    'click #deleteProg': function(){
		   
        var reuniones = this;
        console.log(reuniones);

        Meteor.call('removeProg', reuniones);
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
            
        toastr["success"]("Reunión eliminada correctamente");  
        return false;

    },
    'click .cancel-add': function() {
    	FlowRouter.go('/planes');
	},
    'click .downcopy': function() {
        var currentPlan = FlowRouter.getParam('_id');
        console.log(currentPlan);
        var csvContent = CSV.unparse(Planes.find({_id: new Meteor.Collection.ObjectID(currentPlan)}).fetch());
        window.open('data:text/csv;charset=utf-8,' + escape(csvContent), '_self');
        //Meteor.call('download', currentPlan);

	},

});

Template.Planes.helpers({
    planes: function(){
        return Planes.find();
    }
});


Meteor.subscribe('planes');
