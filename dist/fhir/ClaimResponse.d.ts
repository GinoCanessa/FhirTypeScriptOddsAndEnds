import * as fhir from '../fhir';
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare type IClaimResponseItemAdjudication = fhir.IBackboneElement & {
    /**
     * For example: amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.IMoney | undefined;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * For example may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.ICodeableConcept | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * A sub-detail adjudication of a simple product or service.
 */
export declare type IClaimResponseItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IClaimResponseItemAdjudication[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: number | null;
    _subDetailSequence?: fhir.IFhirElement | undefined;
};
/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare type IClaimResponseItemDetail = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: number | null;
    _detailSequence?: fhir.IFhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail?: fhir.IClaimResponseItemDetailSubDetail[] | undefined;
};
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare type IClaimResponseItem = fhir.IBackboneElement & {
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.IClaimResponseItemDetail[] | undefined;
    /**
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: number | null;
    _itemSequence?: fhir.IFhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.IFhirElement[] | undefined;
};
/**
 * The third-tier service adjudications for payor added services.
 */
export declare type IClaimResponseAddItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * The second-tier service adjudications for payor added services.
 */
export declare type IClaimResponseAddItemDetail = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.IClaimResponseAddItemDetailSubDetail[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare type IClaimResponseAddItem = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
    /**
     * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.IClaimResponseAddItemDetail[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    _detailSequence?: fhir.IFhirElement[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    _itemSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhir.IAddress | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhir.IReference | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.IReference[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    _servicedDate?: fhir.IFhirElement | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.IPeriod | undefined;
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence?: number[] | undefined;
    _subdetailSequence?: fhir.IFhirElement[] | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.ICodeableConcept[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare type IClaimResponseTotal = fhir.IBackboneElement & {
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.IMoney | null;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.ICodeableConcept | null;
};
/**
 * Payment details for the adjudication of the claim.
 */
export declare type IClaimResponsePayment = fhir.IBackboneElement & {
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhir.IMoney | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.ICodeableConcept | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhir.IMoney | null;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare type IClaimResponseProcessNote = fhir.IBackboneElement & {
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.ICodeableConcept | undefined;
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    _number?: fhir.IFhirElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: string | null;
    _text?: fhir.IFhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: ClaimResponseProcessNoteTypeEnum | undefined;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare type IClaimResponseInsurance = fhir.IBackboneElement & {
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    _businessArrangement?: fhir.IFhirElement | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.IReference | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.IReference | null;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    _focal?: fhir.IFhirElement | undefined;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
};
/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export declare type IClaimResponseError = fhir.IBackboneElement & {
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: number | undefined;
    _detailSequence?: fhir.IFhirElement | undefined;
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: number | undefined;
    _itemSequence?: fhir.IFhirElement | undefined;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: number | undefined;
    _subDetailSequence?: fhir.IFhirElement | undefined;
};
/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export declare type IClaimResponse = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ClaimResponse";
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.IClaimResponseAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.IClaimResponseItemAdjudication[] | undefined;
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest?: fhir.IReference[] | undefined;
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
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error?: fhir.IClaimResponseError[] | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhir.IAttachment | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.ICodeableConcept | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.IClaimResponseInsurance[] | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.IReference | null;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.IClaimResponseItem[] | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: ClaimResponseOutcomeEnum | null;
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhir.IReference | null;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: fhir.ICodeableConcept | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.IClaimResponsePayment | undefined;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: fhir.IPeriod | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string | undefined;
    _preAuthRef?: fhir.IFhirElement | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.IClaimResponseProcessNote[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.IReference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ClaimResponseStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.ICodeableConcept | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.IClaimResponseTotal[] | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimResponseUseEnum | null;
    _use?: fhir.IFhirElement | undefined;
};
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare class ClaimResponseItemAdjudication extends fhir.BackboneElement implements fhir.IClaimResponseItemAdjudication {
    /**
     * For example: amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * For example may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClaimResponseItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseItemAdjudication>);
    /**
     * Check if the current ClaimResponseItemAdjudication contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseItemAdjudication from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseItemAdjudication): ClaimResponseItemAdjudication;
}
/**
 * A sub-detail adjudication of a simple product or service.
 */
export declare class ClaimResponseItemDetailSubDetail extends fhir.BackboneElement implements fhir.IClaimResponseItemDetailSubDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudication[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: number | null;
    _subDetailSequence?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClaimResponseItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseItemDetailSubDetail>);
    /**
     * Check if the current ClaimResponseItemDetailSubDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseItemDetailSubDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseItemDetailSubDetail): ClaimResponseItemDetailSubDetail;
}
/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimResponseItemDetail extends fhir.BackboneElement implements fhir.IClaimResponseItemDetail {
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: number | null;
    _detailSequence?: fhir.FhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail?: fhir.ClaimResponseItemDetailSubDetail[] | undefined;
    /**
     * Default constructor for ClaimResponseItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseItemDetail>);
    /**
     * Check if the current ClaimResponseItemDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseItemDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseItemDetail): ClaimResponseItemDetail;
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare class ClaimResponseItem extends fhir.BackboneElement implements fhir.IClaimResponseItem {
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.ClaimResponseItemDetail[] | undefined;
    /**
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: number | null;
    _itemSequence?: fhir.FhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ClaimResponseItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseItem>);
    /**
     * Check if the current ClaimResponseItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseItem): ClaimResponseItem;
}
/**
 * The third-tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetailSubDetail extends fhir.BackboneElement implements fhir.IClaimResponseAddItemDetailSubDetail {
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ClaimResponseAddItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseAddItemDetailSubDetail>);
    /**
     * Check if the current ClaimResponseAddItemDetailSubDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseAddItemDetailSubDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseAddItemDetailSubDetail): ClaimResponseAddItemDetailSubDetail;
}
/**
 * The second-tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetail extends fhir.BackboneElement implements fhir.IClaimResponseAddItemDetail {
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.ClaimResponseAddItemDetailSubDetail[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ClaimResponseAddItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseAddItemDetail>);
    /**
     * Check if the current ClaimResponseAddItemDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseAddItemDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseAddItemDetail): ClaimResponseAddItemDetail;
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare class ClaimResponseAddItem extends fhir.BackboneElement implements fhir.IClaimResponseAddItem {
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ClaimResponseAddItemDetail[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    _detailSequence?: fhir.FhirElement[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    _itemSequence?: fhir.FhirElement[] | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhir.Reference | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.Reference[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    _servicedDate?: fhir.FhirElement | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence?: number[] | undefined;
    _subdetailSequence?: fhir.FhirElement[] | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ClaimResponseAddItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseAddItem>);
    /**
     * Check if the current ClaimResponseAddItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseAddItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseAddItem): ClaimResponseAddItem;
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare class ClaimResponseTotal extends fhir.BackboneElement implements fhir.IClaimResponseTotal {
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.Money | null;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Default constructor for ClaimResponseTotal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseTotal>);
    /**
     * Check if the current ClaimResponseTotal contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseTotal from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseTotal): ClaimResponseTotal;
}
/**
 * Payment details for the adjudication of the claim.
 */
export declare class ClaimResponsePayment extends fhir.BackboneElement implements fhir.IClaimResponsePayment {
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhir.Money | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConcept | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhir.Money | null;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for ClaimResponsePayment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponsePayment>);
    /**
     * Check if the current ClaimResponsePayment contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponsePayment from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponsePayment): ClaimResponsePayment;
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare class ClaimResponseProcessNote extends fhir.BackboneElement implements fhir.IClaimResponseProcessNote {
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    _number?: fhir.FhirElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: string | null;
    _text?: fhir.FhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: ClaimResponseProcessNoteTypeEnum | undefined;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClaimResponseProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseProcessNote>);
    /**
     * Check if the current ClaimResponseProcessNote contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseProcessNote from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseProcessNote): ClaimResponseProcessNote;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ClaimResponseInsurance extends fhir.BackboneElement implements fhir.IClaimResponseInsurance {
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    _businessArrangement?: fhir.FhirElement | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    _focal?: fhir.FhirElement | undefined;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClaimResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseInsurance>);
    /**
     * Check if the current ClaimResponseInsurance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseInsurance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseInsurance): ClaimResponseInsurance;
}
/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export declare class ClaimResponseError extends fhir.BackboneElement implements fhir.IClaimResponseError {
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: number | undefined;
    _detailSequence?: fhir.FhirElement | undefined;
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: number | undefined;
    _itemSequence?: fhir.FhirElement | undefined;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: number | undefined;
    _subDetailSequence?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClaimResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponseError>);
    /**
     * Check if the current ClaimResponseError contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponseError from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponseError): ClaimResponseError;
}
/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export declare class ClaimResponse extends fhir.DomainResource implements fhir.IClaimResponse {
    /**
     * Resource Type Name
     */
    resourceType: "ClaimResponse";
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ClaimResponseAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ClaimResponseItemAdjudication[] | undefined;
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest?: fhir.Reference[] | undefined;
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
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error?: fhir.ClaimResponseError[] | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhir.Attachment | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConcept | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.ClaimResponseInsurance[] | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.Reference | null;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ClaimResponseItem[] | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: ClaimResponseOutcomeEnum | null;
    _outcome?: fhir.FhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: fhir.CodeableConcept | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.ClaimResponsePayment | undefined;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: fhir.Period | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string | undefined;
    _preAuthRef?: fhir.FhirElement | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.ClaimResponseProcessNote[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ClaimResponseStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ClaimResponseTotal[] | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimResponseUseEnum | null;
    _use?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClaimResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimResponse>);
    /**
     * Check if the current ClaimResponse contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimResponse from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimResponse): ClaimResponse;
}
/**
 * Code Values for the ClaimResponse.processNote.type field
 */
export declare enum ClaimResponseProcessNoteTypeEnum {
    DISPLAY = "display",
    PRINT = "print",
    PRINTOPER = "printoper"
}
/**
 * Code Values for the ClaimResponse.outcome field
 */
export declare enum ClaimResponseOutcomeEnum {
    QUEUED = "queued",
    COMPLETE = "complete",
    ERROR = "error",
    PARTIAL = "partial"
}
/**
 * Code Values for the ClaimResponse.status field
 */
export declare enum ClaimResponseStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
/**
 * Code Values for the ClaimResponse.use field
 */
export declare enum ClaimResponseUseEnum {
    CLAIM = "claim",
    PREAUTHORIZATION = "preauthorization",
    PREDETERMINATION = "predetermination"
}
//# sourceMappingURL=ClaimResponse.d.ts.map