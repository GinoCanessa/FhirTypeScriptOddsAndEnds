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
 * Benefits used to date.
 */
export class CoverageEligibilityResponseInsuranceItemBenefit extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageEligibilityResponseInsuranceItemBenefit {
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedUnsignedInt?: number|undefined;
  _allowedUnsignedInt?: fhirModels.Element|undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedString?: string|undefined;
  _allowedString?: fhirModels.Element|undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedMoney?: fhirModels.Money|undefined;
  /**
   * For example: deductible, visits, benefit amount.
   */
  type: fhirModels.CodeableConcept;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedUnsignedInt?: number|undefined;
  _usedUnsignedInt?: fhirModels.Element|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedString?: string|undefined;
  _usedString?: fhirModels.Element|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedMoney?: fhirModels.Money|undefined;
  /**
   * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverageEligibilityResponseInsuranceItemBenefit) {
    super(source);
    if (source["allowedUnsignedInt"] !== undefined) {
      this.allowedUnsignedInt = source.allowedUnsignedInt;
    }
    if (source["_allowedUnsignedInt"] !== undefined) {
      this._allowedUnsignedInt = new fhirModels.Element(source._allowedUnsignedInt);
    }
    if (source["allowedString"] !== undefined) {
      this.allowedString = source.allowedString;
    }
    if (source["_allowedString"] !== undefined) {
      this._allowedString = new fhirModels.Element(source._allowedString);
    }
    if (source["allowedMoney"] !== undefined) {
      this.allowedMoney = new fhirModels.Money(source.allowedMoney);
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
    if (source["usedUnsignedInt"] !== undefined) {
      this.usedUnsignedInt = source.usedUnsignedInt;
    }
    if (source["_usedUnsignedInt"] !== undefined) {
      this._usedUnsignedInt = new fhirModels.Element(source._usedUnsignedInt);
    }
    if (source["usedString"] !== undefined) {
      this.usedString = source.usedString;
    }
    if (source["_usedString"] !== undefined) {
      this._usedString = new fhirModels.Element(source._usedString);
    }
    if (source["usedMoney"] !== undefined) {
      this.usedMoney = new fhirModels.Money(source.usedMoney);
    }
  }
}
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export class CoverageEligibilityResponseInsuranceItem extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageEligibilityResponseInsuranceItem {
  /**
   * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  authorizationRequired?: boolean|undefined;
  _authorizationRequired?: fhirModels.Element|undefined;
  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   */
  authorizationSupporting?: fhirModels.CodeableConcept[]|undefined;
  /**
   * A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  authorizationUrl?: string|undefined;
  _authorizationUrl?: fhirModels.Element|undefined;
  /**
   * Benefits used to date.
   */
  benefit?: fhirModels.CoverageEligibilityResponseInsuranceItemBenefit[]|undefined;
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: fhirModels.CodeableConcept|undefined;
  /**
   * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  excluded?: boolean|undefined;
  _excluded?: fhirModels.Element|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: fhirModels.CodeableConcept[]|undefined;
  /**
   * For example: MED01, or DENT2.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  network?: fhirModels.CodeableConcept|undefined;
  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  productOrService?: fhirModels.CodeableConcept|undefined;
  /**
   * The practitioner who is eligible for the provision of the product or service.
   */
  provider?: fhirModels.Reference|undefined;
  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  term?: fhirModels.CodeableConcept|undefined;
  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  unit?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for CoverageEligibilityResponseInsuranceItem from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverageEligibilityResponseInsuranceItem) {
    super(source);
    if (source["authorizationRequired"] !== undefined) {
      this.authorizationRequired = source.authorizationRequired;
    }
    if (source["_authorizationRequired"] !== undefined) {
      this._authorizationRequired = new fhirModels.Element(source._authorizationRequired);
    }
    if (source["authorizationSupporting"] !== undefined) {
      this.authorizationSupporting = source.authorizationSupporting.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["authorizationUrl"] !== undefined) {
      this.authorizationUrl = source.authorizationUrl;
    }
    if (source["_authorizationUrl"] !== undefined) {
      this._authorizationUrl = new fhirModels.Element(source._authorizationUrl);
    }
    if (source["benefit"] !== undefined) {
      this.benefit = source.benefit.map((x) => new fhirModels.CoverageEligibilityResponseInsuranceItemBenefit(x));
    }
    if (source["category"] !== undefined) {
      this.category = new fhirModels.CodeableConcept(source.category);
    }
    if (source["description"] !== undefined) {
      this.description = source.description;
    }
    if (source["_description"] !== undefined) {
      this._description = new fhirModels.Element(source._description);
    }
    if (source["excluded"] !== undefined) {
      this.excluded = source.excluded;
    }
    if (source["_excluded"] !== undefined) {
      this._excluded = new fhirModels.Element(source._excluded);
    }
    if (source["modifier"] !== undefined) {
      this.modifier = source.modifier.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["name"] !== undefined) {
      this.name = source.name;
    }
    if (source["_name"] !== undefined) {
      this._name = new fhirModels.Element(source._name);
    }
    if (source["network"] !== undefined) {
      this.network = new fhirModels.CodeableConcept(source.network);
    }
    if (source["productOrService"] !== undefined) {
      this.productOrService = new fhirModels.CodeableConcept(source.productOrService);
    }
    if (source["provider"] !== undefined) {
      this.provider = new fhirModels.Reference(source.provider);
    }
    if (source["term"] !== undefined) {
      this.term = new fhirModels.CodeableConcept(source.term);
    }
    if (source["unit"] !== undefined) {
      this.unit = new fhirModels.CodeableConcept(source.unit);
    }
  }
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export class CoverageEligibilityResponseInsurance extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageEligibilityResponseInsurance {
  /**
   * The term of the benefits documented in this response.
   */
  benefitPeriod?: fhirModels.Period|undefined;
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage: fhirModels.Reference;
  /**
   * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   */
  inforce?: boolean|undefined;
  _inforce?: fhirModels.Element|undefined;
  /**
   * Benefits and optionally current balances, and authorization details by category or service.
   */
  item?: fhirModels.CoverageEligibilityResponseInsuranceItem[]|undefined;
  /**
   * Default constructor for CoverageEligibilityResponseInsurance from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverageEligibilityResponseInsurance) {
    super(source);
    if (source["benefitPeriod"] !== undefined) {
      this.benefitPeriod = new fhirModels.Period(source.benefitPeriod);
    }
    {
      this.coverage = new fhirModels.Reference(source.coverage);
    }
    if (source["inforce"] !== undefined) {
      this.inforce = source.inforce;
    }
    if (source["_inforce"] !== undefined) {
      this._inforce = new fhirModels.Element(source._inforce);
    }
    if (source["item"] !== undefined) {
      this.item = source.item.map((x) => new fhirModels.CoverageEligibilityResponseInsuranceItem(x));
    }
  }
}
/**
 * Errors encountered during the processing of the request.
 */
export class CoverageEligibilityResponseError extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageEligibilityResponseError {
  /**
   * An error code,from a specified code system, which details why the eligibility check could not be performed.
   */
  code: fhirModels.CodeableConcept;
  /**
   * Default constructor for CoverageEligibilityResponseError from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverageEligibilityResponseError) {
    super(source);
    {
      this.code = new fhirModels.CodeableConcept(source.code);
    }
  }
}
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export class CoverageEligibilityResponse extends fhirModels.DomainResource implements fhirInterfaces.ICoverageEligibilityResponse {
  /**
   * Resource Type Name
   */
  readonly resourceType = "CoverageEligibilityResponse";
  /**
   * The date this resource was created.
   */
  created: string;
  _created?: fhirModels.Element|undefined;
  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: string|undefined;
  _disposition?: fhirModels.Element|undefined;
  /**
   * Errors encountered during the processing of the request.
   */
  error?: fhirModels.CoverageEligibilityResponseError[]|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  form?: fhirModels.CodeableConcept|undefined;
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: fhirModels.CoverageEligibilityResponseInsurance[]|undefined;
  /**
   * The Insurer who issued the coverage in question and is the author of the response.
   */
  insurer: fhirModels.Reference;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome: CoverageEligibilityResponseOutcomeEnum;
  _outcome?: fhirModels.Element|undefined;
  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  patient: fhirModels.Reference;
  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  preAuthRef?: string|undefined;
  _preAuthRef?: fhirModels.Element|undefined;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose: CoverageEligibilityResponsePurposeEnum[];
  _purpose?: fhirModels.Element[]|undefined;
  /**
   * Reference to the original request resource.
   */
  request: fhirModels.Reference;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  requestor?: fhirModels.Reference|undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedDate?: string|undefined;
  _servicedDate?: fhirModels.Element|undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedPeriod?: fhirModels.Period|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: CoverageEligibilityResponseStatusEnum;
  _status?: fhirModels.Element|undefined;
  /**
   * Default constructor for CoverageEligibilityResponse from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverageEligibilityResponse) {
    super(source);
    if ((source['resourceType'] !== "CoverageEligibilityResponse") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a CoverageEligibilityResponse'; }
    {
      this.created = source.created;
    }
    if (source["_created"] !== undefined) {
      this._created = new fhirModels.Element(source._created);
    }
    if (source["disposition"] !== undefined) {
      this.disposition = source.disposition;
    }
    if (source["_disposition"] !== undefined) {
      this._disposition = new fhirModels.Element(source._disposition);
    }
    if (source["error"] !== undefined) {
      this.error = source.error.map((x) => new fhirModels.CoverageEligibilityResponseError(x));
    }
    if (source["form"] !== undefined) {
      this.form = new fhirModels.CodeableConcept(source.form);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["insurance"] !== undefined) {
      this.insurance = source.insurance.map((x) => new fhirModels.CoverageEligibilityResponseInsurance(x));
    }
    {
      this.insurer = new fhirModels.Reference(source.insurer);
    }
    {
      this.outcome = source.outcome;
    }
    if (source["_outcome"] !== undefined) {
      this._outcome = new fhirModels.Element(source._outcome);
    }
    {
      this.patient = new fhirModels.Reference(source.patient);
    }
    if (source["preAuthRef"] !== undefined) {
      this.preAuthRef = source.preAuthRef;
    }
    if (source["_preAuthRef"] !== undefined) {
      this._preAuthRef = new fhirModels.Element(source._preAuthRef);
    }
    {
      this.purpose = source.purpose.map((x) => (x));
    }
    if (source["_purpose"] !== undefined) {
      this._purpose = source._purpose.map((x) => new fhirModels.Element(x));
    }
    {
      this.request = new fhirModels.Reference(source.request);
    }
    if (source["requestor"] !== undefined) {
      this.requestor = new fhirModels.Reference(source.requestor);
    }
    if (source["servicedDate"] !== undefined) {
      this.servicedDate = source.servicedDate;
    }
    if (source["_servicedDate"] !== undefined) {
      this._servicedDate = new fhirModels.Element(source._servicedDate);
    }
    if (source["servicedPeriod"] !== undefined) {
      this.servicedPeriod = new fhirModels.Period(source.servicedPeriod);
    }
    {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
  }
}
/**
 * Code Values for the CoverageEligibilityResponse.outcome field
 */
export enum CoverageEligibilityResponseOutcomeEnum {
  QUEUED = "queued",
  COMPLETE = "complete",
  ERROR = "error",
  PARTIAL = "partial",
}
/**
 * Code Values for the CoverageEligibilityResponse.purpose field
 */
export enum CoverageEligibilityResponsePurposeEnum {
  AUTH_REQUIREMENTS = "auth-requirements",
  BENEFITS = "benefits",
  DISCOVERY = "discovery",
  VALIDATION = "validation",
}
/**
 * Code Values for the CoverageEligibilityResponse.status field
 */
export enum CoverageEligibilityResponseStatusEnum {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  DRAFT = "draft",
  ENTERED_IN_ERROR = "entered-in-error",
}
