Template.Estadisticas.helpers({
    encuestas: function(){
        return Encuestas.find();
    },
    counterResUno: function() {
    var resultados = Encuestas.find().fetch();
    return _.chain(resultados).pluck('preguno')
      .countBy()
      .map(function(v, k) {return {preguno: k, count: v};})
      .sortBy('count')
      .value().reverse();
    },
    counterResDos: function() {
    var resultados = Encuestas.find().fetch();
    return _.chain(resultados).pluck('pregdos')
      .countBy()
      .map(function(v, k) {return {pregdos: k, count: v};})
      .sortBy('count')
      .value().reverse();
    },
    counterResTres: function() {
    var resultados = Encuestas.find().fetch();
    return _.chain(resultados).pluck('pregtres')
      .countBy()
      .map(function(v, k) {return {pregtres: k, count: v};})
      .sortBy('count')
      .value().reverse();
    },
    counterResCuatro: function() {
    var resultados = Encuestas.find().fetch();
    return _.chain(resultados).pluck('pregcuatro')
      .countBy()
      .map(function(v, k) {return {pregcuatro: k, count: v};})
      .sortBy('count')
      .value().reverse();
    },
    counterResCinco: function() {
    var resultados = Encuestas.find().fetch();
    return _.chain(resultados).pluck('pregcinco')
      .countBy()
      .map(function(v, k) {return {pregcinco: k, count: v};})
      .sortBy('count')
      .value().reverse();
    },
    counterResSeis: function() {
    var resultados = Encuestas.find().fetch();
    return _.chain(resultados).pluck('pregseis')
      .countBy()
      .map(function(v, k) {return {pregseis: k, count: v};})
      .sortBy('count')
      .value().reverse();
    },
    counterResSiete: function() {
    var resultados = Encuestas.find().fetch();
    return _.chain(resultados).pluck('pregsiete')
      .countBy()
      .map(function(v, k) {return {pregsiete: k, count: v};})
      .sortBy('count')
      .value().reverse();
    }
});

Meteor.subscribe('encuestas');
