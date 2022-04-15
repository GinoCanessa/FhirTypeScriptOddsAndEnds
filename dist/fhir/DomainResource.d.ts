import * as fhir from '../fhir';
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export interface IDomainResource extends fhir.IResource {
    /**
     * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
     */
    contained?: fhir.IFhirResource[] | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhir.IExtension[] | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhir.IExtension[] | undefined;
    /**
     * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
     */
    text?: fhir.INarrative | undefined;
}
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export declare class DomainResource extends fhir.Resource implements fhir.IDomainResource {
    /**
     * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
     */
    contained?: fhir.FhirResource[] | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhir.Extension[] | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhir.Extension[] | undefined;
    /**
     * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
     */
    text?: fhir.Narrative | undefined;
    /**
     * Default constructor for DomainResource - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a DomainResource from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IDomainResource>): DomainResource;
    /**
     * Check if the current DomainResource contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a DomainResource from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IDomainResource): DomainResource;
}
//# sourceMappingURL=DomainResource.d.ts.map