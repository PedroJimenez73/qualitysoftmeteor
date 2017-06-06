Meteor.methods({

    addRiesgo: function(proceso, responsable, riesgo, oportunidad, control){

        Riesgos.insert({
			proceso : proceso,
        	responsable : responsable,
			riesgo : riesgo,
			oportunidad : oportunidad,
			control : control
            
        });

    },
    editRiesgo: function(_id, proceso, responsable, riesgo, oportunidad, control){

        Riesgos.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                proceso : proceso,
                responsable : responsable,
                riesgo : riesgo,
                oportunidad : oportunidad,
                control : control
            }
        });

    },
	removeRiesgo: function(_id){
        Riesgos.remove({_id: new Meteor.Collection.ObjectID(_id)});
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
	addCliente: function(nombre, cif, direccion, telefono, persona, mail){

        Clientes.insert({
			nombre : nombre,
			cif : cif,
			direccion : direccion,
			telefono : telefono,
			persona : persona,
			mail : mail,
            
        });

    },
	editCliente: function(_id, nombre, cif, direccion, telefono, persona, mail){

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
	editDocint: function(_id, nombre, revision, destino, modifAt){

        Internos.update({
            _id: _id
        }, {
            $set:{
                nombre : nombre,
				revision: revision,
				destino : destino,
				modifAt: modifAt

            }
        });

    },
	  editDocpro: function(_id, nombre, revision, destino, modifAt){

        Procesos.update({
            _id: _id
        }, {
            $set:{
                nombre : nombre,
				        revision: revision,
				        destino : destino,
				        modifAt: modifAt

            }
        });

    },
    editDocman: function(_id, version, revision, modifAt){

        Manuales.update({
            _id: _id
        }, {
            $set:{
                version : version,
				revision: revision,
				modifAt: modifAt

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
	removeProg: function(reuniones){
      Planes.update({reuniones: reuniones}, {$pull : {reuniones : reuniones}});
    },
    addInd: function(indicador, riesgo, responsable, formula, proceso, superior, inferior, inicio, fin){

        Indicadores.insert({
			indicador : indicador,
            riesgo: riesgo,
        	responsable: responsable,
            formula : formula,
			proceso : proceso,
			superior : superior,
            inferior : inferior,
			inicio : inicio,
			fin : fin
            
        });

    },
    editInd: function(_id, indicador, formula, proceso, superior, inferior, inicio, fin){

        Indicadores.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                indicador : indicador,
				formula : formula,
				proceso : proceso,
				superior : superior,
                inferior : inferior,
				inicio : inicio,
				fin : fin

            }
        });

    },
	removeInd: function(_id){
        Indicadores.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
    addMed: function(_id, fecha, medicion){

        Indicadores.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $push:{
                mediciones : {
					fecha: fecha,
					medicion: medicion
				}

            }
        });

    },
	removeMed: function(mediciones){
      Indicadores.update({mediciones: mediciones}, {$pull : {mediciones : mediciones}});
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

  sendMailInt: function (nombre, asignados) {
      SSR.compileTemplate('htmlEmail', Assets.getText('maildocint.html'));

      var emailData = {
          nombre: nombre,
      };

      Email.send({
        from: "calidad@firstbook.es",
        to: asignados,
        subject: "Quality Soft: Nuevo documento asignado",
        html: SSR.render('htmlEmail', emailData),
      });
  },
  sendMailReu: function (array_asist, fecha, hora, lugar) {
      SSR.compileTemplate('htmlEmail', Assets.getText('mailreunion.html'));

      var emailData = {
          fecha: fecha,
          hora: hora,
          lugar: lugar
      };

      Email.send({
        from: "calidad@firstbook.es",
        to: array_asist,
        subject: "Quality Soft: Nuevo reunión programada",
        html: SSR.render('htmlEmail', emailData),
      });
  },

  sendMailPro: function (nombre, asignados, tareas) {
      SSR.compileTemplate('htmlEmail', Assets.getText('maildocpro.html'));

      var emailData = {
          nombre: nombre,
          tareas: tareas
      };

      Email.send({
        from: "calidad@firstbook.es",
        to: asignados,
        subject: "Quality Soft: Nuevo documento de proceso asignado",
        html: SSR.render('htmlEmail', emailData),
      });
  },

    sendMailDesv: function (fecha, medicion, nombre, responsable) {
      SSR.compileTemplate('htmlEmail', Assets.getText('maildocdesv.html'));

      var emailData = {
          fecha: fecha,
          medicion: medicion,
          nombre: nombre
      };

      Email.send({
        from: "calidad@firstbook.es",
        to: responsable,
        subject: "Quality Soft: Alerta de desviación",
        html: SSR.render('htmlEmail', emailData),
      });
  },
      sendMailNC: function (fecha, tipo, departamento, descripcion, responsables) {
      SSR.compileTemplate('htmlEmail', Assets.getText('mailNC.html'));

      var emailData = {
          fecha: fecha,
          tipo: tipo,
          departamento: departamento,
          descripcion: descripcion
      };

      Email.send({
        from: "calidad@firstbook.es",
        to: responsables,
        subject: "Quality Soft: Alerta de No Conformidad",
        html: SSR.render('htmlEmail', emailData),
      });
  },
      sendMailEnc: function (cliente, urlEnc) {
      SSR.compileTemplate('htmlEmail', Assets.getText('mailEnc.html'));

      var emailData = {
          urlEnc: urlEnc
      };

      Email.send({
        from: "calidad@firstbook.es",
        to: cliente,
        subject: "Encuesta de Satisfacción de Cliente",
        html: SSR.render('htmlEmail', emailData),
      });
  },
    removeVer: function(versiones){
      Procesos.update({versiones: versiones}, {$pull : {versiones : versiones}});
    },
    addNoconf: function(numero, fecha, tipo, departamento, descripcion, causa, responsables, seguimiento){

        Noconfs.insert({
			numero : numero,
        	fecha : fecha,
			tipo : tipo,
			departamento : departamento,
			descripcion : descripcion,
			causa : causa,
            responsables: responsables,
            seguimiento: seguimiento
            
        });

    },
    editNoconf: function(_id, numero, fecha, tipo, departamento, descripcion, causa, seguimiento){

        Noconfs.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                numero : numero,
				fecha : fecha,
				tipo : tipo,
				departamento : departamento,
				descripcion : descripcion,
				causa : causa,
				seguimiento: seguimiento

            }
        });

    },
	removeNoconf: function(_id){
        Noconfs.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
    addAcc: function(accion, ncasoc, tipo, responsable, fecha, tareas, seguimiento){

        Acciones.insert({
			accion : accion,
        	ncasoc : ncasoc,
			tipo : tipo,
			responsable : responsable,
			fecha : fecha,
			tareas : tareas,
            seguimiento: seguimiento
            
        });

    },
    editAcc: function(_id, accion, ncasoc, tipo, fecha, tareas, seguimiento){

        Acciones.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                accion : accion,
                ncasoc : ncasoc,
                tipo : tipo,
                fecha : fecha,
                tareas : tareas,
                seguimiento: seguimiento

            }
        });

    },
	removeAcc: function(_id){
        Acciones.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
    genEnc: function(cliente, fecha, pre1, pre2, pre3, pre4, pre5, pre6, pre7){

        Encuestas.insert({
			cliente : cliente,
			fecha : fecha,
            pre1 : pre1,
            pre2 : pre2,
            pre3 : pre3,
            pre4 : pre4,
            pre5 : pre5,
            pre6 : pre6,
            pre7 : pre7

            
        });

    },
    resEnc: function(_id, preguno, pregdos, pregtres, pregcuatro, pregcinco, pregseis, pregsiete){

        Encuestas.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                preguno : preguno,
				pregdos : pregdos,
				pregtres : pregtres,
				pregcuatro : pregcuatro,
				pregcinco : pregcinco,
				pregseis : pregseis,
				pregsiete: pregsiete

            }
        });

    },
    addRec: function(fecha, cliente, departamento, descripcion, seguimiento){

        Reclamas.insert({
			fecha : fecha,
        	cliente : cliente,
			departamento : departamento,
			descripcion : descripcion,
            seguimiento: seguimiento
            
        });

    },
    editRec: function(_id, fecha, departamento, descripcion, seguimiento){

        Reclamas.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $set:{
                fecha : fecha,
                departamento : departamento,
                descripcion : descripcion,
                seguimiento: seguimiento

            }
        });

    },
	removeRec: function(_id){
        Reclamas.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
    addTicket: function(fecha, consulta, usuario, mail){

        Tickets.insert({
            fecha: fecha,
			consulta : consulta,
			usuario : usuario,
            mail : mail
            
        });

    },
    removeTicket: function(_id){
        Tickets.remove({_id: new Meteor.Collection.ObjectID(_id)});
    },
    genForm: function(nombre, campo1, campo2, campo3, campo4, campo5){

        Formularios.insert({
			nombre : nombre,
            campo1 : campo1,
            campo2 : campo2,
            campo3 : campo3,
            campo4 : campo4,
            campo5 : campo5
        
        });

    },
    addRegistro: function(_id, valor1, valor2, valor3, valor4, valor5){

        Formularios.update({
            _id: new Meteor.Collection.ObjectID(_id)
        }, {
            $push:{
                registros : {
					valor1 : valor1,
                    valor2 : valor2,
                    valor3 : valor3,
                    valor4 : valor4,
                    valor5 : valor5
				}

            }
        });

    }

});
