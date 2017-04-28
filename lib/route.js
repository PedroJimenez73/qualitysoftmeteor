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

FlowRouter.route('/usuarios', {
    name: 'usuarios',
    action() {
        BlazeLayout.render("AppLayout", {main: "Usuarios"});
    }
});

FlowRouter.route('/organigrama', {
    name: 'organigrama',
    action() {
        BlazeLayout.render("AppLayout", {main: "Organigrama"});
    }
});

FlowRouter.route('/inicio', {
    name: 'inicio',
    action() {
        BlazeLayout.render("AppLayout", {main: "Inicio"});
    }
});

FlowRouter.route('/mapa', {
    name: 'mapa',
    action() {
        BlazeLayout.render("AppLayout", {main: "Mapa"});
    }
});

FlowRouter.route('/evalpro', {
    name: 'evalpro',
    action() {
        BlazeLayout.render("AppLayout", {main: "Evalpro"});
    }
});

FlowRouter.route('/proveedores', {
    name: 'proveedores',
    action() {
        BlazeLayout.render("AppLayout", {main: "Proveedores"});
    }
});

FlowRouter.route('/addproveedor', {
    name: 'addproveedor',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addproveedor"});
    }
});

FlowRouter.route('/editproveedor/:_id', {
    name: 'editproveedor',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editproveedor"});
    }
});

FlowRouter.route('/viewproveedor/:_id', {
    name: 'viewproveedor',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewproveedor"});
    }
});

FlowRouter.route('/clientes', {
    name: 'clientes',
    action() {
        BlazeLayout.render("AppLayout", {main: "Clientes"});
    }
});

FlowRouter.route('/addcliente', {
    name: 'addcliente',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addcliente"});
    }
});

FlowRouter.route('/editcliente/:_id', {
    name: 'editcliente',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editcliente"});
    }
});

FlowRouter.route('/viewcliente/:_id', {
    name: 'viewcliente',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewcliente"});
    }
});

FlowRouter.route('/riesgos', {
    name: 'riesgos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Riesgos"});
    }
});

FlowRouter.route('/matrices', {
    name: 'matrices',
    action() {
        BlazeLayout.render("AppLayout", {main: "Matrices"});
    }
});

FlowRouter.route('/addmatriz', {
    name: 'addmatriz',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addmatriz"});
    }
});


FlowRouter.route('/ocompras', {
    name: 'ocompras',
    action() {
        BlazeLayout.render("AppLayout", {main: "oCompras"});
    }
});

FlowRouter.route('/orrhh', {
    name: 'orrhh',
    action() {
        BlazeLayout.render("AppLayout", {main: "oRRHH"});
    }
});

FlowRouter.route('/oproduccion', {
    name: 'oproduccion',
    action() {
        BlazeLayout.render("AppLayout", {main: "oProduccion"});
    }
});

FlowRouter.route('/ofinanciero', {
    name: 'ofinanciero',
    action() {
        BlazeLayout.render("AppLayout", {main: "oFinanciero"});
    }
});

FlowRouter.route('/ocomercial', {
    name: 'ocomercial',
    action() {
        BlazeLayout.render("AppLayout", {main: "oComercial"});
    }
});

FlowRouter.route('/perfilgerencia', {
    name: 'perfilgerencia',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilgerencia"});
    }
});

FlowRouter.route('/perfilprl', {
    name: 'perfilprl',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilprl"});
    }
});

FlowRouter.route('/perfilcomercial', {
    name: 'perfilcomercial',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilcomercial"});
    }
});

FlowRouter.route('/perfilfinanciero', {
    name: 'perfilfinanciero',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilfinanciero"});
    }
});

FlowRouter.route('/perfilcalidad', {
    name: 'perfilcalidad',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilcalidad"});
    }
});

FlowRouter.route('/perfilcompras', {
    name: 'perfilcompras',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilcompras"});
    }
});

FlowRouter.route('/perfilproduccion', {
    name: 'perfilproduccion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Perfilproduccion"});
    }
});

FlowRouter.route('/adddoc', {
    name: 'adddoc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Adddoc"});
    }
});

FlowRouter.route('/documentos', {
    name: 'documentos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Documentos"});
    }
});

FlowRouter.route('/editdoc/:_id', {
    name: 'editdoc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editdoc"});
    }
});

FlowRouter.route('/vehiculos', {
    name: 'vehiculos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Vehiculos"});
    }
});

FlowRouter.route('/addveh', {
    name: 'addveh',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addveh"});
    }
});

FlowRouter.route('/editveh/:_id', {
    name: 'editveh',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editveh"});
    }
});

FlowRouter.route('/viewveh/:_id', {
    name: 'viewveh',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewveh"});
    }
});

