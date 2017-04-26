Template.Docsma.helpers({
    docs: function(){
        return Docs.find();
    },
    isEnVigor: function () {
    var destino = this.destino;
    return "envigor" === destino;
    },
    isHistorico: function () {
    var destino = this.destino;
    return "historico" === destino;
    },
});

Meteor.subscribe('docs');

Template.Docsma.helpers({
    DocsPdfs: function(){
        return DocsPdfs.find();
    }
});

Meteor.subscribe('DocsPdfs');