// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/account-type|4.0.1
/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export var AccountTypeValueSetEnum;
(function (AccountTypeValueSetEnum) {
    /**
     * _ActAccountCode: An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
     */
    AccountTypeValueSetEnum["ActAccountCode"] = "_ActAccountCode";
    /**
     * ACCTRECEIVABLE: An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
     */
    AccountTypeValueSetEnum["AccountReceivable"] = "ACCTRECEIVABLE";
    /**
     * AE: American Express
     */
    AccountTypeValueSetEnum["AmericanExpress"] = "AE";
    /**
     * CASH: Cash
     */
    AccountTypeValueSetEnum["Cash"] = "CASH";
    /**
     * CC: Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
     */
    AccountTypeValueSetEnum["CreditCard"] = "CC";
    /**
     * DN: Diner's Club
     */
    AccountTypeValueSetEnum["DinerQuoteSClub"] = "DN";
    /**
     * DV: Discover Card
     */
    AccountTypeValueSetEnum["DiscoverCard"] = "DV";
    /**
     * MC: Master Card
     */
    AccountTypeValueSetEnum["MasterCard"] = "MC";
    /**
     * PBILLACCT: An account representing charges and credits (financial transactions) for a patient's encounter.
     */
    AccountTypeValueSetEnum["PatientBillingAccount"] = "PBILLACCT";
    /**
     * V: Visa
     */
    AccountTypeValueSetEnum["Visa"] = "V";
})(AccountTypeValueSetEnum || (AccountTypeValueSetEnum = {}));
//# sourceMappingURL=AccountTypeValueSetEnum.js.map