import * as fhir from '../fhir.js';
/**
 * Specifies contact information for a person or organization.
 */
export declare type IContactDetail = fhir.IFhirElement & {
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ContactDetail.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: fhir.IContactPoint[] | undefined;
};
/**
 * Specifies contact information for a person or organization.
 */
export declare class ContactDetail extends fhir.FhirElement implements IContactDetail {
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ContactDetail.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for ContactDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IContactDetail>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ContactDetail.d.ts.map