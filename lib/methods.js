Meteor.methods({

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

        Proves.insert({
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

        Proves.update({
            _id: new Meteor.Collection.ObjectID(_id)
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
        Proves.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
	addCliente: function(nombre, cif, direccion, telefono, persona, mail, fechamodif){

        Clientes.insert({
			nombre : nombre,
			cif : cif,
			direccion : direccion,
			telefono : telefono,
			persona : persona,
			mail : mail,
			fechamodif : fechamodif
            
        });

    },
	editCliente: function(_id, nombre, cif, direccion, telefono, persona, mail, fechamodif){

        Clientes.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                nombre : nombre,
				cif : cif,
				direccion : direccion,
				telefono : telefono,
				persona : persona,
				mail : mail,
				fechamodif : fechamodif

            }
        });

    },
	removeCliente: function(_id){
        Clientes.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
	editDocumento: function(_id, nombre, destino){

        Products.update({
            _id: _id
        }, {
            $set:{
                nombre : nombre,
				destino : destino

            }
        });

    },
	editDocma: function(_id, nombre, destino){

        Docs.update({
            _id: _id
        }, {
            $set:{
                nombre : nombre,
				destino : destino

            }
        });

    },
	addVeh: function(numero, nombre, modelo, matricula, anyo, perioitv, fechamodif){

        Vehiculos.insert({
			numero : numero,
        	nombre : nombre,
			modelo : modelo,
			matricula : matricula,
			anyo : anyo,
			perioitv : perioitv,
			fechamodif : fechamodif
            
        });

    },
	editVeh: function( _id, numero, nombre, modelo, matricula, anyo, perioitv, fechamodif){

        Vehiculos.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                numero : numero,
				nombre : nombre,
				modelo : modelo,
				matricula : matricula,
				anyo : anyo,
				perioitv : perioitv,
				fechamodif : fechamodif

            }
        });

    },
	removeVehiculo: function(_id){
        Vehiculos.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
	addCurso: function(titulo, organizador, horas, asistentes, fechas, observaciones, fechamodif){

        Cursos.insert({
			titulo : titulo,
        	organizador : organizador,
			horas : horas,
			asistentes : asistentes,
			fechas : fechas,
			observaciones : observaciones,
			fechamodif : fechamodif
            
        });

    },
	editCurso: function(_id, titulo, organizador, horas, asistentes, fechas, observaciones, fechamodif){

        Cursos.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                titulo : titulo,
				organizador : organizador,
				horas : horas,
				asistentes : asistentes,
				fechas : fechas,
				observaciones : observaciones,
				fechamodif : fechamodif

            }
        });

    },
	removeCurso: function(_id){
        Cursos.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
	addOperacion: function(_id, operacion, fecha, importe, kms, garantia, varios){

        Vehiculos.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $push:{
                operaciones : {
					operacion: operacion,
					fecha: fecha,
					importe: importe,
					kms: kms,
					garantia: garantia,
					varios: varios
				}

            }
        });

    },
	addPlan: function(fecha, alcance, objeto, responsable, documentacion, sistematica){

        Planes.insert({
			fecha : fecha,
        	alcance : alcance,
			objeto : objeto,
			responsable : responsable,
			documentacion : documentacion,
			sistematica : sistematica
            
        });

    },
	editPlan: function(_id, fecha, alcance, objeto, responsable, documentacion, sistematica){

        Planes.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                fecha : fecha,
				alcance : alcance,
				objeto : objeto,
				responsable : responsable,
				documentacion : documentacion,
				sistematica : sistematica

            }
        });

    },
	removePlan: function(_id){
        Planes.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
	addProg: function(_id, array_asist, fecha, hora, lugar){

        Planes.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $push:{
                reuniones : {
					array_asist: array_asist,
					fecha: fecha,
					hora: hora,
					lugar: lugar
				}

            }
        });

    },
	addAspecto: function(actividad, aspecto, cuno, cdos, ctres, ccuatro, significancia){

        Aspectos.insert({
			actividad : actividad,
        	aspecto : aspecto,
			cuno : cuno,
			cdos : cdos,
			ctres : ctres,
			ccuatro : ccuatro,
			significancia: significancia
            
        });

    },
	editAspecto: function(_id, actividad, aspecto, cuno, cdos, ctres, ccuatro, significancia){

        Aspectos.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                actividad : actividad,
				aspecto : aspecto,
				cuno : cuno,
				cdos : cdos,
				ctres : ctres,
				ccuatro : ccuatro,
				significancia: significancia

            }
        });

    },
	removeAspecto: function(_id){
        Aspectos.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },

});
