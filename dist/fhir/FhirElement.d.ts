import * as fhir from '../fhir.js';
/**
 * Base definition for all elements in a resource.
 */
export declare type IFhirElement = {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string | undefined;
    /**
     * Extended properties for primitive element: Element.id
     */
    _id?: fhir.IFhirElement | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhir.IExtension[] | undefined;
};
/**
 * Base definition for all elements in a resource.
 */
export declare class FhirElement implements IFhirElement {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string | undefined;
    /**
     * Extended properties for primitive element: Element.id
     */
    _id?: fhir.FhirElement | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhir.Extension[] | undefined;
    /**
     * Default constructor for FhirElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IFhirElement>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=FhirElement.d.ts.map