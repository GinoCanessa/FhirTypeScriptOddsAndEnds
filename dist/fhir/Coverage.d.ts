import * as fhir from '../fhir';
/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export declare type ICoverageClass = fhir.IBackboneElement & {
    /**
     * A short description for the class.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * For example, the Group or Plan number.
     */
    value: string | null;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export declare type ICoverageCostToBeneficiaryException = fhir.IBackboneElement & {
    /**
     * The timeframe during when the exception is in force.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * The code for the specific exception.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export declare type ICoverageCostToBeneficiary = fhir.IBackboneElement & {
    /**
     * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception?: fhir.ICoverageCostToBeneficiaryException[] | undefined;
    /**
     * For example visit, specialist visits, emergency, inpatient care, etc.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueMoney?: fhir.IMoney | undefined;
};
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export declare type ICoverage = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Coverage";
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficiary: fhir.IReference | null;
    /**
     * For example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    class?: fhir.ICoverageClass[] | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: fhir.IReference[] | undefined;
    /**
     * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
     */
    costToBeneficiary?: fhir.ICoverageCostToBeneficiary[] | undefined;
    /**
     * Periodically the member number is constructed from the subscriberId and the dependant number.
     */
    dependent?: string | undefined;
    _dependent?: fhir.IFhirElement | undefined;
    /**
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: string | undefined;
    _network?: fhir.IFhirElement | undefined;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: number | undefined;
    _order?: fhir.IFhirElement | undefined;
    /**
     * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     * For selfpay it may provide multiple paying persons and/or organizations.
     */
    payor: fhir.IReference[] | null;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * For example: may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.IReference | undefined;
    /**
     * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
     */
    relationship?: fhir.ICodeableConcept | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status: CoverageStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
     */
    subrogation?: boolean | undefined;
    _subrogation?: fhir.IFhirElement | undefined;
    /**
     * May be self or a parent in the case of dependants.
     */
    subscriber?: fhir.IReference | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: string | undefined;
    _subscriberId?: fhir.IFhirElement | undefined;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export declare class CoverageClass extends fhir.BackboneElement implements fhir.ICoverageClass {
    /**
     * A short description for the class.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: fhir.CodeableConcept | null;
    /**
     * For example, the Group or Plan number.
     */
    value: string | null;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CoverageClass - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageClass>);
    /**
     * Check if the current CoverageClass contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CoverageClass from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverageClass): CoverageClass;
}
/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export declare class CoverageCostToBeneficiaryException extends fhir.BackboneElement implements fhir.ICoverageCostToBeneficiaryException {
    /**
     * The timeframe during when the exception is in force.
     */
    period?: fhir.Period | undefined;
    /**
     * The code for the specific exception.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for CoverageCostToBeneficiaryException - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageCostToBeneficiaryException>);
    /**
     * Check if the current CoverageCostToBeneficiaryException contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CoverageCostToBeneficiaryException from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverageCostToBeneficiaryException): CoverageCostToBeneficiaryException;
}
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export declare class CoverageCostToBeneficiary extends fhir.BackboneElement implements fhir.ICoverageCostToBeneficiary {
    /**
     * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception?: fhir.CoverageCostToBeneficiaryException[] | undefined;
    /**
     * For example visit, specialist visits, emergency, inpatient care, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * Default constructor for CoverageCostToBeneficiary - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageCostToBeneficiary>);
    /**
     * Check if the current CoverageCostToBeneficiary contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CoverageCostToBeneficiary from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverageCostToBeneficiary): CoverageCostToBeneficiary;
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export declare class Coverage extends fhir.DomainResource implements fhir.ICoverage {
    /**
     * Resource Type Name
     */
    resourceType: "Coverage";
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficiary: fhir.Reference | null;
    /**
     * For example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    class?: fhir.CoverageClass[] | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: fhir.Reference[] | undefined;
    /**
     * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
     */
    costToBeneficiary?: fhir.CoverageCostToBeneficiary[] | undefined;
    /**
     * Periodically the member number is constructed from the subscriberId and the dependant number.
     */
    dependent?: string | undefined;
    _dependent?: fhir.FhirElement | undefined;
    /**
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: string | undefined;
    _network?: fhir.FhirElement | undefined;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: number | undefined;
    _order?: fhir.FhirElement | undefined;
    /**
     * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     * For selfpay it may provide multiple paying persons and/or organizations.
     */
    payor: fhir.Reference[] | null;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.Period | undefined;
    /**
     * For example: may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.Reference | undefined;
    /**
     * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status: CoverageStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
     */
    subrogation?: boolean | undefined;
    _subrogation?: fhir.FhirElement | undefined;
    /**
     * May be self or a parent in the case of dependants.
     */
    subscriber?: fhir.Reference | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: string | undefined;
    _subscriberId?: fhir.FhirElement | undefined;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Coverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverage>);
    /**
     * Check if the current Coverage contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Coverage from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverage): Coverage;
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
//# sourceMappingURL=Coverage.d.ts.map