describe('Suggested Elements', ()=>{
    it.skip('suggested elements', ()=>{
        cy.visit('https://www.google.com')
        cy.get("input[name = 'q]").type('usa')
        cy.wait(3000)
        cy
        .get('li span b')//getting the list of bold items
        .contains('map')//choosing the one that contains map
        .click()//clicking on it
    })

    it('automation practice', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get("input[id='search_query_top']").type('dress')
        cy.wait(3000)
        cy
        .get('.ac_results')
        .contains('Blouses')//if we choose an element which is not unique, 
                             //it clicks the first one
        .click()

        //Assertion
        cy
        .get("h1[itemprop='name']")
        .should('be.visible')
    })

})