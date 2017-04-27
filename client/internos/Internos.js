

Template.Internos.helpers({
    internos: function(){
        return Internos.find();
    },
    isEnVigor: function () {
    var destino = this.destino;
    console.log(destino);
    return "envigor" === destino;
    },
    isHistorico: function () {
    var destino = this.destino;
    console.log(destino);
    return "historico" === destino;
    },
    createdAtForm: function() {
        return moment(this.createdAt).format('DD-MM-YYYY');
    },
    modifAtForm: function(){
        return moment(this.modifAt).format('DD-MM-YYYY');
    }
});