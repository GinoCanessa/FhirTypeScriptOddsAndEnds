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
 * Valid arguments for the ConditionStage type.
 */
export interface ConditionStageArgs extends fhir.BackboneElementArgs {
    /**
     * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */
    summary?: fhir.CodeableConceptArgs | undefined;
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment?: fhir.ReferenceArgs[] | undefined;
    /**
     * The kind of staging, such as pathological or clinical staging.
     */
    type?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export declare class ConditionStage extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<ConditionStageArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the ConditionEvidence type.
 */
export interface ConditionEvidenceArgs extends fhir.BackboneElementArgs {
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: fhir.ReferenceArgs[] | undefined;
}
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export declare class ConditionEvidence extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<ConditionEvidenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ManifestationOrSymptomValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the Condition type.
 */
export interface ConditionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Condition" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    clinicalStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
     * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    verificationStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Coding of the severity with a terminology is preferred, where possible.
     */
    severity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates the patient or group who the condition record is associated with.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onset?: fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.FhirString | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetAge?: fhir.AgeArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetRange?: fhir.RangeArgs | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetString?: fhir.FhirString | string | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatement?: fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.FhirString | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementAge?: fhir.AgeArgs | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementPeriod?: fhir.PeriodArgs | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementRange?: fhir.RangeArgs | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementString?: fhir.FhirString | string | undefined;
    /**
     * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
     */
    recordedDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.ReferenceArgs | undefined;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhir.ReferenceArgs | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhir.ConditionStageArgs[] | undefined;
    /**
     * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
     */
    evidence?: fhir.ConditionEvidenceArgs[] | undefined;
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export declare class Condition extends fhir.DomainResource {
    readonly __dataType: string;
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
    onset?: (fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.FhirString) | undefined;
    readonly __onsetIsChoice: true;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatement?: (fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.FhirString) | undefined;
    readonly __abatementIsChoice: true;
    /**
     * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
     */
    recordedDate?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<ConditionArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Condition.d.ts.map