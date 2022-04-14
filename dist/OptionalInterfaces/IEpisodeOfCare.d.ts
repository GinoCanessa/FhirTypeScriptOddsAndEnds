import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export interface IEpisodeOfCareStatusHistory extends fhirInterfaces.IBackboneElement {
    /**
     * The period during this EpisodeOfCare that the specific status applied.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * planned | waitlist | active | onhold | finished | cancelled.
     */
    status?: EpisodeOfCareStatusHistoryStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
export interface IEpisodeOfCareDiagnosis extends fhirInterfaces.IBackboneElement {
    /**
     * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */
    condition?: fhirInterfaces.IReference | undefined;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    _rank?: fhirInterfaces.IElement | undefined;
    /**
     * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export interface IEpisodeOfCare extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "EpisodeOfCare";
    /**
     * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accounts based on internal business rules.
     */
    account?: fhirInterfaces.IReference[] | undefined;
    /**
     * The practitioner that is the care manager/care coordinator for this patient.
     */
    careManager?: fhirInterfaces.IReference | undefined;
    /**
     * The list of diagnosis relevant to this episode of care.
     */
    diagnosis?: fhirInterfaces.IEpisodeOfCareDiagnosis[] | undefined;
    /**
     * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The organization that has assumed the specific responsibilities for the specified duration.
     */
    managingOrganization?: fhirInterfaces.IReference | undefined;
    /**
     * The patient who is the focus of this episode of care.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * The interval during which the managing organization assumes the defined responsibility.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */
    referralRequest?: fhirInterfaces.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
     */
    status?: EpisodeOfCareStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */
    statusHistory?: fhirInterfaces.IEpisodeOfCareStatusHistory[] | undefined;
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes.
     */
    team?: fhirInterfaces.IReference[] | undefined;
    /**
     * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
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
//# sourceMappingURL=IEpisodeOfCare.d.ts.map