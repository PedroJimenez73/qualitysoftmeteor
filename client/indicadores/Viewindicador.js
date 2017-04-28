Template.Viewindicador.helpers({
    viewind: function(){
        var currentInd = FlowRouter.getParam('_id');
        return Indicadores.findOne({_id: new Meteor.Collection.ObjectID(currentInd)});

    }
});