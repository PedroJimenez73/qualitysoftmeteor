
Template.oFinanciero.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

Template.oFinanciero.helpers({
    users: function(){
        return Meteor.users.find();
    },
    usersurname: function(){
        return this.profile.usersurname;
    },
    userEmail: function() {
        return this.emails[0].address;
    },
    userTelefono: function() {
        return this.profile.telefono;
    },
    userDepartamento: function() {
        return this.profile.departamento;
    },
    isEmpleadoadyfin: function() {
        return Roles.userIsInRole(this._id, 'empleadoadyfin') ? 'empleadoadyfin' : '';
    }
});