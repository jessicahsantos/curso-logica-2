describe('Login usuario simbora', () => {

    beforeEach(() => {

        cy.visit("https://simbora.fun/");
    })

    it("login", () => {

        cy.get('.mt-6 > .flex > .mb-6 > .block').click();
        cy.get('#email').type('jessica16hs@gmail.com');
        cy.get('#password').type('zildarenata');
        cy.get(':nth-child(4) > .mb-2').click();
        cy.contains('a', 'Jéssica Santos');
        
        
    })

    
})