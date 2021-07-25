describe('navigations', ()=>{
    it.skip('Back, Forward, Refresh', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        //hard wait
        cy.wait(3000)

        //clicking on th Log in link
        cy.contains('Log in').click()
        cy.wait(3000)

        //Back to the previous page
        //cy.go('back') or
        cy.go(-1)
        cy.wait(3000)

        //Going forward - to the next page
        //cy.go('forward') or
        cy.go(1)

        //Refresh
        cy.reload()
    })

    it('chaining the navigations',()=>{
        //WE CAN CHAIN THE FUNCTIONS
        cy.visit('https://qa-environment.crystalkeyhotels.com/')

        //chaining the methods
        cy
        .contains('Log in')
        .click()
        .go('back')
        .go('forward')
    
        //forcing to reload.Note thet we don't need to force here
        //And verify the Log in link is visible 
        cy
        .reload(true) //true means force
        .contains('Log in')
        .should('be.visible')//asserting if visible
    })
})