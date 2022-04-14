import * as fhirInterfaces from '../strictinterfaces';
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export interface IResearchSubject extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ResearchSubject";
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string | undefined;
    _actualArm?: fhirInterfaces.IElement | undefined;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: string | undefined;
    _assignedArm?: fhirInterfaces.IElement | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhirInterfaces.IReference | undefined;
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhirInterfaces.IReference;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * The current state of the subject.
     */
    status: ResearchSubjectStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhirInterfaces.IReference;
}
/**
 * Code Values for the ResearchSubject.status field
 */
export declare enum ResearchSubjectStatusEnum {
    CANDIDATE = "candidate",
    ELIGIBLE = "eligible",
    FOLLOW_UP = "follow-up",
    INELIGIBLE = "ineligible",
    NOT_REGISTERED = "not-registered",
    OFF_STUDY = "off-study",
    ON_STUDY = "on-study",
    ON_STUDY_INTERVENTION = "on-study-intervention",
    ON_STUDY_OBSERVATION = "on-study-observation",
    PENDING_ON_STUDY = "pending-on-study",
    POTENTIAL_CANDIDATE = "potential-candidate",
    SCREENING = "screening",
    WITHDRAWN = "withdrawn"
}
//# sourceMappingURL=IResearchSubject.d.ts.map