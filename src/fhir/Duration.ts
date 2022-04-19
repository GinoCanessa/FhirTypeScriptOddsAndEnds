// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A length of time.
 */
export type IDuration = fhir.IQuantity & {
}
/**
 * A length of time.
 */
export class Duration extends fhir.Quantity implements fhir.IDuration {
  /**
   * Default constructor for Duration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDuration> = {}) {
    super(source);
  }
  /**
   * Check if the current Duration contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Duration from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IDuration):Duration {
    var dest:Duration = new Duration(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `Duration is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
