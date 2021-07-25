describe('Dropdown', ()=>{
    it('Dropdown test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown')

        //Cypress uses select method to select from a dropdown

        //1.Locate the dropdown element
        //2.Use select method to select the option

        cy
        .get('#dropdown')//locating the dropdown element
        .select('Option 1')//Selecting Option 1
        .should('have.value','1')//selected value = 1
        cy.wait(2000)

        //select.get('#dropdown')
        cy
        .get('#dropdown')//locating the dropdown element
        .select('Option 2')//Selecting Option 2
        .should('have.value', '2')//selected value = 2
    })
})