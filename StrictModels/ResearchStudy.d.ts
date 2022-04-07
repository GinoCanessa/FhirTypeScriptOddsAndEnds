import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export declare class ResearchStudyArm extends fhirModels.BackboneElement implements fhirInterfaces.IResearchStudyArm {
    /**
     * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Unique, human-readable label for this arm of the study.
     */
    name: string;
    _name?: fhirModels.Element | undefined;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ResearchStudyArm from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IResearchStudyArm);
}
/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export declare class ResearchStudyObjective extends fhirModels.BackboneElement implements fhirInterfaces.IResearchStudyObjective {
    /**
     * Unique, human-readable label for this objective of the study.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The kind of study objective.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ResearchStudyObjective from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IResearchStudyObjective);
}
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export declare class ResearchStudy extends fhirModels.DomainResource implements fhirInterfaces.IResearchStudy {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ResearchStudy";
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: fhirModels.ResearchStudyArm[] | undefined;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
     */
    condition?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * A full description of how the study is being conducted.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment?: fhirModels.Reference[] | undefined;
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    location?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
     */
    objective?: fhirModels.ResearchStudyObjective[] | undefined;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: fhirModels.Reference[] | undefined;
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhirModels.Period | undefined;
    /**
     * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
     */
    phase?: fhirModels.CodeableConcept | undefined;
    /**
     * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
     */
    primaryPurposeType?: fhirModels.CodeableConcept | undefined;
    /**
     * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
     */
    principalInvestigator?: fhirModels.Reference | undefined;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: fhirModels.Reference[] | undefined;
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhirModels.CodeableConcept | undefined;
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact?: fhirModels.RelatedArtifact[] | undefined;
    /**
     * A facility in which study activities are conducted.
     */
    site?: fhirModels.Reference[] | undefined;
    /**
     * An organization that initiates the investigation and is legally responsible for the study.
     */
    sponsor?: fhirModels.Reference | undefined;
    /**
     * The current state of the study.
     */
    status: ResearchStudyStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Default constructor for ResearchStudy from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IResearchStudy);
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
//# sourceMappingURL=ResearchStudy.d.ts.map