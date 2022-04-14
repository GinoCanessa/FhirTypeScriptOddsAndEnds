import * as fhirInterfaces from '../strictinterfaces';
/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export interface IClinicalImpressionInvestigation extends fhirInterfaces.IBackboneElement {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
     */
    code: fhirInterfaces.ICodeableConcept;
    /**
     * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
     */
    item?: fhirInterfaces.IReference[] | undefined;
}
/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export interface IClinicalImpressionFinding extends fhirInterfaces.IBackboneElement {
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: string | undefined;
    _basis?: fhirInterfaces.IElement | undefined;
    /**
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhirInterfaces.IReference | undefined;
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export interface IClinicalImpression extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ClinicalImpression";
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhirInterfaces.IReference | undefined;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectivePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
     */
    finding?: fhirInterfaces.IClinicalImpressionFinding[] | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: fhirInterfaces.IClinicalImpressionInvestigation[] | undefined;
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhirInterfaces.IReference | undefined;
    /**
     * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: fhirInterfaces.IReference[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: string[] | undefined;
    _protocol?: fhirInterfaces.IElement[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status: ClinicalImpressionStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
     * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject: fhirInterfaces.IReference;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: string | undefined;
    _summary?: fhirInterfaces.IElement | undefined;
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: fhirInterfaces.IReference[] | undefined;
}
/**
 * Code Values for the ClinicalImpression.status field
 */
export declare enum ClinicalImpressionStatusEnum {
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IClinicalImpression.d.ts.map