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

    }

});
