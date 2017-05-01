Template.Reclamaciones.helpers({
    reclamas: function(){
        return Reclamas.find();
    }
});


Meteor.subscribe('reclamas');