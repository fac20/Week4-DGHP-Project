const supertest = require("supertest");
const test = require("tape");
const router = require("./router");

const fs = require("fs");
const path = require("path");

test("Landing page: check status code is 200 and validates some context in HTML", (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", "text/html")
    .end((err, res) => {
      t.error(err);
      t.equal(res.text.includes(`<body class="dark-background">`), true);
      t.equal(res.text.includes(`<button class="background">`), false);
      t.end();
    });
});

test("Main page: check status code is 200 and contents of HTML", (t) => {
  supertest(router)
    .get("/main")
    .expect(200)
    .expect("content-type", "text/html")
    .end((err, res) => {
      t.error(err);
      t.equal(
        res.text.includes(
          `<button type="submit" class="thread-button" id="submit">POST</button>`
        ),
        true
      );
      t.equal(res.text.includes(`<button class="background">`), false);
      t.end();
    });
});

test("Public handler: check status code is 200 and contents of CSS", (t) => {
  supertest(router)
    .get("/public/style.css")
    .expect(200)
    .expect("content-type", "text/css")
    .end((err, res) => {
      t.error(err);
      t.equal(res.text.includes(`/* transition is buggy index.HTML */`), true);
      t.equal(res.text.includes(`<button class="background">`), false);
      t.end();
    });
});
