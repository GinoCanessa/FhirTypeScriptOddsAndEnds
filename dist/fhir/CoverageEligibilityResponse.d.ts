import * as fhir from '../fhir.js';
import { BenefitTypeValueSetType } from '../fhirValueSets/BenefitTypeValueSet.js';
import { ExBenefitcategoryValueSetType } from '../fhirValueSets/ExBenefitcategoryValueSet.js';
import { ServiceUsclsValueSetType } from '../fhirValueSets/ServiceUsclsValueSet.js';
import { ClaimModifiersValueSetType } from '../fhirValueSets/ClaimModifiersValueSet.js';
import { BenefitNetworkValueSetType } from '../fhirValueSets/BenefitNetworkValueSet.js';
import { BenefitUnitValueSetType } from '../fhirValueSets/BenefitUnitValueSet.js';
import { BenefitTermValueSetType } from '../fhirValueSets/BenefitTermValueSet.js';
import { CoverageeligibilityresponseExAuthSupportValueSetType } from '../fhirValueSets/CoverageeligibilityresponseExAuthSupportValueSet.js';
import { AdjudicationErrorValueSetType } from '../fhirValueSets/AdjudicationErrorValueSet.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
import { EligibilityresponsePurposeValueSetType, EligibilityresponsePurposeValueSetEnum } from '../fhirValueSets/EligibilityresponsePurposeValueSet.js';
import { RemittanceOutcomeValueSetType, RemittanceOutcomeValueSetEnum } from '../fhirValueSets/RemittanceOutcomeValueSet.js';
import { FormsValueSetType } from '../fhirValueSets/FormsValueSet.js';
/**
 * Benefits used to date.
 */
export declare type ICoverageEligibilityResponseInsuranceItemBenefit = fhir.IBackboneElement & {
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
     */
    _allowedUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
     */
    _allowedString?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.IMoney | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.used[x]
     */
    _usedUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedString?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.used[x]
     */
    _usedString?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.IMoney | undefined;
};
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export declare type ICoverageEligibilityResponseInsuranceItem = fhir.IBackboneElement & {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhir.ICodeableConcept | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: fhir.IReference | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.excluded
     */
    _excluded?: fhir.IFhirElement | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.ICodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.ICodeableConcept | undefined;
    /**
     * Benefits used to date.
     */
    benefit?: fhir.ICoverageEligibilityResponseInsuranceItemBenefit[] | undefined;
    /**
     * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
     */
    authorizationRequired?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.authorizationRequired
     */
    _authorizationRequired?: fhir.IFhirElement | undefined;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: fhir.ICodeableConcept[] | undefined;
    /**
     * A web location for obtaining requirements or descriptive information regarding the preauthorization.
     */
    authorizationUrl?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.authorizationUrl
     */
    _authorizationUrl?: fhir.IFhirElement | undefined;
};
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare type ICoverageEligibilityResponseInsurance = fhir.IBackboneElement & {
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.IReference | null;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.inforce
     */
    _inforce?: fhir.IFhirElement | undefined;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: fhir.IPeriod | undefined;
    /**
     * Benefits and optionally current balances, and authorization details by category or service.
     */
    item?: fhir.ICoverageEligibilityResponseInsuranceItem[] | undefined;
};
/**
 * Errors encountered during the processing of the request.
 */
export declare type ICoverageEligibilityResponseError = fhir.IBackboneElement & {
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.ICodeableConcept | null;
};
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export declare type ICoverageEligibilityResponse = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityResponse";
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: EligibilityresponsePurposeValueSetEnum[] | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.purpose
     */
    _purpose?: fhir.IFhirElement[] | undefined;
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
     */
    patient: fhir.IReference | null;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.serviced[x]
     */
    _servicedDate?: fhir.IFhirElement | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.IPeriod | undefined;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.IReference | undefined;
    /**
     * Reference to the original request resource.
     */
    request: fhir.IReference | null;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: RemittanceOutcomeValueSetEnum | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.outcome
     */
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.disposition
     */
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer: fhir.IReference | null;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.ICoverageEligibilityResponseInsurance[] | undefined;
    /**
     * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
     */
    preAuthRef?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.preAuthRef
     */
    _preAuthRef?: fhir.IFhirElement | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    form?: fhir.ICodeableConcept | undefined;
    /**
     * Errors encountered during the processing of the request.
     */
    error?: fhir.ICoverageEligibilityResponseError[] | undefined;
};
/**
 * Benefits used to date.
 */
