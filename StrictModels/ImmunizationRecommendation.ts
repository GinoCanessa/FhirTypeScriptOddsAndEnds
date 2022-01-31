// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export class ImmunizationRecommendationRecommendationDateCriterion extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationRecommendationRecommendationDateCriterion {
  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  code: fhirModels.CodeableConcept;
  /**
   * The date whose meaning is specified by dateCriterion.code.
   */
  value: string;
  _value?: fhirModels.Element|undefined;
  /**
   * Default constructor for ImmunizationRecommendationRecommendationDateCriterion from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IImmunizationRecommendationRecommendationDateCriterion) {
    super(source);
    {
      this.code = new fhirModels.CodeableConcept(source.code);
    }
    {
      this.value = source.value;
    }
    if (source["_value"] !== undefined) {
      this._value = new fhirModels.Element(source._value);
    }
  }
}
/**
 * Vaccine administration recommendations.
 */
export class ImmunizationRecommendationRecommendation extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationRecommendationRecommendation {
  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  contraindicatedVaccineCode?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  dateCriterion?: fhirModels.ImmunizationRecommendationRecommendationDateCriterion[]|undefined;
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: number|undefined;
  _doseNumberPositiveInt?: fhirModels.Element|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: string|undefined;
  _doseNumberString?: fhirModels.Element|undefined;
  /**
   * The reason for the assigned forecast status.
   */
  forecastReason?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  forecastStatus: fhirModels.CodeableConcept;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string|undefined;
  _series?: fhirModels.Element|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: number|undefined;
  _seriesDosesPositiveInt?: fhirModels.Element|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: string|undefined;
  _seriesDosesString?: fhirModels.Element|undefined;
  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  supportingImmunization?: fhirModels.Reference[]|undefined;
  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  supportingPatientInformation?: fhirModels.Reference[]|undefined;
  /**
   * The targeted disease for the recommendation.
   */
  targetDisease?: fhirModels.CodeableConcept|undefined;
  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  vaccineCode?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Default constructor for ImmunizationRecommendationRecommendation from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IImmunizationRecommendationRecommendation) {
    super(source);
    if (source["contraindicatedVaccineCode"] !== undefined) {
      this.contraindicatedVaccineCode = source.contraindicatedVaccineCode.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["dateCriterion"] !== undefined) {
      this.dateCriterion = source.dateCriterion.map((x) => new fhirModels.ImmunizationRecommendationRecommendationDateCriterion(x));
    }
    if (source["description"] !== undefined) {
      this.description = source.description;
    }
    if (source["_description"] !== undefined) {
      this._description = new fhirModels.Element(source._description);
    }
    if (source["doseNumberPositiveInt"] !== undefined) {
      this.doseNumberPositiveInt = source.doseNumberPositiveInt;
    }
    if (source["_doseNumberPositiveInt"] !== undefined) {
      this._doseNumberPositiveInt = new fhirModels.Element(source._doseNumberPositiveInt);
    }
    if (source["doseNumberString"] !== undefined) {
      this.doseNumberString = source.doseNumberString;
    }
    if (source["_doseNumberString"] !== undefined) {
      this._doseNumberString = new fhirModels.Element(source._doseNumberString);
    }
    if (source["forecastReason"] !== undefined) {
      this.forecastReason = source.forecastReason.map((x) => new fhirModels.CodeableConcept(x));
    }
    {
      this.forecastStatus = new fhirModels.CodeableConcept(source.forecastStatus);
    }
    if (source["series"] !== undefined) {
      this.series = source.series;
    }
    if (source["_series"] !== undefined) {
      this._series = new fhirModels.Element(source._series);
    }
    if (source["seriesDosesPositiveInt"] !== undefined) {
      this.seriesDosesPositiveInt = source.seriesDosesPositiveInt;
    }
    if (source["_seriesDosesPositiveInt"] !== undefined) {
      this._seriesDosesPositiveInt = new fhirModels.Element(source._seriesDosesPositiveInt);
    }
    if (source["seriesDosesString"] !== undefined) {
      this.seriesDosesString = source.seriesDosesString;
    }
    if (source["_seriesDosesString"] !== undefined) {
      this._seriesDosesString = new fhirModels.Element(source._seriesDosesString);
    }
    if (source["supportingImmunization"] !== undefined) {
      this.supportingImmunization = source.supportingImmunization.map((x) => new fhirModels.Reference(x));
    }
    if (source["supportingPatientInformation"] !== undefined) {
      this.supportingPatientInformation = source.supportingPatientInformation.map((x) => new fhirModels.Reference(x));
    }
    if (source["targetDisease"] !== undefined) {
      this.targetDisease = new fhirModels.CodeableConcept(source.targetDisease);
    }
    if (source["vaccineCode"] !== undefined) {
      this.vaccineCode = source.vaccineCode.map((x) => new fhirModels.CodeableConcept(x));
    }
  }
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export class ImmunizationRecommendation extends fhirModels.DomainResource implements fhirInterfaces.IImmunizationRecommendation {
  /**
   * Resource Type Name
   */
  readonly resourceType = "ImmunizationRecommendation";
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: fhirModels.Reference|undefined;
  /**
   * The date the immunization recommendation(s) were created.
   */
  date: string;
  _date?: fhirModels.Element|undefined;
  /**
   * A unique identifier assigned to this particular recommendation record.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The patient the recommendation(s) are for.
   */
  patient: fhirModels.Reference;
  /**
   * Vaccine administration recommendations.
   */
  recommendation: fhirModels.ImmunizationRecommendationRecommendation[];
  /**
   * Default constructor for ImmunizationRecommendation from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IImmunizationRecommendation) {
    super(source);
    if ((source['resourceType'] !== "ImmunizationRecommendation") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a ImmunizationRecommendation'; }
    if (source["authority"] !== undefined) {
      this.authority = new fhirModels.Reference(source.authority);
    }
    {
      this.date = source.date;
    }
    if (source["_date"] !== undefined) {
      this._date = new fhirModels.Element(source._date);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    {
      this.patient = new fhirModels.Reference(source.patient);
    }
    {
      this.recommendation = source.recommendation.map((x) => new fhirModels.ImmunizationRecommendationRecommendation(x));
    }
  }
}