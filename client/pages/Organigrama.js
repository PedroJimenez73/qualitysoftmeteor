
Template.Organigrama.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

Template.Organigrama.helpers({
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
    isAdmin: function() {
        return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
    },
    isGerente: function() {
        return Roles.userIsInRole(this._id, 'gerente') ? 'gerente' : '';
    },
    isResponsableCMS: function() {
        return Roles.userIsInRole(this._id, 'responsableCMS') ? 'responsableCMS' : '';
    },
    isResponsablePRL: function() {
        return Roles.userIsInRole(this._id, 'responsablePRL') ? 'responsablePRL' : '';
    },
    isDtorcompras: function() {
        return Roles.userIsInRole(this._id, 'dtorcompras') ? 'dtorcompras' : '';
    },
    isDtorrrhh: function() {
        return Roles.userIsInRole(this._id, 'dtorrrhh') ? 'dtorrrhh' : '';
    },
    isDtorproduccion: function() {
        return Roles.userIsInRole(this._id, 'dtorproduccion') ? 'dtorproduccion' : '';
    },
    isDtorfinanciero: function() {
        return Roles.userIsInRole(this._id, 'dtorfinanciero') ? 'dtorfinanciero' : '';
    },
    isDtorcomercial: function() {
        return Roles.userIsInRole(this._id, 'dtorcomercial') ? 'dtorcomercial' : '';
    },
    
    dateFormat: function() {
        return moment(this.createdAt).format('LLLL');
    }
});