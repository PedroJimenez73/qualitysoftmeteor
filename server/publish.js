Meteor.publish('matrices', function(){
	return Matrices.find({});
  });