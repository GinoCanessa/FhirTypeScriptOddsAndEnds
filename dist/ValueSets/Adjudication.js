"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adjudication = void 0;
/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 */
exports.Adjudication = {
    /**
     * Amount payable under the coverage
     */
    adjudication_BenefitAmount: {
        code: "benefit",
        display: "Benefit Amount",
        system: "http://terminology.hl7.org/CodeSystem/adjudication"
    },
    /**
     * Patient Co-Payment
     */
    adjudication_CoPay: {
        code: "copay",
        display: "CoPay",
        system: "http://terminology.hl7.org/CodeSystem/adjudication"
    },
    /**
     * Amount deducted from the eligible amount prior to adjudication.
     */
    adjudication_Deductible: {
        code: "deductible",
        display: "Deductible",
        system: "http://terminology.hl7.org/CodeSystem/adjudication"
    },
    /**
     * Amount of the change which is considered for adjudication.
     */
    adjudication_EligibleAmount: {
        code: "eligible",
        display: "Eligible Amount",
        system: "http://terminology.hl7.org/CodeSystem/adjudication"
    },
    /**
     * Eligible Percentage.
     */
    adjudication_EligiblePercent: {
        code: "eligpercent",
        display: "Eligible %",
        system: "http://terminology.hl7.org/CodeSystem/adjudication"
    },
    /**
     * The total submitted amount for the claim or group or line item.
     */
    adjudication_SubmittedAmount: {
        code: "submitted",
        display: "Submitted Amount",
        system: "http://terminology.hl7.org/CodeSystem/adjudication"
    },
    /**
     * The amount of tax.
     */
    adjudication_Tax: {
        code: "tax",
        display: "Tax",
        system: "http://terminology.hl7.org/CodeSystem/adjudication"
    },
    /**
     * The amount of deductible which could not allocated to other line items.
     */
    adjudication_UnallocatedDeductible: {
        code: "unallocdeduct",
        display: "Unallocated Deductible",
        system: "http://terminology.hl7.org/CodeSystem/adjudication"
    },
};
//# sourceMappingURL=Adjudication.js.map