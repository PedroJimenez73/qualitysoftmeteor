Template.Viewcurso.helpers({
    editcurso: function(){
        var currentCurso = FlowRouter.getParam('_id');
        return Cursos.findOne({_id: new Meteor.Collection.ObjectID(currentCurso)});
    }
});