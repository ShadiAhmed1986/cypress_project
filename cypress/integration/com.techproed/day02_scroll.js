/*
scrollIntoView()
To scroll to the element 
*/
describe('Scroll', () =>{
    it('Scroll into view', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/')

        //Scrolling down to view 'Our Rooms'
        cy
        .get('.col-md-7 > .mb-4')
        .scrollIntoView();
        cy.wait(3000)
        

        //Scrolling down to view 'Recent Blog'
        cy
        .get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
        .scrollIntoView();
        cy.wait(3000)

        //Scrolling to 'Checkin date'
        cy
        .get(':nth-child(1) > .form-group > .wrap > label')
        .scrollIntoView()

        //scrollTo(x,y)
        cy.wait(2000)

        cy.scrollTo(0, 1000)
        cy.wait(2000)

        cy.scrollTo(0,-500)
    })
})