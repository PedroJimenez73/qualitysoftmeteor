Template.altausuario.events({
    'submit .form-signup': function(event){
        var email = event.target.email.value;
        var password = event.target.password.value;
        var password2 = event.target.password2.value;
        var first_name = event.target.first_name.value;
        var last_name = event.target.last_name.value;
        var departamento = event.target.departamento.value;

        if(isValidPassword(password) && areValidPasswords(password, password2))
            {
            
                Accounts.createUser({
                    email: email,
                    password: password,
                    profile: {
                        first_name: first_name,
                        last_name: last_name,
                        departamento: departamento
                    }
                }, function(err){
                    if(err){
                        Bert.alert( 'Correo electrónico de otro usuario', 'danger', 'growl-top-left' );
                    } else {
                        Bert.alert( 'Cuenta creada con éxito', 'success', 'growl-top-left' );            
                        FlowRouter.go('/mapa');
                    }
                });
            }
        // Prevent submit
        return false;
    }
    
});

isValidPassword = function(password) {
    if (password.length < 6) {
        FlashMessages.sendError('La contraseña debe tener al menos 6 caracteres');
        return false;
    }
    return true;
};


areValidPasswords = function(password, confirm) {

    if (password !== confirm) {
        FlashMessages.sendError('La contraseña no coincide');
        return false;
    }
    return true;
}



