const expect = require("chai").expect;
const reverseService = require("./reverseService");

describe("Reverse test", function () {
  it("returns word in reverse", async function () {
    expect(reverseService.reverseText("test")).to.eql("tset");
    expect(reverseService.reverseText("ana")).to.eql("ana");
  });
});

describe("Palindrome test", function () {
  it("returns word is palindrome", async function () {
    expect(reverseService.isPalindrome("ana")).to.eql(true);
    expect(reverseService.isPalindrome("test")).to.eql(false);
  });
});
