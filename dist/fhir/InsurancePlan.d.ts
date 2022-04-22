import * as fhir from '../fhir.js';
import { ContactentityTypeValueSetType } from '../fhirValueSets/ContactentityTypeValueSet.js';
import { InsuranceplanApplicabilityValueSetType } from '../fhirValueSets/InsuranceplanApplicabilityValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { InsuranceplanTypeValueSetType } from '../fhirValueSets/InsuranceplanTypeValueSet.js';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export declare type IInsurancePlanContact = fhir.IBackboneElement & {
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhir.ICodeableConcept | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhir.IHumanName | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhir.IAddress | undefined;
};
/**
 * The specific limits on the benefit.
 */
export declare type IInsurancePlanCoverageBenefitLimit = fhir.IBackboneElement & {
    /**
     * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
     */
    value?: fhir.IQuantity | undefined;
    /**
     * Use `CodeableConcept.text` element if the data is free (uncoded) text.
     */
    code?: fhir.ICodeableConcept | undefined;
};
/**
 * Specific benefits under this type of coverage.
 */
export declare type IInsurancePlanCoverageBenefit = fhir.IBackboneElement & {
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: string | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.coverage.benefit.requirement
     */
    _requirement?: fhir.IFhirElement | undefined;
    /**
     * The specific limits on the benefit.
     */
    limit?: fhir.IInsurancePlanCoverageBenefitLimit[] | undefined;
};
/**
 * Details about the coverage offered by the insurance product.
 */
export declare type IInsurancePlanCoverage = fhir.IBackboneElement & {
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.IReference[] | undefined;
    /**
     * Specific benefits under this type of coverage.
     */
    benefit: fhir.IInsurancePlanCoverageBenefit[] | null;
};
/**
 * Overall costs associated with the plan.
 */
export declare type IInsurancePlanPlanGeneralCost = fhir.IBackboneElement & {
    /**
     * Type of cost.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: number | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.plan.generalCost.groupSize
     */
    _groupSize?: fhir.IFhirElement | undefined;
    /**
     * Value of the cost.
     */
    cost?: fhir.IMoney | undefined;
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.plan.generalCost.comment
     */
    _comment?: fhir.IFhirElement | undefined;
};
/**
 * List of the costs associated with a specific benefit.
 */
export declare type IInsurancePlanPlanSpecificCostBenefitCost = fhir.IBackboneElement & {
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
     */
    applicability?: fhir.ICodeableConcept | undefined;
    /**
     * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
     */
    qualifiers?: fhir.ICodeableConcept[] | undefined;
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
     * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
     */
    type: fhir.ICodeableConcept | null;
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: fhir.IInsurancePlanPlanSpecificCostBenefitCost[] | undefined;
};
/**
 * Costs associated with the coverage provided by the product.
 */
export declare type IInsurancePlanPlanSpecificCost = fhir.IBackboneElement & {
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
     */
    category: fhir.ICodeableConcept | null;
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: fhir.IInsurancePlanPlanSpecificCostBenefit[] | undefined;
};
/**
 * Details about an insurance plan.
 */
