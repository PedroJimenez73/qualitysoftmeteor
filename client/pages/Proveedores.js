Template.Proveedores.helpers({
    proveedores: function(){
        return Proveedores.find();
    }
});

Meteor.subscribe('proveedores');
