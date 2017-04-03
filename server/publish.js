Meteor.publish('matrices', function(){
	return Matrices.find({});
  });

Meteor.publish('allUsers', function(){
    return Meteor.users.find();
});