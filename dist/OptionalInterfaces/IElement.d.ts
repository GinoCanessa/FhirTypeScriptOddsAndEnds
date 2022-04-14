import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Base definition for all elements in a resource.
 */
export interface IElement {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhirInterfaces.IExtension[] | undefined;
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string | undefined;
    _id?: fhirInterfaces.IElement | undefined;
}
//# sourceMappingURL=IElement.d.ts.map