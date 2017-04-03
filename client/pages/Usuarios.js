
Template.Usuarios.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

Template.Usuarios.helpers({
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
    isAdmin: function() {
        return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
    },
    dateFormat: function() {
        return moment(this.createdAt).format('LLLL');
    }
});

Template.Usuarios.events({
    'click .user_id': function() {
        Session.set('currentUser', this);
    },
    'click .toggle-admin': function() {
       Meteor.call('toggleAdmin', this._id);
    }
});