import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export declare class RiskAssessmentPrediction extends fhirModels.BackboneElement implements fhirInterfaces.IRiskAssessmentPrediction {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome?: fhirModels.CodeableConcept | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityDecimal?: number | undefined;
    _probabilityDecimal?: fhirModels.Element | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityRange?: fhirModels.Range | undefined;
    /**
     * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
     */
    qualitativeRisk?: fhirModels.CodeableConcept | undefined;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: string | undefined;
    _rationale?: fhirModels.Element | undefined;
    /**
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: number | undefined;
    _relativeRisk?: fhirModels.Element | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenPeriod?: fhirModels.Period | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenRange?: fhirModels.Range | undefined;
    /**
     * Default constructor for RiskAssessmentPrediction from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IRiskAssessmentPrediction);
}
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export declare class RiskAssessment extends fhirModels.DomainResource implements fhirInterfaces.IRiskAssessment {
    /**
     * Resource Type Name
     */
    readonly resourceType = "RiskAssessment";
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: fhirModels.Reference | undefined;
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhirModels.Reference[] | undefined;
    /**
     * The type of the risk assessment performed.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhirModels.Reference | undefined;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: fhirModels.CodeableConcept | undefined;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: string | undefined;
    _mitigation?: fhirModels.Element | undefined;
    /**
     * Additional comments about the risk assessment.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirModels.Element | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: fhirModels.Period | undefined;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: fhirModels.Reference | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhirModels.Reference | undefined;
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction?: fhirModels.RiskAssessmentPrediction[] | undefined;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status: RiskAssessmentStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: fhirModels.Reference;
    /**
     * Default constructor for RiskAssessment from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IRiskAssessment);
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