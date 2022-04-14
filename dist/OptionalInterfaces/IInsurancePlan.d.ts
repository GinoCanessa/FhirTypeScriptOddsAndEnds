import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export interface IInsurancePlanContact extends fhirInterfaces.IBackboneElement {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhirInterfaces.IAddress | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhirInterfaces.IHumanName | undefined;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
}
/**
 * The specific limits on the benefit.
 */
export interface IInsurancePlanCoverageBenefitLimit extends fhirInterfaces.IBackboneElement {
    /**
     * Use `CodeableConcept.text` element if the data is free (uncoded) text.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
     */
    value?: fhirInterfaces.IQuantity | undefined;
}
/**
 * Specific benefits under this type of coverage.
 */
export interface IInsurancePlanCoverageBenefit extends fhirInterfaces.IBackboneElement {
    /**
     * The specific limits on the benefit.
     */
    limit?: fhirInterfaces.IInsurancePlanCoverageBenefitLimit[] | undefined;
    /**
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: string | undefined;
    _requirement?: fhirInterfaces.IElement | undefined;
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Details about the coverage offered by the insurance product.
 */
export interface IInsurancePlanCoverage extends fhirInterfaces.IBackboneElement {
    /**
     * Specific benefits under this type of coverage.
     */
    benefit?: fhirInterfaces.IInsurancePlanCoverageBenefit[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhirInterfaces.IReference[] | undefined;
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Overall costs associated with the plan.
 */
export interface IInsurancePlanPlanGeneralCost extends fhirInterfaces.IBackboneElement {
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * Value of the cost.
     */
    cost?: fhirInterfaces.IMoney | undefined;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: number | undefined;
    _groupSize?: fhirInterfaces.IElement | undefined;
    /**
     * Type of cost.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * List of the costs associated with a specific benefit.
 */
export interface IInsurancePlanPlanSpecificCostBenefitCost extends fhirInterfaces.IBackboneElement {
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
     */
    applicability?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
     */
    qualifiers?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
     */
    value?: fhirInterfaces.IQuantity | undefined;
}
/**
 * List of the specific benefits under this category of benefit.
 */
export interface IInsurancePlanPlanSpecificCostBenefit extends fhirInterfaces.IBackboneElement {
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: fhirInterfaces.IInsurancePlanPlanSpecificCostBenefitCost[] | undefined;
    /**
     * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Costs associated with the coverage provided by the product.
 */
export interface IInsurancePlanPlanSpecificCost extends fhirInterfaces.IBackboneElement {
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: fhirInterfaces.IInsurancePlanPlanSpecificCostBenefit[] | undefined;
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Details about an insurance plan.
 */
export interface IInsurancePlanPlan extends fhirInterfaces.IBackboneElement {
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: fhirInterfaces.IReference[] | undefined;
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: fhirInterfaces.IInsurancePlanPlanGeneralCost[] | undefined;
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhirInterfaces.IReference[] | undefined;
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: fhirInterfaces.IInsurancePlanPlanSpecificCost[] | undefined;
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface IInsurancePlan extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "InsurancePlan";
    /**
     * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: fhirInterfaces.IReference | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: string[] | undefined;
    _alias?: fhirInterfaces.IElement[] | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhirInterfaces.IInsurancePlanContact[] | undefined;
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: fhirInterfaces.IInsurancePlanCoverage[] | undefined;
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: fhirInterfaces.IReference[] | undefined;
    /**
     * The technical endpoints providing access to services operated for the health insurance product.
     */
    endpoint?: fhirInterfaces.IReference[] | undefined;
    /**
     * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhirInterfaces.IReference[] | undefined;
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
     */
    ownedBy?: fhirInterfaces.IReference | undefined;
    /**
     * The period of time that the health insurance product is available.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Details about an insurance plan.
     */
    plan?: fhirInterfaces.IInsurancePlanPlan[] | undefined;
    /**
     * The current state of the health insurance product.
     */
    status?: InsurancePlanStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The kind of health insurance product.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
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
//# sourceMappingURL=IInsurancePlan.d.ts.map