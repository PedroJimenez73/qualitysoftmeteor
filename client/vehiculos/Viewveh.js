Template.Viewveh.helpers({
    editvehiculo: function(){
        var currentVehiculo = FlowRouter.getParam('_id');
        return Vehiculos.findOne({_id: new Meteor.Collection.ObjectID(currentVehiculo)});
    }
});
