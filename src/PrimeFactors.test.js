import Factorial from "./PrimeFactors";
describe("Factorial ", () => {
    it("Deberia retornar un valor nulo, si el numero es menor a 1", () => {
      expect(Factorial(1)).toEqual([]);
    });
  });
  describe("Factorial ", () => {
    it("Ingresamos el numero 2 y nos devuelve el 2", () => {
      expect(Factorial(2)).toEqual([2]);
    });
  });
  describe("Factorial ", () => {
    it("Ingresamos un numero y nos devuelve el mismo numero", () => {
      expect(Factorial(3)).toEqual([3]);
    });
  });
  describe("Factorial ", () => {
    it("Ingresamos el 4 y nos devuelve el [2,2]", () => {
      expect(Factorial(4)).toEqual([2,2]);
    });
  });

