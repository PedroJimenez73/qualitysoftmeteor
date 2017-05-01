Template.Acciones.helpers({
    acciones: function(){
        return Acciones.find();
    }
});


Meteor.subscribe('acciones');