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
 * Authorization in areas within a country.
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductAuthorizationJurisdictionalAuthorization {
  /**
   * Country of authorization.
   */
  country?: fhirModels.CodeableConcept|undefined;
  /**
   * The assigned number for the marketing authorization.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The legal status of supply in a jurisdiction or region.
   */
  legalStatusOfSupply?: fhirModels.CodeableConcept|undefined;
  /**
   * The start and expected end date of the authorization.
   */
  validityPeriod?: fhirModels.Period|undefined;
  /**
   * Default constructor for MedicinalProductAuthorizationJurisdictionalAuthorization from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductAuthorizationJurisdictionalAuthorization) {
    super(source);
    if (source["country"] !== undefined) {
      this.country = new fhirModels.CodeableConcept(source.country);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["jurisdiction"] !== undefined) {
      this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["legalStatusOfSupply"] !== undefined) {
      this.legalStatusOfSupply = new fhirModels.CodeableConcept(source.legalStatusOfSupply);
    }
    if (source["validityPeriod"] !== undefined) {
      this.validityPeriod = new fhirModels.Period(source.validityPeriod);
    }
  }
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export class MedicinalProductAuthorizationProcedure extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductAuthorizationProcedure {
  /**
   * Applcations submitted to obtain a marketing authorization.
   */
  application?: fhirModels.MedicinalProductAuthorizationProcedure[]|undefined;
  /**
   * Date of procedure.
   */
  datePeriod?: fhirModels.Period|undefined;
  /**
   * Date of procedure.
   */
  dateDateTime?: string|undefined;
  _dateDateTime?: fhirModels.Element|undefined;
  /**
   * Identifier for this procedure.
   */
  identifier?: fhirModels.Identifier|undefined;
  /**
   * Type of procedure.
   */
  type: fhirModels.CodeableConcept;
  /**
   * Default constructor for MedicinalProductAuthorizationProcedure from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductAuthorizationProcedure) {
    super(source);
    if (source["application"] !== undefined) {
      this.application = source.application.map((x) => new fhirModels.MedicinalProductAuthorizationProcedure(x));
    }
    if (source["datePeriod"] !== undefined) {
      this.datePeriod = new fhirModels.Period(source.datePeriod);
    }
    if (source["dateDateTime"] !== undefined) {
      this.dateDateTime = source.dateDateTime;
    }
    if (source["_dateDateTime"] !== undefined) {
      this._dateDateTime = new fhirModels.Element(source._dateDateTime);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = new fhirModels.Identifier(source.identifier);
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * The regulatory authorization of a medicinal product.
 */
export class MedicinalProductAuthorization extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductAuthorization {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicinalProductAuthorization";
  /**
   * The country in which the marketing authorization has been granted.
   */
  country?: fhirModels.CodeableConcept[]|undefined;
  /**
   * A period of time after authorization before generic product applicatiosn can be submitted.
   */
  dataExclusivityPeriod?: fhirModels.Period|undefined;
  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency.
   */
  dateOfFirstAuthorization?: string|undefined;
  _dateOfFirstAuthorization?: fhirModels.Element|undefined;
  /**
   * Marketing Authorization Holder.
   */
  holder?: fhirModels.Reference|undefined;
  /**
   * Business identifier for the marketing authorization, as assigned by a regulator.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World.
   */
  internationalBirthDate?: string|undefined;
  _internationalBirthDate?: fhirModels.Element|undefined;
  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Authorization in areas within a country.
   */
  jurisdictionalAuthorization?: fhirModels.MedicinalProductAuthorizationJurisdictionalAuthorization[]|undefined;
  /**
   * The legal framework against which this authorization is granted.
   */
  legalBasis?: fhirModels.CodeableConcept|undefined;
  /**
   * The regulatory procedure for granting or amending a marketing authorization.
   */
  procedure?: fhirModels.MedicinalProductAuthorizationProcedure|undefined;
  /**
   * Medicines Regulatory Agency.
   */
  regulator?: fhirModels.Reference|undefined;
  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   */
  restoreDate?: string|undefined;
  _restoreDate?: fhirModels.Element|undefined;
  /**
   * The status of the marketing authorization.
   */
  status?: fhirModels.CodeableConcept|undefined;
  /**
   * The date at which the given status has become applicable.
   */
  statusDate?: string|undefined;
  _statusDate?: fhirModels.Element|undefined;
  /**
   * The medicinal product that is being authorized.
   */
  subject?: fhirModels.Reference|undefined;
  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
   */
  validityPeriod?: fhirModels.Period|undefined;
  /**
   * Default constructor for MedicinalProductAuthorization from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductAuthorization) {
    super(source);
    if ((source['resourceType'] !== "MedicinalProductAuthorization") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicinalProductAuthorization'; }
    if (source["country"] !== undefined) {
      this.country = source.country.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["dataExclusivityPeriod"] !== undefined) {
      this.dataExclusivityPeriod = new fhirModels.Period(source.dataExclusivityPeriod);
    }
    if (source["dateOfFirstAuthorization"] !== undefined) {
      this.dateOfFirstAuthorization = source.dateOfFirstAuthorization;
    }
    if (source["_dateOfFirstAuthorization"] !== undefined) {
      this._dateOfFirstAuthorization = new fhirModels.Element(source._dateOfFirstAuthorization);
    }
    if (source["holder"] !== undefined) {
      this.holder = new fhirModels.Reference(source.holder);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["internationalBirthDate"] !== undefined) {
      this.internationalBirthDate = source.internationalBirthDate;
    }
    if (source["_internationalBirthDate"] !== undefined) {
      this._internationalBirthDate = new fhirModels.Element(source._internationalBirthDate);
    }
    if (source["jurisdiction"] !== undefined) {
      this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["jurisdictionalAuthorization"] !== undefined) {
      this.jurisdictionalAuthorization = source.jurisdictionalAuthorization.map((x) => new fhirModels.MedicinalProductAuthorizationJurisdictionalAuthorization(x));
    }
    if (source["legalBasis"] !== undefined) {
      this.legalBasis = new fhirModels.CodeableConcept(source.legalBasis);
    }
    if (source["procedure"] !== undefined) {
      this.procedure = new fhirModels.MedicinalProductAuthorizationProcedure(source.procedure);
    }
    if (source["regulator"] !== undefined) {
      this.regulator = new fhirModels.Reference(source.regulator);
    }
    if (source["restoreDate"] !== undefined) {
      this.restoreDate = source.restoreDate;
    }
    if (source["_restoreDate"] !== undefined) {
      this._restoreDate = new fhirModels.Element(source._restoreDate);
    }
    if (source["status"] !== undefined) {
      this.status = new fhirModels.CodeableConcept(source.status);
    }
    if (source["statusDate"] !== undefined) {
      this.statusDate = source.statusDate;
    }
    if (source["_statusDate"] !== undefined) {
      this._statusDate = new fhirModels.Element(source._statusDate);
    }
    if (source["subject"] !== undefined) {
      this.subject = new fhirModels.Reference(source.subject);
    }
    if (source["validityPeriod"] !== undefined) {
      this.validityPeriod = new fhirModels.Period(source.validityPeriod);
    }
  }
}
