// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export class ImmunizationEvaluation extends fhirModels.DomainResource implements fhirInterfaces.IImmunizationEvaluation {
  /**
   * Resource Type Name
   */
  readonly resourceType = "ImmunizationEvaluation";
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: fhirModels.Reference|undefined;
  /**
   * The date the evaluation of the vaccine administration event was performed.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * Additional information about the evaluation.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: number|undefined;
  _doseNumberPositiveInt?: fhirModels.Element|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: string|undefined;
  _doseNumberString?: fhirModels.Element|undefined;
  /**
   * Indicates if the dose is valid or not valid with respect to the published recommendations.
   */
  doseStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
   */
  doseStatusReason?: fhirModels.CodeableConcept[]|undefined;
  /**
   * A unique identifier assigned to this immunization evaluation record.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The vaccine administration event being evaluated.
   */
  immunizationEvent?: fhirModels.Reference|undefined;
  /**
   * The individual for whom the evaluation is being done.
   */
  patient?: fhirModels.Reference|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string|undefined;
  _series?: fhirModels.Element|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: number|undefined;
  _seriesDosesPositiveInt?: fhirModels.Element|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: string|undefined;
  _seriesDosesString?: fhirModels.Element|undefined;
  /**
   * Indicates the current status of the evaluation of the vaccination administration event.
   */
  status?: ImmunizationEvaluationStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * The vaccine preventable disease the dose is being evaluated against.
   */
  targetDisease?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for ImmunizationEvaluation from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IImmunizationEvaluation>) {
    super(source);
    if ((source['resourceType'] !== "ImmunizationEvaluation") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a ImmunizationEvaluation'; }
    if (source["authority"] !== undefined) { this.authority = new fhirModels.Reference(source.authority); }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = new fhirModels.Element(source._date); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["doseNumberPositiveInt"] !== undefined) { this.doseNumberPositiveInt = source.doseNumberPositiveInt; }
    if (source["_doseNumberPositiveInt"] !== undefined) { this._doseNumberPositiveInt = new fhirModels.Element(source._doseNumberPositiveInt); }
    if (source["doseNumberString"] !== undefined) { this.doseNumberString = source.doseNumberString; }
    if (source["_doseNumberString"] !== undefined) { this._doseNumberString = new fhirModels.Element(source._doseNumberString); }
    if (source["doseStatus"] !== undefined) { this.doseStatus = new fhirModels.CodeableConcept(source.doseStatus); }
    if (source["doseStatusReason"] !== undefined) { this.doseStatusReason = source.doseStatusReason.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["immunizationEvent"] !== undefined) { this.immunizationEvent = new fhirModels.Reference(source.immunizationEvent); }
    if (source["patient"] !== undefined) { this.patient = new fhirModels.Reference(source.patient); }
    if (source["series"] !== undefined) { this.series = source.series; }
    if (source["_series"] !== undefined) { this._series = new fhirModels.Element(source._series); }
    if (source["seriesDosesPositiveInt"] !== undefined) { this.seriesDosesPositiveInt = source.seriesDosesPositiveInt; }
    if (source["_seriesDosesPositiveInt"] !== undefined) { this._seriesDosesPositiveInt = new fhirModels.Element(source._seriesDosesPositiveInt); }
    if (source["seriesDosesString"] !== undefined) { this.seriesDosesString = source.seriesDosesString; }
    if (source["_seriesDosesString"] !== undefined) { this._seriesDosesString = new fhirModels.Element(source._seriesDosesString); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["targetDisease"] !== undefined) { this.targetDisease = new fhirModels.CodeableConcept(source.targetDisease); }
  }
  /**
   * Factory function to create a ImmunizationEvaluation from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IImmunizationEvaluation):ImmunizationEvaluation {
    var dest:ImmunizationEvaluation = new ImmunizationEvaluation(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ImmunizationEvaluation is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ImmunizationEvaluation contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["doseStatus"] === undefined) { missingElements.push("doseStatus"); }
    if (this["immunizationEvent"] === undefined) { missingElements.push("immunizationEvent"); }
    if (this["patient"] === undefined) { missingElements.push("patient"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["targetDisease"] === undefined) { missingElements.push("targetDisease"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the ImmunizationEvaluation.status field
 */
export enum ImmunizationEvaluationStatusEnum {
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
}
