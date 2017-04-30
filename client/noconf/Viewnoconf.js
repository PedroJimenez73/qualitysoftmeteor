Template.Viewnoconf.helpers({
    viewnoconf: function(){
        var currentNoconf = FlowRouter.getParam('_id');
        return Noconfs.findOne({_id: new Meteor.Collection.ObjectID(currentNoconf)});

    }
});