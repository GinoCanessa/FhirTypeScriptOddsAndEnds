// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Coverage

import * as fhir from '../fhir.js';

import { CoverageClassValueSet, CoverageClassValueSetType,} from '../fhirValueSets/CoverageClassValueSet.js';
import { CoverageClassValueSetEnum } from '../valueSetEnums.js';
import { CoverageFinancialExceptionValueSet, CoverageFinancialExceptionValueSetType,} from '../fhirValueSets/CoverageFinancialExceptionValueSet.js';
import { CoverageFinancialExceptionValueSetEnum } from '../valueSetEnums.js';
import { CoverageCopayTypeValueSet, CoverageCopayTypeValueSetType,} from '../fhirValueSets/CoverageCopayTypeValueSet.js';
import { CoverageCopayTypeValueSetEnum } from '../valueSetEnums.js';
import { FmStatusValueSet, FmStatusValueSetType,} from '../fhirValueSets/FmStatusValueSet.js';
import { FmStatusValueSetEnum } from '../valueSetEnums.js';
import { CoverageTypeValueSet, CoverageTypeValueSetType,} from '../fhirValueSets/CoverageTypeValueSet.js';
import { CoverageTypeValueSetEnum } from '../valueSetEnums.js';
import { SubscriberRelationshipValueSet, SubscriberRelationshipValueSetType,} from '../fhirValueSets/SubscriberRelationshipValueSet.js';
import { SubscriberRelationshipValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the CoverageClass type.
 */
export interface CoverageClassArgs extends fhir.BackboneElementArgs {
  /**
   * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * For example, the Group or Plan number.
   */
  value: fhir.FhirString|string|undefined;
  /**
   * A short description for the class.
   */
  name?: fhir.FhirString|string|undefined;
}

/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export class CoverageClass extends fhir.BackboneElement {
  readonly __dataType:string = 'CoverageClass';
  /**
   * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * For example, the Group or Plan number.
   */
  public value: fhir.FhirString|null;
  /**
   * A short description for the class.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Default constructor for CoverageClass - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageClassArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['value']) { this.value = new fhir.FhirString({value: source.value}); }
    else { this.value = null; }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
  }
  /**
   * Extensible-bound Value Set for type
   */
  public static typeExtensibleValueSet():CoverageClassValueSetType {
    return CoverageClassValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:fhir.CodeableConcept fhir: Coverage.class.type:CodeableConcept", }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (!this['value']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property value:fhir.FhirString fhir: Coverage.class.value:string", }));
    }
    if (this["value"]) { outcome.issue!.push(...this.value.doModelValidation().issue!); }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
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
 * Valid arguments for the CoverageCostToBeneficiaryException type.
 */
