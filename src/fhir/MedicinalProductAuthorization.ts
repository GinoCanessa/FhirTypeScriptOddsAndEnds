// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Authorization in areas within a country.
 */
export type IMedicinalProductAuthorizationJurisdictionalAuthorization = fhir.IBackboneElement & {
  /**
   * Country of authorization.
   */
  country?: fhir.ICodeableConcept|undefined;
  /**
   * The assigned number for the marketing authorization.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: fhir.ICodeableConcept[]|undefined;
  /**
   * The legal status of supply in a jurisdiction or region.
   */
  legalStatusOfSupply?: fhir.ICodeableConcept|undefined;
  /**
   * The start and expected end date of the authorization.
   */
  validityPeriod?: fhir.IPeriod|undefined;
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export type IMedicinalProductAuthorizationProcedure = fhir.IBackboneElement & {
  /**
   * Applcations submitted to obtain a marketing authorization.
   */
  application?: fhir.IMedicinalProductAuthorizationProcedure[]|undefined;
  /**
   * Date of procedure.
   */
  datePeriod?: fhir.IPeriod|undefined;
  /**
   * Date of procedure.
   */
  dateDateTime?: string|undefined;
  _dateDateTime?: fhir.IFhirElement|undefined;
  /**
   * Identifier for this procedure.
   */
  identifier?: fhir.IIdentifier|undefined;
  /**
   * Type of procedure.
   */
  type: fhir.ICodeableConcept|null;
}
/**
 * The regulatory authorization of a medicinal product.
 */
export type IMedicinalProductAuthorization = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductAuthorization";
  /**
   * The country in which the marketing authorization has been granted.
   */
  country?: fhir.ICodeableConcept[]|undefined;
  /**
   * A period of time after authorization before generic product applicatiosn can be submitted.
   */
  dataExclusivityPeriod?: fhir.IPeriod|undefined;
  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency.
   */
  dateOfFirstAuthorization?: string|undefined;
  _dateOfFirstAuthorization?: fhir.IFhirElement|undefined;
  /**
   * Marketing Authorization Holder.
   */
  holder?: fhir.IReference|undefined;
  /**
   * Business identifier for the marketing authorization, as assigned by a regulator.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World.
   */
  internationalBirthDate?: string|undefined;
  _internationalBirthDate?: fhir.IFhirElement|undefined;
  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: fhir.ICodeableConcept[]|undefined;
  /**
   * Authorization in areas within a country.
   */
  jurisdictionalAuthorization?: fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization[]|undefined;
  /**
   * The legal framework against which this authorization is granted.
   */
  legalBasis?: fhir.ICodeableConcept|undefined;
  /**
   * The regulatory procedure for granting or amending a marketing authorization.
   */
  procedure?: fhir.IMedicinalProductAuthorizationProcedure|undefined;
  /**
   * Medicines Regulatory Agency.
   */
  regulator?: fhir.IReference|undefined;
  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   */
  restoreDate?: string|undefined;
  _restoreDate?: fhir.IFhirElement|undefined;
  /**
   * The status of the marketing authorization.
   */
  status?: fhir.ICodeableConcept|undefined;
  /**
   * The date at which the given status has become applicable.
   */
  statusDate?: string|undefined;
  _statusDate?: fhir.IFhirElement|undefined;
  /**
   * The medicinal product that is being authorized.
   */
  subject?: fhir.IReference|undefined;
  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
   */
  validityPeriod?: fhir.IPeriod|undefined;
}
/**
 * Authorization in areas within a country.
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends fhir.BackboneElement implements fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization {
  /**
   * Country of authorization.
   */
  public country?: fhir.CodeableConcept|undefined;
  /**
   * The assigned number for the marketing authorization.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Jurisdiction within a country.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined;
  /**
   * The legal status of supply in a jurisdiction or region.
   */
  public legalStatusOfSupply?: fhir.CodeableConcept|undefined;
  /**
   * The start and expected end date of the authorization.
   */
  public validityPeriod?: fhir.Period|undefined;
  /**
   * Default constructor for MedicinalProductAuthorizationJurisdictionalAuthorization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization> = {}) {
    super(source);
    if (source["country"]) { this.country = new fhir.CodeableConcept(source.country!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["jurisdiction"]) { this.jurisdiction = source.jurisdiction.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["legalStatusOfSupply"]) { this.legalStatusOfSupply = new fhir.CodeableConcept(source.legalStatusOfSupply!); }
    if (source["validityPeriod"]) { this.validityPeriod = new fhir.Period(source.validityPeriod!); }
  }
  /**
   * Check if the current MedicinalProductAuthorizationJurisdictionalAuthorization contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicinalProductAuthorizationJurisdictionalAuthorization from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization):MedicinalProductAuthorizationJurisdictionalAuthorization {
    var dest:MedicinalProductAuthorizationJurisdictionalAuthorization = new MedicinalProductAuthorizationJurisdictionalAuthorization(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MedicinalProductAuthorizationJurisdictionalAuthorization is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export class MedicinalProductAuthorizationProcedure extends fhir.BackboneElement implements fhir.IMedicinalProductAuthorizationProcedure {
  /**
   * Applcations submitted to obtain a marketing authorization.
   */
  public application?: fhir.MedicinalProductAuthorizationProcedure[]|undefined;
  /**
   * Date of procedure.
   */
  public datePeriod?: fhir.Period|undefined;
  /**
   * Date of procedure.
   */
  public dateDateTime?: string|undefined;
  public _dateDateTime?: fhir.FhirElement|undefined;
  /**
   * Identifier for this procedure.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Type of procedure.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Default constructor for MedicinalProductAuthorizationProcedure - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicinalProductAuthorizationProcedure> = {}) {
    super(source);
    if (source["application"]) { this.application = source.application.map((x:Partial<fhir.IMedicinalProductAuthorizationProcedure>) => new fhir.MedicinalProductAuthorizationProcedure(x)); }
    if (source["datePeriod"]) { this.datePeriod = new fhir.Period(source.datePeriod!); }
    if (source["dateDateTime"]) { this.dateDateTime = source.dateDateTime; }
    if (source["_dateDateTime"]) { this._dateDateTime = new fhir.FhirElement(source._dateDateTime!); }
    if (source["identifier"]) { this.identifier = new fhir.Identifier(source.identifier!); }
    this.type = null;
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    if (this.type === undefined) { this.type = null }
  }
  /**
   * Check if the current MedicinalProductAuthorizationProcedure contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicinalProductAuthorizationProcedure from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMedicinalProductAuthorizationProcedure):MedicinalProductAuthorizationProcedure {
    var dest:MedicinalProductAuthorizationProcedure = new MedicinalProductAuthorizationProcedure(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MedicinalProductAuthorizationProcedure is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The regulatory authorization of a medicinal product.
 */
