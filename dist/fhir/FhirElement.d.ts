import * as fhir from '../fhir';
/**
 * Base definition for all elements in a resource.
 */
export interface IFhirElement {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhir.IExtension[] | undefined;
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string | undefined;
    _id?: fhir.IFhirElement | undefined;
}
/**
 * Base definition for all elements in a resource.
 */
export declare class FhirElement implements fhir.IFhirElement {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhir.Extension[] | undefined;
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string | undefined;
    _id?: fhir.FhirElement | undefined;
    /**
     * Default constructor for FhirElement - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a FhirElement from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IFhirElement>): FhirElement;
    /**
     * Check if the current FhirElement contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a FhirElement from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IFhirElement): FhirElement;
}
//# sourceMappingURL=FhirElement.d.ts.map