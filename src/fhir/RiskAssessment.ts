// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: RiskAssessment

import * as fhir from '../fhir.js';

import { RiskProbabilityValueSet, RiskProbabilityValueSetType,} from '../fhirValueSets/RiskProbabilityValueSet.js';
import { RiskProbabilityValueSetEnum } from '../valueSetEnums.js';
import { ObservationStatusValueSet, ObservationStatusValueSetType,} from '../fhirValueSets/ObservationStatusValueSet.js';
import { ObservationStatusValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the RiskAssessmentPrediction type.
 */
export interface RiskAssessmentPredictionArgs extends fhir.BackboneElementArgs {
  /**
   * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   */
  outcome?: fhir.CodeableConceptArgs|undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probability?: fhir.FhirDecimal|fhir.Range|undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probabilityDecimal?: fhir.FhirDecimal|number|undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probabilityRange?: fhir.RangeArgs|undefined;
  /**
   * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
   */
  qualitativeRisk?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
   */
  relativeRisk?: fhir.FhirDecimal|number|undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  when?: fhir.Period|fhir.Range|undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  whenPeriod?: fhir.PeriodArgs|undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  whenRange?: fhir.RangeArgs|undefined;
  /**
   * Additional information explaining the basis for the prediction.
   */
  rationale?: fhir.FhirString|string|undefined;
}

/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export class RiskAssessmentPrediction extends fhir.BackboneElement {
  readonly __dataType:string = 'RiskAssessmentPrediction';
  /**
   * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   */
  public outcome?: fhir.CodeableConcept|undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  public probability?: (fhir.FhirDecimal|fhir.Range)|undefined;
  readonly __probabilityIsChoice:true = true;
  /**
   * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
   */
  public qualitativeRisk?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
   */
  public relativeRisk?: fhir.FhirDecimal|undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  public when?: (fhir.Period|fhir.Range)|undefined;
  readonly __whenIsChoice:true = true;
  /**
   * Additional information explaining the basis for the prediction.
   */
  public rationale?: fhir.FhirString|undefined;
  /**
   * Default constructor for RiskAssessmentPrediction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RiskAssessmentPredictionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['outcome']) { this.outcome = new fhir.CodeableConcept(source.outcome); }
    if (source['probability']) { this.probability = source.probability; }
    else if (source['probabilityDecimal']) { this.probability = new fhir.FhirDecimal({value: source.probabilityDecimal}); }
    else if (source['probabilityRange']) { this.probability = new fhir.Range(source.probabilityRange); }
    if (source['qualitativeRisk']) { this.qualitativeRisk = new fhir.CodeableConcept(source.qualitativeRisk); }
    if (source['relativeRisk']) { this.relativeRisk = new fhir.FhirDecimal({value: source.relativeRisk}); }
    if (source['when']) { this.when = source.when; }
    else if (source['whenPeriod']) { this.when = new fhir.Period(source.whenPeriod); }
    else if (source['whenRange']) { this.when = new fhir.Range(source.whenRange); }
    if (source['rationale']) { this.rationale = new fhir.FhirString({value: source.rationale}); }
  }
  /**
   * Example-bound Value Set for qualitativeRisk
   */
  public static qualitativeRiskExampleValueSet():RiskProbabilityValueSetType {
    return RiskProbabilityValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["outcome"]) { outcome.issue!.push(...this.outcome.doModelValidation().issue!); }
    if (this["qualitativeRisk"]) { outcome.issue!.push(...this.qualitativeRisk.doModelValidation().issue!); }
    if (this["relativeRisk"]) { outcome.issue!.push(...this.relativeRisk.doModelValidation().issue!); }
    if (this["rationale"]) { outcome.issue!.push(...this.rationale.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the RiskAssessment type.
 */
export interface RiskAssessmentArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "RiskAssessment"|undefined;
  /**
   * Business identifier assigned to the risk assessment.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A reference to the request that is fulfilled by this risk assessment.
   */
  basedOn?: fhir.ReferenceArgs|undefined;
  /**
   * A reference to a resource that this risk assessment is part of, such as a Procedure.
   */
  parent?: fhir.ReferenceArgs|undefined;
  /**
   * The status of the RiskAssessment, using the same statuses as an Observation.
   */
  status: ObservationStatusValueSetEnum|null;
  /**
   * The algorithm, process or mechanism used to evaluate the risk.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * The type of the risk assessment performed.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The patient or group the risk assessment applies to.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The encounter where the assessment was performed.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   */
  condition?: fhir.ReferenceArgs|undefined;
  /**
   * The provider or software application that performed the assessment.
   */
  performer?: fhir.ReferenceArgs|undefined;
  /**
   * The reason the risk assessment was performed.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Resources supporting the reason the risk assessment was performed.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
   */
  basis?: fhir.ReferenceArgs[]|undefined;
  /**
   * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
   */
  prediction?: fhir.RiskAssessmentPredictionArgs[]|undefined;
  /**
   * A description of the steps that might be taken to reduce the identified risk(s).
   */
  mitigation?: fhir.FhirString|string|undefined;
  /**
   * Additional comments about the risk assessment.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export class RiskAssessment extends fhir.DomainResource {
  readonly __dataType:string = 'RiskAssessment';
  /**
   * Resource Type Name
   */
  public resourceType: "RiskAssessment";
  /**
   * Business identifier assigned to the risk assessment.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * A reference to the request that is fulfilled by this risk assessment.
   */
  public basedOn?: fhir.Reference|undefined;
  /**
   * A reference to a resource that this risk assessment is part of, such as a Procedure.
   */
  public parent?: fhir.Reference|undefined;
  /**
   * The status of the RiskAssessment, using the same statuses as an Observation.
   */
  public status: ObservationStatusValueSetEnum|null;
  /**
   * The algorithm, process or mechanism used to evaluate the risk.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * The type of the risk assessment performed.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The patient or group the risk assessment applies to.
   */
  public subject: fhir.Reference|null;
  /**
   * The encounter where the assessment was performed.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period)|undefined;
  readonly __occurrenceIsChoice:true = true;
  /**
   * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   */
  public condition?: fhir.Reference|undefined;
  /**
   * The provider or software application that performed the assessment.
   */
  public performer?: fhir.Reference|undefined;
  /**
   * The reason the risk assessment was performed.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined = [];
  /**
   * Resources supporting the reason the risk assessment was performed.
   */
  public reasonReference?: fhir.Reference[]|undefined = [];
  /**
   * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
   */
  public basis?: fhir.Reference[]|undefined = [];
  /**
   * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
   */
  public prediction?: fhir.RiskAssessmentPrediction[]|undefined = [];
  /**
   * A description of the steps that might be taken to reduce the identified risk(s).
   */
  public mitigation?: fhir.FhirString|undefined;
  /**
   * Additional comments about the risk assessment.
   */
  public note?: fhir.Annotation[]|undefined = [];
  /**
   * Default constructor for RiskAssessment - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RiskAssessmentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'RiskAssessment';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['basedOn']) { this.basedOn = new fhir.Reference(source.basedOn); }
    if (source['parent']) { this.parent = new fhir.Reference(source.parent); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime']) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod); }
    if (source['condition']) { this.condition = new fhir.Reference(source.condition); }
    if (source['performer']) { this.performer = new fhir.Reference(source.performer); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    if (source['basis']) { this.basis = source.basis.map((x) => new fhir.Reference(x)); }
    if (source['prediction']) { this.prediction = source.prediction.map((x) => new fhir.RiskAssessmentPrediction(x)); }
    if (source['mitigation']) { this.mitigation = new fhir.FhirString({value: source.mitigation}); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():ObservationStatusValueSetType {
    return ObservationStatusValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'RiskAssessment' fhir: RiskAssessment.resourceType:'RiskAssessment'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["basedOn"]) { outcome.issue!.push(...this.basedOn.doModelValidation().issue!); }
    if (this["parent"]) { outcome.issue!.push(...this.parent.doModelValidation().issue!); }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:ObservationStatusValueSetEnum fhir: RiskAssessment.status:code", }));
    }
    if (this["method"]) { outcome.issue!.push(...this.method.doModelValidation().issue!); }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (!this['subject']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property subject:fhir.Reference fhir: RiskAssessment.subject:Reference", }));
    }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
    if (this["condition"]) { outcome.issue!.push(...this.condition.doModelValidation().issue!); }
    if (this["performer"]) { outcome.issue!.push(...this.performer.doModelValidation().issue!); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["basis"]) { this.basis.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["prediction"]) { this.prediction.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["mitigation"]) { outcome.issue!.push(...this.mitigation.doModelValidation().issue!); }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
