const {game} = require("../simonGame");
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
})

describe("game object conatins correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
})