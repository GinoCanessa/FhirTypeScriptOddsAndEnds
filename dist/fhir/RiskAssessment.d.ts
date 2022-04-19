import * as fhir from '../fhir';
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export declare type IRiskAssessmentPrediction = fhir.IBackboneElement & {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome?: fhir.ICodeableConcept | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityDecimal?: number | undefined;
    _probabilityDecimal?: fhir.IFhirElement | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityRange?: fhir.IRange | undefined;
    /**
     * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
     */
    qualitativeRisk?: fhir.ICodeableConcept | undefined;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: string | undefined;
    _rationale?: fhir.IFhirElement | undefined;
    /**
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: number | undefined;
    _relativeRisk?: fhir.IFhirElement | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenPeriod?: fhir.IPeriod | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenRange?: fhir.IRange | undefined;
};
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export declare type IRiskAssessment = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "RiskAssessment";
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: fhir.IReference | undefined;
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhir.IReference[] | undefined;
    /**
     * The type of the risk assessment performed.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhir.IReference | undefined;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: string | undefined;
    _mitigation?: fhir.IFhirElement | undefined;
    /**
     * Additional comments about the risk assessment.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: fhir.IPeriod | undefined;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: fhir.IReference | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhir.IReference | undefined;
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction?: fhir.IRiskAssessmentPrediction[] | undefined;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status: RiskAssessmentStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: fhir.IReference | null;
};
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export declare class RiskAssessmentPrediction extends fhir.BackboneElement implements fhir.IRiskAssessmentPrediction {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityDecimal?: number | undefined;
    _probabilityDecimal?: fhir.FhirElement | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityRange?: fhir.Range | undefined;
    /**
     * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
     */
    qualitativeRisk?: fhir.CodeableConcept | undefined;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: string | undefined;
    _rationale?: fhir.FhirElement | undefined;
    /**
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: number | undefined;
    _relativeRisk?: fhir.FhirElement | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenPeriod?: fhir.Period | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenRange?: fhir.Range | undefined;
    /**
     * Default constructor for RiskAssessmentPrediction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRiskAssessmentPrediction>);
    /**
     * Check if the current RiskAssessmentPrediction contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a RiskAssessmentPrediction from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IRiskAssessmentPrediction): RiskAssessmentPrediction;
}
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export declare class RiskAssessment extends fhir.DomainResource implements fhir.IRiskAssessment {
    /**
     * Resource Type Name
     */
    resourceType: "RiskAssessment";
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: fhir.Reference | undefined;
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhir.Reference[] | undefined;
    /**
     * The type of the risk assessment performed.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhir.Reference | undefined;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: string | undefined;
    _mitigation?: fhir.FhirElement | undefined;
    /**
     * Additional comments about the risk assessment.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: fhir.Reference | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction?: fhir.RiskAssessmentPrediction[] | undefined;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status: RiskAssessmentStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: fhir.Reference | null;
    /**
     * Default constructor for RiskAssessment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRiskAssessment>);
    /**
     * Check if the current RiskAssessment contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a RiskAssessment from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IRiskAssessment): RiskAssessment;
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
//# sourceMappingURL=RiskAssessment.d.ts.map