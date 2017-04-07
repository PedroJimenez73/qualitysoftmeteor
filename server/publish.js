Meteor.publish('matrices', function(){
	return Matrices.find({});
  });

Meteor.publish('allUsers', function(){
    return Meteor.users.find();
});

Meteor.publish('proveedores', function(){
    return Proveedores.find({});
});

Meteor.publish('ProductsImages', function(){
    return ProductsImages.find({});
});

Meteor.publish('products', function(){
    return Products.find({});
});

ProductsImages.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

Products.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

