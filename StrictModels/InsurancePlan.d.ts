import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export declare class InsurancePlanContact extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanContact {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhirModels.Address | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhirModels.HumanName | undefined;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhirModels.CodeableConcept | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for InsurancePlanContact from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanContact);
}
/**
 * The specific limits on the benefit.
 */
export declare class InsurancePlanCoverageBenefitLimit extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanCoverageBenefitLimit {
    /**
     * Use `CodeableConcept.text` element if the data is free (uncoded) text.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
     */
    value?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for InsurancePlanCoverageBenefitLimit from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanCoverageBenefitLimit);
}
/**
 * Specific benefits under this type of coverage.
 */
export declare class InsurancePlanCoverageBenefit extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanCoverageBenefit {
    /**
     * The specific limits on the benefit.
     */
    limit?: fhirModels.InsurancePlanCoverageBenefitLimit[] | undefined;
    /**
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: string | undefined;
    _requirement?: fhirModels.Element | undefined;
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type: fhirModels.CodeableConcept;
    /**
     * Default constructor for InsurancePlanCoverageBenefit from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanCoverageBenefit);
}
/**
 * Details about the coverage offered by the insurance product.
 */
export declare class InsurancePlanCoverage extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanCoverage {
    /**
     * Specific benefits under this type of coverage.
     */
    benefit: fhirModels.InsurancePlanCoverageBenefit[];
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhirModels.Reference[] | undefined;
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
     */
    type: fhirModels.CodeableConcept;
    /**
     * Default constructor for InsurancePlanCoverage from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanCoverage);
}
/**
 * Overall costs associated with the plan.
 */
export declare class InsurancePlanPlanGeneralCost extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlanGeneralCost {
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * Value of the cost.
     */
    cost?: fhirModels.Money | undefined;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: number | undefined;
    _groupSize?: fhirModels.Element | undefined;
    /**
     * Type of cost.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for InsurancePlanPlanGeneralCost from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanPlanGeneralCost);
}
/**
 * List of the costs associated with a specific benefit.
 */
export declare class InsurancePlanPlanSpecificCostBenefitCost extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlanSpecificCostBenefitCost {
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
     */
    applicability?: fhirModels.CodeableConcept | undefined;
    /**
     * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
     */
    qualifiers?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type: fhirModels.CodeableConcept;
    /**
     * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
     */
    value?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for InsurancePlanPlanSpecificCostBenefitCost from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanPlanSpecificCostBenefitCost);
}
/**
 * List of the specific benefits under this category of benefit.
 */
export declare class InsurancePlanPlanSpecificCostBenefit extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlanSpecificCostBenefit {
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: fhirModels.InsurancePlanPlanSpecificCostBenefitCost[] | undefined;
    /**
     * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
     */
    type: fhirModels.CodeableConcept;
    /**
     * Default constructor for InsurancePlanPlanSpecificCostBenefit from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanPlanSpecificCostBenefit);
}
/**
 * Costs associated with the coverage provided by the product.
 */
export declare class InsurancePlanPlanSpecificCost extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlanSpecificCost {
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: fhirModels.InsurancePlanPlanSpecificCostBenefit[] | undefined;
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
     */
    category: fhirModels.CodeableConcept;
    /**
     * Default constructor for InsurancePlanPlanSpecificCost from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanPlanSpecificCost);
}
/**
 * Details about an insurance plan.
 */
export declare class InsurancePlanPlan extends fhirModels.BackboneElement implements fhirInterfaces.IInsurancePlanPlan {
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: fhirModels.Reference[] | undefined;
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: fhirModels.InsurancePlanPlanGeneralCost[] | undefined;
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhirModels.Reference[] | undefined;
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: fhirModels.InsurancePlanPlanSpecificCost[] | undefined;
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for InsurancePlanPlan from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlanPlan);
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export declare class InsurancePlan extends fhirModels.DomainResource implements fhirInterfaces.IInsurancePlan {
    /**
     * Resource Type Name
     */
    readonly resourceType = "InsurancePlan";
    /**
     * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: fhirModels.Reference | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: string[] | undefined;
    _alias?: fhirModels.Element[] | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhirModels.InsurancePlanContact[] | undefined;
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: fhirModels.InsurancePlanCoverage[] | undefined;
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: fhirModels.Reference[] | undefined;
    /**
     * The technical endpoints providing access to services operated for the health insurance product.
     */
    endpoint?: fhirModels.Reference[] | undefined;
    /**
     * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhirModels.Reference[] | undefined;
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
     */
    ownedBy?: fhirModels.Reference | undefined;
    /**
     * The period of time that the health insurance product is available.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Details about an insurance plan.
     */
    plan?: fhirModels.InsurancePlanPlan[] | undefined;
    /**
     * The current state of the health insurance product.
     */
    status?: InsurancePlanStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * The kind of health insurance product.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for InsurancePlan from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IInsurancePlan);
}
/**
 * Code Values for the InsurancePlan.status field
 */
export declare enum InsurancePlanStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=InsurancePlan.d.ts.map