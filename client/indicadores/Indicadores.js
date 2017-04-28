Template.Indicadores.helpers({
    indicadores: function(){
        return Indicadores.find();
    }
});


Meteor.subscribe('indicadores');