/**
 * Interface to represent the Arithmeticable methods
 */
export interface Arithmeticable<T> {
  add(number: T): T;
  substract(number: T): T;
  multiply(number: T): T;
  divide(number: T): T;
}
