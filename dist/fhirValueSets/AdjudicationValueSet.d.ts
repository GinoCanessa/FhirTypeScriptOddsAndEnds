import { Coding } from '../fhir';
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
export declare const AdjudicationValueSet: {
    /**
     * Amount payable under the coverage
     */
    adjudication_BenefitAmount: Coding;
    /**
     * Patient Co-Payment
     */
    adjudication_CoPay: Coding;
    /**
     * Amount deducted from the eligible amount prior to adjudication.
     */
    adjudication_Deductible: Coding;
    /**
     * Amount of the change which is considered for adjudication.
     */
    adjudication_EligibleAmount: Coding;
    /**
     * Eligible Percentage.
     */
    adjudication_EligiblePercent: Coding;
    /**
     * The total submitted amount for the claim or group or line item.
     */
    adjudication_SubmittedAmount: Coding;
    /**
     * The amount of tax.
     */
    adjudication_Tax: Coding;
    /**
     * The amount of deductible which could not allocated to other line items.
     */
    adjudication_UnallocatedDeductible: Coding;
};
//# sourceMappingURL=AdjudicationValueSet.d.ts.map