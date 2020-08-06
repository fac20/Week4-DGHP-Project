const supertest = require("supertest")
const test = require("tape");
const router = require("./router")


test("check status cod eis 200", t => {
    supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", "text/html")
    .end((err, res) => {
        console.log(res.text)
        console.log(res)
        t.error(err);
        t.equal(res.text, index.html);
        t.end();
    });
});