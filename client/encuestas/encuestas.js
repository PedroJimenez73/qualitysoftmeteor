Template.Encuestas.helpers({
    encuestas: function(){
        return Encuestas.find();
    }
});


Meteor.subscribe('encuestas');

