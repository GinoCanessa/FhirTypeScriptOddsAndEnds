import * as fhirInterfaces from '../strictinterfaces';
/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export interface IResearchStudyArm extends fhirInterfaces.IBackboneElement {
    /**
     * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Unique, human-readable label for this arm of the study.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export interface IResearchStudyObjective extends fhirInterfaces.IBackboneElement {
    /**
     * Unique, human-readable label for this objective of the study.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The kind of study objective.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export interface IResearchStudy extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ResearchStudy";
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: fhirInterfaces.IResearchStudyArm[] | undefined;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
     */
    condition?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A full description of how the study is being conducted.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment?: fhirInterfaces.IReference[] | undefined;
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    location?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
     */
    objective?: fhirInterfaces.IResearchStudyObjective[] | undefined;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: fhirInterfaces.IReference[] | undefined;
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
     */
    phase?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
     */
    primaryPurposeType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
     */
    principalInvestigator?: fhirInterfaces.IReference | undefined;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: fhirInterfaces.IReference[] | undefined;
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact?: fhirInterfaces.IRelatedArtifact[] | undefined;
    /**
     * A facility in which study activities are conducted.
     */
    site?: fhirInterfaces.IReference[] | undefined;
    /**
     * An organization that initiates the investigation and is legally responsible for the study.
     */
    sponsor?: fhirInterfaces.IReference | undefined;
    /**
     * The current state of the study.
     */
    status: ResearchStudyStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ResearchStudy.status field
 */
export declare enum ResearchStudyStatusEnum {
    ACTIVE = "active",
    ADMINISTRATIVELY_COMPLETED = "administratively-completed",
    APPROVED = "approved",
    CLOSED_TO_ACCRUAL = "closed-to-accrual",
    CLOSED_TO_ACCRUAL_AND_INTERVENTION = "closed-to-accrual-and-intervention",
    COMPLETED = "completed",
    DISAPPROVED = "disapproved",
    IN_REVIEW = "in-review",
    TEMPORARILY_CLOSED_TO_ACCRUAL = "temporarily-closed-to-accrual",
    TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION = "temporarily-closed-to-accrual-and-intervention",
    WITHDRAWN = "withdrawn"
}
//# sourceMappingURL=IResearchStudy.d.ts.map