import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
export declare class AccountCoverage extends fhirModels.BackboneElement implements fhirInterfaces.IAccountCoverage {
    /**
     * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
     * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
     */
    coverage?: fhirModels.Reference | undefined;
    /**
     * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
     */
    priority?: number | undefined;
    _priority?: fhirModels.Element | undefined;
    /**
     * Default constructor for AccountCoverage from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IAccountCoverage>);
    /**
     * Factory function to create a AccountCoverage from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IAccountCoverage): AccountCoverage;
    /**
     * Check if the current AccountCoverage contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
export declare class AccountGuarantor extends fhirModels.BackboneElement implements fhirInterfaces.IAccountGuarantor {
    /**
     * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
     */
    onHold?: boolean | undefined;
    _onHold?: fhirModels.Element | undefined;
    /**
     * The entity who is responsible.
     */
    party?: fhirModels.Reference | undefined;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Default constructor for AccountGuarantor from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IAccountGuarantor>);
    /**
     * Factory function to create a AccountGuarantor from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IAccountGuarantor): AccountGuarantor;
    /**
     * Check if the current AccountGuarantor contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export declare class Account extends fhirModels.DomainResource implements fhirInterfaces.IAccount {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Account";
    /**
     * Typically. this may be some form of insurance, internal charges, or self-pay.
     * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
     * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
     */
    coverage?: fhirModels.AccountCoverage[] | undefined;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The parties responsible for balancing the account if other payment options fall short.
     */
    guarantor?: fhirModels.AccountGuarantor[] | undefined;
    /**
     * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
     */
    owner?: fhirModels.Reference | undefined;
    /**
     * Reference to a parent Account.
     */
    partOf?: fhirModels.Reference | undefined;
    /**
     * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
     */
    servicePeriod?: fhirModels.Period | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
     */
    status?: AccountStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
     */
    subject?: fhirModels.Reference[] | undefined;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for Account from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IAccount>);
    /**
     * Factory function to create a Account from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IAccount): Account;
    /**
     * Check if the current Account contains all required elements.
     */
    checkRequiredElements(): string[];
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