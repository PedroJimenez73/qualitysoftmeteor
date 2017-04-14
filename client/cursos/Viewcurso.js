Template.Viewcurso.helpers({
    editcurso: function(){
        var currentCurso = FlowRouter.getParam('_id');
        console.log(currentCurso);
        return Cursos.findOne({_id: new Meteor.Collection.ObjectID(currentCurso)});
    }
});