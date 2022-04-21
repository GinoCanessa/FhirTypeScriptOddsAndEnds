import * as fhir from '../fhir.js';
import { RiskProbabilityValueSetType } from '../fhirValueSets/RiskProbabilityValueSet.js';
import { ObservationStatusValueSetType, ObservationStatusValueSetEnum } from '../fhirValueSets/ObservationStatusValueSet.js';
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
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.probability[x]
     */
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
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.relativeRisk
     */
    _relativeRisk?: fhir.IFhirElement | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenPeriod?: fhir.IPeriod | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenRange?: fhir.IRange | undefined;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.rationale
     */
    _rationale?: fhir.IFhirElement | undefined;
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
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: fhir.IReference | undefined;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: fhir.IReference | undefined;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status: ObservationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: RiskAssessment.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * The type of the risk assessment performed.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: fhir.IReference | null;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.occurrence[x]
     */
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: fhir.IPeriod | undefined;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhir.IReference | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhir.IReference | undefined;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhir.IReference[] | undefined;
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction?: fhir.IRiskAssessmentPrediction[] | undefined;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.mitigation
     */
    _mitigation?: fhir.IFhirElement | undefined;
    /**
     * Additional comments about the risk assessment.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export declare class RiskAssessmentPrediction extends fhir.BackboneElement implements IRiskAssessmentPrediction {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.probability[x]
     */
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
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.relativeRisk
     */
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
     * Additional information explaining the basis for the prediction.
     */
    rationale?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.rationale
     */
    _rationale?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RiskAssessmentPrediction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRiskAssessmentPrediction>);
    /**
     * Example-bound Value Set for qualitativeRisk
     */
    qualitativeRiskExampleValueSet(): RiskProbabilityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export declare class RiskAssessment extends fhir.DomainResource implements IRiskAssessment {
    /**
     * Resource Type Name
     */
    resourceType: "RiskAssessment";
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: fhir.Reference | undefined;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: fhir.Reference | undefined;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status: ObservationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: RiskAssessment.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The type of the risk assessment performed.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: fhir.Reference | null;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhir.Reference | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhir.Reference | undefined;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhir.Reference[] | undefined;
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction?: fhir.RiskAssessmentPrediction[] | undefined;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.mitigation
     */
    _mitigation?: fhir.FhirElement | undefined;
    /**
     * Additional comments about the risk assessment.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for RiskAssessment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRiskAssessment>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): ObservationStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=RiskAssessment.d.ts.map