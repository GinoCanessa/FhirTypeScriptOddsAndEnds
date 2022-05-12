// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: CoverageEligibilityRequest

import * as fhir from '../fhir.js';

import { ExBenefitcategoryValueSet, ExBenefitcategoryValueSetType,} from '../fhirValueSets/ExBenefitcategoryValueSet.js';
import { ExBenefitcategoryValueSetEnum } from '../valueSetEnums.js';
import { ServiceUsclsValueSet, ServiceUsclsValueSetType,} from '../fhirValueSets/ServiceUsclsValueSet.js';
import { ServiceUsclsValueSetEnum } from '../valueSetEnums.js';
import { ClaimModifiersValueSet, ClaimModifiersValueSetType,} from '../fhirValueSets/ClaimModifiersValueSet.js';
import { ClaimModifiersValueSetEnum } from '../valueSetEnums.js';
import { FmStatusValueSet, FmStatusValueSetType,} from '../fhirValueSets/FmStatusValueSet.js';
import { FmStatusValueSetEnum } from '../valueSetEnums.js';
import { ProcessPriorityValueSet, ProcessPriorityValueSetType,} from '../fhirValueSets/ProcessPriorityValueSet.js';
import { ProcessPriorityValueSetEnum } from '../valueSetEnums.js';
import { EligibilityrequestPurposeValueSet, EligibilityrequestPurposeValueSetType,} from '../fhirValueSets/EligibilityrequestPurposeValueSet.js';
import { EligibilityrequestPurposeValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the CoverageEligibilityRequestSupportingInfo type.
 */
export interface CoverageEligibilityRequestSupportingInfoArgs extends fhir.BackboneElementArgs {
  /**
   * A number to uniquely identify supporting information entries.
   */
  sequence: fhir.FhirPositiveInt|number|undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  information: fhir.ReferenceArgs|null;
  /**
   * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   */
  appliesToAll?: fhir.FhirBoolean|boolean|undefined;
}

/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export class CoverageEligibilityRequestSupportingInfo extends fhir.BackboneElement {
  readonly __dataType:string = 'CoverageEligibilityRequestSupportingInfo';
  /**
   * A number to uniquely identify supporting information entries.
   */
  public sequence: fhir.FhirPositiveInt|null;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  public information: fhir.Reference|null;
  /**
   * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   */
  public appliesToAll?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for CoverageEligibilityRequestSupportingInfo - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestSupportingInfoArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['sequence']) { this.sequence = new fhir.FhirPositiveInt({value: source.sequence}); }
    else { this.sequence = null; }
    if (source['information']) { this.information = new fhir.Reference(source.information); }
    else { this.information = null; }
    if (source['appliesToAll']) { this.appliesToAll = new fhir.FhirBoolean({value: source.appliesToAll}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['sequence']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property sequence:fhir.FhirPositiveInt fhir: CoverageEligibilityRequest.supportingInfo.sequence:positiveInt", }));
    }
    if (this["sequence"]) { outcome.issue!.push(...this.sequence.doModelValidation().issue!); }
    if (!this['information']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property information:fhir.Reference fhir: CoverageEligibilityRequest.supportingInfo.information:Reference", }));
    }
    if (this["information"]) { outcome.issue!.push(...this.information.doModelValidation().issue!); }
    if (this["appliesToAll"]) { outcome.issue!.push(...this.appliesToAll.doModelValidation().issue!); }
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
 * Valid arguments for the CoverageEligibilityRequestInsurance type.
 */
export interface CoverageEligibilityRequestInsuranceArgs extends fhir.BackboneElementArgs {
  /**
   * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
   */
  focal?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage: fhir.ReferenceArgs|null;
  /**
   * A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  businessArrangement?: fhir.FhirString|string|undefined;
}

/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export class CoverageEligibilityRequestInsurance extends fhir.BackboneElement {
  readonly __dataType:string = 'CoverageEligibilityRequestInsurance';
  /**
   * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
   */
  public focal?: fhir.FhirBoolean|undefined;
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  public coverage: fhir.Reference|null;
  /**
   * A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  public businessArrangement?: fhir.FhirString|undefined;
  /**
   * Default constructor for CoverageEligibilityRequestInsurance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestInsuranceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['focal']) { this.focal = new fhir.FhirBoolean({value: source.focal}); }
    if (source['coverage']) { this.coverage = new fhir.Reference(source.coverage); }
    else { this.coverage = null; }
    if (source['businessArrangement']) { this.businessArrangement = new fhir.FhirString({value: source.businessArrangement}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["focal"]) { outcome.issue!.push(...this.focal.doModelValidation().issue!); }
    if (!this['coverage']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property coverage:fhir.Reference fhir: CoverageEligibilityRequest.insurance.coverage:Reference", }));
    }
    if (this["coverage"]) { outcome.issue!.push(...this.coverage.doModelValidation().issue!); }
    if (this["businessArrangement"]) { outcome.issue!.push(...this.businessArrangement.doModelValidation().issue!); }
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
 * Valid arguments for the CoverageEligibilityRequestItemDiagnosis type.
 */
export interface CoverageEligibilityRequestItemDiagnosisArgs extends fhir.BackboneElementArgs {
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosis?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisReference?: fhir.ReferenceArgs|undefined;
}

/**
 * Patient diagnosis for which care is sought.
 */
export class CoverageEligibilityRequestItemDiagnosis extends fhir.BackboneElement {
  readonly __dataType:string = 'CoverageEligibilityRequestItemDiagnosis';
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  public diagnosis?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  readonly __diagnosisIsChoice:true = true;
  /**
   * Default constructor for CoverageEligibilityRequestItemDiagnosis - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestItemDiagnosisArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['diagnosis']) { this.diagnosis = source.diagnosis; }
    else if (source['diagnosisCodeableConcept']) { this.diagnosis = new fhir.CodeableConcept(source.diagnosisCodeableConcept); }
    else if (source['diagnosisReference']) { this.diagnosis = new fhir.Reference(source.diagnosisReference); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
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
 * Valid arguments for the CoverageEligibilityRequestItem type.
 */
export interface CoverageEligibilityRequestItemArgs extends fhir.BackboneElementArgs {
  /**
   * Exceptions, special conditions and supporting information applicable for this service or product line.
   */
  supportingInfoSequence?: fhir.FhirPositiveInt[]|number[]|undefined;
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  productOrService?: fhir.CodeableConceptArgs|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The practitioner who is responsible for the product or service to be rendered to the patient.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * The number of repetitions of a service or product.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  unitPrice?: fhir.MoneyArgs|undefined;
  /**
   * Facility where the services will be provided.
   */
  facility?: fhir.ReferenceArgs|undefined;
  /**
   * Patient diagnosis for which care is sought.
   */
  diagnosis?: fhir.CoverageEligibilityRequestItemDiagnosisArgs[]|undefined;
  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  detail?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export class CoverageEligibilityRequestItem extends fhir.BackboneElement {
  readonly __dataType:string = 'CoverageEligibilityRequestItem';
  /**
   * Exceptions, special conditions and supporting information applicable for this service or product line.
   */
  public supportingInfoSequence?: fhir.FhirPositiveInt[]|undefined = [];
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  public productOrService?: fhir.CodeableConcept|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  public modifier?: fhir.CodeableConcept[]|undefined = [];
  /**
   * The practitioner who is responsible for the product or service to be rendered to the patient.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * The number of repetitions of a service or product.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  public unitPrice?: fhir.Money|undefined;
  /**
   * Facility where the services will be provided.
   */
  public facility?: fhir.Reference|undefined;
  /**
   * Patient diagnosis for which care is sought.
   */
  public diagnosis?: fhir.CoverageEligibilityRequestItemDiagnosis[]|undefined = [];
  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  public detail?: fhir.Reference[]|undefined = [];
  /**
   * Default constructor for CoverageEligibilityRequestItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['supportingInfoSequence']) { this.supportingInfoSequence = source.supportingInfoSequence.map((x) => new fhir.FhirPositiveInt({value: x})); }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['productOrService']) { this.productOrService = new fhir.CodeableConcept(source.productOrService); }
    if (source['modifier']) { this.modifier = source.modifier.map((x) => new fhir.CodeableConcept(x)); }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['unitPrice']) { this.unitPrice = new fhir.Money(source.unitPrice); }
    if (source['facility']) { this.facility = new fhir.Reference(source.facility); }
    if (source['diagnosis']) { this.diagnosis = source.diagnosis.map((x) => new fhir.CoverageEligibilityRequestItemDiagnosis(x)); }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.Reference(x)); }
  }
  /**
   * Example-bound Value Set for category
   */
  public static categoryExampleValueSet():ExBenefitcategoryValueSetType {
    return ExBenefitcategoryValueSet;
  }
  /**
   * Example-bound Value Set for productOrService
   */
  public static productOrServiceExampleValueSet():ServiceUsclsValueSetType {
    return ServiceUsclsValueSet;
  }
  /**
   * Example-bound Value Set for modifier
   */
  public static modifierExampleValueSet():ClaimModifiersValueSetType {
    return ClaimModifiersValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["supportingInfoSequence"]) { this.supportingInfoSequence.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["category"]) { outcome.issue!.push(...this.category.doModelValidation().issue!); }
    if (this["productOrService"]) { outcome.issue!.push(...this.productOrService.doModelValidation().issue!); }
    if (this["modifier"]) { this.modifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["provider"]) { outcome.issue!.push(...this.provider.doModelValidation().issue!); }
    if (this["quantity"]) { outcome.issue!.push(...this.quantity.doModelValidation().issue!); }
    if (this["unitPrice"]) { outcome.issue!.push(...this.unitPrice.doModelValidation().issue!); }
    if (this["facility"]) { outcome.issue!.push(...this.facility.doModelValidation().issue!); }
    if (this["diagnosis"]) { this.diagnosis.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["detail"]) { this.detail.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
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
 * Valid arguments for the CoverageEligibilityRequest type.
 */
export interface CoverageEligibilityRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CoverageEligibilityRequest"|undefined;
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: FmStatusValueSetEnum|null;
  /**
   * When the requestor expects the processor to complete processing.
   */
  priority?: fhir.CodeableConceptArgs|undefined;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose: EligibilityrequestPurposeValueSetEnum[]|null;
  /**
   * 1..1.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  serviced?: fhir.FhirDate|fhir.Period|undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedDate?: fhir.FhirDate|string|undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The date when this resource was created.
   */
  created: fhir.FhirDateTime|string|undefined;
  /**
   * Person who created the request.
   */
  enterer?: fhir.ReferenceArgs|undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * The Insurer who issued the coverage in question and is the recipient of the request.
   */
  insurer: fhir.ReferenceArgs|null;
  /**
   * Facility where the services are intended to be provided.
   */
  facility?: fhir.ReferenceArgs|undefined;
  /**
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  supportingInfo?: fhir.CoverageEligibilityRequestSupportingInfoArgs[]|undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: fhir.CoverageEligibilityRequestInsuranceArgs[]|undefined;
  /**
   * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
   */
  item?: fhir.CoverageEligibilityRequestItemArgs[]|undefined;
}

/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export class CoverageEligibilityRequest extends fhir.DomainResource {
  readonly __dataType:string = 'CoverageEligibilityRequest';
  /**
   * Resource Type Name
   */
  public resourceType: "CoverageEligibilityRequest";
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: FmStatusValueSetEnum|null;
  /**
   * When the requestor expects the processor to complete processing.
   */
  public priority?: fhir.CodeableConcept|undefined;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  public purpose: EligibilityrequestPurposeValueSetEnum[]|null = [];
  /**
   * 1..1.
   */
  public patient: fhir.Reference|null;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  public serviced?: (fhir.FhirDate|fhir.Period)|undefined;
  readonly __servicedIsChoice:true = true;
  /**
   * The date when this resource was created.
   */
  public created: fhir.FhirDateTime|null;
  /**
   * Person who created the request.
   */
  public enterer?: fhir.Reference|undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * The Insurer who issued the coverage in question and is the recipient of the request.
   */
  public insurer: fhir.Reference|null;
  /**
   * Facility where the services are intended to be provided.
   */
  public facility?: fhir.Reference|undefined;
  /**
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  public supportingInfo?: fhir.CoverageEligibilityRequestSupportingInfo[]|undefined = [];
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  public insurance?: fhir.CoverageEligibilityRequestInsurance[]|undefined = [];
  /**
   * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
   */
  public item?: fhir.CoverageEligibilityRequestItem[]|undefined = [];
  /**
   * Default constructor for CoverageEligibilityRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CoverageEligibilityRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['priority']) { this.priority = new fhir.CodeableConcept(source.priority); }
    if (source['purpose']) { this.purpose = source.purpose.map((x) => x); }
    else { this.purpose = null; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['serviced']) { this.serviced = source.serviced; }
    else if (source['servicedDate']) { this.serviced = new fhir.FhirDate({value: source.servicedDate}); }
    else if (source['servicedPeriod']) { this.serviced = new fhir.Period(source.servicedPeriod); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    else { this.created = null; }
    if (source['enterer']) { this.enterer = new fhir.Reference(source.enterer); }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider); }
    if (source['insurer']) { this.insurer = new fhir.Reference(source.insurer); }
    else { this.insurer = null; }
    if (source['facility']) { this.facility = new fhir.Reference(source.facility); }
    if (source['supportingInfo']) { this.supportingInfo = source.supportingInfo.map((x) => new fhir.CoverageEligibilityRequestSupportingInfo(x)); }
    if (source['insurance']) { this.insurance = source.insurance.map((x) => new fhir.CoverageEligibilityRequestInsurance(x)); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.CoverageEligibilityRequestItem(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():FmStatusValueSetType {
    return FmStatusValueSet;
  }
  /**
   * Example-bound Value Set for priority
   */
  public static priorityExampleValueSet():ProcessPriorityValueSetType {
    return ProcessPriorityValueSet;
  }
  /**
   * Required-bound Value Set for purpose
   */
  public static purposeRequiredValueSet():EligibilityrequestPurposeValueSetType {
    return EligibilityrequestPurposeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'CoverageEligibilityRequest' fhir: CoverageEligibilityRequest.resourceType:'CoverageEligibilityRequest'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:FmStatusValueSetEnum fhir: CoverageEligibilityRequest.status:code", }));
    }
    if (this["priority"]) { outcome.issue!.push(...this.priority.doModelValidation().issue!); }
    if (!this['purpose']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property purpose:EligibilityrequestPurposeValueSetEnum[] fhir: CoverageEligibilityRequest.purpose:code", }));
    } else if (!Array.isArray(this.purpose)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue,  diagnostics: "Found scalar in array property purpose:EligibilityrequestPurposeValueSetEnum[] fhir: CoverageEligibilityRequest.purpose:code", }));
    } else if (this.purpose.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property purpose:EligibilityrequestPurposeValueSetEnum[] fhir: CoverageEligibilityRequest.purpose:code", }));
    }
    if (!this['patient']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property patient:fhir.Reference fhir: CoverageEligibilityRequest.patient:Reference", }));
    }
    if (this["patient"]) { outcome.issue!.push(...this.patient.doModelValidation().issue!); }
    if (!this['created']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property created:fhir.FhirDateTime fhir: CoverageEligibilityRequest.created:dateTime", }));
    }
    if (this["created"]) { outcome.issue!.push(...this.created.doModelValidation().issue!); }
    if (this["enterer"]) { outcome.issue!.push(...this.enterer.doModelValidation().issue!); }
    if (this["provider"]) { outcome.issue!.push(...this.provider.doModelValidation().issue!); }
    if (!this['insurer']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property insurer:fhir.Reference fhir: CoverageEligibilityRequest.insurer:Reference", }));
    }
    if (this["insurer"]) { outcome.issue!.push(...this.insurer.doModelValidation().issue!); }
    if (this["facility"]) { outcome.issue!.push(...this.facility.doModelValidation().issue!); }
    if (this["supportingInfo"]) { this.supportingInfo.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["insurance"]) { this.insurance.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["item"]) { this.item.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
