// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * A reference from one resource to another.
 */
export class Reference extends fhirModels.Element implements fhirInterfaces.IReference {
  /**
   * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
   */
  display?: string|undefined;
  _display?: fhirModels.Element|undefined;
  /**
   * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy. 
   * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
   * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
   * Reference is intended to point to a structure that can potentially be expressed as a FHIR resource, though there is no need for it to exist as an actual FHIR resource instance - except in as much as an application wishes to actual find the target of the reference. The content referred to be the identifier must meet the logical constraints implied by any limitations on what resource types are permitted for the reference.  For example, it would not be legitimate to send the identifier for a drug prescription if the type were Reference(Observation|DiagnosticReport).  One of the use-cases for Reference.identifier is the situation where no FHIR representation exists (where the type is Reference (Any).
   */
  identifier?: fhirModels.Identifier|undefined;
  /**
   * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
   */
  reference?: string|undefined;
  _reference?: fhirModels.Element|undefined;
  /**
   * This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.
   */
  type?: string|undefined;
  _type?: fhirModels.Element|undefined;
  /**
   * Default constructor for Reference from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IReference) {
    super(source);
    if (source["display"] !== undefined) {
      this.display = source.display;
    }
    if (source["_display"] !== undefined) {
      this._display = new fhirModels.Element(source._display);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = new fhirModels.Identifier(source.identifier);
    }
    if (source["reference"] !== undefined) {
      this.reference = source.reference;
    }
    if (source["_reference"] !== undefined) {
      this._reference = new fhirModels.Element(source._reference);
    }
    if (source["type"] !== undefined) {
      this.type = source.type;
    }
    if (source["_type"] !== undefined) {
      this._type = new fhirModels.Element(source._type);
    }
  }
}
