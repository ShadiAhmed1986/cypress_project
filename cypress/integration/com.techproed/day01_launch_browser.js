describe('Go to the application', () =>{
    it('Test Case 1', () =>{
        //visit() to go to the URL
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        //clicking on Log in
        cy.contains('Log in').click()

        //Verify if the user is on the Log in page
        //I will check if the new URL contains /Account/Logon
        cy.url().should('include','/Account/Logon')

        //get() is used to find element.
        //Find username and type 'manager'
        cy.get('#UserName').type('manager')

        //Find password and type 'Manager2!'
        cy.get('#Password').type('Manager2!')

        //Click on the submit button
        cy.get('#btnSubmit').click()

        //Check is URL contains '/Admin/UserAdmin/'
        cy.url().should('include','/Admin/UserAdmin')
    })
}
)