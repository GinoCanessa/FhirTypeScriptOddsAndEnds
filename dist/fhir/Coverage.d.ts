import * as fhir from '../fhir.js';
import { CoverageClassValueSetType } from '../fhirValueSets/CoverageClassValueSet.js';
import { CoverageFinancialExceptionValueSetType } from '../fhirValueSets/CoverageFinancialExceptionValueSet.js';
import { CoverageCopayTypeValueSetType } from '../fhirValueSets/CoverageCopayTypeValueSet.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
import { CoverageTypeValueSetType } from '../fhirValueSets/CoverageTypeValueSet.js';
import { SubscriberRelationshipValueSetType } from '../fhirValueSets/SubscriberRelationshipValueSet.js';
/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export declare type ICoverageClass = fhir.IBackboneElement & {
    /**
     * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * For example, the Group or Plan number.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: Coverage.class.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * A short description for the class.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.class.name
     */
    _name?: fhir.IFhirElement | undefined;
};
/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export declare type ICoverageCostToBeneficiaryException = fhir.IBackboneElement & {
    /**
     * The code for the specific exception.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The timeframe during when the exception is in force.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export declare type ICoverageCostToBeneficiary = fhir.IBackboneElement & {
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
    /**
     * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception?: fhir.ICoverageCostToBeneficiaryException[] | undefined;
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
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Coverage.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * For example: may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.IReference | undefined;
    /**
     * May be self or a parent in the case of dependants.
     */
    subscriber?: fhir.IReference | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.subscriberId
     */
    _subscriberId?: fhir.IFhirElement | undefined;
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficiary: fhir.IReference | null;
    /**
     * Periodically the member number is constructed from the subscriberId and the dependant number.
     */
    dependent?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.dependent
     */
    _dependent?: fhir.IFhirElement | undefined;
    /**
     * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
     */
    relationship?: fhir.ICodeableConcept | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     * For selfpay it may provide multiple paying persons and/or organizations.
     */
    payor: fhir.IReference[] | null;
    /**
     * For example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    class?: fhir.ICoverageClass[] | undefined;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: number | undefined;
    /**
     * Extended properties for primitive element: Coverage.order
     */
    _order?: fhir.IFhirElement | undefined;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.network
     */
    _network?: fhir.IFhirElement | undefined;
    /**
     * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
     */
    costToBeneficiary?: fhir.ICoverageCostToBeneficiary[] | undefined;
    /**
     * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
     */
    subrogation?: boolean | undefined;
    /**
     * Extended properties for primitive element: Coverage.subrogation
     */
    _subrogation?: fhir.IFhirElement | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: fhir.IReference[] | undefined;
};
/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export declare class CoverageClass extends fhir.BackboneElement implements ICoverageClass {
    /**
     * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: fhir.CodeableConcept | null;
    /**
     * For example, the Group or Plan number.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: Coverage.class.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * A short description for the class.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.class.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CoverageClass - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageClass>);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): CoverageClassValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export declare class CoverageCostToBeneficiaryException extends fhir.BackboneElement implements ICoverageCostToBeneficiaryException {
    /**
     * The code for the specific exception.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The timeframe during when the exception is in force.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for CoverageCostToBeneficiaryException - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageCostToBeneficiaryException>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): CoverageFinancialExceptionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export declare class CoverageCostToBeneficiary extends fhir.BackboneElement implements ICoverageCostToBeneficiary {
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
     * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception?: fhir.CoverageCostToBeneficiaryException[] | undefined;
    /**
     * Default constructor for CoverageCostToBeneficiary - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageCostToBeneficiary>);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): CoverageCopayTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export declare class Coverage extends fhir.DomainResource implements ICoverage {
    /**
     * Resource Type Name
     */
    resourceType: "Coverage";
    /**
     * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Coverage.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * For example: may be an individual, corporation or the subscriber's employer.
     */
    policyHolder?: fhir.Reference | undefined;
    /**
     * May be self or a parent in the case of dependants.
     */
    subscriber?: fhir.Reference | undefined;
    /**
     * The insurer assigned ID for the Subscriber.
     */
    subscriberId?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.subscriberId
     */
    _subscriberId?: fhir.FhirElement | undefined;
    /**
     * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
     */
    beneficiary: fhir.Reference | null;
    /**
     * Periodically the member number is constructed from the subscriberId and the dependant number.
     */
    dependent?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.dependent
     */
    _dependent?: fhir.FhirElement | undefined;
    /**
     * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */
    period?: fhir.Period | undefined;
    /**
     * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
     * For selfpay it may provide multiple paying persons and/or organizations.
     */
    payor: fhir.Reference[] | null;
    /**
     * For example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    class?: fhir.CoverageClass[] | undefined;
    /**
     * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
     */
    order?: number | undefined;
    /**
     * Extended properties for primitive element: Coverage.order
     */
    _order?: fhir.FhirElement | undefined;
    /**
     * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
     */
    network?: string | undefined;
    /**
     * Extended properties for primitive element: Coverage.network
     */
    _network?: fhir.FhirElement | undefined;
    /**
     * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
     */
    costToBeneficiary?: fhir.CoverageCostToBeneficiary[] | undefined;
    /**
     * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
     */
    subrogation?: boolean | undefined;
    /**
     * Extended properties for primitive element: Coverage.subrogation
     */
    _subrogation?: fhir.FhirElement | undefined;
    /**
     * The policy(s) which constitute this insurance coverage.
     */
    contract?: fhir.Reference[] | undefined;
    /**
     * Default constructor for Coverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverage>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Preferred-bound Value Set for type
     */
    static typePreferredValueSet(): CoverageTypeValueSetType;
    /**
     * Extensible-bound Value Set for relationship
     */
    static relationshipExtensibleValueSet(): SubscriberRelationshipValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Coverage.d.ts.map