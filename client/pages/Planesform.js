Template.Planesform.helpers({
    cursos: function(){
        return Cursos.find();
    }
});

Meteor.subscribe('cursos');