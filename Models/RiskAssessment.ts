// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export class RiskAssessmentPrediction extends fhirModels.BackboneElement {
  /**
   * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   */
  outcome?: fhirModels.CodeableConcept;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probabilityDecimal?: number;
  _probabilityDecimal?: fhirModels.Element;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probabilityRange?: fhirModels.Range;
  /**
   * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
   */
  qualitativeRisk?: fhirModels.CodeableConcept;
  /**
   * Additional information explaining the basis for the prediction.
   */
  rationale?: string;
  _rationale?: fhirModels.Element;
  /**
   * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
   */
  relativeRisk?: number;
  _relativeRisk?: fhirModels.Element;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  whenPeriod?: fhirModels.Period;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  whenRange?: fhirModels.Range;
  /**
   * Default constructor
   */
  constructor(source: RiskAssessmentPrediction) {
    super(source);
    if (source["outcome"] !== undefined) { this.outcome = source.outcome; }
    if (source["probabilityDecimal"] !== undefined) { this.probabilityDecimal = source.probabilityDecimal; }
    if (source["_probabilityDecimal"] !== undefined) { this._probabilityDecimal = source._probabilityDecimal; }
    if (source["probabilityRange"] !== undefined) { this.probabilityRange = source.probabilityRange; }
    if (source["qualitativeRisk"] !== undefined) { this.qualitativeRisk = source.qualitativeRisk; }
    if (source["rationale"] !== undefined) { this.rationale = source.rationale; }
    if (source["_rationale"] !== undefined) { this._rationale = source._rationale; }
    if (source["relativeRisk"] !== undefined) { this.relativeRisk = source.relativeRisk; }
    if (source["_relativeRisk"] !== undefined) { this._relativeRisk = source._relativeRisk; }
    if (source["whenPeriod"] !== undefined) { this.whenPeriod = source.whenPeriod; }
    if (source["whenRange"] !== undefined) { this.whenRange = source.whenRange; }
  }
}
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export class RiskAssessment extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "RiskAssessment";
  /**
   * A reference to the request that is fulfilled by this risk assessment.
   */
  basedOn?: fhirModels.Reference;
  /**
   * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
   */
  basis?: fhirModels.Reference[];
  /**
   * The type of the risk assessment performed.
   */
  code?: fhirModels.CodeableConcept;
  /**
   * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   */
  condition?: fhirModels.Reference;
  /**
   * The encounter where the assessment was performed.
   */
  encounter?: fhirModels.Reference;
  /**
   * Business identifier assigned to the risk assessment.
   */
  identifier?: fhirModels.Identifier[];
  /**
   * The algorithm, process or mechanism used to evaluate the risk.
   */
  method?: fhirModels.CodeableConcept;
  /**
   * A description of the steps that might be taken to reduce the identified risk(s).
   */
  mitigation?: string;
  _mitigation?: fhirModels.Element;
  /**
   * Additional comments about the risk assessment.
   */
  note?: fhirModels.Annotation[];
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrenceDateTime?: string;
  _occurrenceDateTime?: fhirModels.Element;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrencePeriod?: fhirModels.Period;
  /**
   * A reference to a resource that this risk assessment is part of, such as a Procedure.
   */
  parent?: fhirModels.Reference;
  /**
   * The provider or software application that performed the assessment.
   */
  performer?: fhirModels.Reference;
  /**
   * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
   */
  prediction?: fhirModels.RiskAssessmentPrediction[];
  /**
   * The reason the risk assessment was performed.
   */
  reasonCode?: fhirModels.CodeableConcept[];
  /**
   * Resources supporting the reason the risk assessment was performed.
   */
  reasonReference?: fhirModels.Reference[];
  /**
   * The status of the RiskAssessment, using the same statuses as an Observation.
   */
  status: RiskAssessmentStatusEnum;
  _status?: fhirModels.Element;
  /**
   * The patient or group the risk assessment applies to.
   */
  subject: fhirModels.Reference;
  /**
   * Default constructor
   */
  constructor(source: RiskAssessment) {
    super(source);
    if ((source['resourceType'] !== "RiskAssessment") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a RiskAssessment'; }
    if (source["basedOn"] !== undefined) { this.basedOn = source.basedOn; }
    if (source["basis"] !== undefined) { this.basis = source.basis; }
    if (source["code"] !== undefined) { this.code = source.code; }
    if (source["condition"] !== undefined) { this.condition = source.condition; }
    if (source["encounter"] !== undefined) { this.encounter = source.encounter; }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier; }
    if (source["method"] !== undefined) { this.method = source.method; }
    if (source["mitigation"] !== undefined) { this.mitigation = source.mitigation; }
    if (source["_mitigation"] !== undefined) { this._mitigation = source._mitigation; }
    if (source["note"] !== undefined) { this.note = source.note; }
    if (source["occurrenceDateTime"] !== undefined) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source["_occurrenceDateTime"] !== undefined) { this._occurrenceDateTime = source._occurrenceDateTime; }
    if (source["occurrencePeriod"] !== undefined) { this.occurrencePeriod = source.occurrencePeriod; }
    if (source["parent"] !== undefined) { this.parent = source.parent; }
    if (source["performer"] !== undefined) { this.performer = source.performer; }
    if (source["prediction"] !== undefined) { this.prediction = source.prediction; }
    if (source["reasonCode"] !== undefined) { this.reasonCode = source.reasonCode; }
    if (source["reasonReference"] !== undefined) { this.reasonReference = source.reasonReference; }
    if (source["status"] === undefined) { throw 'Missing required element status';}
    this.status = source.status;
    if (source["_status"] !== undefined) { this._status = source._status; }
    if (source["subject"] === undefined) { throw 'Missing required element subject';}
    this.subject = source.subject;
  }
}
/**
 * Code Values for the RiskAssessment.status field
 */
export enum RiskAssessmentStatusEnum {
  REGISTERED = "registered",
  PRELIMINARY = "preliminary",
  FINAL = "final",
  AMENDED = "amended",
  CORRECTED = "corrected",
  CANCELLED = "cancelled",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}
