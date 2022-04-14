import * as fhirInterfaces from '../strictinterfaces';
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export interface IClaimResponseItemAdjudication extends fhirInterfaces.IBackboneElement {
    /**
     * For example: amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhirInterfaces.IMoney | undefined;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhirInterfaces.ICodeableConcept;
    /**
     * For example may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    _value?: fhirInterfaces.IElement | undefined;
}
/**
 * A sub-detail adjudication of a simple product or service.
 */
export interface IClaimResponseItemDetailSubDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication?: fhirInterfaces.IClaimResponseItemAdjudication[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: number;
    _subDetailSequence?: fhirInterfaces.IElement | undefined;
}
/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export interface IClaimResponseItemDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication: fhirInterfaces.IClaimResponseItemAdjudication[];
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: number;
    _detailSequence?: fhirInterfaces.IElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail?: fhirInterfaces.IClaimResponseItemDetailSubDetail[] | undefined;
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export interface IClaimResponseItem extends fhirInterfaces.IBackboneElement {
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhirInterfaces.IClaimResponseItemAdjudication[];
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhirInterfaces.IClaimResponseItemDetail[] | undefined;
    /**
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: number;
    _itemSequence?: fhirInterfaces.IElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirInterfaces.IElement[] | undefined;
}
/**
 * The third-tier service adjudications for payor added services.
 */
export interface IClaimResponseAddItemDetailSubDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication: fhirInterfaces.IClaimResponseItemAdjudication[];
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhirInterfaces.IMoney | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhirInterfaces.ICodeableConcept;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * The second-tier service adjudications for payor added services.
 */
export interface IClaimResponseAddItemDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication: fhirInterfaces.IClaimResponseItemAdjudication[];
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhirInterfaces.IMoney | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhirInterfaces.ICodeableConcept;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhirInterfaces.IClaimResponseAddItemDetailSubDetail[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export interface IClaimResponseAddItem extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication: fhirInterfaces.IClaimResponseItemAdjudication[];
    /**
     * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhirInterfaces.IClaimResponseAddItemDetail[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    _detailSequence?: fhirInterfaces.IElement[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    _itemSequence?: fhirInterfaces.IElement[] | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhirInterfaces.IReference | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhirInterfaces.IMoney | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirInterfaces.IElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhirInterfaces.ICodeableConcept;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhirInterfaces.IReference[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    _servicedDate?: fhirInterfaces.IElement | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence?: number[] | undefined;
    _subdetailSequence?: fhirInterfaces.IElement[] | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export interface IClaimResponseTotal extends fhirInterfaces.IBackboneElement {
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhirInterfaces.IMoney;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhirInterfaces.ICodeableConcept;
}
/**
 * Payment details for the adjudication of the claim.
 */
export interface IClaimResponsePayment extends fhirInterfaces.IBackboneElement {
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhirInterfaces.IMoney | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhirInterfaces.IMoney;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type: fhirInterfaces.ICodeableConcept;
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export interface IClaimResponseProcessNote extends fhirInterfaces.IBackboneElement {
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    _number?: fhirInterfaces.IElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: string;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: ClaimResponseProcessNoteTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
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
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface IClaimResponseInsurance extends fhirInterfaces.IBackboneElement {
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    _businessArrangement?: fhirInterfaces.IElement | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhirInterfaces.IReference | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhirInterfaces.IReference;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean;
    _focal?: fhirInterfaces.IElement | undefined;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number;
    _sequence?: fhirInterfaces.IElement | undefined;
}
/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export interface IClaimResponseError extends fhirInterfaces.IBackboneElement {
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhirInterfaces.ICodeableConcept;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: number | undefined;
    _detailSequence?: fhirInterfaces.IElement | undefined;
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: number | undefined;
    _itemSequence?: fhirInterfaces.IElement | undefined;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: number | undefined;
    _subDetailSequence?: fhirInterfaces.IElement | undefined;
}
/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export interface IClaimResponse extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ClaimResponse";
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhirInterfaces.IClaimResponseAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhirInterfaces.IClaimResponseItemAdjudication[] | undefined;
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest?: fhirInterfaces.IReference[] | undefined;
    /**
     * The date this resource was created.
     */
    created: string;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhirInterfaces.IElement | undefined;
    /**
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error?: fhirInterfaces.IClaimResponseError[] | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhirInterfaces.IAttachment | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhirInterfaces.IClaimResponseInsurance[] | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhirInterfaces.IReference;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhirInterfaces.IClaimResponseItem[] | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: ClaimResponseOutcomeEnum;
    _outcome?: fhirInterfaces.IElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhirInterfaces.IReference;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhirInterfaces.IClaimResponsePayment | undefined;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string | undefined;
    _preAuthRef?: fhirInterfaces.IElement | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhirInterfaces.IClaimResponseProcessNote[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhirInterfaces.IReference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ClaimResponseStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhirInterfaces.IClaimResponseTotal[] | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    type: fhirInterfaces.ICodeableConcept;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimResponseUseEnum;
    _use?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IClaimResponse.d.ts.map