describe('Los estudiantes crean su cuenta', function() {
    it('Visitar página los estudiantes y crear nueva cuenta', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	//Lineas nuevas  
      	cy.contains('Ingresar').click()
      	cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Germán Andrés")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Chica Duque")
	cy.get('.cajaSignUp').find('input[name="correo"]').click().type("chicaduque@hotmail.com")
      	cy.get('select[name="idUniversidad"]').select('Universidad Nacional')
	cy.get('input.jsx-527058112').check()
	cy.get('select[name="idPrograma"]').select('Maestría en Ingeniería - Ingeniería de Sistemas y Computación')
	cy.get('.cajaSignUp').find('input[name="password"]').click().type("80100609")
	cy.get('input[name="acepta"]').check()
	cy.get('.cajaSignUp').contains('Registrarse').click()
	cy.contains("Verifica tu correo y activa tu cuenta ")
    })
})
