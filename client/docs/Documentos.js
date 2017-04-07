

Template.Documentos.helpers({
    products: function(){
        return Products.find();
    }
});

Meteor.subscribe('products');

Template.Documentos.helpers({
    ProductsImages: function(){
        return ProductsImages.find();
    }
});

Meteor.subscribe('ProductsImages');

