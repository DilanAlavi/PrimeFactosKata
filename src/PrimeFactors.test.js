import Factorial from "./PrimeFactors";
describe("Factorial ", () => {
    it("Deberia retornar un valor nulo, si el numero es menor a 1", () => {
      expect(Factorial(1)).toEqual([]);
    });
  });
  describe("Factorial ", () => {
    it("ingresamos el numero 2 y nos devuelve el 2", () => {
      expect(Factorial(2)).toEqual([2]);
    });
  });

