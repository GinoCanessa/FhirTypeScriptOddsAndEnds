import * as fhirInterfaces from '../strictinterfaces';
/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
export interface IAccountCoverage extends fhirInterfaces.IBackboneElement {
    /**
     * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
     * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
     */
    coverage: fhirInterfaces.IReference;
    /**
     * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
     */
    priority?: number | undefined;
    _priority?: fhirInterfaces.IElement | undefined;
}
/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
export interface IAccountGuarantor extends fhirInterfaces.IBackboneElement {
    /**
     * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
     */
    onHold?: boolean | undefined;
    _onHold?: fhirInterfaces.IElement | undefined;
    /**
     * The entity who is responsible.
     */
    party: fhirInterfaces.IReference;
    /**
     * The timeframe during which the guarantor accepts responsibility for the account.
     */
    period?: fhirInterfaces.IPeriod | undefined;
}
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export interface IAccount extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Account";
    /**
     * Typically. this may be some form of insurance, internal charges, or self-pay.
     * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
     * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
     */
    coverage?: fhirInterfaces.IAccountCoverage[] | undefined;
    /**
     * Provides additional information about what the account tracks and how it is used.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The parties responsible for balancing the account if other payment options fall short.
     */
    guarantor?: fhirInterfaces.IAccountGuarantor[] | undefined;
    /**
     * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Name used for the account when displaying it to humans in reports, etc.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
     */
    owner?: fhirInterfaces.IReference | undefined;
    /**
     * Reference to a parent Account.
     */
    partOf?: fhirInterfaces.IReference | undefined;
    /**
     * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
     */
    servicePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
     */
    status: AccountStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
     */
    subject?: fhirInterfaces.IReference[] | undefined;
    /**
     * Categorizes the account for reporting and searching purposes.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
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
//# sourceMappingURL=IAccount.d.ts.map