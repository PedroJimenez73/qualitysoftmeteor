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