Template.Adddoc.events({
    'click .cancel-add': function() {
    	FlowRouter.go('/documentos');
	},
    'submit .addDoc': function(event){
        var nombre = event.target.nombre.value;
        var destino = event.target.destino.value;

        var file = $('#docpdf').get(0).files[0];
        
        if(file){
            fsFile = new FS.File(file);
            ProductsImages.insert(fsFile, function(err, result){
            if(!err) {
                    var productImage = '/cfs/files/ProductsImages/'+result._id;

                    //Meteor.call('addDoc', nombre, destino, productImage);    
                        Products.insert({
                            nombre: nombre,
                            destino: destino,
                            image: productImage,
                            createdAt: new Date()
                        });
                    }
                });
            } else {
                    var productImage = '/img/noimage.png';

                        Products.insert({
                            nombre: nombre,
                            destino: destino,
                            image: productImage,
                            createdAt: new Date()
                        });
                    
                }
            event.target.nombre.value = "";
            event.target.destino.value = "";

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "3000",
                "extendedTimeOut": "500",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
                };
            
                toastr["success"]("Documento añadido");


            FlowRouter.go('/documentos');
   

            return false;
        }
    });



Template.Adddoc.helpers({
    ProductsImages: function(){
        return ProductsImages.find();
    }
});

Meteor.subscribe('ProductsImages');

Template.Adddoc.helpers({
    products: function(){
        return Products.find();
    }
});

Meteor.subscribe('products');




