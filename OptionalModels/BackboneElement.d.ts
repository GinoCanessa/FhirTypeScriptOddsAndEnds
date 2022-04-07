import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
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
    constructor(source: Partial<fhirInterfaces.IBackboneElement>);
    /**
     * Factory function to create a BackboneElement from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBackboneElement): BackboneElement;
    /**
     * Check if the current BackboneElement contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=BackboneElement.d.ts.map