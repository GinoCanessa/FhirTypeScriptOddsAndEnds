import * as fhir from '../fhir';
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export declare type IResearchSubject = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchSubject";
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string | undefined;
    _actualArm?: fhir.IFhirElement | undefined;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: string | undefined;
    _assignedArm?: fhir.IFhirElement | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.IReference | undefined;
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhir.IReference | null;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * The current state of the subject.
     */
    status: ResearchSubjectStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhir.IReference | null;
};
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
export declare class ResearchSubject extends fhir.DomainResource implements fhir.IResearchSubject {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchSubject";
    /**
     * The name of the arm in the study the subject actually followed as part of this study.
     */
    actualArm?: string | undefined;
    _actualArm?: fhir.FhirElement | undefined;
    /**
     * The name of the arm in the study the subject is expected to follow as part of this study.
     */
    assignedArm?: string | undefined;
    _assignedArm?: fhir.FhirElement | undefined;
    /**
     * A record of the patient's informed agreement to participate in the study.
     */
    consent?: fhir.Reference | undefined;
    /**
     * Identifiers assigned to this research subject for a study.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The record of the person or animal who is involved in the study.
     */
    individual: fhir.Reference | null;
    /**
     * The dates the subject began and ended their participation in the study.
     */
    period?: fhir.Period | undefined;
    /**
     * The current state of the subject.
     */
    status: ResearchSubjectStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Reference to the study the subject is participating in.
     */
    study: fhir.Reference | null;
    /**
     * Default constructor for ResearchSubject - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IResearchSubject>);
    /**
     * Check if the current ResearchSubject contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ResearchSubject from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IResearchSubject): ResearchSubject;
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