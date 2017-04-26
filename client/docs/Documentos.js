

Template.Documentos.helpers({
    products: function(){
        return Products.find();
    },
    isEnVigor: function () {
    var destino = this.destino;
    console.log(destino);
    return "envigor" === destino;
    },
    isHistorico: function () {
    var destino = this.destino;
    console.log(destino);
    return "historico" === destino;
    },
});



Meteor.subscribe('products');

Template.Documentos.helpers({
    ProductsImages: function(){
        return ProductsImages.find();
    }
});

Meteor.subscribe('ProductsImages');

