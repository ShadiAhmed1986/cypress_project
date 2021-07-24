import '@4tw/cypress-drag-drop'

describe('drag and drop',()=>{
    it('double click',()=>{
        cy.visit('https://www.testandquiz.com/selenium/testing.html')

        cy.get('#dblClkBtn').dblclick()

        cy.on('window:alert',(str)=>{
            expect(str)//getting the text on the alert windiw
            .to.equal('hi, JavaTpoint Testing')//asserting the text
        })
    })

    it.only('drag and drop',()=>{
        cy.visit('https://www.testandquiz.com/selenium/testing.html')

       /*DRAG AND DROP
       1. RUN ON TERMINAL: npm install --save-dev @4tw/cypress-drag-drop
       2. IMPORT IT ON THE TOP OF THE PAGE: import '@4tw/cypress-drag-drop'
       */

       cy.get('#sourceImage').drag('#targetDiv')
    })


})