module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login exitoso': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'gchicaduque@gmail.com')
      .setValue('.cajaLogIn input[name="password"]', '80100609')
      .click('.cajaLogIn .logInButton')
      .waitForElementNotPresent('.aviso.alert.alert-danger', 4000)
      .end();
  }
};
