import * as fhir from '../fhir';
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare type ICoverageEligibilityRequestSupportingInfo = fhir.IBackboneElement & {
    /**
     * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
     */
    appliesToAll?: boolean | undefined;
    _appliesToAll?: fhir.IFhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    information: fhir.IReference | null;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
};
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare type ICoverageEligibilityRequestInsurance = fhir.IBackboneElement & {
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    _businessArrangement?: fhir.IFhirElement | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.IReference | null;
    /**
     * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
     */
    focal?: boolean | undefined;
    _focal?: fhir.IFhirElement | undefined;
};
/**
 * Patient diagnosis for which care is sought.
 */
export declare type ICoverageEligibilityRequestItemDiagnosis = fhir.IBackboneElement & {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.IReference | undefined;
};
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export declare type ICoverageEligibilityRequestItem = fhir.IBackboneElement & {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail?: fhir.IReference[] | undefined;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis?: fhir.ICoverageEligibilityRequestItemDiagnosis[] | undefined;
    /**
     * Facility where the services will be provided.
     */
    facility?: fhir.IReference | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhir.ICodeableConcept | undefined;
    /**
     * The practitioner who is responsible for the product or service to be rendered to the patient.
     */
    provider?: fhir.IReference | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product line.
     */
    supportingInfoSequence?: number[] | undefined;
    _supportingInfoSequence?: fhir.IFhirElement[] | undefined;
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export declare type ICoverageEligibilityRequest = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityRequest";
    /**
     * The date when this resource was created.
     */
    created: string | null;
    _created?: fhir.IFhirElement | undefined;
    /**
     * Person who created the request.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * Facility where the services are intended to be provided.
     */
    facility?: fhir.IReference | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.ICoverageEligibilityRequestInsurance[] | undefined;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer: fhir.IReference | null;
    /**
     * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
     */
    item?: fhir.ICoverageEligibilityRequestItem[] | undefined;
    /**
     * 1..1.
     */
    patient: fhir.IReference | null;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: fhir.ICodeableConcept | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhir.IReference | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: CoverageEligibilityRequestPurposeEnum[] | null;
    _purpose?: fhir.IFhirElement[] | undefined;
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
    status: CoverageEligibilityRequestStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ICoverageEligibilityRequestSupportingInfo[] | undefined;
};
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class CoverageEligibilityRequestSupportingInfo extends fhir.BackboneElement implements fhir.ICoverageEligibilityRequestSupportingInfo {
    /**
     * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
     */
    appliesToAll?: boolean | undefined;
    _appliesToAll?: fhir.FhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    information: fhir.Reference | null;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityRequestSupportingInfo>);
    /**
     * Check if the current CoverageEligibilityRequestSupportingInfo contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityRequestSupportingInfo from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverageEligibilityRequestSupportingInfo): CoverageEligibilityRequestSupportingInfo;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class CoverageEligibilityRequestInsurance extends fhir.BackboneElement implements fhir.ICoverageEligibilityRequestInsurance {
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    _businessArrangement?: fhir.FhirElement | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
     */
    focal?: boolean | undefined;
    _focal?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityRequestInsurance>);
    /**
     * Check if the current CoverageEligibilityRequestInsurance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityRequestInsurance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverageEligibilityRequestInsurance): CoverageEligibilityRequestInsurance;
}
/**
 * Patient diagnosis for which care is sought.
 */
export declare class CoverageEligibilityRequestItemDiagnosis extends fhir.BackboneElement implements fhir.ICoverageEligibilityRequestItemDiagnosis {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.Reference | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestItemDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityRequestItemDiagnosis>);
    /**
     * Check if the current CoverageEligibilityRequestItemDiagnosis contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityRequestItemDiagnosis from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverageEligibilityRequestItemDiagnosis): CoverageEligibilityRequestItemDiagnosis;
}
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export declare class CoverageEligibilityRequestItem extends fhir.BackboneElement implements fhir.ICoverageEligibilityRequestItem {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail?: fhir.Reference[] | undefined;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis?: fhir.CoverageEligibilityRequestItemDiagnosis[] | undefined;
    /**
     * Facility where the services will be provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
     */
    productOrService?: fhir.CodeableConcept | undefined;
    /**
     * The practitioner who is responsible for the product or service to be rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product line.
     */
    supportingInfoSequence?: number[] | undefined;
    _supportingInfoSequence?: fhir.FhirElement[] | undefined;
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityRequestItem>);
    /**
     * Check if the current CoverageEligibilityRequestItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityRequestItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverageEligibilityRequestItem): CoverageEligibilityRequestItem;
}
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export declare class CoverageEligibilityRequest extends fhir.DomainResource implements fhir.ICoverageEligibilityRequest {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityRequest";
    /**
     * The date when this resource was created.
     */
    created: string | null;
    _created?: fhir.FhirElement | undefined;
    /**
     * Person who created the request.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Facility where the services are intended to be provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.CoverageEligibilityRequestInsurance[] | undefined;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer: fhir.Reference | null;
    /**
     * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
     */
    item?: fhir.CoverageEligibilityRequestItem[] | undefined;
    /**
     * 1..1.
     */
    patient: fhir.Reference | null;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhir.Reference | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: CoverageEligibilityRequestPurposeEnum[] | null;
    _purpose?: fhir.FhirElement[] | undefined;
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
    status: CoverageEligibilityRequestStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.CoverageEligibilityRequestSupportingInfo[] | undefined;
    /**
     * Default constructor for CoverageEligibilityRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICoverageEligibilityRequest>);
    /**
     * Check if the current CoverageEligibilityRequest contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a CoverageEligibilityRequest from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ICoverageEligibilityRequest): CoverageEligibilityRequest;
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