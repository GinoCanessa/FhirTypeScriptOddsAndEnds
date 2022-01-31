// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export class Range extends fhirModels.Element implements fhirInterfaces.IRange {
  /**
   * If the high element is missing, the high boundary is not known.
   */
  high?: fhirModels.Quantity|undefined;
  /**
   * If the low element is missing, the low boundary is not known.
   */
  low?: fhirModels.Quantity|undefined;
  /**
   * Default constructor for Range from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IRange>) {
    super(source);
    if (source["high"] !== undefined) { this.high = new fhirModels.Quantity(source.high); }
    if (source["low"] !== undefined) { this.low = new fhirModels.Quantity(source.low); }
  }
  /**
   * Factory function to create a Range from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IRange):Range {
    var dest:Range = new Range(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Range is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current Range contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}