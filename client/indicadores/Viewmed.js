Template.Viewmed.helpers({
    viewind: function(){
        var currentInd = FlowRouter.getParam('_id');
        return Indicadores.findOne({_id: new Meteor.Collection.ObjectID(currentInd)});

    },
    isCorrecto: function () {
    var currentInd = FlowRouter.getParam('_id');
    var medicion = this.medicion;
    var indicador = Indicadores.findOne({_id: new Meteor.Collection.ObjectID(currentInd)});;
    var superior = indicador.superior;
    var inferior = indicador.inferior;
    return medicion > inferior && medicion < superior;
    },
    isDesviadoup: function () {
    var currentInd = FlowRouter.getParam('_id');
    var medicion = this.medicion;
    var indicador = Indicadores.findOne({_id: new Meteor.Collection.ObjectID(currentInd)});;
    var superior = indicador.superior;
    var inferior = indicador.inferior;
    return medicion > superior;
    },
    isDesviadodown: function () {
    var currentInd = FlowRouter.getParam('_id');
    var medicion = this.medicion;
    var indicador = Indicadores.findOne({_id: new Meteor.Collection.ObjectID(currentInd)});;
    var superior = indicador.superior;
    var inferior = indicador.inferior;
    return medicion < inferior;
    },
});

Template.Viewmed.events({

    'click #deleteMed': function(){
		   
        var mediciones = this;
        

        Meteor.call('removeMed', mediciones);
                toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "3000",
                "extendedTimeOut": "500",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
                };
            
        toastr["success"]("Medición eliminada correctamente");  
        return false;

    },
    'click .cancel-add': function() {
    	FlowRouter.go('/indicadores');
	},

});