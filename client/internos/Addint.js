Template.Addint.events({
    'click .cancel-add': function() {
    	FlowRouter.go('/internos');
	},
    'submit .addInt': function(event){
        var nombre = event.target.nombre.value;
        var asignados = $('#asignados').val();
        var revision = event.target.revision.value;
        var destino = event.target.destino.value;

        var file = $('#docpdf').get(0).files[0];
        
        if(file){
            fsFile = new FS.File(file);
            InternosPdfs.insert(fsFile, function(err, result){
            if(!err) {
                    var internoPdf = '/cfs/files/InternosPdfs/'+result._id;

                    //Meteor.call('addDoc', nombre, destino, productImage);    
                        Internos.insert({
                            nombre: nombre,
                            asignados: asignados,
                            revision: revision,
                            destino: destino,
                            pdf: internoPdf,
                            createdAt: new Date()
                        });
                    }
                });
            } else {

                    
                }
            event.target.nombre.value = "";
            event.target.asignados.value = "";
            event.target.revision.value = "";
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

            Meteor.call('sendMailInt', nombre, asignados);

            FlowRouter.go('/internos');
   

            return false;
        }
    });



Template.Addint.helpers({
    InternosPdfs: function(){
        return InternosPdfs.find();
    }
});

Meteor.subscribe('InternosPdfs');

Template.Addint.helpers({
    internos: function(){
        return Internos.find();
    }
});

Meteor.subscribe('internos');

Template.Addint.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});


Template.Addint.helpers({
    users: function(){
        return Meteor.users.find();
    },
    usersurname: function(){
        return this.profile.usersurname;
    },
    userEmail: function() {
        return this.emails[0].address;
    },
});




