Template.Viewproveedor.helpers({
    editproveedor: function(){
        var currentProveedor = FlowRouter.getParam('_id');
        return Proves.findOne({_id: new Meteor.Collection.ObjectID(currentProveedor)});

    },
    seleccionado: function(key){
      var currentProveedorId = FlowRouter.getParam('_id');
      var currentProveedor = Proves.findOne({_id: new Meteor.Collection.ObjectID(currentProveedorId)});
      return key == currentProveedor.eval ? 'selected' : '';
   }
});