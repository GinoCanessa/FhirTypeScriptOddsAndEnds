import * as fhir from '../fhir';
/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
export declare type IAccountCoverage = fhir.IBackboneElement & {
    /**
     * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
     * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
     */
    coverage: fhir.IReference | null;
    /**
     * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
     */
    priority?: number | undefined;
    _priority?: fhir.IFhirElement | undefined;
};
/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
export declare type IAccountGuarantor = fhir.IBackboneElement & {
    /**
     * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
     */
    onHold?: boolean | undefined;
    _onHold?: fhir.IFhirElement | undefined;
    /**
     * The entity who is responsible.
     */
    party: fhir.IReference | null;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export declare type IAccount = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Account";
    /**
     * Typically. this may be some form of insurance, internal charges, or self-pay.
     * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
     * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
     */
    coverage?: fhir.IAccountCoverage[] | undefined;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The parties responsible for balancing the account if other payment options fall short.
     */
    guarantor?: fhir.IAccountGuarantor[] | undefined;
    /**
     * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
     */
    owner?: fhir.IReference | undefined;
    /**
     * Reference to a parent Account.
     */
    partOf?: fhir.IReference | undefined;
    /**
     * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
     */
    servicePeriod?: fhir.IPeriod | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
     */
    status: AccountStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
     */
    subject?: fhir.IReference[] | undefined;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
export declare class AccountCoverage extends fhir.BackboneElement implements fhir.IAccountCoverage {
    /**
     * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
     * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
     */
    coverage: fhir.Reference | null;
    /**
     * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
     */
    priority?: number | undefined;
    _priority?: fhir.FhirElement | undefined;
    /**
     * Default constructor for AccountCoverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IAccountCoverage>);
    /**
     * Check if the current AccountCoverage contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a AccountCoverage from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IAccountCoverage): AccountCoverage;
}
/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
export declare class AccountGuarantor extends fhir.BackboneElement implements fhir.IAccountGuarantor {
    /**
     * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
     */
    onHold?: boolean | undefined;
    _onHold?: fhir.FhirElement | undefined;
    /**
     * The entity who is responsible.
     */
    party: fhir.Reference | null;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for AccountGuarantor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IAccountGuarantor>);
    /**
     * Check if the current AccountGuarantor contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a AccountGuarantor from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IAccountGuarantor): AccountGuarantor;
}
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export declare class Account extends fhir.DomainResource implements fhir.IAccount {
    /**
     * Resource Type Name
     */
    resourceType: "Account";
    /**
     * Typically. this may be some form of insurance, internal charges, or self-pay.
     * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
     * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
     */
    coverage?: fhir.AccountCoverage[] | undefined;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The parties responsible for balancing the account if other payment options fall short.
     */
    guarantor?: fhir.AccountGuarantor[] | undefined;
    /**
     * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
     */
    owner?: fhir.Reference | undefined;
    /**
     * Reference to a parent Account.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
     */
    servicePeriod?: fhir.Period | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
     */
    status: AccountStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Account - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IAccount>);
    /**
     * Check if the current Account contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Account from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IAccount): Account;
}
/**
 * Code Values for the Account.status field
 */
export declare enum AccountStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    ENTERED_IN_ERROR = "entered-in-error",
    ON_HOLD = "on-hold",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Account.d.ts.map