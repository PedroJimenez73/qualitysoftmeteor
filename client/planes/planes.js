Template.Planes.helpers({
    planes: function(){
        return Planes.find();
    }
});


Meteor.subscribe('planes');

Template.Planes.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

Template.Planes.helpers({
    users: function(){
        return Meteor.users.find();
    },
    isAdmin: function() {
        return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
    },
    isRespCMS: function() {
        return Roles.userIsInRole(this._id, 'responsableCMS') ? 'responsableCMS' : '';
    },
    isGerente: function() {
        return Roles.userIsInRole(this._id, 'gerente') ? 'gerente' : '';
    }
});