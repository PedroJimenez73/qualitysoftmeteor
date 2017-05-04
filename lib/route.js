Accounts.onLogin(function(){
	FlowRouter.go('/inicio');
});


Accounts.onLogout(function(){
	FlowRouter.go('/');
});


function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId() && !Meteor.loggingIn()) {
    redirect('/login')
  }
}

var privateRoutes = FlowRouter.group({
  name: 'private',
  triggersEnter: [
    checkLoggedIn
  ]
})



FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render("LoginLayout", {main: "Login"});
    }
});

FlowRouter.route('/altausuario', {
    name: 'altausuario',
    action() {
        BlazeLayout.render("AppLayout", {main: "altausuario"});
    }
});

privateRoutes.route('/usuarios', {
    name: 'usuarios',
    action() {
        BlazeLayout.render("AppLayout", {main: "Usuarios"});
    }
});

privateRoutes.route('/organigrama', {
    name: 'organigrama',
    action() {
        BlazeLayout.render("AppLayout", {main: "Organigrama"});
    }
});

privateRoutes.route('/inicio', {
    
    name: 'inicio',
    action() {
        BlazeLayout.render("AppLayout", {main: "Inicio"});
    }
});

privateRoutes.route('/mapa', {
    name: 'mapa',
    action() {
        BlazeLayout.render("AppLayout", {main: "Mapa"});
    }
});

privateRoutes.route('/evalpro', {
    name: 'evalpro',
    action() {
        BlazeLayout.render("AppLayout", {main: "Evalpro"});
    }
});

privateRoutes.route('/proveedores', {
    name: 'proveedores',
    action() {
        BlazeLayout.render("AppLayout", {main: "Proveedores"});
    }
});

privateRoutes.route('/addproveedor', {
    name: 'addproveedor',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addproveedor"});
    }
});

privateRoutes.route('/editproveedor/:_id', {
    name: 'editproveedor',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editproveedor"});
    }
});

privateRoutes.route('/viewproveedor/:_id', {
    name: 'viewproveedor',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewproveedor"});
    }
});

privateRoutes.route('/clientes', {
    name: 'clientes',
    action() {
        BlazeLayout.render("AppLayout", {main: "Clientes"});
    }
});

privateRoutes.route('/addcliente', {
    name: 'addcliente',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addcliente"});
    }
});

privateRoutes.route('/editcliente/:_id', {
    name: 'editcliente',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editcliente"});
    }
});

privateRoutes.route('/viewcliente/:_id', {
    name: 'viewcliente',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewcliente"});
    }
});

privateRoutes.route('/riesgos', {
    name: 'riesgos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Riesgos"});
    }
});

privateRoutes.route('/addriesgo', {
    name: 'addriesgo',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addriesgo"});
    }
});

privateRoutes.route('/addriesgo/:_id', {
    name: 'addriesgo',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addriesgo"});
    }
});

privateRoutes.route('/editriesgo/:_id', {
    name: 'editriesgo',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editriesgo"});
    }
});


privateRoutes.route('/ocompras', {
    name: 'ocompras',
    action() {
        BlazeLayout.render("AppLayout", {main: "oCompras"});
    }
});

privateRoutes.route('/orrhh', {
    name: 'orrhh',
    action() {
        BlazeLayout.render("AppLayout", {main: "oRRHH"});
    }
});

privateRoutes.route('/oproduccion', {
    name: 'oproduccion',
    action() {
        BlazeLayout.render("AppLayout", {main: "oProduccion"});
    }
});

privateRoutes.route('/ofinanciero', {
    name: 'ofinanciero',
    action() {
        BlazeLayout.render("AppLayout", {main: "oFinanciero"});
    }
});

privateRoutes.route('/ocomercial', {
    name: 'ocomercial',
    action() {
        BlazeLayout.render("AppLayout", {main: "oComercial"});
    }
});

privateRoutes.route('/perfilgerencia', {
    name: 'perfilgerencia',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilgerencia"});
    }
});

privateRoutes.route('/perfilprl', {
    name: 'perfilprl',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilprl"});
    }
});

privateRoutes.route('/perfilcomercial', {
    name: 'perfilcomercial',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilcomercial"});
    }
});

privateRoutes.route('/perfilfinanciero', {
    name: 'perfilfinanciero',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilfinanciero"});
    }
});

privateRoutes.route('/perfilcalidad', {
    name: 'perfilcalidad',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilcalidad"});
    }
});

privateRoutes.route('/perfilcompras', {
    name: 'perfilcompras',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilcompras"});
    }
});

privateRoutes.route('/perfilproduccion', {
    name: 'perfilproduccion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilproduccion"});
    }
});

