import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export declare class EpisodeOfCareStatusHistory extends fhirModels.BackboneElement implements fhirInterfaces.IEpisodeOfCareStatusHistory {
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period: fhirModels.Period;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status: EpisodeOfCareStatusHistoryStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for EpisodeOfCareStatusHistory from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEpisodeOfCareStatusHistory);
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
 * The list of diagnosis relevant to this episode of care.
 */
export declare class EpisodeOfCareDiagnosis extends fhirModels.BackboneElement implements fhirInterfaces.IEpisodeOfCareDiagnosis {
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition: fhirModels.Reference;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    _rank?: fhirModels.Element | undefined;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for EpisodeOfCareDiagnosis from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEpisodeOfCareDiagnosis);
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export declare class EpisodeOfCare extends fhirModels.DomainResource implements fhirInterfaces.IEpisodeOfCare {
    /**
     * Resource Type Name
     */
    readonly resourceType = "EpisodeOfCare";
    /**
     * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
     */
    account?: fhirModels.Reference[] | undefined;
    /**
     * The practitioner that is the care manager/care coordinator for this patient.
     */
    careManager?: fhirModels.Reference | undefined;
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: fhirModels.EpisodeOfCareDiagnosis[] | undefined;
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhirModels.Reference | undefined;
    /**
     * The patient who is the focus of this episode of care.
     */
    patient: fhirModels.Reference;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: fhirModels.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
     */
    status: EpisodeOfCareStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: fhirModels.EpisodeOfCareStatusHistory[] | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    team?: fhirModels.Reference[] | undefined;
    /**
     * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for EpisodeOfCare from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEpisodeOfCare);
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