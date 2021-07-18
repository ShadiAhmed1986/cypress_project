describe('checkboxes',()=>{
    /* checkbox
https://docs.cypress.io/api/commands/check#Syntax
    */
    it('checking single box',()=>{
 
        //go to http://automationpractice.com/index.php
        //click on WOMEN
        //check the first checkbox
        cy.visit('http://automationpractice.com/index.php')
        cy
        .get('.sf-with-ul')//returning 4 elements
        .first()//selecting on the first element
        .click()//clicking on the first one

        //verify that the check box is not checked
        cy
        .get('#layered_category_4')
        .should('not.be.checked')//returns true if the element is not checked

        //asserting that the checkbox is checked
        cy
        .get('#layered_category_4')
        .check().should('be.checked')//returns true if the element is checked

        cy.wait(3000)

        //UNCHECK THE CHECKED BOX
        cy
        .get('#layered_category_4')
        .uncheck().should('not.be.checked')
    })

    // it.only MEANS RUN ONLY THIS TEST
    it.only('check checkboxes with click()',()=>{
        //go to http://automationpractice.com/index.php
          //click on WOMEN
          //check the first checkbox
          cy.visit('http://automationpractice.com/index.php')
  
          cy
          .get('.sf-with-ul')//returning 4 elements
          .first()//selecting on the first element
          .click()//clicking on the first one
     
          // input[type='checkbox'] returns all of the checkbox on the page
        //   cy
        //   .get("input[type='checkbox']")
        //   .click({ multiple: true })
  
        //   NOTE: click works for only single elements
        // If you want to click multiple checkbox, use click({ multiple: true })
        //ASSERTION 
        //HOW DO YOU UNDERSTAND IF CHECKBOX IS CHECKED OR NOT
          cy
          .get("input[type='checkbox']")
          .first()
          .click({ multiple: true })
        cy
        .get("input[type='checkbox']")
          .first()
          .should('be.checked')
          //The chenge is in the span element
          //WHen a check box is checked the parent span has value of 'checke
          //ASSERT IF THE PARENT SPAN CLASS VALUE IS CHECKED
          cy
          .get("input[type='checkbox']")
          .first()//getting the first check box
          .parent()//getting teh parent element which is span
          .should('have.class','checked')// asserting if the span class = 'checked'
          
          //WITH cypress assertion, we can assert if any attribute has any value
          //should('have.id','username')//asserting if id = 'username'
          //should('have.type','text')//asserting if type='text'
          //should('have.class','container')//asserting if class='container'

    })
})