import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export declare class EnrollmentRequest extends fhirModels.DomainResource implements fhirInterfaces.IEnrollmentRequest {
    /**
     * Resource Type Name
     */
    readonly resourceType = "EnrollmentRequest";
    /**
     * Patient Resource.
     */
    candidate?: fhirModels.Reference | undefined;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhirModels.Reference | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhirModels.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
     */
    status?: EnrollmentRequestStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for EnrollmentRequest from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEnrollmentRequest);
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