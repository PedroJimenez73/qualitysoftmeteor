Meteor.publish('riesgos', function(){
  if(this.userId){
	return Riesgos.find({});
    }
  });

Meteor.publish('allUsers', function(){
  if(this.userId){
    return Meteor.users.find();
  }
});

Meteor.publish('proves', function(){
    if(this.userId){
    return Proves.find({});
    }
});

Meteor.publish('clientes', function(){
  if(this.userId){
    return Clientes.find({});
  }
});


Meteor.publish('ProductsImages', function(){  
    if(this.userId){
    return ProductsImages.find({});
    }
});

Meteor.publish('products', function(){
    if(this.userId){
        return Products.find({});
    }
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
      if(this.userId){
        return Vehiculos.find({});
      }
});

Meteor.publish('cursos', function(){
      if(this.userId){
        return Cursos.find({});
      }
});

Meteor.publish('planes', function(){
    if(this.userId){
        return Planes.find({});
    }
});

Meteor.publish('indicadores', function(){
    if(this.userId){
        return Indicadores.find({});
    }
});

Meteor.publish('aspectos', function(){
    if(this.userId){
        return Aspectos.find({});
    }
});

Meteor.publish('DocsPdfs', function(){
    if(this.userId){
        return DocsPdfs.find({});
    }
});

Meteor.publish('docs', function(){
    if(this.userId){
        return Docs.find({});
    }
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


Meteor.publish('InternosPdfs', function(){
    if(this.userId){
        return InternosPdfs.find({});
    }
});

Meteor.publish('internos', function(){
    if(this.userId){
        return Internos.find({});
    }
});

InternosPdfs.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

Internos.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

Meteor.publish('ProcesosWords', function(){
    if(this.userId){
        return ProcesosWords.find({});
    }
});

Meteor.publish('procesos', function(){
    if(this.userId){
        return Procesos.find({});
    }
});

ProcesosWords.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

Procesos.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});


Meteor.publish('ManualesWords', function(){
    if(this.userId){
        return ManualesWords.find({});
    }
});

Meteor.publish('manuales', function(){
    if(this.userId){
        return Manuales.find({});
    }
});

ManualesWords.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

Manuales.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

Meteor.publish('noconfs', function(){
    if(this.userId){
        return Noconfs.find({});
    }
});

Meteor.publish('acciones', function(){
    if(this.userId){
        return Acciones.find({});
    }
});

Meteor.publish('encuestas', function(){
        return Encuestas.find({});
    
});

Meteor.publish('reclamas', function(){
    if(this.userId){
        return Reclamas.find({});
    }
});

Meteor.publish('tickets', function(){
    if(this.userId){
        return Tickets.find({});
    }
});



