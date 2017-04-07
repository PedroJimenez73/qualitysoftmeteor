
Template.oProduccion.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

Template.oProduccion.helpers({
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
    isEmpleadoproduccion: function() {
        return Roles.userIsInRole(this._id, 'empleadoproduccion') ? 'empleadoproduccion' : '';
    }
});