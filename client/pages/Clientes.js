Template.Clientes.helpers({
    clientes: function(){
        return Clientes.find();
    }
});

Meteor.subscribe('clientes');