Template.Adddocma.events({
    'click .cancel-add': function() {
    	FlowRouter.go('/docsma');
	},
    'submit .addDocma': function(event){
        var nombre = event.target.nombre.value;
        var destino = event.target.destino.value;

        var file = $('#docpdfma').get(0).files[0];
        
        if(file){
            fsFile = new FS.File(file);
            DocsPdfs.insert(fsFile, function(err, result){
            if(!err) {
                    var docPdf = '/cfs/files/DocsPdfs/'+result._id;

                    //Meteor.call('addDoc', nombre, destino, productImage);    
                        Docs.insert({
                            nombre: nombre,
                            destino: destino,
                            pdf: docPdf,
                            createdAt: new Date()
                        });
                    }
                });
            } else {
                    var docPdf = '/img/noimage.png';

                        Docs.insert({
                            nombre: nombre,
                            destino: destino,
                            pdf: docPdf,
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


            FlowRouter.go('/docsma');
   

            return false;
        }
    });



Template.Adddocma.helpers({
    DocsPdfs: function(){
        return DocsPdfs.find();
    }
});

Meteor.subscribe('DocsPdfs');

Template.Adddocma.helpers({
    docs: function(){
        return Docs.find();
    }
});

Meteor.subscribe('docs');




