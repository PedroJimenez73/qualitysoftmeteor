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