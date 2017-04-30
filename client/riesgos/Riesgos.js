Template.Riesgos.helpers({
    riesgos: function(){
        return Riesgos.find();
    }
});


Meteor.subscribe('riesgos');
