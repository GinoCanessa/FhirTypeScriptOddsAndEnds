// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * A length of time.
 */
export class Duration extends fhirModels.Quantity implements fhirInterfaces.IDuration {
  /**
   * Default constructor for Duration from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IDuration>) {
    super(source);
  }
  /**
   * Check if the current Duration contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Duration from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IDuration):Duration {
    var dest:Duration = new Duration(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Duration is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
