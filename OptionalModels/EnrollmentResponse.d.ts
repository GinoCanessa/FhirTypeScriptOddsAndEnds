import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export declare class EnrollmentResponse extends fhirModels.DomainResource implements fhirInterfaces.IEnrollmentResponse {
    /**
     * Resource Type Name
     */
    readonly resourceType = "EnrollmentResponse";
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhirModels.Element | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhirModels.Reference | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: EnrollmentResponseOutcomeEnum | undefined;
    _outcome?: fhirModels.Element | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhirModels.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: EnrollmentResponseStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for EnrollmentResponse from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IEnrollmentResponse>);
    /**
     * Factory function to create a EnrollmentResponse from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IEnrollmentResponse): EnrollmentResponse;
    /**
     * Check if the current EnrollmentResponse contains all required elements.
     */
    checkRequiredElements(): string[];
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