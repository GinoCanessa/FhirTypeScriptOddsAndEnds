import * as fhir from '../fhir';
/**
 * Benefits used to date.
 */
export declare type ICoverageEligibilityResponseInsuranceItemBenefit = fhir.IBackboneElement & {
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    _allowedUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    _allowedString?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.IMoney | undefined;
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    _usedUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedString?: string | undefined;
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
     * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
     */
    authorizationRequired?: boolean | undefined;
    _authorizationRequired?: fhir.IFhirElement | undefined;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: fhir.ICodeableConcept[] | undefined;
    /**
     * A web location for obtaining requirements or descriptive information regarding the preauthorization.
     */
    authorizationUrl?: string | undefined;
    _authorizationUrl?: fhir.IFhirElement | undefined;
    /**
     * Benefits used to date.
     */
    benefit?: fhir.ICoverageEligibilityResponseInsuranceItemBenefit[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    _excluded?: fhir.IFhirElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.ICodeableConcept | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhir.ICodeableConcept | undefined;
    /**
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: fhir.IReference | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.ICodeableConcept | undefined;
};
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare type ICoverageEligibilityResponseInsurance = fhir.IBackboneElement & {
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: fhir.IPeriod | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.IReference | null;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: boolean | undefined;
    _inforce?: fhir.IFhirElement | undefined;
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
     * The date this resource was created.
     */
    created: string | null;
    _created?: fhir.IFhirElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * Errors encountered during the processing of the request.
     */
    error?: fhir.ICoverageEligibilityResponseError[] | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    form?: fhir.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.ICoverageEligibilityResponseInsurance[] | undefined;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer: fhir.IReference | null;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: CoverageEligibilityResponseOutcomeEnum | null;
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
     */
    patient: fhir.IReference | null;
    /**
     * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
     */
    preAuthRef?: string | undefined;
    _preAuthRef?: fhir.IFhirElement | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: CoverageEligibilityResponsePurposeEnum[] | null;
    _purpose?: fhir.IFhirElement[] | undefined;
    /**
     * Reference to the original request resource.
     */
    request: fhir.IReference | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.IReference | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    _servicedDate?: fhir.IFhirElement | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.IPeriod | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: CoverageEligibilityResponseStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * Benefits used to date.
 */
export declare class CoverageEligibilityResponseInsuranceItemBenefit extends fhir.BackboneElement implements fhir.ICoverageEligibilityResponseInsuranceItemBenefit {
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    _allowedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    _allowedString?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.Money | undefined;
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    _usedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedString?: string | undefined;
    _usedString?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.Money | undefined;
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityResponseInsuranceItemBenefit>);
    /**
     * Check if the current CoverageEligibilityResponseInsuranceItemBenefit contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityResponseInsuranceItemBenefit from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICoverageEligibilityResponseInsuranceItemBenefit): CoverageEligibilityResponseInsuranceItemBenefit;
}
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export declare class CoverageEligibilityResponseInsuranceItem extends fhir.BackboneElement implements fhir.ICoverageEligibilityResponseInsuranceItem {
    /**
     * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
     */
    authorizationRequired?: boolean | undefined;
    _authorizationRequired?: fhir.FhirElement | undefined;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: fhir.CodeableConcept[] | undefined;
    /**
     * A web location for obtaining requirements or descriptive information regarding the preauthorization.
     */
    authorizationUrl?: string | undefined;
    _authorizationUrl?: fhir.FhirElement | undefined;
    /**
     * Benefits used to date.
     */
    benefit?: fhir.CoverageEligibilityResponseInsuranceItemBenefit[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    _excluded?: fhir.FhirElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.CodeableConcept | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhir.CodeableConcept | undefined;
    /**
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.CodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityResponseInsuranceItem>);
    /**
     * Check if the current CoverageEligibilityResponseInsuranceItem contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityResponseInsuranceItem from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICoverageEligibilityResponseInsuranceItem): CoverageEligibilityResponseInsuranceItem;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class CoverageEligibilityResponseInsurance extends fhir.BackboneElement implements fhir.ICoverageEligibilityResponseInsurance {
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: fhir.Period | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: boolean | undefined;
    _inforce?: fhir.FhirElement | undefined;
    /**
     * Benefits and optionally current balances, and authorization details by category or service.
     */
    item?: fhir.CoverageEligibilityResponseInsuranceItem[] | undefined;
    /**
     * Default constructor for CoverageEligibilityResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityResponseInsurance>);
    /**
     * Check if the current CoverageEligibilityResponseInsurance contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityResponseInsurance from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICoverageEligibilityResponseInsurance): CoverageEligibilityResponseInsurance;
}
/**
 * Errors encountered during the processing of the request.
 */
export declare class CoverageEligibilityResponseError extends fhir.BackboneElement implements fhir.ICoverageEligibilityResponseError {
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Default constructor for CoverageEligibilityResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityResponseError>);
    /**
     * Check if the current CoverageEligibilityResponseError contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityResponseError from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICoverageEligibilityResponseError): CoverageEligibilityResponseError;
}
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export declare class CoverageEligibilityResponse extends fhir.DomainResource implements fhir.ICoverageEligibilityResponse {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityResponse";
    /**
     * The date this resource was created.
     */
    created: string | null;
    _created?: fhir.FhirElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhir.FhirElement | undefined;
    /**
     * Errors encountered during the processing of the request.
     */
    error?: fhir.CoverageEligibilityResponseError[] | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.CoverageEligibilityResponseInsurance[] | undefined;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer: fhir.Reference | null;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: CoverageEligibilityResponseOutcomeEnum | null;
    _outcome?: fhir.FhirElement | undefined;
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
     */
    patient: fhir.Reference | null;
    /**
     * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
     */
    preAuthRef?: string | undefined;
    _preAuthRef?: fhir.FhirElement | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: CoverageEligibilityResponsePurposeEnum[] | null;
    _purpose?: fhir.FhirElement[] | undefined;
    /**
     * Reference to the original request resource.
     */
    request: fhir.Reference | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    _servicedDate?: fhir.FhirElement | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: CoverageEligibilityResponseStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CoverageEligibilityResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityResponse>);
    /**
     * Check if the current CoverageEligibilityResponse contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityResponse from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICoverageEligibilityResponse): CoverageEligibilityResponse;
}
/**
 * Code Values for the CoverageEligibilityResponse.outcome field
 */
export declare enum CoverageEligibilityResponseOutcomeEnum {
    QUEUED = "queued",
    COMPLETE = "complete",
    ERROR = "error",
    PARTIAL = "partial"
}
/**
 * Code Values for the CoverageEligibilityResponse.purpose field
 */
export declare enum CoverageEligibilityResponsePurposeEnum {
    AUTH_REQUIREMENTS = "auth-requirements",
    BENEFITS = "benefits",
    DISCOVERY = "discovery",
    VALIDATION = "validation"
}
/**
 * Code Values for the CoverageEligibilityResponse.status field
 */
export declare enum CoverageEligibilityResponseStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=CoverageEligibilityResponse.d.ts.map