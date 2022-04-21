import * as fhir from '../fhir.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
import { RemittanceOutcomeValueSetType, RemittanceOutcomeValueSetEnum } from '../fhirValueSets/RemittanceOutcomeValueSet.js';
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export declare type IEnrollmentResponse = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentResponse";
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: FmStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.IReference | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: RemittanceOutcomeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.outcome
     */
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.disposition
     */
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.IReference | undefined;
};
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export declare class EnrollmentResponse extends fhir.DomainResource implements IEnrollmentResponse {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentResponse";
    /**
     * The Response business identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: FmStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: RemittanceOutcomeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.outcome
     */
    _outcome?: fhir.FhirElement | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.disposition
     */
    _disposition?: fhir.FhirElement | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.Reference | undefined;
    /**
     * Default constructor for EnrollmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEnrollmentResponse>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Required-bound Value Set for outcome
     */
    outcomeRequiredValueSet(): RemittanceOutcomeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=EnrollmentResponse.d.ts.map