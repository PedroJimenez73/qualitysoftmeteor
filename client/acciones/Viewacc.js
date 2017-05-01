Template.Viewacc.helpers({
    viewacc: function(){
        var currentAcc = FlowRouter.getParam('_id');
        return Acciones.findOne({_id: new Meteor.Collection.ObjectID(currentAcc)});

    }
});