
Template.Ranking.helpers({
  counterResponsables: function() {
    var responsables = Acciones.find().fetch();
    return _.chain(responsables).pluck('responsable')
      .countBy()
      .map(function(v, k) {return {responsable: k, count: v};})
      .sortBy('count')
      .value().reverse();
  }
});


Meteor.subscribe('acciones');