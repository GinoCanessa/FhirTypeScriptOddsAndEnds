import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export interface ICoverageEligibilityRequestSupportingInfo extends fhirInterfaces.IBackboneElement {
    /**
     * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
     */
    appliesToAll?: boolean | undefined;
    _appliesToAll?: fhirInterfaces.IElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    information?: fhirInterfaces.IReference | undefined;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface ICoverageEligibilityRequestInsurance extends fhirInterfaces.IBackboneElement {
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    _businessArrangement?: fhirInterfaces.IElement | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage?: fhirInterfaces.IReference | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
     */
    focal?: boolean | undefined;
    _focal?: fhirInterfaces.IElement | undefined;
}
/**
 * Patient diagnosis for which care is sought.
 */
export interface ICoverageEligibilityRequestItemDiagnosis extends fhirInterfaces.IBackboneElement {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhirInterfaces.IReference | undefined;
}
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export interface ICoverageEligibilityRequestItem extends fhirInterfaces.IBackboneElement {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail?: fhirInterfaces.IReference[] | undefined;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis?: fhirInterfaces.ICoverageEligibilityRequestItemDiagnosis[] | undefined;
    /**
     * Facility where the services will be provided.
     */
    facility?: fhirInterfaces.IReference | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The practitioner who is responsible for the product or service to be rendered to the patient.
     */
    provider?: fhirInterfaces.IReference | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product line.
     */
    supportingInfoSequence?: number[] | undefined;
    _supportingInfoSequence?: fhirInterfaces.IElement[] | undefined;
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export interface ICoverageEligibilityRequest extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "CoverageEligibilityRequest";
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * Person who created the request.
     */
    enterer?: fhirInterfaces.IReference | undefined;
    /**
     * Facility where the services are intended to be provided.
     */
    facility?: fhirInterfaces.IReference | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhirInterfaces.ICoverageEligibilityRequestInsurance[] | undefined;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer?: fhirInterfaces.IReference | undefined;
    /**
     * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
     */
    item?: fhirInterfaces.ICoverageEligibilityRequestItem[] | undefined;
    /**
     * 1..1.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhirInterfaces.IReference | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose?: CoverageEligibilityRequestPurposeEnum[] | undefined;
    _purpose?: fhirInterfaces.IElement[] | undefined;
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
    status?: CoverageEligibilityRequestStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhirInterfaces.ICoverageEligibilityRequestSupportingInfo[] | undefined;
}
/**
 * Code Values for the CoverageEligibilityRequest.purpose field
 */
export declare enum CoverageEligibilityRequestPurposeEnum {
    AUTH_REQUIREMENTS = "auth-requirements",
    BENEFITS = "benefits",
    DISCOVERY = "discovery",
    VALIDATION = "validation"
}
/**
 * Code Values for the CoverageEligibilityRequest.status field
 */
export declare enum CoverageEligibilityRequestStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ICoverageEligibilityRequest.d.ts.map