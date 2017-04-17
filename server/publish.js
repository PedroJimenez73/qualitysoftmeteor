Meteor.publish('matrices', function(){
	return Matrices.find({});
  });

Meteor.publish('allUsers', function(){
    return Meteor.users.find();
});

Meteor.publish('provee', function(){
    return Provee.find({});
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

Meteor.publish('vehiculos', function(){
    return Vehiculos.find({});
});

Meteor.publish('cursos', function(){
    return Cursos.find({});
});

