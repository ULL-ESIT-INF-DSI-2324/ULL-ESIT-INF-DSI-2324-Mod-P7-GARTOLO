import { expect } from "chai";
import { Rational } from "../src/Rational";
import { Complex } from "../src/Complex";
import { NumberAdapter } from "../src/NumberAdapter";

describe("Mod P7. Complex.add/sub/mult/div(NumberAdapter)", () => {
  const rational1: Rational = new Rational(1, 2);
  const rational2: Rational = new Rational(1, 3);
  const complex1: Complex = new Complex(1, 2);
  const complex2: Complex = new Complex(1, 3);
  const adapter1: NumberAdapter = new NumberAdapter(rational1);
  const adapter2: NumberAdapter = new NumberAdapter(rational2);

  it("Add c1 + a1", () => {
    expect(complex1.add(adapter1)).to.deep.equal(new Complex(1.5, 2));
  });

  it("Add c1 + a2", () => {
    expect(complex1.add(adapter2)).to.deep.equal(new Complex(4 / 3, 2));
  });

  it("Add c2 + a2", () => {
    expect(complex2.add(adapter2)).to.deep.equal(new Complex(4/3,3));
  });

  it("Sub", () => {
    expect(complex1.substract(adapter1)).to.deep.equal(new Complex(0.5, 2));
    // expect(complex1.substract(adapter2)).to.deep.equal(new Complex(2/3, 2));
    // expect(complex2.substract(adapter2)).to.deep.equal(new Complex(2/3, 3));
  });

  it("Mult c1 * a1", () => {
    expect(complex1.multiply(adapter1)).to.deep.equal(new Complex(0.5, 1));
  });

  it("Mult c1 * a2", () => {
    expect(complex1.multiply(adapter2)).to.deep.equal(
      new Complex(1 / 3, 2 / 3),
      );
  });

  it("Mult c2 * a2", () => {
    expect(complex2.multiply(adapter2)).to.deep.equal(new Complex(1/3, 1));
  });
  
  it("Divide c1 / a1", () => {
    expect(complex1.divide(adapter1)).to.deep.equal(new Complex(2, 4));
  });

  it("Divide c1 / a2", () => {
    expect(complex1.divide(adapter2)).to.deep.equal(new Complex(3, 6));
  });

  it("Divide c2 / a2", () => {
    expect(complex2.divide(adapter2)).to.deep.equal(new Complex(3, 9));
  });

  it("Divide two complex", () => {
    expect(complex1.divide(complex2)).to.deep.equal(
      new Complex(7 / 10, -1 / 10),
    );
  });

  describe("Rational numbers tests", () => {
    it("Rational (1,2) + (1,2) should return (1,1)", () => {
      expect(new Rational(1, 2).add(new Rational(1, 2))).to.deep.equal(
        new Rational(1, 1),
      );
    });

    it("Rational (1,2) - (1,2) should return (0,0)", () => {
      expect(new Rational(1, 2).substract(new Rational(1, 2))).to.deep.equal(
        new Rational(0, 0),
      );
    });

    it("Rational (1,0) - (1,2) should return (-1,2)", () => {
      expect(new Rational(1, 0).substract(new Rational(1, 2))).to.deep.equal(
        new Rational(-1, 2),
      );
    });

    it("Rational (1,2) - (1,0) should return (1,2)", () => {
      expect(new Rational(1, 2).substract(new Rational(1, 0))).to.deep.equal(
        new Rational(1, 2),
      );
    });

    it("Rational (2,2) - (1,2) should return (1,2)", () => {
      expect(new Rational(2, 2).substract(new Rational(1, 2))).to.deep.equal(
        new Rational(1, 2),
      );
    });

    it("Rational (1,2) * (1,2) should return (1,4)", () => {
      expect(new Rational(1, 2).multiply(new Rational(1, 2))).to.deep.equal(
        new Rational(1, 4),
      );
    });

    it("Rational (0,2) * (1,2) should return (0,1)", () => {
      expect(new Rational(0, 2).multiply(new Rational(1, 2))).to.deep.equal(
        new Rational(0, 1),
      );
    });

    it("Rational (1,0) * (1,2) should return (0,0)", () => {
      expect(new Rational(1, 0).multiply(new Rational(1, 2))).to.deep.equal(
        new Rational(0, 0),
      );
    });

    it("Rational (5,2) * (7,3) should return (35,6)", () => {
      expect(new Rational(5, 2).multiply(new Rational(7, -3))).to.deep.equal(
        new Rational(-35, 6),
      );
    });

    it("Rational (4,2) * (4,-2) should return -(2,1)", () => {
      expect(new Rational(4, 2).multiply(new Rational(4, -2))).to.deep.equal(
        new Rational(-4, 1),
      );
    });

    it("Rational (1,2) / (1,2) should return (1,1)", () => {
      expect(new Rational(1, 2).divide(new Rational(1, 2))).to.deep.equal(
        new Rational(1, 1),
      );
    });
  });
});
