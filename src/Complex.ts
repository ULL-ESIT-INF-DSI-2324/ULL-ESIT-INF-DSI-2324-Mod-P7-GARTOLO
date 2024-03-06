import { Arithmeticable } from "./Arithmeticable";

/**
 * @class Complex - Implements Arithmeticable and their methods
 */
export class Complex implements Arithmeticable<Complex> {
  constructor(
    private real: number,
    private imaginary: number,
  ) {}

  /**
   * Function that adds two Complex numbers
   * @param a Complex
   * @param b Complex
   * @returns result (complex)
   */
  public add(b: Complex): Complex {
    return new Complex(this.real + b.real, this.imaginary + b.imaginary);
  }

  /**
   * Function that substract two Complex numbers
   * @param a Complex
   * @param b Complex
   * @returns result (complex)
   */
  public substract(b: Complex): Complex {
    return new Complex(this.real - b.real, this.imaginary - b.imaginary);
  }

  /**
   * Function that multiply two Complex numbers
   * @param a Complex
   * @param b Complex
   * @returns result (complex)
   */
  public multiply(b: Complex): Complex {
    return new Complex(
      this.real * b.real - this.imaginary * b.imaginary,
      this.imaginary * b.real + this.real * b.imaginary,
    );
  }

  /**
   * Function that divide two Complex numbers
   * @param a Complex
   * @param b Complex
   * @returns result (complex)
   */
  public divide(b: Complex): Complex {
    const den = b.real * b.real + b.imaginary * b.imaginary;
    return new Complex(
      (this.real * b.real + this.imaginary * b.imaginary) / den,
      (this.imaginary * b.real - this.real * b.imaginary) / den,
    );
  }
}
