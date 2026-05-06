const buttonClick = require('../button').buttonClick;


beforeEach (() => {    // Simulate button click
    let fs = require('fs');
    let html = fs.readFileSync('./index.html', 'utf8');
    document.open();
    document.write(html);
    document.close();
});
describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerText).toEqual("Button clicked!");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
})