Template.Viewreg.helpers({
    viewreg: function(){
        var currentForm = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Formularios.findOne({_id: new Meteor.Collection.ObjectID(currentForm)});
    }
});