privateRoutes.route('/adddoc', {
    name: 'adddoc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Adddoc"});
    }
});

privateRoutes.route('/documentos', {
    name: 'documentos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Documentos"});
    }
});

privateRoutes.route('/editdoc/:_id', {
    name: 'editdoc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editdoc"});
    }
});

privateRoutes.route('/vehiculos', {
    name: 'vehiculos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Vehiculos"});
    }
});

privateRoutes.route('/addveh', {
    name: 'addveh',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addveh"});
    }
});

privateRoutes.route('/editveh/:_id', {
    name: 'editveh',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editveh"});
    }
});

privateRoutes.route('/viewveh/:_id', {
    name: 'viewveh',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewveh"});
    }
});

privateRoutes.route('/addope/:_id', {
    name: 'addope',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addope"});
    }
});

privateRoutes.route('/formacion', {
    name: 'formacion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Formacion"});
    }
});

privateRoutes.route('/planesform', {
    name: 'planesform',
    action() {
        BlazeLayout.render("AppLayout", {main: "Planesform"});
    }
});

privateRoutes.route('/addcurso', {
    name: 'addcurso',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addcurso"});
    }
});

privateRoutes.route('/editcurso/:_id', {
    name: 'editcurso',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editcurso"});
    }
});

privateRoutes.route('/viewcurso/:_id', {
    name: 'viewcurso',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewcurso"});
    }
});

privateRoutes.route('/procedplan', {
    name: 'procedplan',
    action() {
        BlazeLayout.render("AppLayout", {main: "Procedplan"});
    }
});

privateRoutes.route('/planes', {
    name: 'planes',
    action() {
        BlazeLayout.render("AppLayout", {main: "Planes"});
    }
});

privateRoutes.route('/addplan', {
    name: 'addplan',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addplan"});
    }
});

privateRoutes.route('/viewplan/:_id', {
    name: 'viewplan',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewplan"});
    }
});

privateRoutes.route('/editplan/:_id', {
    name: 'editplan',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editplan"});
    }
});

privateRoutes.route('/addprog/:_id', {
    name: 'addprog',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addprog"});
    }
});

privateRoutes.route('/procedma', {
    name: 'procedma',
    action() {
        BlazeLayout.render("AppLayout", {main: "Procedma"});
    }
});

privateRoutes.route('/aspectos', {
    name: 'aspectos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Aspectos"});
    }
});

privateRoutes.route('/addaspecto', {
    name: 'addaspecto',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addaspecto"});
    }
});

privateRoutes.route('/viewaspecto/:_id', {
    name: 'viewaspecto',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewaspecto"});
    }
});

privateRoutes.route('/editaspecto/:_id', {
    name: 'editaspecto',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editaspecto"});
    }
});

privateRoutes.route('/adddocma', {
    name: 'adddocma',
    action() {
        BlazeLayout.render("AppLayout", {main: "Adddocma"});
    }
});

privateRoutes.route('/docsma', {
    name: 'docsma',
    action() {
        BlazeLayout.render("AppLayout", {main: "Docsma"});
    }
});

privateRoutes.route('/editdocma/:_id', {
    name: 'editdocma',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editdocma"});
    }
});

privateRoutes.route('/sgi', {
    name: 'sgi',
    action() {
        BlazeLayout.render("AppLayout", {main: "Sgi"});
    }
});

privateRoutes.route('/internos', {
    name: 'internos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Internos"});
    }
});

privateRoutes.route('/addint', {
    name: 'addint',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addint"});
    }
});



privateRoutes.route('/editint/:_id', {
    name: 'editint',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editint"});
    }
});

privateRoutes.route('/procesos', {
    name: 'procesos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Procesos"});
    }
});

privateRoutes.route('/addpro', {
    name: 'addpro',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addpro"});
    }
});

privateRoutes.route('/viewpro/:_id', {
    name: 'viewpro',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewpro"});
    }
});

privateRoutes.route('/editpro/:_id', {
    name: 'editpro',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editpro"});
    }
});

privateRoutes.route('/addversion/:_id', {
    name: 'addversion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addversion"});
    }
});

privateRoutes.route('/organizacion', {
    name: 'organizacion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Organizacion"});
    }
});

privateRoutes.route('/manualcm', {
    name: 'manualcm',
    action() {
        BlazeLayout.render("AppLayout", {main: "Manualcm"});
    }
});

privateRoutes.route('/addman', {
    name: 'addman',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addman"});
    }
});

privateRoutes.route('/editman/:_id', {
    name: 'editman',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editman"});
    }
});


