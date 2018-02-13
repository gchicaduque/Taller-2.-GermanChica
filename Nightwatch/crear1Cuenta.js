module.exports = { // adapted from: https://git.io/vodU0
  'Visitar página los estudiantes y crear nueva cuenta': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaSignUp input[name="nombre"]', 'Andres')
      .setValue('.cajaSignUp input[name="apellido"]', 'Caicedo')
      .setValue('.cajaSignUp input[name="correo"]', 'andresCaicedo@gmail.com')
      .click('select[name="idUniversidad"] option[value="universidad-nacional"]')
      .waitForElementPresent('select[name="idPrograma"] option[value="348"]',4000)
      .click('select[name="idPrograma"] option[value="348"]')
      .setValue('.cajaSignUp input[name="password"', '80100609')
      .click('input[name="acepta"]')
      .click('.cajaSignUp .logInButton')
      .waitForElementVisible('.sweet-alert', 4000)
      .assert.containsText('.sweet-alert', 'Registro exitoso')
      .end();
  }
};
