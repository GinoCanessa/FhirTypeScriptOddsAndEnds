import * as fhir from '../fhir';
/**
 * Specifies contact information for a person or organization.
 */
export declare type IContactDetail = fhir.IFhirElement & {
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: fhir.IContactPoint[] | undefined;
};
/**
 * Specifies contact information for a person or organization.
 */
export declare class ContactDetail extends fhir.FhirElement implements fhir.IContactDetail {
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for ContactDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContactDetail>);
    /**
     * Check if the current ContactDetail contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ContactDetail from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IContactDetail): ContactDetail;
}
//# sourceMappingURL=ContactDetail.d.ts.map