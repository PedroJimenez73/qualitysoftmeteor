Matrices = new Mongo.Collection('matrices');

Proveedores = new Mongo.Collection('proveedores');

Cursos = new Mongo.Collection('cursos');

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

Vehiculos = new Mongo.Collection('vehiculos');
