Template.Addrec.events({
	'click .cancelaradd': function() {
    	FlowRouter.go('/reclamaciones');
	},
    'submit .add-rec': function(event){
        var fecha = event.target.fecha.value;
        var cliente = event.target.cliente.value;
        var departamento = event.target.departamento.value;
        var descripcion = event.target.descripcion.value;
        var seguimiento = $('#seguimiento').val();

		Meteor.call('addRec', fecha, cliente, departamento, descripcion, seguimiento);

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
            
        toastr["success"]("Nueva Reclamación añadida");
        
        FlowRouter.go('/reclamaciones');
        

        return false;
    }

});

Template.Addrec.helpers({
    clientes: function(){
        return Clientes.find();
    },
    nombre: function(){
        return this.nombre;
    }
});



