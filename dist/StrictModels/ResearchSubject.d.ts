import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export declare class ResearchSubject extends fhirModels.DomainResource implements fhirInterfaces.IResearchSubject {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ResearchSubject";
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string | undefined;
    _actualArm?: fhirModels.Element | undefined;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: string | undefined;
    _assignedArm?: fhirModels.Element | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhirModels.Reference | undefined;
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhirModels.Reference;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhirModels.Period | undefined;
    /**
     * The current state of the subject.
     */
    status: ResearchSubjectStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhirModels.Reference;
    /**
     * Default constructor for ResearchSubject from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IResearchSubject);
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
//# sourceMappingURL=ResearchSubject.d.ts.map