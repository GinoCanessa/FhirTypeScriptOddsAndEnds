import { Coding } from '../fhir.js';
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export declare const AdjudicationValueSet: {
    /**
     * benefit: Amount payable under the coverage
     */
    readonly BenefitAmount: Coding;
    /**
     * copay: Patient Co-Payment
     */
    readonly CoPay: Coding;
    /**
     * deductible: Amount deducted from the eligible amount prior to adjudication.
     */
    readonly Deductible: Coding;
    /**
     * eligible: Amount of the change which is considered for adjudication.
     */
    readonly EligibleAmount: Coding;
    /**
     * eligpercent: Eligible Percentage.
     */
    readonly EligiblePercent: Coding;
    /**
     * submitted: The total submitted amount for the claim or group or line item.
     */
    readonly SubmittedAmount: Coding;
    /**
     * tax: The amount of tax.
     */
    readonly Tax: Coding;
    /**
     * unallocdeduct: The amount of deductible which could not allocated to other line items.
     */
    readonly UnallocatedDeductible: Coding;
};
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export declare type AdjudicationValueSetType = typeof AdjudicationValueSet;
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export declare enum AdjudicationValueSetEnum {
    /**
     * benefit: Amount payable under the coverage
     */
    BenefitAmount = "benefit",
    /**
     * copay: Patient Co-Payment
     */
    CoPay = "copay",
    /**
     * deductible: Amount deducted from the eligible amount prior to adjudication.
     */
    Deductible = "deductible",
    /**
     * eligible: Amount of the change which is considered for adjudication.
     */
    EligibleAmount = "eligible",
    /**
     * eligpercent: Eligible Percentage.
     */
    EligiblePercent = "eligpercent",
    /**
     * submitted: The total submitted amount for the claim or group or line item.
     */
    SubmittedAmount = "submitted",
    /**
     * tax: The amount of tax.
     */
    Tax = "tax",
    /**
     * unallocdeduct: The amount of deductible which could not allocated to other line items.
     */
    UnallocatedDeductible = "unallocdeduct"
}
//# sourceMappingURL=AdjudicationValueSet.d.ts.map