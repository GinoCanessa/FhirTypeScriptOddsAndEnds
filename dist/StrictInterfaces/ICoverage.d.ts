import * as fhirInterfaces from '../strictinterfaces';
/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export interface ICoverageClass extends fhirInterfaces.IBackboneElement {
    /**
     * A short description for the class.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: fhirInterfaces.ICodeableConcept;
    /**
     * For example, the Group or Plan number.
     */
    value: string;
    _value?: fhirInterfaces.IElement | undefined;
}
/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export interface ICoverageCostToBeneficiaryException extends fhirInterfaces.IBackboneElement {
    /**
     * The timeframe during when the exception is in force.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * The code for the specific exception.
     */
    type: fhirInterfaces.ICodeableConcept;
}
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export interface ICoverageCostToBeneficiary extends fhirInterfaces.IBackboneElement {
    /**
     * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception?: fhirInterfaces.ICoverageCostToBeneficiaryException[] | undefined;
    /**
     * For example visit, specialist visits, emergency, inpatient care, etc.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueMoney?: fhirInterfaces.IMoney | undefined;
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export interface ICoverage extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Coverage";
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficiary: fhirInterfaces.IReference;
    /**
     * For example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    class?: fhirInterfaces.ICoverageClass[] | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: fhirInterfaces.IReference[] | undefined;
    /**
     * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
     */
    costToBeneficiary?: fhirInterfaces.ICoverageCostToBeneficiary[] | undefined;
    /**
     * Periodically the member number is constructed from the subscriberId and the dependant number.
     */
    dependent?: string | undefined;
    _dependent?: fhirInterfaces.IElement | undefined;
    /**
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: string | undefined;
    _network?: fhirInterfaces.IElement | undefined;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: number | undefined;
    _order?: fhirInterfaces.IElement | undefined;
    /**
     * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     * For selfpay it may provide multiple paying persons and/or organizations.
     */
    payor: fhirInterfaces.IReference[];
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * For example: may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhirInterfaces.IReference | undefined;
    /**
     * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
     */
    relationship?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status: CoverageStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
     */
    subrogation?: boolean | undefined;
    _subrogation?: fhirInterfaces.IElement | undefined;
    /**
     * May be self or a parent in the case of dependants.
     */
    subscriber?: fhirInterfaces.IReference | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: string | undefined;
    _subscriberId?: fhirInterfaces.IElement | undefined;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the Coverage.status field
 */
export declare enum CoverageStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ICoverage.d.ts.map