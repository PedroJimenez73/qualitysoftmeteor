Template.Viewrec.helpers({
    viewrec: function(){
        var currentRec = FlowRouter.getParam('_id');
        return Reclamas.findOne({_id: new Meteor.Collection.ObjectID(currentRec)});
    }
});