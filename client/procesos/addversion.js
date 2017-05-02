Template.Addversion.helpers({
    addversion: function(){
        var currentPro = FlowRouter.getParam('_id');
        return Procesos.findOne({_id: currentPro});
    }
});

Template.Addversion.events({
    'click .cancel-add': function() {
        var _id = FlowRouter.getParam('_id');
    	var url = '/viewvers/'+_id;
        FlowRouter.go(url);
	},

    'submit .add-version': function(){
        var _id = FlowRouter.getParam('_id');
        var numero = event.target.numero.value;
        var usuario = event.target.usuario.value;
        var modificaciones = event.target.modificaciones.value;
		
        var file = $('#docword').get(0).files[0];

        if(file){
            fsFile = new FS.File(file);
            ProcesosWords.insert(fsFile, function(err, result){
            if(!err) {
                    var procesoWord = '/cfs/files/ProcesosWords/'+result._id;

                    Procesos.update({
                            _id: _id
                        }, {
                            $push:{
                                versiones : {
                                    numero: numero,
                                    usuario: usuario,
                                    modificaciones: modificaciones,
                                    word: procesoWord,
                                    modifAt: new Date()
                                }

                            }
                        });   
                    }
                });
            } else {

                    
                }
        event.target.numero.value = "";
        event.target.usuario.value = "";
        event.target.modificaciones.value = "";

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
            
        toastr["success"]("Nueva Versión añadida");
        
        var url = '/viewvers/'+_id;
        FlowRouter.go(url);
        

        return false;
    }
});

Template.Addversion.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});


Template.Addversion.helpers({
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