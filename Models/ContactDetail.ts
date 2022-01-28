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
 * Specifies contact information for a person or organization.
 */
export class ContactDetail extends fhirModels.Element implements fhirInterfaces.IContactDetail {
  /**
   * If there is no named individual, the telecom information is for the organization as a whole.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * The contact details for the individual (if a name was provided) or the organization.
   */
  telecom?: fhirModels.ContactPoint[]|undefined;
  /**
   * Default constructor for ContactDetail from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IContactDetail>) {
    super(source);
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = new fhirModels.Element(source._name); }
    if (source["telecom"] !== undefined) { this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x)); }
  }
  /**
   * Check if the current ContactDetail contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ContactDetail from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IContactDetail):ContactDetail {
    var dest:ContactDetail = new ContactDetail(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ContactDetail is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
