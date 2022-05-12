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
//# sourceMappingURL=AdjudicationValueSetEnum.d.ts.map