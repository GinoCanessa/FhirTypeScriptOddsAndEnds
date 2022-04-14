import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class CoverageEligibilityRequestSupportingInfo extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageEligibilityRequestSupportingInfo {
    /**
     * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
     */
    appliesToAll?: boolean | undefined;
    _appliesToAll?: fhirModels.Element | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    information: fhirModels.Reference;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number;
    _sequence?: fhirModels.Element | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestSupportingInfo from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICoverageEligibilityRequestSupportingInfo);
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class CoverageEligibilityRequestInsurance extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageEligibilityRequestInsurance {
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    _businessArrangement?: fhirModels.Element | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhirModels.Reference;
    /**
     * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
     */
    focal?: boolean | undefined;
    _focal?: fhirModels.Element | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestInsurance from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICoverageEligibilityRequestInsurance);
}
/**
 * Patient diagnosis for which care is sought.
 */
export declare class CoverageEligibilityRequestItemDiagnosis extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageEligibilityRequestItemDiagnosis {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestItemDiagnosis from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICoverageEligibilityRequestItemDiagnosis);
}
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export declare class CoverageEligibilityRequestItem extends fhirModels.BackboneElement implements fhirInterfaces.ICoverageEligibilityRequestItem {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail?: fhirModels.Reference[] | undefined;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis?: fhirModels.CoverageEligibilityRequestItemDiagnosis[] | undefined;
    /**
     * Facility where the services will be provided.
     */
    facility?: fhirModels.Reference | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhirModels.CodeableConcept | undefined;
    /**
     * The practitioner who is responsible for the product or service to be rendered to the patient.
     */
    provider?: fhirModels.Reference | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product line.
     */
    supportingInfoSequence?: number[] | undefined;
    _supportingInfoSequence?: fhirModels.Element[] | undefined;
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICoverageEligibilityRequestItem);
}
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export declare class CoverageEligibilityRequest extends fhirModels.DomainResource implements fhirInterfaces.ICoverageEligibilityRequest {
    /**
     * Resource Type Name
     */
    readonly resourceType = "CoverageEligibilityRequest";
    /**
     * The date when this resource was created.
     */
    created: string;
    _created?: fhirModels.Element | undefined;
    /**
     * Person who created the request.
     */
    enterer?: fhirModels.Reference | undefined;
    /**
     * Facility where the services are intended to be provided.
     */
    facility?: fhirModels.Reference | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhirModels.CoverageEligibilityRequestInsurance[] | undefined;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer: fhirModels.Reference;
    /**
     * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
     */
    item?: fhirModels.CoverageEligibilityRequestItem[] | undefined;
    /**
     * 1..1.
     */
    patient: fhirModels.Reference;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: fhirModels.CodeableConcept | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhirModels.Reference | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: CoverageEligibilityRequestPurposeEnum[];
    _purpose?: fhirModels.Element[] | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    _servicedDate?: fhirModels.Element | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhirModels.Period | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: CoverageEligibilityRequestStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhirModels.CoverageEligibilityRequestSupportingInfo[] | undefined;
    /**
     * Default constructor for CoverageEligibilityRequest from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICoverageEligibilityRequest);
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
//# sourceMappingURL=CoverageEligibilityRequest.d.ts.map