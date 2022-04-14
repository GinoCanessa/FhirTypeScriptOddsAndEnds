import * as fhirInterfaces from '../optionalinterfaces';
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export interface IEnrollmentRequest extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "EnrollmentRequest";
    /**
     * Patient Resource.
     */
    candidate?: fhirInterfaces.IReference | undefined;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhirInterfaces.IReference | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhirInterfaces.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
     */
    status?: EnrollmentRequestStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IEnrollmentRequest.d.ts.map