Template.Addpro.events({
    'click .cancel-add': function() {
    	FlowRouter.go('/procesos');
	},
    'submit .addPro': function(event){
        var nombre = event.target.nombre.value;
        var asignados = $('#asignados').val();
        var tareas = $('#tareas').val();
        var revision = event.target.revision.value;
        var destino = event.target.destino.value;
        

        var file = $('#docword').get(0).files[0];
        
        if(file){
            fsFile = new FS.File(file);
            ProcesosWords.insert(fsFile, function(err, result){
            if(!err) {
                    var procesoWord = '/cfs/files/ProcesosWords/'+result._id;

                    //Meteor.call('addDoc', nombre, destino, productImage);    
                        Procesos.insert({
                            nombre: nombre,
                            asignados: asignados,
                            tareas: tareas,
                            revision: revision,
                            destino: destino,
                            word: procesoWord,
                            createdAt: new Date()
                        });
                    }
                });
            } else {

                    
                }
            event.target.nombre.value = "";
            event.target.asignados.value = "";
            event.target.tareas.value = "";
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
            
                toastr["success"]("Documento de Proceso añadido");

            //Meteor.call('sendAsDoc', asignados);

            FlowRouter.go('/procesos');
   

            return false;
        }
    });



Template.Addpro.helpers({
    ProcesosWords: function(){
        return ProcesosWords.find();
    }
});

Meteor.subscribe('ProcesosWords');

Template.Addpro.helpers({
    procesos: function(){
        return Procesos.find();
    }
});

Meteor.subscribe('procesos');

Template.Addpro.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});


Template.Addpro.helpers({
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




