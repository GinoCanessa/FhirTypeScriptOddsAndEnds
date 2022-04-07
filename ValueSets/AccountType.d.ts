import { Coding } from '../strictmodels';
/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export declare const AccountType: {
    /**
     * An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
     */
    v3_ActCode_ActAccountCode: Coding;
    /**
     * An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
     */
    v3_ActCode_AccountReceivable: Coding;
    /**
     * American Express
     */
    v3_ActCode_AmericanExpress: Coding;
    /**
     * Cash
     */
    v3_ActCode_Cash: Coding;
    /**
     * Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
     */
    v3_ActCode_CreditCard: Coding;
    /**
     * Diner's Club
     */
    v3_ActCode_DinerQuoteSClub: Coding;
    /**
     * Discover Card
     */
    v3_ActCode_DiscoverCard: Coding;
    /**
     * Master Card
     */
    v3_ActCode_MasterCard: Coding;
    /**
     * An account representing charges and credits (financial transactions) for a patient's encounter.
     */
    v3_ActCode_PatientBillingAccount: Coding;
    /**
     * Visa
     */
    v3_ActCode_Visa: Coding;
};
//# sourceMappingURL=AccountType.d.ts.map