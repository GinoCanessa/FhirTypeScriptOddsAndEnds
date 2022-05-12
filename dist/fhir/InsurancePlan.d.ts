import * as fhir from '../fhir.js';
import { ContactentityTypeValueSetType } from '../fhirValueSets/ContactentityTypeValueSet.js';
import { InsuranceplanApplicabilityValueSetType } from '../fhirValueSets/InsuranceplanApplicabilityValueSet.js';
import { PublicationStatusValueSetType } from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { InsuranceplanTypeValueSetType } from '../fhirValueSets/InsuranceplanTypeValueSet.js';
/**
 * Valid arguments for the InsurancePlanContact type.
 */
export interface InsurancePlanContactArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhir.CodeableConceptArgs | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhir.HumanNameArgs | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhir.AddressArgs | undefined;
}
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export declare class InsurancePlanContact extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<InsurancePlanContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for purpose
     */
    static purposeExtensibleValueSet(): ContactentityTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlanCoverageBenefitLimit type.
 */
export interface InsurancePlanCoverageBenefitLimitArgs extends fhir.BackboneElementArgs {
    /**
     * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
     */
    value?: fhir.QuantityArgs | undefined;
    /**
     * Use `CodeableConcept.text` element if the data is free (uncoded) text.
     */
    code?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The specific limits on the benefit.
 */
export declare class InsurancePlanCoverageBenefitLimit extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<InsurancePlanCoverageBenefitLimitArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlanCoverageBenefit type.
 */
export interface InsurancePlanCoverageBenefitArgs extends fhir.BackboneElementArgs {
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: fhir.FhirString | string | undefined;
    /**
     * The specific limits on the benefit.
     */
    limit?: fhir.InsurancePlanCoverageBenefitLimitArgs[] | undefined;
}
/**
 * Specific benefits under this type of coverage.
 */
export declare class InsurancePlanCoverageBenefit extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Type of benefit (primary care; speciality care; inpatient; outpatient).
     */
    type: fhir.CodeableConcept | null;
    /**
     * The referral requirements to have access/coverage for this benefit.
     */
    requirement?: fhir.FhirString | undefined;
    /**
     * The specific limits on the benefit.
     */
    limit?: fhir.InsurancePlanCoverageBenefitLimit[] | undefined;
    /**
     * Default constructor for InsurancePlanCoverageBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<InsurancePlanCoverageBenefitArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlanCoverage type.
 */
export interface InsurancePlanCoverageArgs extends fhir.BackboneElementArgs {
    /**
     * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.ReferenceArgs[] | undefined;
    /**
     * Specific benefits under this type of coverage.
     */
    benefit: fhir.InsurancePlanCoverageBenefitArgs[] | null;
}
/**
 * Details about the coverage offered by the insurance product.
 */
export declare class InsurancePlanCoverage extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<InsurancePlanCoverageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlanPlanGeneralCost type.
 */
export interface InsurancePlanPlanGeneralCostArgs extends fhir.BackboneElementArgs {
    /**
     * Type of cost.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Value of the cost.
     */
    cost?: fhir.MoneyArgs | undefined;
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: fhir.FhirString | string | undefined;
}
/**
 * Overall costs associated with the plan.
 */
export declare class InsurancePlanPlanGeneralCost extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Type of cost.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Number of participants enrolled in the plan.
     */
    groupSize?: fhir.FhirPositiveInt | undefined;
    /**
     * Value of the cost.
     */
    cost?: fhir.Money | undefined;
    /**
     * Additional information about the general costs associated with this plan.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for InsurancePlanPlanGeneralCost - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<InsurancePlanPlanGeneralCostArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlanPlanSpecificCostBenefitCost type.
 */
export interface InsurancePlanPlanSpecificCostBenefitCostArgs extends fhir.BackboneElementArgs {
    /**
     * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
     */
    applicability?: fhir.CodeableConceptArgs | undefined;
    /**
     * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
     */
    qualifiers?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
     */
    value?: fhir.QuantityArgs | undefined;
}
/**
 * List of the costs associated with a specific benefit.
 */
export declare class InsurancePlanPlanSpecificCostBenefitCost extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<InsurancePlanPlanSpecificCostBenefitCostArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for applicability
     */
    static applicabilityRequiredValueSet(): InsuranceplanApplicabilityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlanPlanSpecificCostBenefit type.
 */
export interface InsurancePlanPlanSpecificCostBenefitArgs extends fhir.BackboneElementArgs {
    /**
     * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * List of the costs associated with a specific benefit.
     */
    cost?: fhir.InsurancePlanPlanSpecificCostBenefitCostArgs[] | undefined;
}
/**
 * List of the specific benefits under this category of benefit.
 */
export declare class InsurancePlanPlanSpecificCostBenefit extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<InsurancePlanPlanSpecificCostBenefitArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlanPlanSpecificCost type.
 */
export interface InsurancePlanPlanSpecificCostArgs extends fhir.BackboneElementArgs {
    /**
     * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
     */
    category: fhir.CodeableConceptArgs | null;
    /**
     * List of the specific benefits under this category of benefit.
     */
    benefit?: fhir.InsurancePlanPlanSpecificCostBenefitArgs[] | undefined;
}
/**
 * Costs associated with the coverage provided by the product.
 */
export declare class InsurancePlanPlanSpecificCost extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<InsurancePlanPlanSpecificCostArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlanPlan type.
 */
export interface InsurancePlanPlanArgs extends fhir.BackboneElementArgs {
    /**
     * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Type of plan. For example, "Platinum" or "High Deductable".
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The geographic region in which a health insurance plan's benefits apply.
     */
    coverageArea?: fhir.ReferenceArgs[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.ReferenceArgs[] | undefined;
    /**
     * Overall costs associated with the plan.
     */
    generalCost?: fhir.InsurancePlanPlanGeneralCostArgs[] | undefined;
    /**
     * Costs associated with the coverage provided by the product.
     */
    specificCost?: fhir.InsurancePlanPlanSpecificCostArgs[] | undefined;
}
/**
 * Details about an insurance plan.
 */
export declare class InsurancePlanPlan extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<InsurancePlanPlanArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the InsurancePlan type.
 */
export interface InsurancePlanArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "InsurancePlan" | undefined;
    /**
     * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The current state of the health insurance product.
     */
    status?: PublicationStatusValueSetEnum | undefined;
    /**
     * The kind of health insurance product.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: fhir.FhirString[] | string[] | undefined;
    /**
     * The period of time that the health insurance product is available.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
     */
    ownedBy?: fhir.ReferenceArgs | undefined;
    /**
     * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
     */
    administeredBy?: fhir.ReferenceArgs | undefined;
    /**
     * The geographic region in which a health insurance product's benefits apply.
     */
    coverageArea?: fhir.ReferenceArgs[] | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhir.InsurancePlanContactArgs[] | undefined;
    /**
     * The technical endpoints providing access to services operated for the health insurance product.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
    /**
     * Networks are represented as a hierarchy of organization resources.
     */
    network?: fhir.ReferenceArgs[] | undefined;
    /**
     * Details about the coverage offered by the insurance product.
     */
    coverage?: fhir.InsurancePlanCoverageArgs[] | undefined;
    /**
     * Details about an insurance plan.
     */
    plan?: fhir.InsurancePlanPlanArgs[] | undefined;
}
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export declare class InsurancePlan extends fhir.DomainResource {
    readonly __dataType: string;
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
     * The kind of health insurance product.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: fhir.FhirString | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
     */
    alias?: fhir.FhirString[] | undefined;
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
    constructor(source?: Partial<InsurancePlanArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=InsurancePlan.d.ts.map