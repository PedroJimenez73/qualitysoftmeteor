var myLogoutFunc = function () {
    Session.set('nav-toggle', '');
};

AccountsTemplates.configure({
    //forbidClientAccountCreation: true,
    //homeRoutePath: '/dashboard',
    onLogoutHook: myLogoutFunc,
    texts: {
      signInLink_pre: " ",
      signInLink_link: " ",
      signUpLink_pre: " ",
      signUpLink_link: " ",
      title: {
        changePwd: "Password Title",
        enrollAccount: "Enroll Title",
        forgotPwd: "Forgot Pwd Title",
        resetPwd: "Reset Pwd Title",
        signIn: "Inicie sesión",
        signUp: " ",
        verifyEmail: "Verify Email Title",
      },
       button: {
          changePwd: "Password Text",
          enrollAccount: "Enroll Text",
          forgotPwd: "Forgot Pwd Text",
          resetPwd: "Reset Pwd Text",
          signIn: "Iniciar",
          signUp: "Crear",
        }
        
    },
    
});

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');


AccountsTemplates.addFields([
    {
      _id: "username",
      type: "text",
      displayName: "Nombre",
      placeholder: "Nombre",
      required: true,
      minLength: 3,
  },
  {
      _id: "usersurname",
      type: "text",
      displayName: "Apellidos",
      placeholder: "Apellidos",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "Email",
      placeholder: "Email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Indique un email correcto',
  },
  {
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: "Nombre o email",
      placeholder: "Nombre o email"
  },
  {
      _id: 'password',
      type: 'password',
      required: true,
      displayName: "Contraseña",
      placeholder: "Mínimo 6 caracteres",
      minLength: 6,
      re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
      errStr: 'Introduzca al menos 1 número, 1 mayúscula y 1 minúscula'
  },
  {
      _id: 'password_again',
      type: 'password',
      required: true,
      displayName: "Repita Contraseña",
      placeholder: "Repita Contraseña"
  },
  {
    _id: 'telefono',
    type: 'text',
    required: true,
    displayName: "Teléfono",
    placeholder: "Teléfono"

  },
  {
      _id: 'departamento',
      type: 'select',
      displayName: "Departamento",
      select: [
          {
              text: "Administrador",
              value: "admin"
          },
          {
              text: "Gerente",
              value: "gerente"
          },
          {
              text: "Responsable CMS",
              value: "responsableCMS"
          },
          {
              text: "Responsable PRL",
              value: "responsablePRL"
          },
          {
              text: "Director de Compras",
              value: "dtorcompras"
          },
          {
              text: "Empleado de Compras",
              value: "empleadocompras"
          },
          {
              text: "Director de RR.HH.",
              value: "dtorrrhh"
          },
          {
              text: "Empleado de RR.HH.",
              value: "empleadorrhh"
          },
          {
              text: "Director de Producción",
              value: "dtorproduccion"
          },
          {
              text: "Empleado de Producción",
              value: "empleadoproduccion"
          },
          {
              text: "Director Financiero",
              value: "dtorfinanciero"
          },
          {
              text: "Empleado de Ad. y Fin.",
              value: "empleadoadyfin"
          },
          {
              text: "Director Comercial",
              value: "dtorcomercial"
          },
          {
              text: "Comercial de Ventas",
              value: "comercialventas"
          }

      ]
  }

]);