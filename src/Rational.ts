import { Arithmeticable } from "./Arithmeticable";

export class Rational implements Arithmeticable<Rational> {
  constructor(
    private nominator: number,
    private denominator: number,
  ) {}

  /**
   * Function that returns the nominator
   * @returns nominator
   */
  public getNominator(): number {
    return this.nominator;
  }

  /**
   * Function that returns the denominator
   * @returns denominator
   */
  public getDenominator(): number {
    return this.denominator;
  }

  /**
   * Add two rational numbers
   * @param b
   * @returns result
   */
  public add(b: Rational): Rational {
    const num = this.nominator * b.denominator + b.nominator * this.denominator;
    const den = this.denominator * b.denominator;
    return this.minimize(new Rational(num, den));
  }

  /**
   * Private method to minimize a rational number
   * @param a Rational
   * @returns minimized rational
   */
  private minimize(a: Rational): Rational {
    const div = this.mcd(a.nominator, a.denominator);
    const result: Rational = new Rational(
      a.nominator / div,
      a.denominator / div,
    );
    return result;
  }

  /**
   * Private method to get the "Maximo comun divisor" of two numbers
   * @param a
   * @param b
   * @returns number
   */
  private mcd(a: number, b: number): number {
    if (b === 0) return a;
    return this.mcd(b, a % b);
  }

  public substract(number: Rational): Rational {
    if (this.denominator === 0)
      return new Rational(-number.nominator, number.denominator);
    if (number.denominator === 0) return this;
    const num =
      this.nominator * number.denominator - number.nominator * this.denominator;
    const den = this.denominator * number.denominator;
    if (num === 0) return new Rational(0, 0);
    return this.minimize(new Rational(num, den));
  }

  public multiply(number: Rational): Rational {
    if (this.nominator === 0) return new Rational(0, 1);
    if (this.denominator === 0) return new Rational(0, 0);

    const num = this.nominator * number.nominator;
    const den = this.denominator * number.denominator;
    return this.minimize(new Rational(num, den));
  }

  public divide(number: Rational): Rational {
    return this.multiply(number.inv());
  }

  private inv(): Rational {
    return new Rational(this.denominator, this.nominator);
  }
}
