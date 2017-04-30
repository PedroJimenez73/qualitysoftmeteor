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
    indicadores: function(){
        return Indicadores.find();
    }
});

Meteor.subscribe('indicadores');

Template.Viewmed.onRendered(function () {

    Tracker.autorun(function(){
        var currentInd = FlowRouter.getParam('_id');
        var indicador = Indicadores.find({_id: new Meteor.Collection.ObjectID(currentInd)}).fetch().map(function(Indicadores) {
               return Indicadores.mediciones;
        });
        medicion = indicador[0];
        var fechas = _.reduce(medicion, function(memo, medicion) {
            return memo.concat(medicion.fecha);
        }, []);
         var mediciones = _.reduce(medicion, function(memo, medicion) {
            return memo.concat(medicion.medicion);
        }, []);

        console.log(fechas);   
        console.log(mediciones);

            chartData = {
                        labels: fechas,
                        datasets: [
                            {
                                label: "My First dataset",
                                fillColor: "rgba(220,220,220,0.2)",
                                strokeColor: "blue",
                                pointColor: "rgba(220,220,220,1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(220,220,220,1)",
                                data: mediciones
                            }
                        ]
                    };
                myChart = new Chart(document.getElementById("canvas").getContext("2d")).Line(chartData, {
                responsive: true
                });


    });

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

