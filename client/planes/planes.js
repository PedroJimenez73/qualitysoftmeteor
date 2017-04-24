Template.Planes.helpers({
    planes: function(){
        return Planes.find();
    }
});


Meteor.subscribe('planes');