import * as fhir from '../fhir';
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export declare type IEnrollmentResponse = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentResponse";
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    _created?: fhir.IFhirElement | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.IReference | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: EnrollmentResponseOutcomeEnum | undefined;
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: EnrollmentResponseStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export declare class EnrollmentResponse extends fhir.DomainResource implements fhir.IEnrollmentResponse {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentResponse";
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    _created?: fhir.FhirElement | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhir.FhirElement | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.Reference | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: EnrollmentResponseOutcomeEnum | undefined;
    _outcome?: fhir.FhirElement | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: EnrollmentResponseStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EnrollmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEnrollmentResponse>);
    /**
     * Check if the current EnrollmentResponse contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EnrollmentResponse from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEnrollmentResponse): EnrollmentResponse;
}
/**
 * Code Values for the EnrollmentResponse.outcome field
 */
export declare enum EnrollmentResponseOutcomeEnum {
    QUEUED = "queued",
    COMPLETE = "complete",
    ERROR = "error",
    PARTIAL = "partial"
}
/**
 * Code Values for the EnrollmentResponse.status field
 */
export declare enum EnrollmentResponseStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=EnrollmentResponse.d.ts.map