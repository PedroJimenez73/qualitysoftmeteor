Template.Login.events({
    'submit .form-signin': function(event){
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email, password, function(err){
            if(err) {
                event.target.email.value = email;
                event.target.password.value = password;
                Bert.alert( 'Datos incorrectos, contacte con el administrador', 'danger', 'growl-top-left' );
            } else {
                //Bert.alert( '¡Bienvenido de nuevo!', 'success', 'growl-top-left' );

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
            
                toastr["success"]("Bienvenido de nuevo a Quality Soft");

                FlowRouter.go('/mapa');
            }
        });

        return false;
    }

});