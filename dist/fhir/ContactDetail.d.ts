import * as fhir from '../fhir.js';
/**
 * Valid arguments for the ContactDetail type.
 */
export interface ContactDetailArgs extends fhir.FhirElementArgs {
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
}
/**
 * Specifies contact information for a person or organization.
 */
export declare class ContactDetail extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for ContactDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContactDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=ContactDetail.d.ts.map