const searchInsertKfn = require("./insert_position_k");
const findSquareRoot = require("./square-root");
const findSquareRootWithPrecision = require("./square-root-precision");

describe("binary-search", () => {
  describe("search-insert-k", () => {
    it("should return the index where k can be placed", () => {
      const arr = [1, 3, 4, 5];
      const k = 2;
      expect(searchInsertKfn(arr, k)).toBe(1);
    });
    it("should return the index where k can be placed", () => {
      const arr = [1, 3, 4, 5];
      const k = 8;
      expect(searchInsertKfn(arr, k)).toBe(4);
    });
  });
  describe("square-root", () => {
    it("should throw error if number less than 0", () => {
      expect(() => {
        findSquareRoot(-1);
      }).toThrow();
    });
    it("should return the num itself if its less or equal than 1", () => {
      expect(findSquareRoot(0)).toBe(0);
    });
    it("should return the square root of 25", () => {
      expect(findSquareRoot(25)).toBe(5);
    });
    it("should return the square root of 4", () => {
      expect(findSquareRoot(4)).toBe(2);
    });
  });

  describe("squeare-root-precision", () => {
    it("should return 3.16 if number is 10", () => {
      expect(findSquareRootWithPrecision(10)).toBe(3.16);
    });
    it("should return 5.00 if number is 25", () => {
      expect(findSquareRootWithPrecision(25)).toBe(5.0);
    });
  });
});
