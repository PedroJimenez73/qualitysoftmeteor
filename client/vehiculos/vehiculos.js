Template.Vehiculos.helpers({
    vehiculos: function(){
        return Vehiculos.find();
    }
});


Meteor.subscribe('vehiculos');