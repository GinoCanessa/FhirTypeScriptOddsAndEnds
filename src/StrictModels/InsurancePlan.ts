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
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export class InsurancePlanContact extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanContact {
  /**
   * Visiting or postal addresses for the contact.
   */
  address?: fhirModels.Address|undefined;
  /**
   * A name associated with the contact.
   */
  name?: fhirModels.HumanName|undefined;
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: fhirModels.CodeableConcept|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  telecom?: fhirModels.ContactPoint[]|undefined;
  /**
   * Default constructor for InsurancePlanContact from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanContact) {
    super(source);
    if (source["address"] !== undefined) {
      this.address = new fhirModels.Address(source.address);
    }
    if (source["name"] !== undefined) {
      this.name = new fhirModels.HumanName(source.name);
    }
    if (source["purpose"] !== undefined) {
      this.purpose = new fhirModels.CodeableConcept(source.purpose);
    }
    if (source["telecom"] !== undefined) {
      this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x));
    }
  }
}
/**
 * The specific limits on the benefit.
 */
export class InsurancePlanCoverageBenefitLimit extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanCoverageBenefitLimit {
  /**
   * Use `CodeableConcept.text` element if the data is free (uncoded) text.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
   */
  value?: fhirModels.Quantity|undefined;
  /**
   * Default constructor for InsurancePlanCoverageBenefitLimit from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanCoverageBenefitLimit) {
    super(source);
    if (source["code"] !== undefined) {
      this.code = new fhirModels.CodeableConcept(source.code);
    }
    if (source["value"] !== undefined) {
      this.value = new fhirModels.Quantity(source.value);
    }
  }
}
/**
 * Specific benefits under this type of coverage.
 */
export class InsurancePlanCoverageBenefit extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanCoverageBenefit {
  /**
   * The specific limits on the benefit.
   */
  limit?: fhirModels.InsurancePlanCoverageBenefitLimit[]|undefined;
  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  requirement?: string|undefined;
  _requirement?: fhirModels.Element|undefined;
  /**
   * Type of benefit (primary care; speciality care; inpatient; outpatient).
   */
  type: fhirModels.CodeableConcept;
  /**
   * Default constructor for InsurancePlanCoverageBenefit from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanCoverageBenefit) {
    super(source);
    if (source["limit"] !== undefined) {
      this.limit = source.limit.map((x) => new fhirModels.InsurancePlanCoverageBenefitLimit(x));
    }
    if (source["requirement"] !== undefined) {
      this.requirement = source.requirement;
    }
    if (source["_requirement"] !== undefined) {
      this._requirement = new fhirModels.Element(source._requirement);
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * Details about the coverage offered by the insurance product.
 */
export class InsurancePlanCoverage extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanCoverage {
  /**
   * Specific benefits under this type of coverage.
   */
  benefit: fhirModels.InsurancePlanCoverageBenefit[];
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhirModels.Reference[]|undefined;
  /**
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   */
  type: fhirModels.CodeableConcept;
  /**
   * Default constructor for InsurancePlanCoverage from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanCoverage) {
    super(source);
    {
      this.benefit = source.benefit.map((x) => new fhirModels.InsurancePlanCoverageBenefit(x));
    }
    if (source["network"] !== undefined) {
      this.network = source.network.map((x) => new fhirModels.Reference(x));
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * Overall costs associated with the plan.
 */
export class InsurancePlanPlanGeneralCost extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlanGeneralCost {
  /**
   * Additional information about the general costs associated with this plan.
   */
  comment?: string|undefined;
  _comment?: fhirModels.Element|undefined;
  /**
   * Value of the cost.
   */
  cost?: fhirModels.Money|undefined;
  /**
   * Number of participants enrolled in the plan.
   */
  groupSize?: number|undefined;
  _groupSize?: fhirModels.Element|undefined;
  /**
   * Type of cost.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for InsurancePlanPlanGeneralCost from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanPlanGeneralCost) {
    super(source);
    if (source["comment"] !== undefined) {
      this.comment = source.comment;
    }
    if (source["_comment"] !== undefined) {
      this._comment = new fhirModels.Element(source._comment);
    }
    if (source["cost"] !== undefined) {
      this.cost = new fhirModels.Money(source.cost);
    }
    if (source["groupSize"] !== undefined) {
      this.groupSize = source.groupSize;
    }
    if (source["_groupSize"] !== undefined) {
      this._groupSize = new fhirModels.Element(source._groupSize);
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * List of the costs associated with a specific benefit.
 */
export class InsurancePlanPlanSpecificCostBenefitCost extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlanSpecificCostBenefitCost {
  /**
   * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
   */
  applicability?: fhirModels.CodeableConcept|undefined;
  /**
   * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
   */
  qualifiers?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
   */
  type: fhirModels.CodeableConcept;
  /**
   * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
   */
  value?: fhirModels.Quantity|undefined;
  /**
   * Default constructor for InsurancePlanPlanSpecificCostBenefitCost from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanPlanSpecificCostBenefitCost) {
    super(source);
    if (source["applicability"] !== undefined) {
      this.applicability = new fhirModels.CodeableConcept(source.applicability);
    }
    if (source["qualifiers"] !== undefined) {
      this.qualifiers = source.qualifiers.map((x) => new fhirModels.CodeableConcept(x));
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
    if (source["value"] !== undefined) {
      this.value = new fhirModels.Quantity(source.value);
    }
  }
}
/**
 * List of the specific benefits under this category of benefit.
 */
export class InsurancePlanPlanSpecificCostBenefit extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlanSpecificCostBenefit {
  /**
   * List of the costs associated with a specific benefit.
   */
  cost?: fhirModels.InsurancePlanPlanSpecificCostBenefitCost[]|undefined;
  /**
   * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
   */
  type: fhirModels.CodeableConcept;
  /**
   * Default constructor for InsurancePlanPlanSpecificCostBenefit from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanPlanSpecificCostBenefit) {
    super(source);
    if (source["cost"] !== undefined) {
      this.cost = source.cost.map((x) => new fhirModels.InsurancePlanPlanSpecificCostBenefitCost(x));
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * Costs associated with the coverage provided by the product.
 */
export class InsurancePlanPlanSpecificCost extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlanSpecificCost {
  /**
   * List of the specific benefits under this category of benefit.
   */
  benefit?: fhirModels.InsurancePlanPlanSpecificCostBenefit[]|undefined;
  /**
   * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
   */
  category: fhirModels.CodeableConcept;
  /**
   * Default constructor for InsurancePlanPlanSpecificCost from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanPlanSpecificCost) {
    super(source);
    if (source["benefit"] !== undefined) {
      this.benefit = source.benefit.map((x) => new fhirModels.InsurancePlanPlanSpecificCostBenefit(x));
    }
    {
      this.category = new fhirModels.CodeableConcept(source.category);
    }
  }
}
/**
 * Details about an insurance plan.
 */
export class InsurancePlanPlan extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlan {
  /**
   * The geographic region in which a health insurance plan's benefits apply.
   */
  coverageArea?: fhirModels.Reference[]|undefined;
  /**
   * Overall costs associated with the plan.
   */
  generalCost?: fhirModels.InsurancePlanPlanGeneralCost[]|undefined;
  /**
   * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhirModels.Reference[]|undefined;
  /**
   * Costs associated with the coverage provided by the product.
   */
  specificCost?: fhirModels.InsurancePlanPlanSpecificCost[]|undefined;
  /**
   * Type of plan. For example, "Platinum" or "High Deductable".
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for InsurancePlanPlan from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlanPlan) {
    super(source);
    if (source["coverageArea"] !== undefined) {
      this.coverageArea = source.coverageArea.map((x) => new fhirModels.Reference(x));
    }
    if (source["generalCost"] !== undefined) {
      this.generalCost = source.generalCost.map((x) => new fhirModels.InsurancePlanPlanGeneralCost(x));
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["network"] !== undefined) {
      this.network = source.network.map((x) => new fhirModels.Reference(x));
    }
    if (source["specificCost"] !== undefined) {
      this.specificCost = source.specificCost.map((x) => new fhirModels.InsurancePlanPlanSpecificCost(x));
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export class InsurancePlan extends fhirModels.DomainResource implements fhirInterfaces.IInsurancePlan {
  /**
   * Resource Type Name
   */
  readonly resourceType = "InsurancePlan";
  /**
   * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
   */
  administeredBy?: fhirModels.Reference|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
   */
  alias?: string[]|undefined;
  _alias?: fhirModels.Element[]|undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  contact?: fhirModels.InsurancePlanContact[]|undefined;
  /**
   * Details about the coverage offered by the insurance product.
   */
  coverage?: fhirModels.InsurancePlanCoverage[]|undefined;
  /**
   * The geographic region in which a health insurance product's benefits apply.
   */
  coverageArea?: fhirModels.Reference[]|undefined;
  /**
   * The technical endpoints providing access to services operated for the health insurance product.
   */
  endpoint?: fhirModels.Reference[]|undefined;
  /**
   * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhirModels.Reference[]|undefined;
  /**
   * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
   */
  ownedBy?: fhirModels.Reference|undefined;
  /**
   * The period of time that the health insurance product is available.
   */
  period?: fhirModels.Period|undefined;
  /**
   * Details about an insurance plan.
   */
  plan?: fhirModels.InsurancePlanPlan[]|undefined;
  /**
   * The current state of the health insurance product.
   */
  status?: InsurancePlanStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * The kind of health insurance product.
   */
  type?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Default constructor for InsurancePlan from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IInsurancePlan) {
    super(source);
    if ((source['resourceType'] !== "InsurancePlan") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a InsurancePlan'; }
    if (source["administeredBy"] !== undefined) {
      this.administeredBy = new fhirModels.Reference(source.administeredBy);
    }
    if (source["alias"] !== undefined) {
      this.alias = source.alias.map((x) => (x));
    }
    if (source["_alias"] !== undefined) {
      this._alias = source._alias.map((x) => new fhirModels.Element(x));
    }
    if (source["contact"] !== undefined) {
      this.contact = source.contact.map((x) => new fhirModels.InsurancePlanContact(x));
    }
    if (source["coverage"] !== undefined) {
      this.coverage = source.coverage.map((x) => new fhirModels.InsurancePlanCoverage(x));
    }
    if (source["coverageArea"] !== undefined) {
      this.coverageArea = source.coverageArea.map((x) => new fhirModels.Reference(x));
    }
    if (source["endpoint"] !== undefined) {
      this.endpoint = source.endpoint.map((x) => new fhirModels.Reference(x));
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["name"] !== undefined) {
      this.name = source.name;
    }
    if (source["_name"] !== undefined) {
      this._name = new fhirModels.Element(source._name);
    }
    if (source["network"] !== undefined) {
      this.network = source.network.map((x) => new fhirModels.Reference(x));
    }
    if (source["ownedBy"] !== undefined) {
      this.ownedBy = new fhirModels.Reference(source.ownedBy);
    }
    if (source["period"] !== undefined) {
      this.period = new fhirModels.Period(source.period);
    }
    if (source["plan"] !== undefined) {
      this.plan = source.plan.map((x) => new fhirModels.InsurancePlanPlan(x));
    }
    if (source["status"] !== undefined) {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
    if (source["type"] !== undefined) {
      this.type = source.type.map((x) => new fhirModels.CodeableConcept(x));
    }
  }
}
/**
 * Code Values for the InsurancePlan.status field
 */
export enum InsurancePlanStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}
