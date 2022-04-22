import * as fhir from '../fhir.js';
import { ExBenefitcategoryValueSetType } from '../fhirValueSets/ExBenefitcategoryValueSet.js';
import { ServiceUsclsValueSetType } from '../fhirValueSets/ServiceUsclsValueSet.js';
import { ClaimModifiersValueSetType } from '../fhirValueSets/ClaimModifiersValueSet.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
import { ProcessPriorityValueSetType } from '../fhirValueSets/ProcessPriorityValueSet.js';
import { EligibilityrequestPurposeValueSetType, EligibilityrequestPurposeValueSetEnum } from '../fhirValueSets/EligibilityrequestPurposeValueSet.js';
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare type ICoverageEligibilityRequestSupportingInfo = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.supportingInfo.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    information: fhir.IReference | null;
    /**
     * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
     */
    appliesToAll?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.supportingInfo.appliesToAll
     */
    _appliesToAll?: fhir.IFhirElement | undefined;
};
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare type ICoverageEligibilityRequestInsurance = fhir.IBackboneElement & {
    /**
     * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
     */
    focal?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.insurance.focal
     */
    _focal?: fhir.IFhirElement | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.IReference | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.insurance.businessArrangement
     */
    _businessArrangement?: fhir.IFhirElement | undefined;
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
     * Exceptions, special conditions and supporting information applicable for this service or product line.
     */
    supportingInfoSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.item.supportingInfoSequence
     */
    _supportingInfoSequence?: fhir.IFhirElement[] | undefined;
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
     * The practitioner who is responsible for the product or service to be rendered to the patient.
     */
    provider?: fhir.IReference | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: fhir.IMoney | undefined;
    /**
     * Facility where the services will be provided.
     */
    facility?: fhir.IReference | undefined;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis?: fhir.ICoverageEligibilityRequestItemDiagnosis[] | undefined;
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail?: fhir.IReference[] | undefined;
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
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: fhir.ICodeableConcept | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: EligibilityrequestPurposeValueSetEnum[] | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.purpose
     */
    _purpose?: fhir.IFhirElement[] | undefined;
    /**
     * 1..1.
     */
    patient: fhir.IReference | null;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.serviced[x]
     */
    _servicedDate?: fhir.IFhirElement | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.IPeriod | undefined;
    /**
     * The date when this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * Person who created the request.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhir.IReference | undefined;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer: fhir.IReference | null;
    /**
     * Facility where the services are intended to be provided.
     */
    facility?: fhir.IReference | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ICoverageEligibilityRequestSupportingInfo[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.ICoverageEligibilityRequestInsurance[] | undefined;
    /**
     * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
     */
    item?: fhir.ICoverageEligibilityRequestItem[] | undefined;
};
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class CoverageEligibilityRequestSupportingInfo extends fhir.BackboneElement implements ICoverageEligibilityRequestSupportingInfo {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.supportingInfo.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    information: fhir.Reference | null;
    /**
     * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
     */
    appliesToAll?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.supportingInfo.appliesToAll
     */
    _appliesToAll?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityRequestSupportingInfo>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class CoverageEligibilityRequestInsurance extends fhir.BackboneElement implements ICoverageEligibilityRequestInsurance {
    /**
     * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
     */
    focal?: boolean | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.insurance.focal
     */
    _focal?: fhir.FhirElement | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityRequestInsurance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Patient diagnosis for which care is sought.
 */
export declare class CoverageEligibilityRequestItemDiagnosis extends fhir.BackboneElement implements ICoverageEligibilityRequestItemDiagnosis {
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
    constructor(source?: Partial<ICoverageEligibilityRequestItemDiagnosis>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export declare class CoverageEligibilityRequestItem extends fhir.BackboneElement implements ICoverageEligibilityRequestItem {
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product line.
     */
    supportingInfoSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.item.supportingInfoSequence
     */
    _supportingInfoSequence?: fhir.FhirElement[] | undefined;
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
     * The practitioner who is responsible for the product or service to be rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The amount charged to the patient by the provider for a single unit.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Facility where the services will be provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * Patient diagnosis for which care is sought.
     */
    diagnosis?: fhir.CoverageEligibilityRequestItemDiagnosis[] | undefined;
    /**
     * The plan/proposal/order describing the proposed service in detail.
     */
    detail?: fhir.Reference[] | undefined;
    /**
     * Default constructor for CoverageEligibilityRequestItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityRequestItem>);
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export declare class CoverageEligibilityRequest extends fhir.DomainResource implements ICoverageEligibilityRequest {
    /**
     * Resource Type Name
     */
    resourceType: "CoverageEligibilityRequest";
    /**
     * A unique identifier assigned to this coverage eligiblity request.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * When the requestor expects the processor to complete processing.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
     */
    purpose: EligibilityrequestPurposeValueSetEnum[] | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.purpose
     */
    _purpose?: fhir.FhirElement[] | undefined;
    /**
     * 1..1.
     */
    patient: fhir.Reference | null;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.serviced[x]
     */
    _servicedDate?: fhir.FhirElement | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * The date when this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: CoverageEligibilityRequest.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * Person who created the request.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The Insurer who issued the coverage in question and is the recipient of the request.
     */
    insurer: fhir.Reference | null;
    /**
     * Facility where the services are intended to be provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.CoverageEligibilityRequestSupportingInfo[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.CoverageEligibilityRequestInsurance[] | undefined;
    /**
     * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
     */
    item?: fhir.CoverageEligibilityRequestItem[] | undefined;
    /**
     * Default constructor for CoverageEligibilityRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICoverageEligibilityRequest>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Example-bound Value Set for priority
     */
    static priorityExampleValueSet(): ProcessPriorityValueSetType;
    /**
     * Required-bound Value Set for purpose
     */
    static purposeRequiredValueSet(): EligibilityrequestPurposeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=CoverageEligibilityRequest.d.ts.map