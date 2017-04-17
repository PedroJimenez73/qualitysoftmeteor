Template.Viewcliente.helpers({
    editcliente: function(){
        var currentCliente = FlowRouter.getParam('_id');
        return Clientes.findOne({_id: new Meteor.Collection.ObjectID(currentCliente)});

    }
});