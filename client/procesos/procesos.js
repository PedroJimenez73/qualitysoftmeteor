Template.Procesos.helpers({
    procesos: function(){
        return Procesos.find();
    },
    isEnVigor: function () {
    var destino = this.destino;
    return "En Vigor" === destino;
    },
    isHistorico: function () {
    var destino = this.destino;
    return "Historico" === destino;
    }
});