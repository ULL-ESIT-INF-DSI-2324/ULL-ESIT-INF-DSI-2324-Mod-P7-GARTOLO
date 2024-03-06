import { Rational } from "./Rational";
import { Complex } from "./Complex";
import { NumberAdapter } from "./NumberAdapter";

const rational1: Rational = new Rational(1, 2);
const rational2: Rational = new Rational(1, 3);
const complex1: Complex = new Complex(1, 2);
const complex2: Complex = new Complex(1, 3);
const adapter1: NumberAdapter = new NumberAdapter(rational1);

console.log("Add two rational numbers", rational1.add(rational2));

console.log("Add two complex numbers", complex1.add(complex2));

console.log("Add complex and adapter (rational)", complex1.add(adapter1));
