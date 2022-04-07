import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export declare class ClinicalImpressionInvestigation extends fhirModels.BackboneElement implements fhirInterfaces.IClinicalImpressionInvestigation {
    /**
     * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
     */
    item?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for ClinicalImpressionInvestigation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClinicalImpressionInvestigation>);
    /**
     * Factory function to create a ClinicalImpressionInvestigation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClinicalImpressionInvestigation): ClinicalImpressionInvestigation;
    /**
     * Check if the current ClinicalImpressionInvestigation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export declare class ClinicalImpressionFinding extends fhirModels.BackboneElement implements fhirInterfaces.IClinicalImpressionFinding {
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: string | undefined;
    _basis?: fhirModels.Element | undefined;
    /**
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ClinicalImpressionFinding from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClinicalImpressionFinding>);
    /**
     * Factory function to create a ClinicalImpressionFinding from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClinicalImpressionFinding): ClinicalImpressionFinding;
    /**
     * Check if the current ClinicalImpressionFinding contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export declare class ClinicalImpression extends fhirModels.DomainResource implements fhirInterfaces.IClinicalImpression {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ClinicalImpression";
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhirModels.Reference | undefined;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhirModels.Element | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectivePeriod?: fhirModels.Period | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
     */
    finding?: fhirModels.ClinicalImpressionFinding[] | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: fhirModels.ClinicalImpressionInvestigation[] | undefined;
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhirModels.Reference | undefined;
    /**
     * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: fhirModels.Reference[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: fhirModels.CodeableConcept[] | undefined;
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: fhirModels.Reference[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: string[] | undefined;
    _protocol?: fhirModels.Element[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status?: ClinicalImpressionStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
     * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhirModels.CodeableConcept | undefined;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: string | undefined;
    _summary?: fhirModels.Element | undefined;
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for ClinicalImpression from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClinicalImpression>);
    /**
     * Factory function to create a ClinicalImpression from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClinicalImpression): ClinicalImpression;
    /**
     * Check if the current ClinicalImpression contains all required elements.
     */
    checkRequiredElements(): string[];
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