export interface CoverageCostToBeneficiaryExceptionArgs extends fhir.BackboneElementArgs {
  /**
   * The code for the specific exception.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * The timeframe during when the exception is in force.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export class CoverageCostToBeneficiaryException extends fhir.BackboneElement {
  readonly __dataType:string = 'CoverageCostToBeneficiaryException';
  /**
   * The code for the specific exception.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * The timeframe during when the exception is in force.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for CoverageCostToBeneficiaryException - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageCostToBeneficiaryExceptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Example-bound Value Set for type
   */
  public static typeExampleValueSet():CoverageFinancialExceptionValueSetType {
    return CoverageFinancialExceptionValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:fhir.CodeableConcept fhir: Coverage.costToBeneficiary.exception.type:CodeableConcept", }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
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
 * Valid arguments for the CoverageCostToBeneficiary type.
 */
export interface CoverageCostToBeneficiaryArgs extends fhir.BackboneElementArgs {
  /**
   * For example visit, specialist visits, emergency, inpatient care, etc.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  value?: fhir.Quantity|fhir.Money|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  valueMoney?: fhir.MoneyArgs|undefined;
  /**
   * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  exception?: fhir.CoverageCostToBeneficiaryExceptionArgs[]|undefined;
}

/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export class CoverageCostToBeneficiary extends fhir.BackboneElement {
  readonly __dataType:string = 'CoverageCostToBeneficiary';
  /**
   * For example visit, specialist visits, emergency, inpatient care, etc.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  public value: (fhir.Quantity|fhir.Money)|null;
  readonly __valueIsChoice:true = true;
  /**
   * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  public exception?: fhir.CoverageCostToBeneficiaryException[]|undefined = [];
  /**
   * Default constructor for CoverageCostToBeneficiary - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageCostToBeneficiaryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['value']) { this.value = source.value; }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueMoney']) { this.value = new fhir.Money(source.valueMoney); }
    else { this.value = null; }
    if (source['exception']) { this.exception = source.exception.map((x) => new fhir.CoverageCostToBeneficiaryException(x)); }
  }
  /**
   * Extensible-bound Value Set for type
   */
  public static typeExtensibleValueSet():CoverageCopayTypeValueSetType {
    return CoverageCopayTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (!this['value']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property value: fhir: Coverage.costToBeneficiary.value[x]:", }));
    }
    if (this["exception"]) { this.exception.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
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
 * Valid arguments for the Coverage type.
 */
export interface CoverageArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Coverage"|undefined;
  /**
   * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
   */
  status: FmStatusValueSetEnum|null;
  /**
   * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * For example: may be an individual, corporation or the subscriber's employer.
   */
  policyHolder?: fhir.ReferenceArgs|undefined;
  /**
   * May be self or a parent in the case of dependants.
   */
  subscriber?: fhir.ReferenceArgs|undefined;
  /**
   * The insurer assigned ID for the Subscriber.
   */
  subscriberId?: fhir.FhirString|string|undefined;
  /**
   * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   */
  beneficiary: fhir.ReferenceArgs|null;
  /**
   * Periodically the member number is constructed from the subscriberId and the dependant number.
   */
  dependent?: fhir.FhirString|string|undefined;
  /**
   * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
   */
  relationship?: fhir.CodeableConceptArgs|undefined;
  /**
   * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
   * For selfpay it may provide multiple paying persons and/or organizations.
   */
  payor: fhir.ReferenceArgs[]|null;
  /**
   * For example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  class?: fhir.CoverageClassArgs[]|undefined;
  /**
   * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
   */
  order?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
   */
  network?: fhir.FhirString|string|undefined;
  /**
   * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
   */
  costToBeneficiary?: fhir.CoverageCostToBeneficiaryArgs[]|undefined;
  /**
   * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
   */
  subrogation?: fhir.FhirBoolean|boolean|undefined;
  /**
   * The policy(s) which constitute this insurance coverage.
   */
  contract?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export class Coverage extends fhir.DomainResource {
  readonly __dataType:string = 'Coverage';
  /**
   * Resource Type Name
   */
  public resourceType: "Coverage";
  /**
   * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
   */
  public status: FmStatusValueSetEnum|null;
  /**
   * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * For example: may be an individual, corporation or the subscriber's employer.
   */
  public policyHolder?: fhir.Reference|undefined;
  /**
   * May be self or a parent in the case of dependants.
   */
  public subscriber?: fhir.Reference|undefined;
  /**
   * The insurer assigned ID for the Subscriber.
   */
  public subscriberId?: fhir.FhirString|undefined;
  /**
   * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   */
  public beneficiary: fhir.Reference|null;
  /**
   * Periodically the member number is constructed from the subscriberId and the dependant number.
   */
  public dependent?: fhir.FhirString|undefined;
  /**
   * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
   */
  public relationship?: fhir.CodeableConcept|undefined;
  /**
   * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
   */
  public period?: fhir.Period|undefined;
  /**
   * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
   * For selfpay it may provide multiple paying persons and/or organizations.
   */
  public payor: fhir.Reference[]|null = [];
  /**
   * For example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  public class?: fhir.CoverageClass[]|undefined = [];
  /**
   * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
   */
  public order?: fhir.FhirPositiveInt|undefined;
  /**
   * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
   */
  public network?: fhir.FhirString|undefined;
  /**
   * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
   */
  public costToBeneficiary?: fhir.CoverageCostToBeneficiary[]|undefined = [];
  /**
   * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
   */
  public subrogation?: fhir.FhirBoolean|undefined;
  /**
   * The policy(s) which constitute this insurance coverage.
   */
  public contract?: fhir.Reference[]|undefined = [];
  /**
   * Default constructor for Coverage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Coverage';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['policyHolder']) { this.policyHolder = new fhir.Reference(source.policyHolder); }
    if (source['subscriber']) { this.subscriber = new fhir.Reference(source.subscriber); }
    if (source['subscriberId']) { this.subscriberId = new fhir.FhirString({value: source.subscriberId}); }
    if (source['beneficiary']) { this.beneficiary = new fhir.Reference(source.beneficiary); }
    else { this.beneficiary = null; }
    if (source['dependent']) { this.dependent = new fhir.FhirString({value: source.dependent}); }
    if (source['relationship']) { this.relationship = new fhir.CodeableConcept(source.relationship); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['payor']) { this.payor = source.payor.map((x) => new fhir.Reference(x)); }
    else { this.payor = null; }
    if (source['class']) { this.class = source.class.map((x) => new fhir.CoverageClass(x)); }
    if (source['order']) { this.order = new fhir.FhirPositiveInt({value: source.order}); }
    if (source['network']) { this.network = new fhir.FhirString({value: source.network}); }
    if (source['costToBeneficiary']) { this.costToBeneficiary = source.costToBeneficiary.map((x) => new fhir.CoverageCostToBeneficiary(x)); }
    if (source['subrogation']) { this.subrogation = new fhir.FhirBoolean({value: source.subrogation}); }
    if (source['contract']) { this.contract = source.contract.map((x) => new fhir.Reference(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():FmStatusValueSetType {
    return FmStatusValueSet;
  }
  /**
   * Preferred-bound Value Set for type
   */
  public static typePreferredValueSet():CoverageTypeValueSetType {
    return CoverageTypeValueSet;
  }
  /**
   * Extensible-bound Value Set for relationship
   */
  public static relationshipExtensibleValueSet():SubscriberRelationshipValueSetType {
    return SubscriberRelationshipValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'Coverage' fhir: Coverage.resourceType:'Coverage'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:FmStatusValueSetEnum fhir: Coverage.status:code", }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["policyHolder"]) { outcome.issue!.push(...this.policyHolder.doModelValidation().issue!); }
    if (this["subscriber"]) { outcome.issue!.push(...this.subscriber.doModelValidation().issue!); }
    if (this["subscriberId"]) { outcome.issue!.push(...this.subscriberId.doModelValidation().issue!); }
    if (!this['beneficiary']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property beneficiary:fhir.Reference fhir: Coverage.beneficiary:Reference", }));
    }
    if (this["beneficiary"]) { outcome.issue!.push(...this.beneficiary.doModelValidation().issue!); }
    if (this["dependent"]) { outcome.issue!.push(...this.dependent.doModelValidation().issue!); }
    if (this["relationship"]) { outcome.issue!.push(...this.relationship.doModelValidation().issue!); }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
    if (!this['payor']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property payor:fhir.Reference[] fhir: Coverage.payor:Reference", }));
    } else if (!Array.isArray(this.payor)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue,  diagnostics: "Found scalar in array property payor:fhir.Reference[] fhir: Coverage.payor:Reference", }));
    } else if (this.payor.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property payor:fhir.Reference[] fhir: Coverage.payor:Reference", }));
    }
    if (this["payor"]) { this.payor.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["class"]) { this.class.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["order"]) { outcome.issue!.push(...this.order.doModelValidation().issue!); }
    if (this["network"]) { outcome.issue!.push(...this.network.doModelValidation().issue!); }
    if (this["costToBeneficiary"]) { this.costToBeneficiary.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["subrogation"]) { outcome.issue!.push(...this.subrogation.doModelValidation().issue!); }
    if (this["contract"]) { this.contract.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
