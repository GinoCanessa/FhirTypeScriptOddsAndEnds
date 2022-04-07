/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export var AccountType = {
    /**
     * An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
     */
    v3_ActCode_ActAccountCode: {
        code: "_ActAccountCode",
        display: "ActAccountCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
     */
    v3_ActCode_AccountReceivable: {
        code: "ACCTRECEIVABLE",
        display: "account receivable",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * American Express
     */
    v3_ActCode_AmericanExpress: {
        code: "AE",
        display: "American Express",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Cash
     */
    v3_ActCode_Cash: {
        code: "CASH",
        display: "Cash",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
     */
    v3_ActCode_CreditCard: {
        code: "CC",
        display: "credit card",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Diner's Club
     */
    v3_ActCode_DinerQuoteSClub: {
        code: "DN",
        display: "Diner's Club",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Discover Card
     */
    v3_ActCode_DiscoverCard: {
        code: "DV",
        display: "Discover Card",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Master Card
     */
    v3_ActCode_MasterCard: {
        code: "MC",
        display: "Master Card",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * An account representing charges and credits (financial transactions) for a patient's encounter.
     */
    v3_ActCode_PatientBillingAccount: {
        code: "PBILLACCT",
        display: "patient billing account",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Visa
     */
    v3_ActCode_Visa: {
        code: "V",
        display: "Visa",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    }
};
