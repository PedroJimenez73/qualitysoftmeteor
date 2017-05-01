Template.Resenc.helpers({
    resenc: function(){
        var currentEnc = FlowRouter.getParam('_id');
        return Encuestas.findOne({_id: new Meteor.Collection.ObjectID(currentEnc)});
    }
});

Template.Resenc.events({
    'submit .res-enc': function(){
        var _id = FlowRouter.getParam('_id');
        var preguno = $('#preguno').val();
        var pregdos = $('#pregdos').val();
        var pregtres = $('#pregtres').val();
        var pregcuatro = $('#pregcuatro').val();
        var pregcinco = $('#pregcinco').val();
        var pregseis = $('#pregseis').val();
        var pregsiete = $('#pregsiete').val();

		Meteor.call('resEnc', _id, preguno, pregdos, pregtres, pregcuatro, pregcinco, pregseis, pregsiete);

        FlowRouter.go('/byebye');

        return false;
    }

});