FlowRouter.route('/addope/:_id', {
    name: 'addope',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addope"});
    }
});

FlowRouter.route('/formacion', {
    name: 'formacion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Formacion"});
    }
});

FlowRouter.route('/planesform', {
    name: 'planesform',
    action() {
        BlazeLayout.render("AppLayout", {main: "Planesform"});
    }
});

FlowRouter.route('/addcurso', {
    name: 'addcurso',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addcurso"});
    }
});

FlowRouter.route('/editcurso/:_id', {
    name: 'editcurso',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editcurso"});
    }
});

FlowRouter.route('/viewcurso/:_id', {
    name: 'viewcurso',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewcurso"});
    }
});

FlowRouter.route('/procedplan', {
    name: 'procedplan',
    action() {
        BlazeLayout.render("AppLayout", {main: "Procedplan"});
    }
});

FlowRouter.route('/planes', {
    name: 'planes',
    action() {
        BlazeLayout.render("AppLayout", {main: "Planes"});
    }
});

FlowRouter.route('/addplan', {
    name: 'addplan',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addplan"});
    }
});

FlowRouter.route('/viewplan/:_id', {
    name: 'viewplan',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewplan"});
    }
});

FlowRouter.route('/editplan/:_id', {
    name: 'editplan',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editplan"});
    }
});

FlowRouter.route('/addprog/:_id', {
    name: 'addprog',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addprog"});
    }
});

FlowRouter.route('/procedma', {
    name: 'procedma',
    action() {
        BlazeLayout.render("AppLayout", {main: "Procedma"});
    }
});

FlowRouter.route('/aspectos', {
    name: 'aspectos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Aspectos"});
    }
});

FlowRouter.route('/addaspecto', {
    name: 'addaspecto',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addaspecto"});
    }
});

FlowRouter.route('/viewaspecto/:_id', {
    name: 'viewaspecto',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewaspecto"});
    }
});

FlowRouter.route('/editaspecto/:_id', {
    name: 'editaspecto',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editaspecto"});
    }
});

FlowRouter.route('/adddocma', {
    name: 'adddocma',
    action() {
        BlazeLayout.render("AppLayout", {main: "Adddocma"});
    }
});

FlowRouter.route('/docsma', {
    name: 'docsma',
    action() {
        BlazeLayout.render("AppLayout", {main: "Docsma"});
    }
});

FlowRouter.route('/editdocma/:_id', {
    name: 'editdocma',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editdocma"});
    }
});

FlowRouter.route('/sgi', {
    name: 'sgi',
    action() {
        BlazeLayout.render("AppLayout", {main: "Sgi"});
    }
});

FlowRouter.route('/internos', {
    name: 'internos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Internos"});
    }
});

FlowRouter.route('/addint', {
    name: 'addint',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addint"});
    }
});



FlowRouter.route('/editint/:_id', {
    name: 'editint',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editint"});
    }
});

FlowRouter.route('/procesos', {
    name: 'procesos',
    action() {
        BlazeLayout.render("AppLayout", {main: "Procesos"});
    }
});

FlowRouter.route('/addpro', {
    name: 'addpro',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addpro"});
    }
});

FlowRouter.route('/viewpro/:_id', {
    name: 'viewpro',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewpro"});
    }
});

FlowRouter.route('/editpro/:_id', {
    name: 'editpro',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editpro"});
    }
});

FlowRouter.route('/addversion/:_id', {
    name: 'addversion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addversion"});
    }
});

FlowRouter.route('/organizacion', {
    name: 'organizacion',
    action() {
        BlazeLayout.render("AppLayout", {main: "Organizacion"});
    }
});

FlowRouter.route('/manualcm', {
    name: 'manualcm',
    action() {
        BlazeLayout.render("AppLayout", {main: "Manualcm"});
    }
});


FlowRouter.route('/indicadores', {
    name: 'indicadores',
    action() {
        BlazeLayout.render("AppLayout", {main: "Indicadores"});
    }
});

FlowRouter.route('/addind', {
    name: 'addind',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addindicador"});
    }
});

FlowRouter.route('/addind/:_id', {
    name: 'addind',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addindicador"});
    }
});


FlowRouter.route('/viewind/:_id', {
    name: 'viewind',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewindicador"});
    }
});

FlowRouter.route('/editind/:_id', {
    name: 'editind',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editindicador"});
    }
});

FlowRouter.route('/addmed/:_id', {
    name: 'addmed',
    action() {
        BlazeLayout.render("AppLayout", {main: "Addmed"});
    }
});

FlowRouter.route('/viewmed/:_id', {
    name: 'viewmed',
    action() {
        BlazeLayout.render("AppLayout", {main: "Viewmed"});
    }
});
