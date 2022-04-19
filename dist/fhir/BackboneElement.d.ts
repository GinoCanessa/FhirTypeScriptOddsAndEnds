import * as fhir from '../fhir';
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export declare type IBackboneElement = fhir.IFhirElement & {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhir.IExtension[] | undefined;
};
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export declare class BackboneElement extends fhir.FhirElement implements fhir.IBackboneElement {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhir.Extension[] | undefined;
    /**
     * Default constructor for BackboneElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBackboneElement>);
    /**
     * Check if the current BackboneElement contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a BackboneElement from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IBackboneElement): BackboneElement;
}
//# sourceMappingURL=BackboneElement.d.ts.map