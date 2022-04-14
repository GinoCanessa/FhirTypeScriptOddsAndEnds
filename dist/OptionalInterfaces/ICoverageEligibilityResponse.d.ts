import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Benefits used to date.
 */
export interface ICoverageEligibilityResponseInsuranceItemBenefit extends fhirInterfaces.IBackboneElement {
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    _allowedUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    _allowedString?: fhirInterfaces.IElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * For example: deductible, visits, benefit amount.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    _usedUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedString?: string | undefined;
    _usedString?: fhirInterfaces.IElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhirInterfaces.IMoney | undefined;
}
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export interface ICoverageEligibilityResponseInsuranceItem extends fhirInterfaces.IBackboneElement {
    /**
     * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
     */
    authorizationRequired?: boolean | undefined;
    _authorizationRequired?: fhirInterfaces.IElement | undefined;
    /**
     * Codes or comments regarding information or actions associated with the preauthorization.
     */
    authorizationSupporting?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * A web location for obtaining requirements or descriptive information regarding the preauthorization.
     */
    authorizationUrl?: string | undefined;
    _authorizationUrl?: fhirInterfaces.IElement | undefined;
    /**
     * Benefits used to date.
     */
    benefit?: fhirInterfaces.ICoverageEligibilityResponseInsuranceItemBenefit[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    _excluded?: fhirInterfaces.IElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The practitioner who is eligible for the provision of the product or service.
     */
    provider?: fhirInterfaces.IReference | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface ICoverageEligibilityResponseInsurance extends fhirInterfaces.IBackboneElement {
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage?: fhirInterfaces.IReference | undefined;
    /**
     * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
     */
    inforce?: boolean | undefined;
    _inforce?: fhirInterfaces.IElement | undefined;
    /**
     * Benefits and optionally current balances, and authorization details by category or service.
     */
    item?: fhirInterfaces.ICoverageEligibilityResponseInsuranceItem[] | undefined;
}
/**
 * Errors encountered during the processing of the request.
 */
export interface ICoverageEligibilityResponseError extends fhirInterfaces.IBackboneElement {
    /**
     * An error code,from a specified code system, which details why the eligibility check could not be performed.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export interface ICoverageEligibilityResponse extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "CoverageEligibilityResponse";
    /**
     * The date this resource was created.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhirInterfaces.IElement | undefined;
    /**
     * Errors encountered during the processing of the request.
     */
    error?: fhirInterfaces.ICoverageEligibilityResponseError[] | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    form?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhirInterfaces.ICoverageEligibilityResponseInsurance[] | undefined;
    /**
     * The Insurer who issued the coverage in question and is the author of the response.
     */
    insurer?: fhirInterfaces.IReference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: CoverageEligibilityResponseOutcomeEnum | undefined;
    _outcome?: fhirInterfaces.IElement | undefined;
    /**
     * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
     */
    preAuthRef?: string | undefined;
    _preAuthRef?: fhirInterfaces.IElement | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose?: CoverageEligibilityResponsePurposeEnum[] | undefined;
    _purpose?: fhirInterfaces.IElement[] | undefined;
    /**
     * Reference to the original request resource.
     */
    request?: fhirInterfaces.IReference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhirInterfaces.IReference | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    _servicedDate?: fhirInterfaces.IElement | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: CoverageEligibilityResponseStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=ICoverageEligibilityResponse.d.ts.map