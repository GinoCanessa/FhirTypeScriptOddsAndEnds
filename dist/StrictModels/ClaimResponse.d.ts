import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare class ClaimResponseItemAdjudication extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseItemAdjudication {
    /**
     * For example: amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhirModels.Money | undefined;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhirModels.CodeableConcept;
    /**
     * For example may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhirModels.CodeableConcept | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for ClaimResponseItemAdjudication from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseItemAdjudication);
}
/**
 * A sub-detail adjudication of a simple product or service.
 */
export declare class ClaimResponseItemDetailSubDetail extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseItemDetailSubDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhirModels.ClaimResponseItemAdjudication[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirModels.Element[] | undefined;
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: number;
    _subDetailSequence?: fhirModels.Element | undefined;
    /**
     * Default constructor for ClaimResponseItemDetailSubDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseItemDetailSubDetail);
}
/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimResponseItemDetail extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseItemDetail {
    /**
     * The adjudication results.
     */
    adjudication: fhirModels.ClaimResponseItemAdjudication[];
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: number;
    _detailSequence?: fhirModels.Element | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirModels.Element[] | undefined;
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail?: fhirModels.ClaimResponseItemDetailSubDetail[] | undefined;
    /**
     * Default constructor for ClaimResponseItemDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseItemDetail);
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare class ClaimResponseItem extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseItem {
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhirModels.ClaimResponseItemAdjudication[];
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhirModels.ClaimResponseItemDetail[] | undefined;
    /**
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: number;
    _itemSequence?: fhirModels.Element | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for ClaimResponseItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseItem);
}
/**
 * The third-tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetailSubDetail extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseAddItemDetailSubDetail {
    /**
     * The adjudication results.
     */
    adjudication: fhirModels.ClaimResponseItemAdjudication[];
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhirModels.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirModels.Element[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhirModels.CodeableConcept;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ClaimResponseAddItemDetailSubDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseAddItemDetailSubDetail);
}
/**
 * The second-tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetail extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseAddItemDetail {
    /**
     * The adjudication results.
     */
    adjudication: fhirModels.ClaimResponseItemAdjudication[];
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhirModels.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirModels.Element[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhirModels.CodeableConcept;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhirModels.ClaimResponseAddItemDetailSubDetail[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ClaimResponseAddItemDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseAddItemDetail);
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare class ClaimResponseAddItem extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseAddItem {
    /**
     * The adjudication results.
     */
    adjudication: fhirModels.ClaimResponseItemAdjudication[];
    /**
     * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhirModels.CodeableConcept | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhirModels.ClaimResponseAddItemDetail[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    _detailSequence?: fhirModels.Element[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    _itemSequence?: fhirModels.Element[] | undefined;
    /**
     * Where the product or service was provided.
     */
    locationCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Where the product or service was provided.
     */
    locationAddress?: fhirModels.Address | undefined;
    /**
     * Where the product or service was provided.
     */
    locationReference?: fhirModels.Reference | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhirModels.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    _noteNumber?: fhirModels.Element[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhirModels.CodeableConcept;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhirModels.Reference[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    _servicedDate?: fhirModels.Element | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhirModels.Period | undefined;
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence?: number[] | undefined;
    _subdetailSequence?: fhirModels.Element[] | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ClaimResponseAddItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseAddItem);
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare class ClaimResponseTotal extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseTotal {
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhirModels.Money;
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhirModels.CodeableConcept;
    /**
     * Default constructor for ClaimResponseTotal from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseTotal);
}
/**
 * Payment details for the adjudication of the claim.
 */
export declare class ClaimResponsePayment extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponsePayment {
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhirModels.Money | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhirModels.CodeableConcept | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhirModels.Money;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type: fhirModels.CodeableConcept;
    /**
     * Default constructor for ClaimResponsePayment from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponsePayment);
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare class ClaimResponseProcessNote extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseProcessNote {
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhirModels.CodeableConcept | undefined;
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    _number?: fhirModels.Element | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: string;
    _text?: fhirModels.Element | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: ClaimResponseProcessNoteTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for ClaimResponseProcessNote from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseProcessNote);
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
export declare class ClaimResponseInsurance extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseInsurance {
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    _businessArrangement?: fhirModels.Element | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhirModels.Reference | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhirModels.Reference;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean;
    _focal?: fhirModels.Element | undefined;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number;
    _sequence?: fhirModels.Element | undefined;
    /**
     * Default constructor for ClaimResponseInsurance from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseInsurance);
}
/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export declare class ClaimResponseError extends fhirModels.BackboneElement implements fhirInterfaces.IClaimResponseError {
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhirModels.CodeableConcept;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: number | undefined;
    _detailSequence?: fhirModels.Element | undefined;
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: number | undefined;
    _itemSequence?: fhirModels.Element | undefined;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: number | undefined;
    _subDetailSequence?: fhirModels.Element | undefined;
    /**
     * Default constructor for ClaimResponseError from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponseError);
}
/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export declare class ClaimResponse extends fhirModels.DomainResource implements fhirInterfaces.IClaimResponse {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ClaimResponse";
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhirModels.ClaimResponseAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhirModels.ClaimResponseItemAdjudication[] | undefined;
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest?: fhirModels.Reference[] | undefined;
    /**
     * The date this resource was created.
     */
    created: string;
    _created?: fhirModels.Element | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhirModels.Element | undefined;
    /**
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error?: fhirModels.ClaimResponseError[] | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhirModels.Attachment | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhirModels.CodeableConcept | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhirModels.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhirModels.ClaimResponseInsurance[] | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhirModels.Reference;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhirModels.ClaimResponseItem[] | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: ClaimResponseOutcomeEnum;
    _outcome?: fhirModels.Element | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhirModels.Reference;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: fhirModels.CodeableConcept | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhirModels.ClaimResponsePayment | undefined;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: fhirModels.Period | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string | undefined;
    _preAuthRef?: fhirModels.Element | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhirModels.ClaimResponseProcessNote[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhirModels.Reference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ClaimResponseStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhirModels.CodeableConcept | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhirModels.ClaimResponseTotal[] | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    type: fhirModels.CodeableConcept;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimResponseUseEnum;
    _use?: fhirModels.Element | undefined;
    /**
     * Default constructor for ClaimResponse from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IClaimResponse);
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