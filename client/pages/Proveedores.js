Template.Proveedores.helpers({
    proves: function(){
        return Proves.find();
    }
});

Meteor.subscribe('proves');
