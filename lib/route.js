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