Template.Addman.events({
    'click .cancel-add': function() {
    	FlowRouter.go('/manualcm');
	},
    'submit .addMan': function(event){
        var version = event.target.version.value;
        var revision = $('#revision').val();

        

        var file = $('#docword').get(0).files[0];
        
        if(file){
            fsFile = new FS.File(file);
            ManualesWords.insert(fsFile, function(err, result){
            if(!err) {
                    var manualWord = '/cfs/files/ManualesWords/'+result._id;

                    //Meteor.call('addDoc', nombre, destino, productImage);    
                        Manuales.insert({
                            version: version,
                            revision: revision,
                            word: manualWord,
                            createdAt: new Date()
                        });
                    }
                });
            } else {

                    
                }
            event.target.version.value = "";
            event.target.revision.value = "";

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
            
                toastr["success"]("Documento de Manual añadido.");

            

            FlowRouter.go('/manualcm');
   

            return false;
        }
    });



Template.Addman.helpers({
    ManualesWords: function(){
        return ManualesWords.find();
    }
});

Meteor.subscribe('ManualesWords');

Template.Addman.helpers({
    manuales: function(){
        return Manuales.find();
    }
});

Meteor.subscribe('manuales');



