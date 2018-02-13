describe('Los estudiantes login', function() {
    it('Buscar un profesor especifico', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	//Lineas nuevas  
      	cy.get('.Select-control').click()
	cy.get('.Select-input').type('mario linares')
	//cy.get('.Select-control').select('Mario Linares Vasquez - Ingeniería de Sistemas')
    })
})
