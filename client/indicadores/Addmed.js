Template.Addmed.helpers({
    addmed: function(){
        var currentInd = FlowRouter.getParam('_id');
        return Indicadores.findOne({_id: currentInd});
    }
});

Template.Addmed.events({
    'click .cancel-add': function() {
        var currentInd = FlowRouter.getParam('_id');
    	FlowRouter.go('/viewmed/'+currentInd);
	},

    'submit .add-med': function(event){
        var _id = FlowRouter.getParam('_id');
        var fecha = event.target.fecha.value;
        var medicion = parseInt(event.target.medicion.value);
		
		Meteor.call('addMed', _id, fecha, medicion);

        var indicador = Indicadores.findOne({_id: new Meteor.Collection.ObjectID(_id)});;
        var superior = indicador.superior;
        var inferior = indicador.inferior;
        var nombre = indicador.indicador;
        var responsable = indicador.responsable;

        if (medicion > inferior && medicion < superior) {

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
            
        toastr["success"]("Medición añadida"); 

        } else {
            Meteor.call('sendMailDesv', fecha, medicion, nombre, responsable);
        
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
            
        toastr["success"]("La medición ha producido una desviación, se ha enviado una alerta por mail al responsable"); 

        }
        
        FlowRouter.go('/viewmed/'+_id);
        return false;
    }
});

