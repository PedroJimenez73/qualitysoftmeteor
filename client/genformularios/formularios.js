Template.Formularios.helpers({
    formularios: function(){
        return Formularios.find();
    }
});


Meteor.subscribe('formularios');



