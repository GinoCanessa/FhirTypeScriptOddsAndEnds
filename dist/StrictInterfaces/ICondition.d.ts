import * as fhirInterfaces from '../strictinterfaces';
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export interface IConditionStage extends fhirInterfaces.IBackboneElement {
    /**
     * Reference to a formal record of the evidence on which the staging assessment is based.
     */
    assessment?: fhirInterfaces.IReference[] | undefined;
    /**
     * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */
    summary?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The kind of staging, such as pathological or clinical staging.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export interface IConditionEvidence extends fhirInterfaces.IBackboneElement {
    /**
     * A manifestation or symptom that led to the recording of this condition.
     */
    code?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Links to other relevant information, including pathology reports.
     */
    detail?: fhirInterfaces.IReference[] | undefined;
}
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export interface ICondition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Condition";
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementDateTime?: string | undefined;
    _abatementDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementAge?: fhirInterfaces.IAge | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementRange?: fhirInterfaces.IRange | undefined;
    /**
     * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
     */
    abatementString?: string | undefined;
    _abatementString?: fhirInterfaces.IElement | undefined;
    /**
     * Individual who is making the condition statement.
     */
    asserter?: fhirInterfaces.IReference | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodySite?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    clinicalStatus?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Identification of the condition, problem or diagnosis.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
     */
    evidence?: fhirInterfaces.IConditionEvidence[] | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetDateTime?: string | undefined;
    _onsetDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetAge?: fhirInterfaces.IAge | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetRange?: fhirInterfaces.IRange | undefined;
    /**
     * Age is generally used when the patient reports an age at which the Condition began to occur.
     */
    onsetString?: string | undefined;
    _onsetString?: fhirInterfaces.IElement | undefined;
    /**
     * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
     */
    recordedDate?: string | undefined;
    _recordedDate?: fhirInterfaces.IElement | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhirInterfaces.IReference | undefined;
    /**
     * Coding of the severity with a terminology is preferred, where possible.
     */
    severity?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Clinical stage or grade of a condition. May include formal severity assessments.
     */
    stage?: fhirInterfaces.IConditionStage[] | undefined;
    /**
     * Indicates the patient or group who the condition record is associated with.
     */
    subject: fhirInterfaces.IReference;
    /**
     * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
     * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
     */
    verificationStatus?: fhirInterfaces.ICodeableConcept | undefined;
}
//# sourceMappingURL=ICondition.d.ts.map