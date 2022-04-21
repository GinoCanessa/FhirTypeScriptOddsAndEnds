import * as fhir from '../fhir.js';
import { EpisodeOfCareStatusValueSetType, EpisodeOfCareStatusValueSetEnum } from '../fhirValueSets/EpisodeOfCareStatusValueSet.js';
import { DiagnosisRoleValueSetType } from '../fhirValueSets/DiagnosisRoleValueSet.js';
import { EpisodeofcareTypeValueSetType } from '../fhirValueSets/EpisodeofcareTypeValueSet.js';
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export declare type IEpisodeOfCareStatusHistory = fhir.IBackboneElement & {
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: EpisodeOfCareStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: EpisodeOfCare.statusHistory.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.IPeriod | null;
};
/**
 * The list of diagnosis relevant to this episode of care.
 */
export declare type IEpisodeOfCareDiagnosis = fhir.IBackboneElement & {
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition: fhir.IReference | null;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: fhir.ICodeableConcept | undefined;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    /**
     * Extended properties for primitive element: EpisodeOfCare.diagnosis.rank
     */
    _rank?: fhir.IFhirElement | undefined;
};
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export declare type IEpisodeOfCare = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "EpisodeOfCare";
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
     */
    status: EpisodeOfCareStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: EpisodeOfCare.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: fhir.IEpisodeOfCareStatusHistory[] | undefined;
    /**
     * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: fhir.IEpisodeOfCareDiagnosis[] | undefined;
    /**
     * The patient who is the focus of this episode of care.
     */
    patient: fhir.IReference | null;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhir.IReference | undefined;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: fhir.IReference[] | undefined;
    /**
     * The practitioner that is the care manager/care coordinator for this patient.
     */
    careManager?: fhir.IReference | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    team?: fhir.IReference[] | undefined;
    /**
     * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
     */
    account?: fhir.IReference[] | undefined;
};
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export declare class EpisodeOfCareStatusHistory extends fhir.BackboneElement implements IEpisodeOfCareStatusHistory {
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: EpisodeOfCareStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: EpisodeOfCare.statusHistory.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for EpisodeOfCareStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEpisodeOfCareStatusHistory>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): EpisodeOfCareStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The list of diagnosis relevant to this episode of care.
 */
export declare class EpisodeOfCareDiagnosis extends fhir.BackboneElement implements IEpisodeOfCareDiagnosis {
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
    rank?: number | undefined;
    /**
     * Extended properties for primitive element: EpisodeOfCare.diagnosis.rank
     */
    _rank?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EpisodeOfCareDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEpisodeOfCareDiagnosis>);
    /**
     * Preferred-bound Value Set for role
     */
    rolePreferredValueSet(): DiagnosisRoleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export declare class EpisodeOfCare extends fhir.DomainResource implements IEpisodeOfCare {
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
     * Extended properties for primitive element: EpisodeOfCare.status
     */
    _status?: fhir.FhirElement | undefined;
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
    constructor(source?: Partial<IEpisodeOfCare>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): EpisodeOfCareStatusValueSetType;
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): EpisodeofcareTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=EpisodeOfCare.d.ts.map