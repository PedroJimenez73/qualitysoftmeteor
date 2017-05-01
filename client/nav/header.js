Template.header.events({
    'click .logout': function(event){
        Meteor.logout(function(err){
            if(err){
                Bert.alert( 'Error de conexión', 'danger', 'growl-top-left');
            } else {
                //Bert.alert( '¡Hasta Pronto!', 'success', 'growl-top-left' );

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
            
                toastr["success"]("¡Hasta pronto!");
                
                //FlowRouter.go('/');
            }
        });
    }
});

Template.header.onCreated(function(){
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

