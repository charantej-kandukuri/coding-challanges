const flatObject = require("./flattenObject2");

describe("objects", () => {
  describe("flattenObject2", () => {
    it("should return flatten object", () => {
      const obj = {
        name: "Rahul",
        address: {
          city: "Hyderabad",
          coordinates: {
            lat: "123",
            long: "321",
          },
        },
      };
      expect(flatObject(obj)).toEqual({
        name: "Rahul",
        "address.city": "Hyderabad",
        "address.coordinates.lat": "123",
        "address.coordinates.long": "321",
      });
    });
  });
});
