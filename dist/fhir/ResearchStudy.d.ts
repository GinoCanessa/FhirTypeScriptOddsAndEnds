import * as fhir from '../fhir';
/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export declare type IResearchStudyArm = fhir.IBackboneElement & {
    /**
     * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Unique, human-readable label for this arm of the study.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export declare type IResearchStudyObjective = fhir.IBackboneElement & {
    /**
     * Unique, human-readable label for this objective of the study.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The kind of study objective.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export declare type IResearchStudy = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchStudy";
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: fhir.IResearchStudyArm[] | undefined;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
     */
    condition?: fhir.ICodeableConcept[] | undefined;
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * A full description of how the study is being conducted.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment?: fhir.IReference[] | undefined;
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: fhir.ICodeableConcept[] | undefined;
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    location?: fhir.ICodeableConcept[] | undefined;
    /**
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
     */
    objective?: fhir.IResearchStudyObjective[] | undefined;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
     */
    phase?: fhir.ICodeableConcept | undefined;
    /**
     * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
     */
    primaryPurposeType?: fhir.ICodeableConcept | undefined;
    /**
     * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
     */
    principalInvestigator?: fhir.IReference | undefined;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: fhir.IReference[] | undefined;
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhir.ICodeableConcept | undefined;
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact?: fhir.IRelatedArtifact[] | undefined;
    /**
     * A facility in which study activities are conducted.
     */
    site?: fhir.IReference[] | undefined;
    /**
     * An organization that initiates the investigation and is legally responsible for the study.
     */
    sponsor?: fhir.IReference | undefined;
    /**
     * The current state of the study.
     */
    status: ResearchStudyStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
};
/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export declare class ResearchStudyArm extends fhir.BackboneElement implements fhir.IResearchStudyArm {
    /**
     * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Unique, human-readable label for this arm of the study.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ResearchStudyArm - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IResearchStudyArm>);
    /**
     * Check if the current ResearchStudyArm contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ResearchStudyArm from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IResearchStudyArm): ResearchStudyArm;
}
/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export declare class ResearchStudyObjective extends fhir.BackboneElement implements fhir.IResearchStudyObjective {
    /**
     * Unique, human-readable label for this objective of the study.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The kind of study objective.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ResearchStudyObjective - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IResearchStudyObjective>);
    /**
     * Check if the current ResearchStudyObjective contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ResearchStudyObjective from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IResearchStudyObjective): ResearchStudyObjective;
}
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export declare class ResearchStudy extends fhir.DomainResource implements fhir.IResearchStudy {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchStudy";
    /**
     * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
     */
    arm?: fhir.ResearchStudyArm[] | undefined;
    /**
     * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
     */
    condition?: fhir.CodeableConcept[] | undefined;
    /**
     * Contact details to assist a user in learning more about or engaging with the study.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * A full description of how the study is being conducted.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
     */
    enrollment?: fhir.Reference[] | undefined;
    /**
     * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
     */
    focus?: fhir.CodeableConcept[] | undefined;
    /**
     * Identifiers assigned to this research study by the sponsor or other systems.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Key terms to aid in searching for or filtering the study.
     */
    keyword?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates a country, state or other region where the study is taking place.
     */
    location?: fhir.CodeableConcept[] | undefined;
    /**
     * Comments made about the study by the performer, subject or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
     */
    objective?: fhir.ResearchStudyObjective[] | undefined;
    /**
     * A larger research study of which this particular study is a component or step.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * Identifies the start date and the expected (or actual, depending on status) end date for the study.
     */
    period?: fhir.Period | undefined;
    /**
     * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
     */
    phase?: fhir.CodeableConcept | undefined;
    /**
     * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
     */
    primaryPurposeType?: fhir.CodeableConcept | undefined;
    /**
     * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
     */
    principalInvestigator?: fhir.Reference | undefined;
    /**
     * The set of steps expected to be performed as part of the execution of the study.
     */
    protocol?: fhir.Reference[] | undefined;
    /**
     * A description and/or code explaining the premature termination of the study.
     */
    reasonStopped?: fhir.CodeableConcept | undefined;
    /**
     * Citations, references and other related documents.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * A facility in which study activities are conducted.
     */
    site?: fhir.Reference[] | undefined;
    /**
     * An organization that initiates the investigation and is legally responsible for the study.
     */
    sponsor?: fhir.Reference | undefined;
    /**
     * The current state of the study.
     */
    status: ResearchStudyStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * A short, descriptive user-friendly label for the study.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ResearchStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IResearchStudy>);
    /**
     * Check if the current ResearchStudy contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ResearchStudy from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IResearchStudy): ResearchStudy;
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