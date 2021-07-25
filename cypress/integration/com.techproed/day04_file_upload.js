describe('file upload',()=>{
    it('single file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        //path of image1
        const path1 = 'image1.jpeg'
        cy
        .get('#filesToUpload')
        .attachFile(path1)
    })

    it('multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        //paths of the images
        const path1 = 'image1.jpeg'
        const path2 = 'image2.jpeg'
        const path3 = 'image3.jpeg'

        //This will override the previous ones
        //Will keep only the last one
        cy
        .get('#filesToUpload')
        .attachFile(path1)
        .attachFile(path2)
        .attachFile(path3)

        //Assertion
        cy
        .get(':nth-child(6) > strong')
        .should('contain.text', 'Files You Selected')
    })

    it('override file name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        //path of image 1
        const path1 = 'image1.jpeg'
        
        //Overriding original file name/ Changing the name when uploading
        //.attachFile({ filePath: 'PATH OF THE FILE', fileName: 'CUSTOM NAME' });
        cy.get('#filesToUpload')
        .attachFile({ filePath: path1, fileName: 'customFileName.json' });

        //Assertion
        cy
        .get(':nth-child(6) > strong')
        .should('contain.text', 'Files You Selected')
    })

    it.only('uploading multiple files',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        //paths of the images
        const path1 = 'image1.jpeg'
        const path2 = 'image2.jpeg'
        const path3 = 'image3.jpeg'

        //This will not override the previous ones
        //Will upload all of them
        cy.get('#filesToUpload')
        .attachFile([path1,path2,path3]);

        //Assertion
        cy
        .get(':nth-child(6) > strong')
        .should('contain.text', 'Files You Selected')
    })
})