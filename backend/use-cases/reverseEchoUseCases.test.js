const expect = require("chai").expect;
const reverseEchoUseCases = require("./reverseEchoUseCases");

describe("Reverse test without palindrome", function () {
  it("returns reverse word no palindrome", async function () {
    expect(reverseEchoUseCases.reverseEcho({ text: "test" })).to.eql({
      text: "tset",
      isPalindrome: false,
    });
  });
});

describe("Reverse test palindrome", function () {
  it("returns reverse word with palindrome", async function () {
    expect(
      reverseEchoUseCases.reverseEcho({
        text: "dabale arroz a la zorra el abad",
      })
    ).to.eql({
      text: "daba le arroz al a zorra elabad",
      isPalindrome: true,
    });
  });
});
