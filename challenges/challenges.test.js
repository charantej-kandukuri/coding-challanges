const maxChars = require("./maxChars");

describe("challanges", () => {
  describe("maxChars", () => {
    it("should return max chars in string", () => {
      const str = "hello world!";
      expect(maxChars(str)).toEqual({
        h: 1,
        e: 1,
        l: 3,
        o: 2,
        w: 1,
        r: 1,
        d: 1,
      });
    });
  });
});
