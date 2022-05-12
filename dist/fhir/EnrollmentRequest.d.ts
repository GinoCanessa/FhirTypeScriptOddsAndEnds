import * as fhir from '../fhir.js';
import { FmStatusValueSetType } from '../fhirValueSets/FmStatusValueSet.js';
import { FmStatusValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the EnrollmentRequest type.
 */
export interface EnrollmentRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentRequest" | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
     */
    status?: FmStatusValueSetEnum | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhir.ReferenceArgs | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * Patient Resource.
     */
    candidate?: fhir.ReferenceArgs | undefined;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.ReferenceArgs | undefined;
}
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export declare class EnrollmentRequest extends fhir.DomainResource {
    readonly __dataType: string;
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
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<EnrollmentRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=EnrollmentRequest.d.ts.map