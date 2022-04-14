import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export declare class BackboneElement extends fhirModels.Element implements fhirInterfaces.IBackboneElement {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhirModels.Extension[] | undefined;
    /**
     * Default constructor for BackboneElement from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IBackboneElement);
}
//# sourceMappingURL=BackboneElement.d.ts.map