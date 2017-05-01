Template.Viewenc.helpers({
    viewenc: function(){
        var currentEnc = FlowRouter.getParam('_id');
        return Encuestas.findOne({_id: new Meteor.Collection.ObjectID(currentEnc)});
    }
});