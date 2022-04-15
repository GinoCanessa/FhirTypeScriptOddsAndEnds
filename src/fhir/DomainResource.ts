// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
  // Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export interface IDomainResource extends fhir.IResource {
  /**
   * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
   */
  contained?: fhir.IFhirResource[]|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  extension?: fhir.IExtension[]|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  modifierExtension?: fhir.IExtension[]|undefined;
  /**
   * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
   */
  text?: fhir.INarrative|undefined;
}
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export class DomainResource extends fhir.Resource implements fhir.IDomainResource {
  /**
   * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
   */
  public contained?: fhir.FhirResource[]|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  public extension?: fhir.Extension[]|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  public modifierExtension?: fhir.Extension[]|undefined;
  /**
   * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
   */
  public text?: fhir.Narrative|undefined;
  /**
   * Default constructor for DomainResource - initializes required elements to null.
   */
  constructor() {
    super();
  }
  /**
   * Factory function to create a DomainResource from an object that MAY NOT contain all required elements.
   */
  static override FactoryCreate(source:Partial<fhir.IDomainResource>):DomainResource {
    var dest:Partial<DomainResource> = super.FactoryCreate(source) as Partial<DomainResource>;
    if (source["contained"] !== undefined) {
      dest.contained = [];
      source.contained.forEach((x) => {
        var r = fhir.FhirResourceFactory(x);
        if (r) { dest.contained!.push(r); }
      });
    }
    if (source["extension"] !== undefined) { dest.extension = source.extension.map((x:Partial<fhir.IExtension>) => fhir.Extension.FactoryCreate(x)); }
    if (source["modifierExtension"] !== undefined) { dest.modifierExtension = source.modifierExtension.map((x:Partial<fhir.IExtension>) => fhir.Extension.FactoryCreate(x)); }
    if (source["text"] !== undefined) { dest.text = fhir.Narrative.FactoryCreate(source.text!); }
    return dest as DomainResource;
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
  /**
   * Factory function to create a DomainResource from an object that MUST contain all required elements.
   */
  static override FactoryCreateStrict(source:fhir.IDomainResource):DomainResource {
    var dest:DomainResource = this.FactoryCreate(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `DomainResource is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
