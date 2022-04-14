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
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export class BackboneElement extends fhirModels.Element implements fhirInterfaces.IBackboneElement {
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  modifierExtension?: fhirModels.Extension[]|undefined;
  /**
   * Default constructor for BackboneElement from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IBackboneElement>) {
    super(source);
    if (source["modifierExtension"] !== undefined) { this.modifierExtension = source.modifierExtension.map((x) => new fhirModels.Extension(x)); }
  }
  /**
   * Factory function to create a BackboneElement from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IBackboneElement):BackboneElement {
    var dest:BackboneElement = new BackboneElement(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `BackboneElement is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current BackboneElement contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
