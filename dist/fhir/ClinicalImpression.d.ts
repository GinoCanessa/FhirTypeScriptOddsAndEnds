import * as fhir from '../fhir.js';
import { InvestigationSetsValueSetType } from '../fhirValueSets/InvestigationSetsValueSet.js';
import { ConditionCodeValueSetType } from '../fhirValueSets/ConditionCodeValueSet.js';
import { ClinicalimpressionStatusValueSetType, ClinicalimpressionStatusValueSetEnum } from '../fhirValueSets/ClinicalimpressionStatusValueSet.js';
import { ClinicalimpressionPrognosisValueSetType } from '../fhirValueSets/ClinicalimpressionPrognosisValueSet.js';
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
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhir.IReference | undefined;
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.finding.basis
     */
    _basis?: fhir.IFhirElement | undefined;
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
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status: ClinicalimpressionStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ClinicalImpression.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
     * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.ICodeableConcept | undefined;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject: fhir.IReference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.effective[x]
     */
    _effectiveDateTime?: fhir.IFhirElement | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.IReference | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhir.IReference | undefined;
    /**
     * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: fhir.IReference[] | undefined;
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: fhir.IClinicalImpressionInvestigation[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: string[] | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.protocol
     */
    _protocol?: fhir.IFhirElement[] | undefined;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.summary
     */
    _summary?: fhir.IFhirElement | undefined;
    /**
     * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
     */
    finding?: fhir.IClinicalImpressionFinding[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: fhir.ICodeableConcept[] | undefined;
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: fhir.IReference[] | undefined;
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: fhir.IReference[] | undefined;
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export declare class ClinicalImpressionInvestigation extends fhir.BackboneElement implements IClinicalImpressionInvestigation {
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
    constructor(source?: Partial<IClinicalImpressionInvestigation>);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): InvestigationSetsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export declare class ClinicalImpressionFinding extends fhir.BackboneElement implements IClinicalImpressionFinding {
    /**
     * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * Which investigations support finding or diagnosis.
     */
    basis?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.finding.basis
     */
    _basis?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClinicalImpressionFinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClinicalImpressionFinding>);
    /**
     * Example-bound Value Set for itemCodeableConcept
     */
    static itemCodeableConceptExampleValueSet(): ConditionCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export declare class ClinicalImpression extends fhir.DomainResource implements IClinicalImpression {
    /**
     * Resource Type Name
     */
    resourceType: "ClinicalImpression";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
     */
    status: ClinicalimpressionStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ClinicalImpression.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
     * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * This is present as a place-holder only and may be removed based on feedback/work group opinion.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * The patient or group of individuals assessed as part of this record.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.effective[x]
     */
    _effectiveDateTime?: fhir.FhirElement | undefined;
    /**
     * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Indicates when the documentation of the assessment was complete.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * The clinician performing the assessment.
     */
    assessor?: fhir.Reference | undefined;
    /**
     * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
     */
    previous?: fhir.Reference | undefined;
    /**
     * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
     */
    problem?: fhir.Reference[] | undefined;
    /**
     * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */
    investigation?: fhir.ClinicalImpressionInvestigation[] | undefined;
    /**
     * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */
    protocol?: string[] | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.protocol
     */
    _protocol?: fhir.FhirElement[] | undefined;
    /**
     * A text summary of the investigations and the diagnosis.
     */
    summary?: string | undefined;
    /**
     * Extended properties for primitive element: ClinicalImpression.summary
     */
    _summary?: fhir.FhirElement | undefined;
    /**
     * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
     */
    finding?: fhir.ClinicalImpressionFinding[] | undefined;
    /**
     * Estimate of likely outcome.
     */
    prognosisCodeableConcept?: fhir.CodeableConcept[] | undefined;
    /**
     * RiskAssessment expressing likely outcome.
     */
    prognosisReference?: fhir.Reference[] | undefined;
    /**
     * Information supporting the clinical impression.
     */
    supportingInfo?: fhir.Reference[] | undefined;
    /**
     * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for ClinicalImpression - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClinicalImpression>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ClinicalimpressionStatusValueSetType;
    /**
     * Example-bound Value Set for prognosisCodeableConcept
     */
    static prognosisCodeableConceptExampleValueSet(): ClinicalimpressionPrognosisValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ClinicalImpression.d.ts.map