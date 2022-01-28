// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../interfaces'
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export interface IImmunizationRecommendationRecommendationDateCriterion extends fhirInterfaces.IBackboneElement {
  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  code: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * The date whose meaning is specified by dateCriterion.code.
   */
  value: string|undefined;
  _value?: fhirInterfaces.IElement|undefined;
}
/**
 * Vaccine administration recommendations.
 */
export interface IImmunizationRecommendationRecommendation extends fhirInterfaces.IBackboneElement {
  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  contraindicatedVaccineCode?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  dateCriterion?: fhirInterfaces.IImmunizationRecommendationRecommendationDateCriterion[]|undefined;
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  description?: string|undefined;
  _description?: fhirInterfaces.IElement|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: number|undefined;
  _doseNumberPositiveInt?: fhirInterfaces.IElement|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: string|undefined;
  _doseNumberString?: fhirInterfaces.IElement|undefined;
  /**
   * The reason for the assigned forecast status.
   */
  forecastReason?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  forecastStatus: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string|undefined;
  _series?: fhirInterfaces.IElement|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: number|undefined;
  _seriesDosesPositiveInt?: fhirInterfaces.IElement|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: string|undefined;
  _seriesDosesString?: fhirInterfaces.IElement|undefined;
  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  supportingImmunization?: fhirInterfaces.IReference[]|undefined;
  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  supportingPatientInformation?: fhirInterfaces.IReference[]|undefined;
  /**
   * The targeted disease for the recommendation.
   */
  targetDisease?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  vaccineCode?: fhirInterfaces.ICodeableConcept[]|undefined;
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export interface IImmunizationRecommendation extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "ImmunizationRecommendation";
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: fhirInterfaces.IReference|undefined;
  /**
   * The date the immunization recommendation(s) were created.
   */
  date: string|undefined;
  _date?: fhirInterfaces.IElement|undefined;
  /**
   * A unique identifier assigned to this particular recommendation record.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * The patient the recommendation(s) are for.
   */
  patient: fhirInterfaces.IReference|undefined;
  /**
   * Vaccine administration recommendations.
   */
  recommendation: fhirInterfaces.IImmunizationRecommendationRecommendation[]|undefined;
}
