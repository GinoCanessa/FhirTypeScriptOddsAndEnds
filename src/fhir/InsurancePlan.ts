// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: InsurancePlan

import * as fhir from '../fhir.js'

import { ContactentityTypeValueSet, ContactentityTypeValueSetType, ContactentityTypeValueSetEnum } from '../fhirValueSets/ContactentityTypeValueSet.js'
import { InsuranceplanApplicabilityValueSet, InsuranceplanApplicabilityValueSetType, InsuranceplanApplicabilityValueSetEnum } from '../fhirValueSets/InsuranceplanApplicabilityValueSet.js'
import { PublicationStatusValueSet, PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js'
import { InsuranceplanTypeValueSet, InsuranceplanTypeValueSetType, InsuranceplanTypeValueSetEnum } from '../fhirValueSets/InsuranceplanTypeValueSet.js'

/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export type IInsurancePlanContact = fhir.IBackboneElement & { 
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: fhir.ICodeableConcept|undefined;
  /**
   * A name associated with the contact.
   */
  name?: fhir.IHumanName|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  telecom?: fhir.IContactPoint[]|undefined;
  /**
   * Visiting or postal addresses for the contact.
   */
  address?: fhir.IAddress|undefined;
}

/**
 * The specific limits on the benefit.
 */
export type IInsurancePlanCoverageBenefitLimit = fhir.IBackboneElement & { 
  /**
   * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
   */
  value?: fhir.IQuantity|undefined;
  /**
   * Use `CodeableConcept.text` element if the data is free (uncoded) text.
   */
  code?: fhir.ICodeableConcept|undefined;
}

/**
 * Specific benefits under this type of coverage.
 */
export type IInsurancePlanCoverageBenefit = fhir.IBackboneElement & { 
  /**
   * Type of benefit (primary care; speciality care; inpatient; outpatient).
   */
  type: fhir.ICodeableConcept|null;
  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  requirement?: string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.coverage.benefit.requirement
   */
  _requirement?: fhir.IFhirElement|undefined;
  /**
   * The specific limits on the benefit.
   */
  limit?: fhir.IInsurancePlanCoverageBenefitLimit[]|undefined;
}

/**
 * Details about the coverage offered by the insurance product.
 */
export type IInsurancePlanCoverage = fhir.IBackboneElement & { 
  /**
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   */
  type: fhir.ICodeableConcept|null;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhir.IReference[]|undefined;
  /**
   * Specific benefits under this type of coverage.
   */
  benefit: fhir.IInsurancePlanCoverageBenefit[]|null;
}

/**
 * Overall costs associated with the plan.
 */
export type IInsurancePlanPlanGeneralCost = fhir.IBackboneElement & { 
  /**
   * Type of cost.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * Number of participants enrolled in the plan.
   */
  groupSize?: number|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.plan.generalCost.groupSize
   */
  _groupSize?: fhir.IFhirElement|undefined;
  /**
   * Value of the cost.
   */
  cost?: fhir.IMoney|undefined;
  /**
   * Additional information about the general costs associated with this plan.
   */
  comment?: string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.plan.generalCost.comment
   */
  _comment?: fhir.IFhirElement|undefined;
}

/**
 * List of the costs associated with a specific benefit.
 */
export type IInsurancePlanPlanSpecificCostBenefitCost = fhir.IBackboneElement & { 
  /**
   * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
   */
  type: fhir.ICodeableConcept|null;
  /**
   * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
   */
  applicability?: fhir.ICodeableConcept|undefined;
  /**
   * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
   */
  qualifiers?: fhir.ICodeableConcept[]|undefined;
  /**
   * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
   */
  value?: fhir.IQuantity|undefined;
}

/**
 * List of the specific benefits under this category of benefit.
 */
export type IInsurancePlanPlanSpecificCostBenefit = fhir.IBackboneElement & { 
  /**
   * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
   */
  type: fhir.ICodeableConcept|null;
  /**
   * List of the costs associated with a specific benefit.
   */
  cost?: fhir.IInsurancePlanPlanSpecificCostBenefitCost[]|undefined;
}

/**
 * Costs associated with the coverage provided by the product.
 */
export type IInsurancePlanPlanSpecificCost = fhir.IBackboneElement & { 
  /**
   * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
   */
  category: fhir.ICodeableConcept|null;
  /**
   * List of the specific benefits under this category of benefit.
   */
  benefit?: fhir.IInsurancePlanPlanSpecificCostBenefit[]|undefined;
}

/**
 * Details about an insurance plan.
 */
export type IInsurancePlanPlan = fhir.IBackboneElement & { 
  /**
   * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Type of plan. For example, "Platinum" or "High Deductable".
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * The geographic region in which a health insurance plan's benefits apply.
   */
  coverageArea?: fhir.IReference[]|undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhir.IReference[]|undefined;
  /**
   * Overall costs associated with the plan.
   */
  generalCost?: fhir.IInsurancePlanPlanGeneralCost[]|undefined;
  /**
   * Costs associated with the coverage provided by the product.
   */
  specificCost?: fhir.IInsurancePlanPlanSpecificCost[]|undefined;
}

/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export type IInsurancePlan = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "InsurancePlan";
  /**
   * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The current state of the health insurance product.
   */
  status?: PublicationStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * The kind of health insurance product.
   */
  type?: fhir.ICodeableConcept[]|undefined;
  /**
   * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
   */
  alias?: string[]|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.alias
   */
  _alias?: fhir.IFhirElement[]|undefined;
  /**
   * The period of time that the health insurance product is available.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
   */
  ownedBy?: fhir.IReference|undefined;
  /**
   * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
   */
  administeredBy?: fhir.IReference|undefined;
  /**
   * The geographic region in which a health insurance product's benefits apply.
   */
  coverageArea?: fhir.IReference[]|undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  contact?: fhir.IInsurancePlanContact[]|undefined;
  /**
   * The technical endpoints providing access to services operated for the health insurance product.
   */
  endpoint?: fhir.IReference[]|undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhir.IReference[]|undefined;
  /**
   * Details about the coverage offered by the insurance product.
   */
  coverage?: fhir.IInsurancePlanCoverage[]|undefined;
  /**
   * Details about an insurance plan.
   */
  plan?: fhir.IInsurancePlanPlan[]|undefined;
}

