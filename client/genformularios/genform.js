Template.Genform.events({

    'click .cancelaradd': function() {
    	FlowRouter.go('/formularios');
	},
    'submit .gen-form': function(event){
        var nombre = event.target.nombre.value;
        var campo1 = event.target.campo1.value;
        var campo2 = event.target.campo2.value;
        var campo3 = event.target.campo3.value;
        var campo4 = event.target.campo4.value;
        var campo5 = event.target.campo5.value;
        
        
        
		Meteor.call('genForm', nombre, campo1, campo2, campo3, campo4, campo5);

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
            
        toastr["success"]("Nuevo Formulario creado");
        FlowRouter.go('/formularios');
        

        return false;
    }

});