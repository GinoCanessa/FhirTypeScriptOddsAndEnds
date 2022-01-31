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
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export class Basic extends fhirModels.DomainResource implements fhirInterfaces.IBasic {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Basic";
  /**
   * Indicates who was responsible for creating the resource instance.
   */
  author?: fhirModels.Reference|undefined;
  /**
   * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
   * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * Identifies when the resource was first created.
   */
  created?: string|undefined;
  _created?: fhirModels.Element|undefined;
  /**
   * Identifier assigned to the resource for business purposes, outside the context of FHIR.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
   */
  subject?: fhirModels.Reference|undefined;
  /**
   * Default constructor for Basic from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IBasic>) {
    super(source);
    if ((source['resourceType'] !== "Basic") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Basic'; }
    if (source["author"] !== undefined) { this.author = new fhirModels.Reference(source.author); }
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["created"] !== undefined) { this.created = source.created; }
    if (source["_created"] !== undefined) { this._created = new fhirModels.Element(source._created); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["subject"] !== undefined) { this.subject = new fhirModels.Reference(source.subject); }
  }
  /**
   * Factory function to create a Basic from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IBasic):Basic {
    var dest:Basic = new Basic(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Basic is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current Basic contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}