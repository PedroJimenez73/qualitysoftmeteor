Template.Viewplan.helpers({
    editplan: function(){
        var currentPlan = FlowRouter.getParam('_id');
        return Planes.findOne({_id: new Meteor.Collection.ObjectID(currentPlan)});

    }
});