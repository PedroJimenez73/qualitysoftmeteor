Meteor.publish('matrices', function(){
	return Matrices.find({});
  });

Meteor.publish('allUsers', function(){
    return Meteor.users.find();
});

Meteor.publish('proves', function(){
    return Proves.find({});
});

Meteor.publish('clientes', function(){
    return Clientes.find({});
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

Meteor.publish('planes', function(){
    return Planes.find({});
});

Meteor.publish('aspectos', function(){
    return Aspectos.find({});
});

Meteor.publish('DocsPdfs', function(){
    return DocsPdfs.find({});
});

Meteor.publish('docs', function(){
    return Docs.find({});
});

DocsPdfs.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

Docs.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

