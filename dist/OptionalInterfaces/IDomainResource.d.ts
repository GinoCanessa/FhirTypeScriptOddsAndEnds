import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export interface IDomainResource extends fhirInterfaces.IResource {
    /**
     * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.
     */
    contained?: fhirInterfaces.IFhirResource[] | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhirInterfaces.IExtension[] | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhirInterfaces.IExtension[] | undefined;
    /**
     * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.
     */
    text?: fhirInterfaces.INarrative | undefined;
}
//# sourceMappingURL=IDomainResource.d.ts.map