import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export interface IBackboneElement extends fhirInterfaces.IElement {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhirInterfaces.IExtension[] | undefined;
}
//# sourceMappingURL=IBackboneElement.d.ts.map