privateRoutes.route('/indicadores', {
    name: 'indicadores',
    action() {
        BlazeLayout.render("AppLayout", {main: "Indicadores"});
    }
});

privateRoutes.route('/addind', {
    name: 'addind',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addindicador"});
    }
});

privateRoutes.route('/addind/:_id', {
    name: 'addind',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addindicador"});
    }
});


privateRoutes.route('/viewind/:_id', {
    name: 'viewind',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewindicador"});
    }
});

privateRoutes.route('/editind/:_id', {
    name: 'editind',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editindicador"});
    }
});

privateRoutes.route('/addmed/:_id', {
    name: 'addmed',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addmed"});
    }
});

privateRoutes.route('/viewmed/:_id', {
    name: 'viewmed',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewmed"});
    }
});

privateRoutes.route('/noconfs', {
    name: 'noconfs',
    action() {
        BlazeLayout.render("AppLayout", {main: "Noconform"});
    }
});

privateRoutes.route('/addnoconf', {
    name: 'addnoconf',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addnoconf"});
    }
});


privateRoutes.route('/viewnoconf/:_id', {
    name: 'viewnoconf',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewnoconf"});
    }
});

privateRoutes.route('/editnoconf/:_id', {
    name: 'editnoconf',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editnoconf"});
    }
});

privateRoutes.route('/acciones', {
    name: 'acciones',
    action() {
        BlazeLayout.render("AppLayout", {main: "Acciones"});
    }
});

privateRoutes.route('/addacc', {
    name: 'addacc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addacc"});
    }
});

privateRoutes.route('/addacc/:_id', {
    name: 'addacc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addacc"});
    }
});

privateRoutes.route('/editacc/:_id', {
    name: 'editacc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editacc"});
    }
});

privateRoutes.route('/viewacc/:_id', {
    name: 'viewacc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewacc"});
    }
});

privateRoutes.route('/ranking', {
    name: 'ranking',
    action() {
        BlazeLayout.render("AppLayout", {main: "Ranking"});
    }
});

privateRoutes.route('/encuestas', {
    name: 'encuestas',
    action() {
        BlazeLayout.render("AppLayout", {main: "Encuestas"});
    }
});

privateRoutes.route('/genenc', {
    name: 'genenc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Genenc"});
    }
});

privateRoutes.route('/envenc/:_id', {
    name: 'envenc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Envenc"});
    }
});

FlowRouter.route('/resenc/:_id', {
    name: 'resenc',
    action() {
        BlazeLayout.render("EncLayout", {main: "Resenc"});
    }
});

FlowRouter.route('/byebye', {
    name: 'byebye',
    action() {
        BlazeLayout.render("EncLayout", {main: "Byebye"});
    }
});

privateRoutes.route('/viewenc/:_id', {
    name: 'viewenc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewenc"});
    }
});


privateRoutes.route('/estadisticas', {
    name: 'estadisticas',
    action() {
        BlazeLayout.render("AppLayout", {main: "Estadisticas"});
    }
});

privateRoutes.route('/reclamaciones', {
    name: 'reclamaciones',
    action() {
        BlazeLayout.render("AppLayout", {main: "Reclamaciones"});
    }
});

privateRoutes.route('/addrec', {
    name: 'addrec',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addrec"});
    }
});

privateRoutes.route('/viewrec/:_id', {
    name: 'viewrec',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewrec"});
    }
});

privateRoutes.route('/editrec/:_id', {
    name: 'editrec',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editrec"});
    }
});

privateRoutes.route('/viewvers/:_id', {
    name: 'viewvers',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewvers"});
    }
});

privateRoutes.route('/requisitos', {
    name: 'requisitos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Requisitos"});
    }
});

privateRoutes.route('/necesidades', {
    name: 'necesidades',
    action() {
        BlazeLayout.render("AppLayout", {main: "Necesidades"});
    }
});

privateRoutes.route('/apoyo', {
    name: 'apoyo',
    action() {
        BlazeLayout.render("AppLayout", {main: "Apoyo"});
    }
});

privateRoutes.route('/planificacion', {
    name: 'planificacion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Planificacion"});
    }
});

privateRoutes.route('/liderazgo', {
    name: 'liderazgo',
    action() {
        BlazeLayout.render("AppLayout", {main: "Liderazgo"});
    }
});

privateRoutes.route('/mejora', {
    name: 'mejora',
    action() {
        BlazeLayout.render("AppLayout", {main: "Mejora"});
    }
});

privateRoutes.route('/evaluacion', {
    name: 'evaluacion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Evaluacion"});
    }
});

privateRoutes.route('/soporte', {
    name: 'soporte',
    action() {
        BlazeLayout.render("AppLayout", {main: "Soporte"});
    }
});