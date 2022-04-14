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
 * A resource that includes narrative, extensions, and contained resources.
 */
export class DomainResource extends fhirModels.Resource implements fhirInterfaces.IDomainResource {
  /**
   * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
   */
  contained?: fhirModels.FhirResource[]|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  extension?: fhirModels.Extension[]|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  modifierExtension?: fhirModels.Extension[]|undefined;
  /**
   * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
   */
  text?: fhirModels.Narrative|undefined;
  /**
   * Default constructor for DomainResource from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IDomainResource>) {
    super(source);
    if (source["contained"] !== undefined) {
      this.contained = [];
      source.contained.forEach((x) => {
        var r = fhirModels.FhirResourceFactory(x);
        if (r) { this.contained!.push(r); }
      });
    }
    if (source["extension"] !== undefined) { this.extension = source.extension.map((x) => new fhirModels.Extension(x)); }
    if (source["modifierExtension"] !== undefined) { this.modifierExtension = source.modifierExtension.map((x) => new fhirModels.Extension(x)); }
    if (source["text"] !== undefined) { this.text = new fhirModels.Narrative(source.text); }
  }
  /**
   * Factory function to create a DomainResource from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IDomainResource):DomainResource {
    var dest:DomainResource = new DomainResource(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `DomainResource is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current DomainResource contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
