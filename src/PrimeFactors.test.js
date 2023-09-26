import Factorial from "./PrimeFactors";
describe("Factorial ", () => {
    it("Deberia retornar un valor nulo, si el numero es menor a 1", () => {
      expect(Factorial(1)).toEqual([]);
    });
  });

