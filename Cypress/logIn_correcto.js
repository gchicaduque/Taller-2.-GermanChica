describe('Los estudiantes login', function() {
    it('Visitar página los estudiantes y autenticarse exitosamente', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	//Lineas nuevas  
      	cy.contains('Ingresar').click()
      	cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ga.chica10@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("80100609")
      	cy.get('.cajaLogIn').contains('Ingresar').click()
      	cy.get('a[role=menuitem]').contains('Salir')
    })
})
