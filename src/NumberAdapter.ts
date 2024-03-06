import { Complex } from "./Complex";
import { Rational } from "./Rational";

/**
 * @class NumberAdapter - Allow to operate Rational numbers as Complex numbers
 */
export class NumberAdapter extends Complex {
  constructor(private rational: Rational) {
    super(rational.getNominator() / rational.getDenominator(), 0);
  }
}
