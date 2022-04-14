import * as fhirInterfaces from '../optionalinterfaces';
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export interface IEnrollmentResponse extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "EnrollmentResponse";
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhirInterfaces.IElement | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhirInterfaces.IReference | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: EnrollmentResponseOutcomeEnum | undefined;
    _outcome?: fhirInterfaces.IElement | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhirInterfaces.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: EnrollmentResponseStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IEnrollmentResponse.d.ts.map