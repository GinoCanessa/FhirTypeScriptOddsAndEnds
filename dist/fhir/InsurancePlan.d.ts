import * as fhir from '../fhir';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export declare type IInsurancePlanContact = fhir.IBackboneElement & {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhir.IAddress | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhir.IHumanName | undefined;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhir.ICodeableConcept | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhir.IContactPoint[] | undefined;
};
/**
 * The specific limits on the benefit.
 */
export declare type IInsurancePlanCoverageBenefitLimit = fhir.IBackboneElement & {
    /**
     * Use `CodeableConcept.text` element if the data is free (uncoded) text.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
     */
    value?: fhir.IQuantity | undefined;
};
/**
 * Specific benefits under this type of coverage.
 */
export declare type IInsurancePlanCoverageBenefit = fhir.IBackboneElement & {
    /**
     * The specific limits on the benefit.
     */
    limit?: fhir.IInsurancePlanCoverageBenefitLimit[] | undefined;
    /**
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: string | undefined;
    _requirement?: fhir.IFhirElement | undefined;
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * Details about the coverage offered by the insurance product.
 */
export declare type IInsurancePlanCoverage = fhir.IBackboneElement & {
    /**
     * Specific benefits under this type of coverage.
     */
    benefit: fhir.IInsurancePlanCoverageBenefit[] | null;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.IReference[] | undefined;
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * Overall costs associated with the plan.
 */
export declare type IInsurancePlanPlanGeneralCost = fhir.IBackboneElement & {
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: string | undefined;
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Value of the cost.
     */
    cost?: fhir.IMoney | undefined;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: number | undefined;
    _groupSize?: fhir.IFhirElement | undefined;
    /**
     * Type of cost.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * List of the costs associated with a specific benefit.
 */
export declare type IInsurancePlanPlanSpecificCostBenefitCost = fhir.IBackboneElement & {
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
     */
    applicability?: fhir.ICodeableConcept | undefined;
    /**
     * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
     */
    qualifiers?: fhir.ICodeableConcept[] | undefined;
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
     */
    value?: fhir.IQuantity | undefined;
};
/**
 * List of the specific benefits under this category of benefit.
 */
export declare type IInsurancePlanPlanSpecificCostBenefit = fhir.IBackboneElement & {
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: fhir.IInsurancePlanPlanSpecificCostBenefitCost[] | undefined;
    /**
     * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * Costs associated with the coverage provided by the product.
 */
export declare type IInsurancePlanPlanSpecificCost = fhir.IBackboneElement & {
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: fhir.IInsurancePlanPlanSpecificCostBenefit[] | undefined;
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
     */
    category: fhir.ICodeableConcept | null;
};
/**
 * Details about an insurance plan.
 */
export declare type IInsurancePlanPlan = fhir.IBackboneElement & {
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: fhir.IReference[] | undefined;
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: fhir.IInsurancePlanPlanGeneralCost[] | undefined;
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.IReference[] | undefined;
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: fhir.IInsurancePlanPlanSpecificCost[] | undefined;
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export declare type IInsurancePlan = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "InsurancePlan";
    /**
     * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: fhir.IReference | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: string[] | undefined;
    _alias?: fhir.IFhirElement[] | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhir.IInsurancePlanContact[] | undefined;
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: fhir.IInsurancePlanCoverage[] | undefined;
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: fhir.IReference[] | undefined;
    /**
     * The technical endpoints providing access to services operated for the health insurance product.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.IReference[] | undefined;
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
     */
    ownedBy?: fhir.IReference | undefined;
    /**
     * The period of time that the health insurance product is available.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Details about an insurance plan.
     */
    plan?: fhir.IInsurancePlanPlan[] | undefined;
    /**
     * The current state of the health insurance product.
     */
    status?: InsurancePlanStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The kind of health insurance product.
     */
    type?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export declare class InsurancePlanContact extends fhir.BackboneElement implements fhir.IInsurancePlanContact {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhir.Address | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhir.HumanName | undefined;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhir.CodeableConcept | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for InsurancePlanContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanContact>);
    /**
     * Check if the current InsurancePlanContact contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanContact from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanContact): InsurancePlanContact;
}
/**
 * The specific limits on the benefit.
 */
export declare class InsurancePlanCoverageBenefitLimit extends fhir.BackboneElement implements fhir.IInsurancePlanCoverageBenefitLimit {
    /**
     * Use `CodeableConcept.text` element if the data is free (uncoded) text.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
     */
    value?: fhir.Quantity | undefined;
    /**
     * Default constructor for InsurancePlanCoverageBenefitLimit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanCoverageBenefitLimit>);
    /**
     * Check if the current InsurancePlanCoverageBenefitLimit contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanCoverageBenefitLimit from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanCoverageBenefitLimit): InsurancePlanCoverageBenefitLimit;
}
/**
 * Specific benefits under this type of coverage.
 */
export declare class InsurancePlanCoverageBenefit extends fhir.BackboneElement implements fhir.IInsurancePlanCoverageBenefit {
    /**
     * The specific limits on the benefit.
     */
    limit?: fhir.InsurancePlanCoverageBenefitLimit[] | undefined;
    /**
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: string | undefined;
    _requirement?: fhir.FhirElement | undefined;
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for InsurancePlanCoverageBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanCoverageBenefit>);
    /**
     * Check if the current InsurancePlanCoverageBenefit contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanCoverageBenefit from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanCoverageBenefit): InsurancePlanCoverageBenefit;
}
/**
 * Details about the coverage offered by the insurance product.
 */
export declare class InsurancePlanCoverage extends fhir.BackboneElement implements fhir.IInsurancePlanCoverage {
    /**
     * Specific benefits under this type of coverage.
     */
    benefit: fhir.InsurancePlanCoverageBenefit[] | null;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.Reference[] | undefined;
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for InsurancePlanCoverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanCoverage>);
    /**
     * Check if the current InsurancePlanCoverage contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanCoverage from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanCoverage): InsurancePlanCoverage;
}
/**
 * Overall costs associated with the plan.
 */
export declare class InsurancePlanPlanGeneralCost extends fhir.BackboneElement implements fhir.IInsurancePlanPlanGeneralCost {
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: string | undefined;
    _comment?: fhir.FhirElement | undefined;
    /**
     * Value of the cost.
     */
    cost?: fhir.Money | undefined;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: number | undefined;
    _groupSize?: fhir.FhirElement | undefined;
    /**
     * Type of cost.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for InsurancePlanPlanGeneralCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanPlanGeneralCost>);
    /**
     * Check if the current InsurancePlanPlanGeneralCost contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanPlanGeneralCost from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanPlanGeneralCost): InsurancePlanPlanGeneralCost;
}
/**
 * List of the costs associated with a specific benefit.
 */
export declare class InsurancePlanPlanSpecificCostBenefitCost extends fhir.BackboneElement implements fhir.IInsurancePlanPlanSpecificCostBenefitCost {
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
     */
    applicability?: fhir.CodeableConcept | undefined;
    /**
     * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
     */
    qualifiers?: fhir.CodeableConcept[] | undefined;
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type: fhir.CodeableConcept | null;
    /**
     * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
     */
    value?: fhir.Quantity | undefined;
    /**
     * Default constructor for InsurancePlanPlanSpecificCostBenefitCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanPlanSpecificCostBenefitCost>);
    /**
     * Check if the current InsurancePlanPlanSpecificCostBenefitCost contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanPlanSpecificCostBenefitCost from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanPlanSpecificCostBenefitCost): InsurancePlanPlanSpecificCostBenefitCost;
}
/**
 * List of the specific benefits under this category of benefit.
 */
export declare class InsurancePlanPlanSpecificCostBenefit extends fhir.BackboneElement implements fhir.IInsurancePlanPlanSpecificCostBenefit {
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: fhir.InsurancePlanPlanSpecificCostBenefitCost[] | undefined;
    /**
     * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for InsurancePlanPlanSpecificCostBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanPlanSpecificCostBenefit>);
    /**
     * Check if the current InsurancePlanPlanSpecificCostBenefit contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanPlanSpecificCostBenefit from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanPlanSpecificCostBenefit): InsurancePlanPlanSpecificCostBenefit;
}
/**
 * Costs associated with the coverage provided by the product.
 */
export declare class InsurancePlanPlanSpecificCost extends fhir.BackboneElement implements fhir.IInsurancePlanPlanSpecificCost {
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: fhir.InsurancePlanPlanSpecificCostBenefit[] | undefined;
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
     */
    category: fhir.CodeableConcept | null;
    /**
     * Default constructor for InsurancePlanPlanSpecificCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanPlanSpecificCost>);
    /**
     * Check if the current InsurancePlanPlanSpecificCost contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanPlanSpecificCost from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanPlanSpecificCost): InsurancePlanPlanSpecificCost;
}
/**
 * Details about an insurance plan.
 */
export declare class InsurancePlanPlan extends fhir.BackboneElement implements fhir.IInsurancePlanPlan {
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: fhir.Reference[] | undefined;
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: fhir.InsurancePlanPlanGeneralCost[] | undefined;
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.Reference[] | undefined;
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: fhir.InsurancePlanPlanSpecificCost[] | undefined;
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for InsurancePlanPlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlanPlan>);
    /**
     * Check if the current InsurancePlanPlan contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlanPlan from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlanPlan): InsurancePlanPlan;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export declare class InsurancePlan extends fhir.DomainResource implements fhir.IInsurancePlan {
    /**
     * Resource Type Name
     */
    resourceType: "InsurancePlan";
    /**
     * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: fhir.Reference | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: string[] | undefined;
    _alias?: fhir.FhirElement[] | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhir.InsurancePlanContact[] | undefined;
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: fhir.InsurancePlanCoverage[] | undefined;
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: fhir.Reference[] | undefined;
    /**
     * The technical endpoints providing access to services operated for the health insurance product.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.Reference[] | undefined;
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
     */
    ownedBy?: fhir.Reference | undefined;
    /**
     * The period of time that the health insurance product is available.
     */
    period?: fhir.Period | undefined;
    /**
     * Details about an insurance plan.
     */
    plan?: fhir.InsurancePlanPlan[] | undefined;
    /**
     * The current state of the health insurance product.
     */
    status?: InsurancePlanStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * The kind of health insurance product.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for InsurancePlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInsurancePlan>);
    /**
     * Check if the current InsurancePlan contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a InsurancePlan from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IInsurancePlan): InsurancePlan;
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