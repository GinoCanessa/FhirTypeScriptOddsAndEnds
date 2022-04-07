import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export declare class ConditionStage extends fhirModels.BackboneElement implements fhirInterfaces.IConditionStage {
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment?: fhirModels.Reference[] | undefined;
    /**
     * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */
    summary?: fhirModels.CodeableConcept | undefined;
    /**
     * The kind of staging, such as pathological or clinical staging.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ConditionStage from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IConditionStage>);
    /**
     * Factory function to create a ConditionStage from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IConditionStage): ConditionStage;
    /**
     * Check if the current ConditionStage contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export declare class ConditionEvidence extends fhirModels.BackboneElement implements fhirInterfaces.IConditionEvidence {
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for ConditionEvidence from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IConditionEvidence>);
    /**
     * Factory function to create a ConditionEvidence from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IConditionEvidence): ConditionEvidence;
    /**
     * Check if the current ConditionEvidence contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export declare class Condition extends fhirModels.DomainResource implements fhirInterfaces.ICondition {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Condition";
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementDateTime?: string | undefined;
    _abatementDateTime?: fhirModels.Element | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementAge?: fhirModels.Age | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementPeriod?: fhirModels.Period | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementRange?: fhirModels.Range | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementString?: string | undefined;
    _abatementString?: fhirModels.Element | undefined;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhirModels.Reference | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodySite?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    clinicalStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
     */
    evidence?: fhirModels.ConditionEvidence[] | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetDateTime?: string | undefined;
    _onsetDateTime?: fhirModels.Element | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetAge?: fhirModels.Age | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetPeriod?: fhirModels.Period | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetRange?: fhirModels.Range | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetString?: string | undefined;
    _onsetString?: fhirModels.Element | undefined;
    /**
     * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
     */
    recordedDate?: string | undefined;
    _recordedDate?: fhirModels.Element | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhirModels.Reference | undefined;
    /**
     * Coding of the severity with a terminology is preferred, where possible.
     */
    severity?: fhirModels.CodeableConcept | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhirModels.ConditionStage[] | undefined;
    /**
     * Indicates the patient or group who the condition record is associated with.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
     * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    verificationStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for Condition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICondition>);
    /**
     * Factory function to create a Condition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICondition): Condition;
    /**
     * Check if the current Condition contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Condition.d.ts.map