export declare type IInsurancePlanPlan = fhir.IBackboneElement & {
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: fhir.IReference[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.IReference[] | undefined;
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: fhir.IInsurancePlanPlanGeneralCost[] | undefined;
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: fhir.IInsurancePlanPlanSpecificCost[] | undefined;
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
     * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The current state of the health insurance product.
     */
    status?: PublicationStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The kind of health insurance product.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: string[] | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.alias
     */
    _alias?: fhir.IFhirElement[] | undefined;
    /**
     * The period of time that the health insurance product is available.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
     */
    ownedBy?: fhir.IReference | undefined;
    /**
     * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: fhir.IReference | undefined;
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: fhir.IReference[] | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhir.IInsurancePlanContact[] | undefined;
    /**
     * The technical endpoints providing access to services operated for the health insurance product.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.IReference[] | undefined;
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: fhir.IInsurancePlanCoverage[] | undefined;
    /**
     * Details about an insurance plan.
     */
    plan?: fhir.IInsurancePlanPlan[] | undefined;
};
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export declare class InsurancePlanContact extends fhir.BackboneElement implements IInsurancePlanContact {
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
    /**
     * Default constructor for InsurancePlanContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanContact>);
    /**
     * Extensible-bound Value Set for purpose
     */
    static purposeExtensibleValueSet(): ContactentityTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The specific limits on the benefit.
 */
export declare class InsurancePlanCoverageBenefitLimit extends fhir.BackboneElement implements IInsurancePlanCoverageBenefitLimit {
    /**
     * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
     */
    value?: fhir.Quantity | undefined;
    /**
     * Use `CodeableConcept.text` element if the data is free (uncoded) text.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for InsurancePlanCoverageBenefitLimit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanCoverageBenefitLimit>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Specific benefits under this type of coverage.
 */
export declare class InsurancePlanCoverageBenefit extends fhir.BackboneElement implements IInsurancePlanCoverageBenefit {
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
    _requirement?: fhir.FhirElement | undefined;
    /**
     * The specific limits on the benefit.
     */
    limit?: fhir.InsurancePlanCoverageBenefitLimit[] | undefined;
    /**
     * Default constructor for InsurancePlanCoverageBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanCoverageBenefit>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Details about the coverage offered by the insurance product.
 */
export declare class InsurancePlanCoverage extends fhir.BackboneElement implements IInsurancePlanCoverage {
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
    /**
     * Default constructor for InsurancePlanCoverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanCoverage>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Overall costs associated with the plan.
 */
export declare class InsurancePlanPlanGeneralCost extends fhir.BackboneElement implements IInsurancePlanPlanGeneralCost {
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
    _groupSize?: fhir.FhirElement | undefined;
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
    _comment?: fhir.FhirElement | undefined;
    /**
     * Default constructor for InsurancePlanPlanGeneralCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanPlanGeneralCost>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * List of the costs associated with a specific benefit.
 */
export declare class InsurancePlanPlanSpecificCostBenefitCost extends fhir.BackboneElement implements IInsurancePlanPlanSpecificCostBenefitCost {
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
    /**
     * Default constructor for InsurancePlanPlanSpecificCostBenefitCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanPlanSpecificCostBenefitCost>);
    /**
     * Required-bound Value Set for applicability
     */
    static applicabilityRequiredValueSet(): InsuranceplanApplicabilityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * List of the specific benefits under this category of benefit.
 */
export declare class InsurancePlanPlanSpecificCostBenefit extends fhir.BackboneElement implements IInsurancePlanPlanSpecificCostBenefit {
    /**
     * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
     */
    type: fhir.CodeableConcept | null;
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: fhir.InsurancePlanPlanSpecificCostBenefitCost[] | undefined;
    /**
     * Default constructor for InsurancePlanPlanSpecificCostBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanPlanSpecificCostBenefit>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Costs associated with the coverage provided by the product.
 */
export declare class InsurancePlanPlanSpecificCost extends fhir.BackboneElement implements IInsurancePlanPlanSpecificCost {
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
     */
    category: fhir.CodeableConcept | null;
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: fhir.InsurancePlanPlanSpecificCostBenefit[] | undefined;
    /**
     * Default constructor for InsurancePlanPlanSpecificCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanPlanSpecificCost>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Details about an insurance plan.
 */
export declare class InsurancePlanPlan extends fhir.BackboneElement implements IInsurancePlanPlan {
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
    /**
     * Default constructor for InsurancePlanPlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlanPlan>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export declare class InsurancePlan extends fhir.DomainResource implements IInsurancePlan {
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
    status?: PublicationStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.status
     */
    _status?: fhir.FhirElement | undefined;
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
    _name?: fhir.FhirElement | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: string[] | undefined;
    /**
     * Extended properties for primitive element: InsurancePlan.alias
     */
    _alias?: fhir.FhirElement[] | undefined;
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
    /**
     * Default constructor for InsurancePlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInsurancePlan>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): InsuranceplanTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=InsurancePlan.d.ts.map