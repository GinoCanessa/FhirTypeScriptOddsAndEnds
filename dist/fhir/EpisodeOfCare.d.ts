import * as fhir from '../fhir';
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export declare type IEpisodeOfCareStatusHistory = fhir.IBackboneElement & {
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.IPeriod | null;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: EpisodeOfCareStatusHistoryStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
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
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    _rank?: fhir.IFhirElement | undefined;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: fhir.ICodeableConcept | undefined;
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
     * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
     */
    account?: fhir.IReference[] | undefined;
    /**
     * The practitioner that is the care manager/care coordinator for this patient.
     */
    careManager?: fhir.IReference | undefined;
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: fhir.IEpisodeOfCareDiagnosis[] | undefined;
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhir.IReference | undefined;
    /**
     * The patient who is the focus of this episode of care.
     */
    patient: fhir.IReference | null;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: fhir.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
     */
    status: EpisodeOfCareStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: fhir.IEpisodeOfCareStatusHistory[] | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    team?: fhir.IReference[] | undefined;
    /**
     * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */
    type?: fhir.ICodeableConcept[] | undefined;
};
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export declare class EpisodeOfCareStatusHistory extends fhir.BackboneElement implements fhir.IEpisodeOfCareStatusHistory {
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhir.Period | null;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: EpisodeOfCareStatusHistoryStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EpisodeOfCareStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEpisodeOfCareStatusHistory>);
    /**
     * Check if the current EpisodeOfCareStatusHistory contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a EpisodeOfCareStatusHistory from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IEpisodeOfCareStatusHistory): EpisodeOfCareStatusHistory;
}
/**
 * The list of diagnosis relevant to this episode of care.
 */
export declare class EpisodeOfCareDiagnosis extends fhir.BackboneElement implements fhir.IEpisodeOfCareDiagnosis {
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition: fhir.Reference | null;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    _rank?: fhir.FhirElement | undefined;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for EpisodeOfCareDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEpisodeOfCareDiagnosis>);
    /**
     * Check if the current EpisodeOfCareDiagnosis contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a EpisodeOfCareDiagnosis from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IEpisodeOfCareDiagnosis): EpisodeOfCareDiagnosis;
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export declare class EpisodeOfCare extends fhir.DomainResource implements fhir.IEpisodeOfCare {
    /**
     * Resource Type Name
     */
    resourceType: "EpisodeOfCare";
    /**
     * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
     */
    account?: fhir.Reference[] | undefined;
    /**
     * The practitioner that is the care manager/care coordinator for this patient.
     */
    careManager?: fhir.Reference | undefined;
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: fhir.EpisodeOfCareDiagnosis[] | undefined;
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * The patient who is the focus of this episode of care.
     */
    patient: fhir.Reference | null;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhir.Period | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
     */
    status: EpisodeOfCareStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: fhir.EpisodeOfCareStatusHistory[] | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    team?: fhir.Reference[] | undefined;
    /**
     * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for EpisodeOfCare - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEpisodeOfCare>);
    /**
     * Check if the current EpisodeOfCare contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a EpisodeOfCare from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IEpisodeOfCare): EpisodeOfCare;
}
/**
 * Code Values for the EpisodeOfCare.statusHistory.status field
 */
export declare enum EpisodeOfCareStatusHistoryStatusEnum {
    PLANNED = "planned",
    WAITLIST = "waitlist",
    ACTIVE = "active",
    ONHOLD = "onhold",
    FINISHED = "finished",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error"
}
/**
 * Code Values for the EpisodeOfCare.status field
 */
export declare enum EpisodeOfCareStatusEnum {
    PLANNED = "planned",
    WAITLIST = "waitlist",
    ACTIVE = "active",
    ONHOLD = "onhold",
    FINISHED = "finished",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=EpisodeOfCare.d.ts.map