Template.Viewproveedor.helpers({
    editproveedor: function(){
        var currentProveedor = FlowRouter.getParam('_id');
        return Proveedores.findOne({_id: currentProveedor});
    },
    seleccionado: function(key){
      var currentProveedorId = FlowRouter.getParam('_id');
      var currentProveedor = Proveedores.findOne({_id: currentProveedorId});
      return key == currentProveedor.eval ? 'selected' : '';
   }
});