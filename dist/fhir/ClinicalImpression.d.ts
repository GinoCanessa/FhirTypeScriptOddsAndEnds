import * as fhir from '../fhir';
/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export declare type IClinicalImpressionInvestigation = fhir.IBackboneElement & {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
     */
    item?: fhir.IReference[] | undefined;
};
/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export declare type IClinicalImpressionFinding = fhir.IBackboneElement & {
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: string | undefined;
    _basis?: fhir.IFhirElement | undefined;
    /**
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhir.IReference | undefined;
};
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export declare type IClinicalImpression = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalImpression";
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.IReference | undefined;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhir.IFhirElement | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
     */
    finding?: fhir.IClinicalImpressionFinding[] | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: fhir.IClinicalImpressionInvestigation[] | undefined;
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhir.IReference | undefined;
    /**
     * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: fhir.IReference[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: fhir.ICodeableConcept[] | undefined;
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: fhir.IReference[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: string[] | undefined;
    _protocol?: fhir.IFhirElement[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status: ClinicalImpressionStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
     * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.ICodeableConcept | undefined;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject: fhir.IReference | null;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: string | undefined;
    _summary?: fhir.IFhirElement | undefined;
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: fhir.IReference[] | undefined;
};
/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export declare class ClinicalImpressionInvestigation extends fhir.BackboneElement implements fhir.IClinicalImpressionInvestigation {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
     */
    item?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ClinicalImpressionInvestigation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClinicalImpressionInvestigation>);
    /**
     * Check if the current ClinicalImpressionInvestigation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ClinicalImpressionInvestigation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IClinicalImpressionInvestigation): ClinicalImpressionInvestigation;
}
/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export declare class ClinicalImpressionFinding extends fhir.BackboneElement implements fhir.IClinicalImpressionFinding {
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: string | undefined;
    _basis?: fhir.FhirElement | undefined;
    /**
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * Default constructor for ClinicalImpressionFinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClinicalImpressionFinding>);
    /**
     * Check if the current ClinicalImpressionFinding contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ClinicalImpressionFinding from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IClinicalImpressionFinding): ClinicalImpressionFinding;
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export declare class ClinicalImpression extends fhir.DomainResource implements fhir.IClinicalImpression {
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalImpression";
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.Reference | undefined;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhir.FhirElement | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
     */
    finding?: fhir.ClinicalImpressionFinding[] | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: fhir.ClinicalImpressionInvestigation[] | undefined;
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhir.Reference | undefined;
    /**
     * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: fhir.Reference[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: fhir.CodeableConcept[] | undefined;
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: fhir.Reference[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: string[] | undefined;
    _protocol?: fhir.FhirElement[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status: ClinicalImpressionStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
     * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject: fhir.Reference | null;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: string | undefined;
    _summary?: fhir.FhirElement | undefined;
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ClinicalImpression - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClinicalImpression>);
    /**
     * Check if the current ClinicalImpression contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ClinicalImpression from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IClinicalImpression): ClinicalImpression;
}
/**
 * Code Values for the ClinicalImpression.status field
 */
export declare enum ClinicalImpressionStatusEnum {
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ClinicalImpression.d.ts.map