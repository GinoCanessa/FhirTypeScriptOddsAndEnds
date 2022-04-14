import * as fhirInterfaces from '../strictinterfaces';
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export interface IRiskAssessmentPrediction extends fhirInterfaces.IBackboneElement {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityDecimal?: number | undefined;
    _probabilityDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityRange?: fhirInterfaces.IRange | undefined;
    /**
     * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
     */
    qualitativeRisk?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: string | undefined;
    _rationale?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: number | undefined;
    _relativeRisk?: fhirInterfaces.IElement | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenRange?: fhirInterfaces.IRange | undefined;
}
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export interface IRiskAssessment extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "RiskAssessment";
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: fhirInterfaces.IReference | undefined;
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhirInterfaces.IReference[] | undefined;
    /**
     * The type of the risk assessment performed.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhirInterfaces.IReference | undefined;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: string | undefined;
    _mitigation?: fhirInterfaces.IElement | undefined;
    /**
     * Additional comments about the risk assessment.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: fhirInterfaces.IReference | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhirInterfaces.IReference | undefined;
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction?: fhirInterfaces.IRiskAssessmentPrediction[] | undefined;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status: RiskAssessmentStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: fhirInterfaces.IReference;
}
/**
 * Code Values for the RiskAssessment.status field
 */
export declare enum RiskAssessmentStatusEnum {
    REGISTERED = "registered",
    PRELIMINARY = "preliminary",
    FINAL = "final",
    AMENDED = "amended",
    CORRECTED = "corrected",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IRiskAssessment.d.ts.map