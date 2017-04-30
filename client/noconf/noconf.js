Template.Noconform.helpers({
    noconfs: function(){
        return Noconfs.find();
    }
});


Meteor.subscribe('noconfs');