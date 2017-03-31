Template.Matrices.helpers({
    matrices: function(){
        return Matrices.find();
    }
});


Meteor.subscribe('matrices');
