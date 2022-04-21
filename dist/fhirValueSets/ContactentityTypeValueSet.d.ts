import { Coding } from '../fhir.js';
/**
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 */
export declare const ContactentityTypeValueSet: {
    /**
     * ADMIN: Contact details for administrative enquiries.
     */
    readonly Administrative: Coding;
    /**
     * BILL: Contact details for information regarding to billing/general finance enquiries.
     */
    readonly Billing: Coding;
    /**
     * HR: Contact details for issues related to Human Resources, such as staff matters, OH&amp;S etc.
     */
    readonly HumanResource: Coding;
    /**
     * PATINF: Generic information contact for patients.
     */
    readonly Patient: Coding;
    /**
     * PAYOR: Contact details for dealing with issues related to insurance claims/adjudication/payment.
     */
    readonly Payor: Coding;
    /**
     * PRESS: Dedicated contact point for matters relating to press enquiries.
     */
    readonly Press: Coding;
};
/**
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 */
export declare type ContactentityTypeValueSetType = typeof ContactentityTypeValueSet;
/**
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 */
export declare enum ContactentityTypeValueSetEnum {
    /**
     * ADMIN: Contact details for administrative enquiries.
     */
    Administrative = "ADMIN",
    /**
     * BILL: Contact details for information regarding to billing/general finance enquiries.
     */
    Billing = "BILL",
    /**
     * HR: Contact details for issues related to Human Resources, such as staff matters, OH&amp;S etc.
     */
    HumanResource = "HR",
    /**
     * PATINF: Generic information contact for patients.
     */
    Patient = "PATINF",
    /**
     * PAYOR: Contact details for dealing with issues related to insurance claims/adjudication/payment.
     */
    Payor = "PAYOR",
    /**
     * PRESS: Dedicated contact point for matters relating to press enquiries.
     */
    Press = "PRESS"
}
//# sourceMappingURL=ContactentityTypeValueSet.d.ts.map