Meteor.methods({

	/*postSignUp: function (departamento) {
		console.log(userId);
    
    	Roles.addUsersToRoles(userId, ['departamento']);

	},*/

    addMatriz: function(proceso, responsable, causacambio, riesgo, oportunidad, controlfrecuencia, impacto, probabilidad, ponderacion, accion){

        Matrices.insert({
			proceso : proceso,
        	responsable : responsable,
			causacambio : causacambio,
			riesgo : riesgo,
			oportunidad : oportunidad,
			controlfrecuencia : controlfrecuencia,
			impacto : impacto,
			probabilidad : probabilidad,
			ponderacion : ponderacion,
			accion : accion
            
        });

    },
	addProveedor: function(nombre, servicio, cif, direccion, telefono, persona, mail, pago, nc, eval, fechamodif){

        Proveedores.insert({
			nombre : nombre,
        	servicio : servicio,
			cif : cif,
			direccion : direccion,
			telefono : telefono,
			persona : persona,
			mail : mail,
			pago : pago,
			nc : nc,
			eval : eval,
			fechamodif : fechamodif
            
        });

    },
	editProveedor: function(_id, nombre, servicio, cif, direccion, telefono, persona, mail, pago, nc, eval, fechamodif){

        Proveedores.update({
            _id: _id
        }, {
            $set:{
                nombre : nombre,
				servicio : servicio,
				cif : cif,
				direccion : direccion,
				telefono : telefono,
				persona : persona,
				mail : mail,
				pago : pago,
				nc : nc,
				eval : eval,
				fechamodif : fechamodif

            }
        });

    },
	removeProveedor: function(_id){
        Proveedores.remove({_id: _id});
    }

});
