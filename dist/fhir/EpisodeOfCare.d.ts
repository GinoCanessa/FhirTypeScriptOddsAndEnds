import * as fhir from '../fhir.js';
import { EpisodeOfCareStatusValueSetType } from '../fhirValueSets/EpisodeOfCareStatusValueSet.js';
import { EpisodeOfCareStatusValueSetEnum } from '../valueSetEnums.js';
import { DiagnosisRoleValueSetType } from '../fhirValueSets/DiagnosisRoleValueSet.js';
import { EpisodeofcareTypeValueSetType } from '../fhirValueSets/EpisodeofcareTypeValueSet.js';
/**
 * Valid arguments for the EpisodeOfCareStatusHistory type.
 */
export interface EpisodeOfCareStatusHistoryArgs extends fhir.BackboneElementArgs {
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: EpisodeOfCareStatusValueSetEnum | null;
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.PeriodArgs | null;
}
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export declare class EpisodeOfCareStatusHistory extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: EpisodeOfCareStatusValueSetEnum | null;
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for EpisodeOfCareStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EpisodeOfCareStatusHistoryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): EpisodeOfCareStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the EpisodeOfCareDiagnosis type.
 */
export interface EpisodeOfCareDiagnosisArgs extends fhir.BackboneElementArgs {
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition: fhir.ReferenceArgs | null;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: fhir.FhirPositiveInt | number | undefined;
}
/**
 * The list of diagnosis relevant to this episode of care.
 */
export declare class EpisodeOfCareDiagnosis extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition: fhir.Reference | null;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: fhir.FhirPositiveInt | undefined;
    /**
     * Default constructor for EpisodeOfCareDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EpisodeOfCareDiagnosisArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for role
     */
    static rolePreferredValueSet(): DiagnosisRoleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the EpisodeOfCare type.
 */
export interface EpisodeOfCareArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EpisodeOfCare" | undefined;
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
     */
    status: EpisodeOfCareStatusValueSetEnum | null;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: fhir.EpisodeOfCareStatusHistoryArgs[] | undefined;
    /**
     * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: fhir.EpisodeOfCareDiagnosisArgs[] | undefined;
    /**
     * The patient who is the focus of this episode of care.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: fhir.ReferenceArgs[] | undefined;
    /**
     * The practitioner that is the care manager/care coordinator for this patient.
     */
    careManager?: fhir.ReferenceArgs | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    team?: fhir.ReferenceArgs[] | undefined;
    /**
     * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
     */
    account?: fhir.ReferenceArgs[] | undefined;
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export declare class EpisodeOfCare extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "EpisodeOfCare";
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
     */
    status: EpisodeOfCareStatusValueSetEnum | null;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: fhir.EpisodeOfCareStatusHistory[] | undefined;
    /**
     * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: fhir.EpisodeOfCareDiagnosis[] | undefined;
    /**
     * The patient who is the focus of this episode of care.
     */
    patient: fhir.Reference | null;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhir.Period | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: fhir.Reference[] | undefined;
    /**
     * The practitioner that is the care manager/care coordinator for this patient.
     */
    careManager?: fhir.Reference | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    team?: fhir.Reference[] | undefined;
    /**
     * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
     */
    account?: fhir.Reference[] | undefined;
    /**
     * Default constructor for EpisodeOfCare - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EpisodeOfCareArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): EpisodeOfCareStatusValueSetType;
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): EpisodeofcareTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=EpisodeOfCare.d.ts.map