import * as fhir from '../fhir.js';
import { ConditionStageValueSetType } from '../fhirValueSets/ConditionStageValueSet.js';
import { ConditionStageTypeValueSetType } from '../fhirValueSets/ConditionStageTypeValueSet.js';
import { ManifestationOrSymptomValueSetType } from '../fhirValueSets/ManifestationOrSymptomValueSet.js';
import { ConditionClinicalValueSetType } from '../fhirValueSets/ConditionClinicalValueSet.js';
import { ConditionVerStatusValueSetType } from '../fhirValueSets/ConditionVerStatusValueSet.js';
import { ConditionCategoryValueSetType } from '../fhirValueSets/ConditionCategoryValueSet.js';
import { ConditionSeverityValueSetType } from '../fhirValueSets/ConditionSeverityValueSet.js';
import { ConditionCodeValueSetType } from '../fhirValueSets/ConditionCodeValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export declare type IConditionStage = fhir.IBackboneElement & {
    /**
     * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */
    summary?: fhir.ICodeableConcept | undefined;
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment?: fhir.IReference[] | undefined;
    /**
     * The kind of staging, such as pathological or clinical staging.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export declare type IConditionEvidence = fhir.IBackboneElement & {
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: fhir.IReference[] | undefined;
};
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export declare type ICondition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Condition";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    clinicalStatus?: fhir.ICodeableConcept | undefined;
    /**
     * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
     * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    verificationStatus?: fhir.ICodeableConcept | undefined;
    /**
     * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * Coding of the severity with a terminology is preferred, where possible.
     */
    severity?: fhir.ICodeableConcept | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodySite?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates the patient or group who the condition record is associated with.
     */
    subject: fhir.IReference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.onset[x]
     */
    _onsetDateTime?: fhir.IFhirElement | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetAge?: fhir.IAge | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetPeriod?: fhir.IPeriod | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetRange?: fhir.IRange | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetString?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.onset[x]
     */
    _onsetString?: fhir.IFhirElement | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.abatement[x]
     */
    _abatementDateTime?: fhir.IFhirElement | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementAge?: fhir.IAge | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementPeriod?: fhir.IPeriod | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementRange?: fhir.IRange | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementString?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.abatement[x]
     */
    _abatementString?: fhir.IFhirElement | undefined;
    /**
     * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
     */
    recordedDate?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.recordedDate
     */
    _recordedDate?: fhir.IFhirElement | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.IReference | undefined;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhir.IReference | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhir.IConditionStage[] | undefined;
    /**
     * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
     */
    evidence?: fhir.IConditionEvidence[] | undefined;
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export declare class ConditionStage extends fhir.BackboneElement implements IConditionStage {
    /**
     * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */
    summary?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment?: fhir.Reference[] | undefined;
    /**
     * The kind of staging, such as pathological or clinical staging.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ConditionStage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConditionStage>);
    /**
     * Example-bound Value Set for summary
     */
    static summaryExampleValueSet(): ConditionStageValueSetType;
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ConditionStageTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export declare class ConditionEvidence extends fhir.BackboneElement implements IConditionEvidence {
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ConditionEvidence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConditionEvidence>);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ManifestationOrSymptomValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export declare class Condition extends fhir.DomainResource implements ICondition {
    /**
     * Resource Type Name
     */
    resourceType: "Condition";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    clinicalStatus?: fhir.CodeableConcept | undefined;
    /**
     * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
     * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    verificationStatus?: fhir.CodeableConcept | undefined;
    /**
     * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Coding of the severity with a terminology is preferred, where possible.
     */
    severity?: fhir.CodeableConcept | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodySite?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates the patient or group who the condition record is associated with.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.onset[x]
     */
    _onsetDateTime?: fhir.FhirElement | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetAge?: fhir.Age | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetPeriod?: fhir.Period | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetRange?: fhir.Range | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetString?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.onset[x]
     */
    _onsetString?: fhir.FhirElement | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.abatement[x]
     */
    _abatementDateTime?: fhir.FhirElement | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementAge?: fhir.Age | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementPeriod?: fhir.Period | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementRange?: fhir.Range | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementString?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.abatement[x]
     */
    _abatementString?: fhir.FhirElement | undefined;
    /**
     * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
     */
    recordedDate?: string | undefined;
    /**
     * Extended properties for primitive element: Condition.recordedDate
     */
    _recordedDate?: fhir.FhirElement | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhir.ConditionStage[] | undefined;
    /**
     * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
     */
    evidence?: fhir.ConditionEvidence[] | undefined;
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for Condition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICondition>);
    /**
     * Required-bound Value Set for clinicalStatus
     */
    static clinicalStatusRequiredValueSet(): ConditionClinicalValueSetType;
    /**
     * Required-bound Value Set for verificationStatus
     */
    static verificationStatusRequiredValueSet(): ConditionVerStatusValueSetType;
    /**
     * Extensible-bound Value Set for category
     */
    static categoryExtensibleValueSet(): ConditionCategoryValueSetType;
    /**
     * Preferred-bound Value Set for severity
     */
    static severityPreferredValueSet(): ConditionSeverityValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ConditionCodeValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    static bodySiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Condition.d.ts.map