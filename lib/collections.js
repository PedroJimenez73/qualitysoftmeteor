Riesgos = new Mongo.Collection('riesgos', {idGeneration:'MONGO'});

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

Indicadores = new Mongo.Collection('indicadores', {idGeneration:'MONGO'});

Noconfs = new Mongo.Collection('noconfs', {idGeneration:'MONGO'});

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


Internos = new Mongo.Collection('internos');

InternosPdfs = new FS.Collection('InternosPdfs', {
    stores: [new FS.Store.GridFS('InternosPdfs')]
});

InternosPdfs.allow({
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


Internos.allow({
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


Procesos = new Mongo.Collection('procesos');

ProcesosWords = new FS.Collection('ProcesosWords', {
    stores: [new FS.Store.GridFS('ProcesosWords')]
});

ProcesosWords.allow({
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


Procesos.allow({
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