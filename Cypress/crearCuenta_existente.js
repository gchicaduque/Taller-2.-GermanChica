describe('Los estudiantes login', function() {
    it('Visitar página los estudiantes y crear cuenta ya existene', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	//Lineas nuevas  
      	cy.contains('Ingresar').click()
      	cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Germán Andrés")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Chica Duque")
	cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ga.chica10@uniandes.edu.co")
      	cy.get('select[name="idUniversidad"]').select('Universidad de los Andes')
	cy.get('input.jsx-527058112').check()
	cy.get('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
	cy.get('.cajaSignUp').find('input[name="password"]').click().type("80100609")
	cy.get('input[name="acepta"]').check()
	cy.get('.cajaSignUp').contains('Registrarse').click()
	cy.contains("Error: Ya existe un usuario registrado con el correo 'ga.chica10@uniandes.edu.co'")
    })
})
