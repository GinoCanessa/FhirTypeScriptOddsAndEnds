import * as fhir from '../fhir';
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export declare type IEnrollmentRequest = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentRequest";
    /**
     * Patient Resource.
     */
    candidate?: fhir.IReference | undefined;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.IReference | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    _created?: fhir.IFhirElement | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhir.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
     */
    status?: EnrollmentRequestStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export declare class EnrollmentRequest extends fhir.DomainResource implements fhir.IEnrollmentRequest {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentRequest";
    /**
     * Patient Resource.
     */
    candidate?: fhir.Reference | undefined;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.Reference | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    _created?: fhir.FhirElement | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
     */
    status?: EnrollmentRequestStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EnrollmentRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEnrollmentRequest>);
    /**
     * Check if the current EnrollmentRequest contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EnrollmentRequest from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEnrollmentRequest): EnrollmentRequest;
}
/**
 * Code Values for the EnrollmentRequest.status field
 */
export declare enum EnrollmentRequestStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=EnrollmentRequest.d.ts.map