// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export class Ratio extends fhirModels.Element {
  /**
   * The value of the denominator.
   */
  denominator?: fhirModels.Quantity;
  /**
   * The value of the numerator.
   */
  numerator?: fhirModels.Quantity;
  /**
   * Default constructor
   */
  constructor(source: Ratio) {
    super(source);
    if (source["denominator"] !== undefined) { this.denominator = source.denominator; }
    if (source["numerator"] !== undefined) { this.numerator = source.numerator; }
  }
}
