// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export type IAge = fhir.IQuantity & {
}
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export class Age extends fhir.Quantity implements fhir.IAge {
  /**
   * Default constructor for Age - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IAge> = {}) {
    super(source);
  }
  /**
   * Check if the current Age contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Age from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IAge):Age {
    var dest:Age = new Age(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `Age is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
