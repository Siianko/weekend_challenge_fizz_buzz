const { fizzBuzz } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()
var Image = "./src/ein.js"

describe ('user can input a value and get FizzBuzz results', () => { 
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    })

    beforeEach(async () => {
        await browser.page.reload();
    })

    after(async () => {
        await browser.close();
    })

    it('When clicking on the "Check" button', async ()=> {
        await browser.fillIn("input[id='value']", {with: "3"})
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.eql('fizz');
    })

    // Here I tried to make a test for a clicking button // 
    
    it('When clicking on the "Check" button', async ()=> {
        await browser.fillIn("input[id='value']", {with: "3"})
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='ein']")
        expect(content).to.eql('ein');
    })

    
})