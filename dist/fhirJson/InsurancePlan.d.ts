import * as fhir from '../fhirJson.js';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export interface InsurancePlanContact extends fhir.BackboneElement {
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhir.CodeableConcept | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhir.HumanName | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhir.Address | undefined;
}
/**
 * The specific limits on the benefit.
 */
export interface InsurancePlanCoverageBenefitLimit extends fhir.BackboneElement {
    /**
     * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
     */
    value?: fhir.Quantity | undefined;
    /**
     * Use `CodeableConcept.text` element if the data is free (uncoded) text.
     */
    code?: fhir.CodeableConcept | undefined;
}
/**
 * Specific benefits under this type of coverage.
 */
export interface InsurancePlanCoverageBenefit extends fhir.BackboneElement {
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type: fhir.CodeableConcept | null;
    /**
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: string | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.coverage.benefit.requirement
     */
    _requirement?: fhir.FhirElement;
    /**
     * The specific limits on the benefit.
     */
    limit?: fhir.InsurancePlanCoverageBenefitLimit[] | undefined;
}
/**
 * Details about the coverage offered by the insurance product.
 */
export interface InsurancePlanCoverage extends fhir.BackboneElement {
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.Reference[] | undefined;
    /**
     * Specific benefits under this type of coverage.
     */
    benefit: fhir.InsurancePlanCoverageBenefit[] | null;
}
/**
 * Overall costs associated with the plan.
 */
export interface InsurancePlanPlanGeneralCost extends fhir.BackboneElement {
    /**
     * Type of cost.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: number | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.plan.generalCost.groupSize
     */
    _groupSize?: fhir.FhirElement;
    /**
     * Value of the cost.
     */
    cost?: fhir.Money | undefined;
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.plan.generalCost.comment
     */
    _comment?: fhir.FhirElement;
}
/**
 * List of the costs associated with a specific benefit.
 */
export interface InsurancePlanPlanSpecificCostBenefitCost extends fhir.BackboneElement {
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
     */
    applicability?: fhir.CodeableConcept | undefined;
    /**
     * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
     */
    qualifiers?: fhir.CodeableConcept[] | undefined;
    /**
     * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
     */
    value?: fhir.Quantity | undefined;
}
/**
 * List of the specific benefits under this category of benefit.
 */
export interface InsurancePlanPlanSpecificCostBenefit extends fhir.BackboneElement {
    /**
     * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
     */
    type: fhir.CodeableConcept | null;
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: fhir.InsurancePlanPlanSpecificCostBenefitCost[] | undefined;
}
/**
 * Costs associated with the coverage provided by the product.
 */
export interface InsurancePlanPlanSpecificCost extends fhir.BackboneElement {
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
     */
    category: fhir.CodeableConcept | null;
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: fhir.InsurancePlanPlanSpecificCostBenefit[] | undefined;
}
/**
 * Details about an insurance plan.
 */
export interface InsurancePlanPlan extends fhir.BackboneElement {
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: fhir.Reference[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.Reference[] | undefined;
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: fhir.InsurancePlanPlanGeneralCost[] | undefined;
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: fhir.InsurancePlanPlanSpecificCost[] | undefined;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export interface InsurancePlan extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "InsurancePlan";
    /**
     * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The current state of the health insurance product.
     */
    status?: 'active' | 'draft' | 'retired' | 'unknown' | undefined;
    /**
     * The kind of health insurance product.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.name
     */
    _name?: fhir.FhirElement;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: string[] | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.alias
     */
    _alias?: (fhir.FhirElement | null)[];
    /**
     * The period of time that the health insurance product is available.
     */
    period?: fhir.Period | undefined;
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
     */
    ownedBy?: fhir.Reference | undefined;
    /**
     * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: fhir.Reference | undefined;
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: fhir.Reference[] | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhir.InsurancePlanContact[] | undefined;
    /**
     * The technical endpoints providing access to services operated for the health insurance product.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.Reference[] | undefined;
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: fhir.InsurancePlanCoverage[] | undefined;
    /**
     * Details about an insurance plan.
     */
    plan?: fhir.InsurancePlanPlan[] | undefined;
}
//# sourceMappingURL=InsurancePlan.d.ts.map