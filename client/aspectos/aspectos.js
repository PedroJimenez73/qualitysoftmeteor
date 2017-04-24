Template.Aspectos.helpers({
    aspectos: function(){
        return Aspectos.find();
    }
});


Meteor.subscribe('aspectos');