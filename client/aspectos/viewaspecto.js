Template.Viewaspecto.helpers({
    editaspecto: function(){
        var currentAspecto = FlowRouter.getParam('_id');
        return Aspectos.findOne({_id: new Meteor.Collection.ObjectID(currentAspecto)});

    }
});