export declare class CoverageEligibilityResponseInsuranceItemBenefit extends fhir.BackboneElement implements ICoverageEligibilityResponseInsuranceItemBenefit {
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
     */
    _allowedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
     */
    _allowedString?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.Money | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.used[x]
     */
    _usedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedString?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.benefit.used[x]
     */
    _usedString?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.Money | undefined;
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityResponseInsuranceItemBenefit>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): BenefitTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export declare class CoverageEligibilityResponseInsuranceItem extends fhir.BackboneElement implements ICoverageEligibilityResponseInsuranceItem {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhir.CodeableConcept | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: fhir.Reference | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.excluded
     */
    _excluded?: fhir.FhirElement | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.CodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.CodeableConcept | undefined;
    /**
     * Benefits used to date.
     */
    benefit?: fhir.CoverageEligibilityResponseInsuranceItemBenefit[] | undefined;
    /**
     * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
     */
    authorizationRequired?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.authorizationRequired
     */
    _authorizationRequired?: fhir.FhirElement | undefined;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: fhir.CodeableConcept[] | undefined;
    /**
     * A web location for obtaining requirements or descriptive information regarding the preauthorization.
     */
    authorizationUrl?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.item.authorizationUrl
     */
    _authorizationUrl?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityResponseInsuranceItem>);
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): ExBenefitcategoryValueSetType;
    /**
     * Example-bound Value Set for productOrService
     */
    static productOrServiceExampleValueSet(): ServiceUsclsValueSetType;
    /**
     * Example-bound Value Set for modifier
     */
    static modifierExampleValueSet(): ClaimModifiersValueSetType;
    /**
     * Example-bound Value Set for network
     */
    static networkExampleValueSet(): BenefitNetworkValueSetType;
    /**
     * Example-bound Value Set for unit
     */
    static unitExampleValueSet(): BenefitUnitValueSetType;
    /**
     * Example-bound Value Set for term
     */
    static termExampleValueSet(): BenefitTermValueSetType;
    /**
     * Example-bound Value Set for authorizationSupporting
     */
    static authorizationSupportingExampleValueSet(): CoverageeligibilityresponseExAuthSupportValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class CoverageEligibilityResponseInsurance extends fhir.BackboneElement implements ICoverageEligibilityResponseInsurance {
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.insurance.inforce
     */
    _inforce?: fhir.FhirElement | undefined;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: fhir.Period | undefined;
    /**
     * Benefits and optionally current balances, and authorization details by category or service.
     */
    item?: fhir.CoverageEligibilityResponseInsuranceItem[] | undefined;
    /**
     * Default constructor for CoverageEligibilityResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityResponseInsurance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Errors encountered during the processing of the request.
 */
export declare class CoverageEligibilityResponseError extends fhir.BackboneElement implements ICoverageEligibilityResponseError {
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Default constructor for CoverageEligibilityResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityResponseError>);
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): AdjudicationErrorValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export declare class CoverageEligibilityResponse extends fhir.DomainResource implements ICoverageEligibilityResponse {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityResponse";
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: EligibilityresponsePurposeValueSetEnum[] | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.purpose
     */
    _purpose?: fhir.FhirElement[] | undefined;
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
     */
    patient: fhir.Reference | null;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.serviced[x]
     */
    _servicedDate?: fhir.FhirElement | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * Reference to the original request resource.
     */
    request: fhir.Reference | null;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: RemittanceOutcomeValueSetEnum | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.outcome
     */
    _outcome?: fhir.FhirElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.disposition
     */
    _disposition?: fhir.FhirElement | undefined;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer: fhir.Reference | null;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.CoverageEligibilityResponseInsurance[] | undefined;
    /**
     * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
     */
    preAuthRef?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityResponse.preAuthRef
     */
    _preAuthRef?: fhir.FhirElement | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Errors encountered during the processing of the request.
     */
    error?: fhir.CoverageEligibilityResponseError[] | undefined;
    /**
     * Default constructor for CoverageEligibilityResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityResponse>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Required-bound Value Set for purpose
     */
    static purposeRequiredValueSet(): EligibilityresponsePurposeValueSetType;
    /**
     * Required-bound Value Set for outcome
     */
    static outcomeRequiredValueSet(): RemittanceOutcomeValueSetType;
    /**
     * Example-bound Value Set for form
     */
    static formExampleValueSet(): FormsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=CoverageEligibilityResponse.d.ts.map