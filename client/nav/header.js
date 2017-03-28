Template.header.events({
    'click .logout': function(event){
        Meteor.logout(function(err){
            if(err){
                Bert.alert( 'Error de conexión', 'danger', 'growl-top-left');
            } else {
                Bert.alert( '¡Hasta Pronto!', 'success', 'growl-top-left' );
                FlowRouter.go('/');
            }
        });
    }
});

Template.header.onCreated(function(){
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

