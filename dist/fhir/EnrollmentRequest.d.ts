import * as fhir from '../fhir.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export declare type IEnrollmentRequest = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentRequest";
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
     */
    status?: FmStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EnrollmentRequest.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentRequest.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhir.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.IReference | undefined;
    /**
     * Patient Resource.
     */
    candidate?: fhir.IReference | undefined;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.IReference | undefined;
};
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export declare class EnrollmentRequest extends fhir.DomainResource implements IEnrollmentRequest {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentRequest";
    /**
     * The Response business identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
     */
    status?: FmStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EnrollmentRequest.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentRequest.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * Patient Resource.
     */
    candidate?: fhir.Reference | undefined;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.Reference | undefined;
    /**
     * Default constructor for EnrollmentRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEnrollmentRequest>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=EnrollmentRequest.d.ts.map