export class MedicinalProductAuthorization extends fhir.DomainResource implements fhir.IMedicinalProductAuthorization {
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicinalProductAuthorization";
  /**
   * The country in which the marketing authorization has been granted.
   */
  public country?: fhir.CodeableConcept[]|undefined;
  /**
   * A period of time after authorization before generic product applicatiosn can be submitted.
   */
  public dataExclusivityPeriod?: fhir.Period|undefined;
  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency.
   */
  public dateOfFirstAuthorization?: string|undefined;
  public _dateOfFirstAuthorization?: fhir.FhirElement|undefined;
  /**
   * Marketing Authorization Holder.
   */
  public holder?: fhir.Reference|undefined;
  /**
   * Business identifier for the marketing authorization, as assigned by a regulator.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World.
   */
  public internationalBirthDate?: string|undefined;
  public _internationalBirthDate?: fhir.FhirElement|undefined;
  /**
   * Jurisdiction within a country.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined;
  /**
   * Authorization in areas within a country.
   */
  public jurisdictionalAuthorization?: fhir.MedicinalProductAuthorizationJurisdictionalAuthorization[]|undefined;
  /**
   * The legal framework against which this authorization is granted.
   */
  public legalBasis?: fhir.CodeableConcept|undefined;
  /**
   * The regulatory procedure for granting or amending a marketing authorization.
   */
  public procedure?: fhir.MedicinalProductAuthorizationProcedure|undefined;
  /**
   * Medicines Regulatory Agency.
   */
  public regulator?: fhir.Reference|undefined;
  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   */
  public restoreDate?: string|undefined;
  public _restoreDate?: fhir.FhirElement|undefined;
  /**
   * The status of the marketing authorization.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * The date at which the given status has become applicable.
   */
  public statusDate?: string|undefined;
  public _statusDate?: fhir.FhirElement|undefined;
  /**
   * The medicinal product that is being authorized.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
   */
  public validityPeriod?: fhir.Period|undefined;
  /**
   * Default constructor for MedicinalProductAuthorization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicinalProductAuthorization> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductAuthorization';
    if (source["country"]) { this.country = source.country.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["dataExclusivityPeriod"]) { this.dataExclusivityPeriod = new fhir.Period(source.dataExclusivityPeriod!); }
    if (source["dateOfFirstAuthorization"]) { this.dateOfFirstAuthorization = source.dateOfFirstAuthorization; }
    if (source["_dateOfFirstAuthorization"]) { this._dateOfFirstAuthorization = new fhir.FhirElement(source._dateOfFirstAuthorization!); }
    if (source["holder"]) { this.holder = new fhir.Reference(source.holder!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["internationalBirthDate"]) { this.internationalBirthDate = source.internationalBirthDate; }
    if (source["_internationalBirthDate"]) { this._internationalBirthDate = new fhir.FhirElement(source._internationalBirthDate!); }
    if (source["jurisdiction"]) { this.jurisdiction = source.jurisdiction.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["jurisdictionalAuthorization"]) { this.jurisdictionalAuthorization = source.jurisdictionalAuthorization.map((x:Partial<fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization>) => new fhir.MedicinalProductAuthorizationJurisdictionalAuthorization(x)); }
    if (source["legalBasis"]) { this.legalBasis = new fhir.CodeableConcept(source.legalBasis!); }
    if (source["procedure"]) { this.procedure = new fhir.MedicinalProductAuthorizationProcedure(source.procedure!); }
    if (source["regulator"]) { this.regulator = new fhir.Reference(source.regulator!); }
    if (source["restoreDate"]) { this.restoreDate = source.restoreDate; }
    if (source["_restoreDate"]) { this._restoreDate = new fhir.FhirElement(source._restoreDate!); }
    if (source["status"]) { this.status = new fhir.CodeableConcept(source.status!); }
    if (source["statusDate"]) { this.statusDate = source.statusDate; }
    if (source["_statusDate"]) { this._statusDate = new fhir.FhirElement(source._statusDate!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (source["validityPeriod"]) { this.validityPeriod = new fhir.Period(source.validityPeriod!); }
  }
  /**
   * Check if the current MedicinalProductAuthorization contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicinalProductAuthorization from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMedicinalProductAuthorization):MedicinalProductAuthorization {
    var dest:MedicinalProductAuthorization = new MedicinalProductAuthorization(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MedicinalProductAuthorization is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}