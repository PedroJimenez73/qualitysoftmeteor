Template.Addregistro.helpers({
    addregistro: function(){
        var currentForm = FlowRouter.getParam('_id');
        //return Cursos.findOne({_id: currentCurso});
        return Formularios.findOne({_id: new Meteor.Collection.ObjectID(currentForm)});
    }
});

Template.Addregistro.events({
    'submit .add-registro': function(event){
        var _id = FlowRouter.getParam('_id');

        var valor1 = event.target.valor1.value;
        var valor2 = event.target.valor2.value;
        var valor3 = event.target.valor3.value;
        var valor4 = event.target.valor4.value;
        var valor5 = event.target.valor5.value;

        Meteor.call('addRegistro', _id, valor1, valor2, valor3, valor4, valor5);
        FlowRouter.go('/formularios');
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/formularios');
	}

});
