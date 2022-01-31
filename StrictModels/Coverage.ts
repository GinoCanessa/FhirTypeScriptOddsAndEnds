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
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export class CoverageClass extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageClass {
  /**
   * A short description for the class.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  type: fhirModels.CodeableConcept;
  /**
   * For example, the Group or Plan number.
   */
  value: string;
  _value?: fhirModels.Element|undefined;
  /**
   * Default constructor for CoverageClass from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverageClass) {
    super(source);
    if (source["name"] !== undefined) {
      this.name = source.name;
    }
    if (source["_name"] !== undefined) {
      this._name = new fhirModels.Element(source._name);
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
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
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export class CoverageCostToBeneficiaryException extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageCostToBeneficiaryException {
  /**
   * The timeframe during when the exception is in force.
   */
  period?: fhirModels.Period|undefined;
  /**
   * The code for the specific exception.
   */
  type: fhirModels.CodeableConcept;
  /**
   * Default constructor for CoverageCostToBeneficiaryException from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverageCostToBeneficiaryException) {
    super(source);
    if (source["period"] !== undefined) {
      this.period = new fhirModels.Period(source.period);
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export class CoverageCostToBeneficiary extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageCostToBeneficiary {
  /**
   * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  exception?: fhirModels.CoverageCostToBeneficiaryException[]|undefined;
  /**
   * For example visit, specialist visits, emergency, inpatient care, etc.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  valueQuantity?: fhirModels.Quantity|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  valueMoney?: fhirModels.Money|undefined;
  /**
   * Default constructor for CoverageCostToBeneficiary from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverageCostToBeneficiary) {
    super(source);
    if (source["exception"] !== undefined) {
      this.exception = source.exception.map((x) => new fhirModels.CoverageCostToBeneficiaryException(x));
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
    if (source["valueQuantity"] !== undefined) {
      this.valueQuantity = new fhirModels.Quantity(source.valueQuantity);
    }
    if (source["valueMoney"] !== undefined) {
      this.valueMoney = new fhirModels.Money(source.valueMoney);
    }
  }
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export class Coverage extends fhirModels.DomainResource implements fhirInterfaces.ICoverage {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Coverage";
  /**
   * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   */
  beneficiary: fhirModels.Reference;
  /**
   * For example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  class?: fhirModels.CoverageClass[]|undefined;
  /**
   * The policy(s) which constitute this insurance coverage.
   */
  contract?: fhirModels.Reference[]|undefined;
  /**
   * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
   */
  costToBeneficiary?: fhirModels.CoverageCostToBeneficiary[]|undefined;
  /**
   * Periodically the member number is constructed from the subscriberId and the dependant number.
   */
  dependent?: string|undefined;
  _dependent?: fhirModels.Element|undefined;
  /**
   * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
   */
  network?: string|undefined;
  _network?: fhirModels.Element|undefined;
  /**
   * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
   */
  order?: number|undefined;
  _order?: fhirModels.Element|undefined;
  /**
   * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
   * For selfpay it may provide multiple paying persons and/or organizations.
   */
  payor: fhirModels.Reference[];
  /**
   * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
   */
  period?: fhirModels.Period|undefined;
  /**
   * For example: may be an individual, corporation or the subscriber's employer.
   */
  policyHolder?: fhirModels.Reference|undefined;
  /**
   * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
   */
  relationship?: fhirModels.CodeableConcept|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
   */
  status: CoverageStatusEnum;
  _status?: fhirModels.Element|undefined;
  /**
   * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
   */
  subrogation?: boolean|undefined;
  _subrogation?: fhirModels.Element|undefined;
  /**
   * May be self or a parent in the case of dependants.
   */
  subscriber?: fhirModels.Reference|undefined;
  /**
   * The insurer assigned ID for the Subscriber.
   */
  subscriberId?: string|undefined;
  _subscriberId?: fhirModels.Element|undefined;
  /**
   * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for Coverage from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICoverage) {
    super(source);
    if ((source['resourceType'] !== "Coverage") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Coverage'; }
    {
      this.beneficiary = new fhirModels.Reference(source.beneficiary);
    }
    if (source["class"] !== undefined) {
      this.class = source.class.map((x) => new fhirModels.CoverageClass(x));
    }
    if (source["contract"] !== undefined) {
      this.contract = source.contract.map((x) => new fhirModels.Reference(x));
    }
    if (source["costToBeneficiary"] !== undefined) {
      this.costToBeneficiary = source.costToBeneficiary.map((x) => new fhirModels.CoverageCostToBeneficiary(x));
    }
    if (source["dependent"] !== undefined) {
      this.dependent = source.dependent;
    }
    if (source["_dependent"] !== undefined) {
      this._dependent = new fhirModels.Element(source._dependent);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["network"] !== undefined) {
      this.network = source.network;
    }
    if (source["_network"] !== undefined) {
      this._network = new fhirModels.Element(source._network);
    }
    if (source["order"] !== undefined) {
      this.order = source.order;
    }
    if (source["_order"] !== undefined) {
      this._order = new fhirModels.Element(source._order);
    }
    {
      this.payor = source.payor.map((x) => new fhirModels.Reference(x));
    }
    if (source["period"] !== undefined) {
      this.period = new fhirModels.Period(source.period);
    }
    if (source["policyHolder"] !== undefined) {
      this.policyHolder = new fhirModels.Reference(source.policyHolder);
    }
    if (source["relationship"] !== undefined) {
      this.relationship = new fhirModels.CodeableConcept(source.relationship);
    }
    {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
    if (source["subrogation"] !== undefined) {
      this.subrogation = source.subrogation;
    }
    if (source["_subrogation"] !== undefined) {
      this._subrogation = new fhirModels.Element(source._subrogation);
    }
    if (source["subscriber"] !== undefined) {
      this.subscriber = new fhirModels.Reference(source.subscriber);
    }
    if (source["subscriberId"] !== undefined) {
      this.subscriberId = source.subscriberId;
    }
    if (source["_subscriberId"] !== undefined) {
      this._subscriberId = new fhirModels.Element(source._subscriberId);
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * Code Values for the Coverage.status field
 */
export enum CoverageStatusEnum {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  DRAFT = "draft",
  ENTERED_IN_ERROR = "entered-in-error",
}