/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export class InsurancePlanContact extends fhir.BackboneElement implements IInsurancePlanContact {
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  public purpose?: fhir.CodeableConcept|undefined;
  /**
   * A name associated with the contact.
   */
  public name?: fhir.HumanName|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * Visiting or postal addresses for the contact.
   */
  public address?: fhir.Address|undefined;
  /**
   * Default constructor for InsurancePlanContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanContact> = { }) {
    super(source);
    if (source['purpose']) { this.purpose = new fhir.CodeableConcept(source.purpose!); }
    if (source['name']) { this.name = new fhir.HumanName(source.name!); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    if (source['address']) { this.address = new fhir.Address(source.address!); }
  }
  /**
   * Extensible-bound Value Set for purpose
   */
  public purposeExtensibleValueSet():ContactentityTypeValueSetType {
    return ContactentityTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["purpose"]) { results.push(...this.purpose.doModelValidation()); }
    if (this["name"]) { results.push(...this.name.doModelValidation()); }
    if (this["telecom"]) { this.telecom.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["address"]) { results.push(...this.address.doModelValidation()); }
    return results;
  }
}

/**
 * The specific limits on the benefit.
 */
export class InsurancePlanCoverageBenefitLimit extends fhir.BackboneElement implements IInsurancePlanCoverageBenefitLimit {
  /**
   * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
   */
  public value?: fhir.Quantity|undefined;
  /**
   * Use `CodeableConcept.text` element if the data is free (uncoded) text.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for InsurancePlanCoverageBenefitLimit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanCoverageBenefitLimit> = { }) {
    super(source);
    if (source['value']) { this.value = new fhir.Quantity(source.value!); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["value"]) { results.push(...this.value.doModelValidation()); }
    if (this["code"]) { results.push(...this.code.doModelValidation()); }
    return results;
  }
}

/**
 * Specific benefits under this type of coverage.
 */
export class InsurancePlanCoverageBenefit extends fhir.BackboneElement implements IInsurancePlanCoverageBenefit {
  /**
   * Type of benefit (primary care; speciality care; inpatient; outpatient).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  public requirement?: string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.coverage.benefit.requirement
   */
  public _requirement?: fhir.FhirElement|undefined;
  /**
   * The specific limits on the benefit.
   */
  public limit?: fhir.InsurancePlanCoverageBenefitLimit[]|undefined;
  /**
   * Default constructor for InsurancePlanCoverageBenefit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanCoverageBenefit> = { }) {
    super(source);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    else { this.type = null; }
    if (source['requirement']) { this.requirement = source.requirement; }
    if (source['_requirement']) { this._requirement = new fhir.FhirElement(source._requirement!); }
    if (source['limit']) { this.limit = source.limit.map((x) => new fhir.InsurancePlanCoverageBenefitLimit(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["type"]) { results.push(["type",'Missing required element: InsurancePlan.coverage.benefit.type']); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["_requirement"]) { results.push(...this._requirement.doModelValidation()); }
    if (this["limit"]) { this.limit.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * Details about the coverage offered by the insurance product.
 */
export class InsurancePlanCoverage extends fhir.BackboneElement implements IInsurancePlanCoverage {
  /**
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  public network?: fhir.Reference[]|undefined;
  /**
   * Specific benefits under this type of coverage.
   */
  public benefit: fhir.InsurancePlanCoverageBenefit[]|null;
  /**
   * Default constructor for InsurancePlanCoverage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanCoverage> = { }) {
    super(source);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    else { this.type = null; }
    if (source['network']) { this.network = source.network.map((x) => new fhir.Reference(x)); }
    if (source['benefit']) { this.benefit = source.benefit.map((x) => new fhir.InsurancePlanCoverageBenefit(x)); }
    else { this.benefit = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["type"]) { results.push(["type",'Missing required element: InsurancePlan.coverage.type']); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["network"]) { this.network.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if ((!this["benefit"]) || (this["benefit"].length === 0)) { results.push(["benefit",'Missing required element: InsurancePlan.coverage.benefit']); }
    if (this["benefit"]) { this.benefit.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * Overall costs associated with the plan.
 */
export class InsurancePlanPlanGeneralCost extends fhir.BackboneElement implements IInsurancePlanPlanGeneralCost {
  /**
   * Type of cost.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Number of participants enrolled in the plan.
   */
  public groupSize?: number|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.plan.generalCost.groupSize
   */
  public _groupSize?: fhir.FhirElement|undefined;
  /**
   * Value of the cost.
   */
  public cost?: fhir.Money|undefined;
  /**
   * Additional information about the general costs associated with this plan.
   */
  public comment?: string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.plan.generalCost.comment
   */
  public _comment?: fhir.FhirElement|undefined;
  /**
   * Default constructor for InsurancePlanPlanGeneralCost - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanPlanGeneralCost> = { }) {
    super(source);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['groupSize']) { this.groupSize = source.groupSize; }
    if (source['_groupSize']) { this._groupSize = new fhir.FhirElement(source._groupSize!); }
    if (source['cost']) { this.cost = new fhir.Money(source.cost!); }
    if (source['comment']) { this.comment = source.comment; }
    if (source['_comment']) { this._comment = new fhir.FhirElement(source._comment!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["_groupSize"]) { results.push(...this._groupSize.doModelValidation()); }
    if (this["cost"]) { results.push(...this.cost.doModelValidation()); }
    if (this["_comment"]) { results.push(...this._comment.doModelValidation()); }
    return results;
  }
}

/**
 * List of the costs associated with a specific benefit.
 */
export class InsurancePlanPlanSpecificCostBenefitCost extends fhir.BackboneElement implements IInsurancePlanPlanSpecificCostBenefitCost {
  /**
   * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
   */
  public applicability?: fhir.CodeableConcept|undefined;
  /**
   * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
   */
  public qualifiers?: fhir.CodeableConcept[]|undefined;
  /**
   * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
   */
  public value?: fhir.Quantity|undefined;
  /**
   * Default constructor for InsurancePlanPlanSpecificCostBenefitCost - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanPlanSpecificCostBenefitCost> = { }) {
    super(source);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    else { this.type = null; }
    if (source['applicability']) { this.applicability = new fhir.CodeableConcept(source.applicability!); }
    if (source['qualifiers']) { this.qualifiers = source.qualifiers.map((x) => new fhir.CodeableConcept(x)); }
    if (source['value']) { this.value = new fhir.Quantity(source.value!); }
  }
  /**
   * Required-bound Value Set for applicability
   */
  public applicabilityRequiredValueSet():InsuranceplanApplicabilityValueSetType {
    return InsuranceplanApplicabilityValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["type"]) { results.push(["type",'Missing required element: InsurancePlan.plan.specificCost.benefit.cost.type']); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["applicability"]) { results.push(...this.applicability.doModelValidation()); }
    if (this["qualifiers"]) { this.qualifiers.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["value"]) { results.push(...this.value.doModelValidation()); }
    return results;
  }
}

/**
 * List of the specific benefits under this category of benefit.
 */
export class InsurancePlanPlanSpecificCostBenefit extends fhir.BackboneElement implements IInsurancePlanPlanSpecificCostBenefit {
  /**
   * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * List of the costs associated with a specific benefit.
   */
  public cost?: fhir.InsurancePlanPlanSpecificCostBenefitCost[]|undefined;
  /**
   * Default constructor for InsurancePlanPlanSpecificCostBenefit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanPlanSpecificCostBenefit> = { }) {
    super(source);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    else { this.type = null; }
    if (source['cost']) { this.cost = source.cost.map((x) => new fhir.InsurancePlanPlanSpecificCostBenefitCost(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["type"]) { results.push(["type",'Missing required element: InsurancePlan.plan.specificCost.benefit.type']); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["cost"]) { this.cost.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * Costs associated with the coverage provided by the product.
 */
export class InsurancePlanPlanSpecificCost extends fhir.BackboneElement implements IInsurancePlanPlanSpecificCost {
  /**
   * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
   */
  public category: fhir.CodeableConcept|null;
  /**
   * List of the specific benefits under this category of benefit.
   */
  public benefit?: fhir.InsurancePlanPlanSpecificCostBenefit[]|undefined;
  /**
   * Default constructor for InsurancePlanPlanSpecificCost - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanPlanSpecificCost> = { }) {
    super(source);
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category!); }
    else { this.category = null; }
    if (source['benefit']) { this.benefit = source.benefit.map((x) => new fhir.InsurancePlanPlanSpecificCostBenefit(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["category"]) { results.push(["category",'Missing required element: InsurancePlan.plan.specificCost.category']); }
    if (this["category"]) { results.push(...this.category.doModelValidation()); }
    if (this["benefit"]) { this.benefit.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * Details about an insurance plan.
 */
export class InsurancePlanPlan extends fhir.BackboneElement implements IInsurancePlanPlan {
  /**
   * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Type of plan. For example, "Platinum" or "High Deductable".
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The geographic region in which a health insurance plan's benefits apply.
   */
  public coverageArea?: fhir.Reference[]|undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  public network?: fhir.Reference[]|undefined;
  /**
   * Overall costs associated with the plan.
   */
  public generalCost?: fhir.InsurancePlanPlanGeneralCost[]|undefined;
  /**
   * Costs associated with the coverage provided by the product.
   */
  public specificCost?: fhir.InsurancePlanPlanSpecificCost[]|undefined;
  /**
   * Default constructor for InsurancePlanPlan - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlanPlan> = { }) {
    super(source);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['coverageArea']) { this.coverageArea = source.coverageArea.map((x) => new fhir.Reference(x)); }
    if (source['network']) { this.network = source.network.map((x) => new fhir.Reference(x)); }
    if (source['generalCost']) { this.generalCost = source.generalCost.map((x) => new fhir.InsurancePlanPlanGeneralCost(x)); }
    if (source['specificCost']) { this.specificCost = source.specificCost.map((x) => new fhir.InsurancePlanPlanSpecificCost(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["coverageArea"]) { this.coverageArea.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["network"]) { this.network.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["generalCost"]) { this.generalCost.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["specificCost"]) { this.specificCost.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export class InsurancePlan extends fhir.DomainResource implements IInsurancePlan {
  /**
   * Resource Type Name
   */
  public resourceType: "InsurancePlan";
  /**
   * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The current state of the health insurance product.
   */
  public status?: PublicationStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * The kind of health insurance product.
   */
  public type?: fhir.CodeableConcept[]|undefined;
  /**
   * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  public name?: string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
   */
  public alias?: string[]|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.alias
   */
  public _alias?: fhir.FhirElement[]|undefined;
  /**
   * The period of time that the health insurance product is available.
   */
  public period?: fhir.Period|undefined;
  /**
   * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
   */
  public ownedBy?: fhir.Reference|undefined;
  /**
   * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
   */
  public administeredBy?: fhir.Reference|undefined;
  /**
   * The geographic region in which a health insurance product's benefits apply.
   */
  public coverageArea?: fhir.Reference[]|undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  public contact?: fhir.InsurancePlanContact[]|undefined;
  /**
   * The technical endpoints providing access to services operated for the health insurance product.
   */
  public endpoint?: fhir.Reference[]|undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  public network?: fhir.Reference[]|undefined;
  /**
   * Details about the coverage offered by the insurance product.
   */
  public coverage?: fhir.InsurancePlanCoverage[]|undefined;
  /**
   * Details about an insurance plan.
   */
  public plan?: fhir.InsurancePlanPlan[]|undefined;
  /**
   * Default constructor for InsurancePlan - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IInsurancePlan> = { }) {
    super(source);
    this.resourceType = 'InsurancePlan';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x)); }
    if (source['name']) { this.name = source.name; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['alias']) { this.alias = source.alias.map((x) => (x)); }
    if (source['_alias']) { this._alias = source._alias.map((x) => new fhir.FhirElement(x)); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
    if (source['ownedBy']) { this.ownedBy = new fhir.Reference(source.ownedBy!); }
    if (source['administeredBy']) { this.administeredBy = new fhir.Reference(source.administeredBy!); }
    if (source['coverageArea']) { this.coverageArea = source.coverageArea.map((x) => new fhir.Reference(x)); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.InsurancePlanContact(x)); }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x)); }
    if (source['network']) { this.network = source.network.map((x) => new fhir.Reference(x)); }
    if (source['coverage']) { this.coverage = source.coverage.map((x) => new fhir.InsurancePlanCoverage(x)); }
    if (source['plan']) { this.plan = source.plan.map((x) => new fhir.InsurancePlanPlan(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
  }
  /**
   * Example-bound Value Set for type
   */
  public typeExampleValueSet():InsuranceplanTypeValueSetType {
    return InsuranceplanTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: InsurancePlan.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["type"]) { this.type.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["_alias"]) { this._alias.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    if (this["ownedBy"]) { results.push(...this.ownedBy.doModelValidation()); }
    if (this["administeredBy"]) { results.push(...this.administeredBy.doModelValidation()); }
    if (this["coverageArea"]) { this.coverageArea.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["contact"]) { this.contact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["endpoint"]) { this.endpoint.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["network"]) { this.network.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["coverage"]) { this.coverage.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["plan"]) { this.plan.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
