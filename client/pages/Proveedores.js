Template.Proveedores.helpers({
    provee: function(){
        return Provee.find();
    }
});

Meteor.subscribe('provee');
