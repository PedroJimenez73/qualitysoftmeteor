Matrices = new Mongo.Collection('matrices', {idGeneration:'MONGO'});

Proves = new Mongo.Collection('proves', {idGeneration:'MONGO'});

Cursos = new Mongo.Collection('cursos', {idGeneration:'MONGO'});

Products = new Mongo.Collection('products');

ProductsImages = new FS.Collection('ProductsImages', {
    stores: [new FS.Store.GridFS('ProductsImages')]
});

ProductsImages.allow({
  'insert': function () {
    return true;
  },
  'update': function () {
    return true;
  },
  'remove': function () {
    return true;
  },
  download: function(userId, fsFile) {
		return true
	}
});


Products.allow({
  'insert': function () {
    return true;
  },
  'update': function () {
    return true;
  },
  'remove': function () {
    return true;
  }
});

Vehiculos = new Mongo.Collection('vehiculos', {idGeneration:'MONGO'});

Clientes = new Mongo.Collection('clientes', {idGeneration:'MONGO'});

Planes = new Mongo.Collection('planes', {idGeneration:'MONGO'});

Aspectos = new Mongo.Collection('aspectos', {idGeneration:'MONGO'});

Docs = new Mongo.Collection('docs');

DocsPdfs = new FS.Collection('DocsPdfs', {
    stores: [new FS.Store.GridFS('DocsPdfs')]
});

DocsPdfs.allow({
  'insert': function () {
    return true;
  },
  'update': function () {
    return true;
  },
  'remove': function () {
    return true;
  },
  download: function(userId, fsFile) {
		return true
	}
});


Docs.allow({
  'insert': function () {
    return true;
  },
  'update': function () {
    return true;
  },
  'remove': function () {
    return true;
  }
});