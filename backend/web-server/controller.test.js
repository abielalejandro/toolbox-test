const getApp = require("./app");
const request = require("supertest");
const expect = require("chai").expect;

describe("GET /iecho", function () {
  it("returns 200 sucess", async function () {
    const app = getApp();
    const response = await request(app).get("/iecho?text=test").send();
    expect(response.status).to.eql(200);
  });
});

describe("GET /iecho", function () {
  it("returns 400 failed", async function () {
    const app = getApp();
    const response = await request(app).get("/iecho").send();
    expect(response.status).to.eql(400);
  });
});

describe("GET /iecho", function () {
  it("returns 200 sucess and reverse", async function () {
    const app = getApp();
    const response = await request(app).get("/iecho?text=test").send();
    expect(response.status).to.eql(200);
    expect(response.body.data.text).to.eql("tset");
  });
});

describe("GET /iecho", function () {
  it("returns 200 sucess and reverse/palindrome", async function () {
    const app = getApp();
    const response = await request(app).get("/iecho?text=ana").send();
    expect(response.status).to.eql(200);
    expect(response.body.data.text).to.eql("ana");
    expect(response.body.data.isPalindrome).to.eql(true);
  });
});
