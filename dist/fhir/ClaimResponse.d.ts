import * as fhir from '../fhir.js';
import { AdjudicationValueSetType } from '../fhirValueSets/AdjudicationValueSet.js';
import { AdjudicationReasonValueSetType } from '../fhirValueSets/AdjudicationReasonValueSet.js';
import { ServiceUsclsValueSetType } from '../fhirValueSets/ServiceUsclsValueSet.js';
import { ClaimModifiersValueSetType } from '../fhirValueSets/ClaimModifiersValueSet.js';
import { ExProgramCodeValueSetType } from '../fhirValueSets/ExProgramCodeValueSet.js';
import { ServicePlaceValueSetType } from '../fhirValueSets/ServicePlaceValueSet.js';
import { ToothValueSetType } from '../fhirValueSets/ToothValueSet.js';
import { SurfaceValueSetType } from '../fhirValueSets/SurfaceValueSet.js';
import { ExPaymenttypeValueSetType } from '../fhirValueSets/ExPaymenttypeValueSet.js';
import { PaymentAdjustmentReasonValueSetType } from '../fhirValueSets/PaymentAdjustmentReasonValueSet.js';
import { NoteTypeValueSetType, NoteTypeValueSetEnum } from '../fhirValueSets/NoteTypeValueSet.js';
import { LanguagesValueSetType } from '../fhirValueSets/LanguagesValueSet.js';
import { AdjudicationErrorValueSetType } from '../fhirValueSets/AdjudicationErrorValueSet.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
import { ClaimTypeValueSetType } from '../fhirValueSets/ClaimTypeValueSet.js';
import { ClaimSubtypeValueSetType } from '../fhirValueSets/ClaimSubtypeValueSet.js';
import { ClaimUseValueSetType, ClaimUseValueSetEnum } from '../fhirValueSets/ClaimUseValueSet.js';
import { RemittanceOutcomeValueSetType, RemittanceOutcomeValueSetEnum } from '../fhirValueSets/RemittanceOutcomeValueSet.js';
import { PayeetypeValueSetType } from '../fhirValueSets/PayeetypeValueSet.js';
import { FundsreserveValueSetType } from '../fhirValueSets/FundsreserveValueSet.js';
import { FormsValueSetType } from '../fhirValueSets/FormsValueSet.js';
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare type IClaimResponseItemAdjudication = fhir.IBackboneElement & {
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * For example may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.ICodeableConcept | undefined;
    /**
     * For example: amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.IMoney | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.adjudication.value
     */
    _value?: fhir.IFhirElement | undefined;
};
/**
 * A sub-detail adjudication of a simple product or service.
 */
export declare type IClaimResponseItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.subDetailSequence
     */
    _subDetailSequence?: fhir.IFhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IClaimResponseItemAdjudication[] | undefined;
};
/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare type IClaimResponseItemDetail = fhir.IBackboneElement & {
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.detailSequence
     */
    _detailSequence?: fhir.IFhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
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
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.itemSequence
     */
    _itemSequence?: fhir.IFhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.IClaimResponseItemDetail[] | undefined;
};
/**
 * The third-tier service adjudications for payor added services.
 */
export declare type IClaimResponseAddItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.subDetail.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.subDetail.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
};
/**
 * The second-tier service adjudications for payor added services.
 */
export declare type IClaimResponseAddItemDetail = fhir.IBackboneElement & {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.IClaimResponseAddItemDetailSubDetail[] | undefined;
};
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare type IClaimResponseAddItem = fhir.IBackboneElement & {
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.itemSequence
     */
    _itemSequence?: fhir.IFhirElement[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detailSequence
     */
    _detailSequence?: fhir.IFhirElement[] | undefined;
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.subdetailSequence
     */
    _subdetailSequence?: fhir.IFhirElement[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.IReference[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.serviced[x]
     */
    _servicedDate?: fhir.IFhirElement | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.IPeriod | undefined;
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
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.ICodeableConcept[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.IClaimResponseItemAdjudication[] | null;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.IClaimResponseAddItemDetail[] | undefined;
};
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare type IClaimResponseTotal = fhir.IBackboneElement & {
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.IMoney | null;
};
/**
 * Payment details for the adjudication of the claim.
 */
export declare type IClaimResponsePayment = fhir.IBackboneElement & {
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhir.IMoney | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.ICodeableConcept | undefined;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.payment.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhir.IMoney | null;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.IIdentifier | undefined;
};
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare type IClaimResponseProcessNote = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.number
     */
    _number?: fhir.IFhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.text
     */
    _text?: fhir.IFhirElement | undefined;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.ICodeableConcept | undefined;
};
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare type IClaimResponseInsurance = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.focal
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
     * Extended properties for primitive element: ClaimResponse.insurance.businessArrangement
     */
    _businessArrangement?: fhir.IFhirElement | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.IReference | undefined;
};
/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export declare type IClaimResponseError = fhir.IBackboneElement & {
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.itemSequence
     */
    _itemSequence?: fhir.IFhirElement | undefined;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.detailSequence
     */
    _detailSequence?: fhir.IFhirElement | undefined;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.subDetailSequence
     */
    _subDetailSequence?: fhir.IFhirElement | undefined;
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.ICodeableConcept | null;
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
     * A unique identifier assigned to this claim response.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ClaimResponse.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.ICodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: ClaimResponse.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhir.IReference | null;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: ClaimResponse.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.IReference | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.IReference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.IReference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: RemittanceOutcomeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ClaimResponse.outcome
     */
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.disposition
     */
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.preAuthRef
     */
    _preAuthRef?: fhir.IFhirElement | undefined;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: fhir.IPeriod | undefined;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: fhir.ICodeableConcept | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.IClaimResponseItem[] | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.IClaimResponseAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.IClaimResponseItemAdjudication[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.IClaimResponseTotal[] | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.IClaimResponsePayment | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.ICodeableConcept | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.ICodeableConcept | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhir.IAttachment | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.IClaimResponseProcessNote[] | undefined;
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest?: fhir.IReference[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.IClaimResponseInsurance[] | undefined;
    /**
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error?: fhir.IClaimResponseError[] | undefined;
};
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare class ClaimResponseItemAdjudication extends fhir.BackboneElement implements IClaimResponseItemAdjudication {
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * For example may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * For example: amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.adjudication.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClaimResponseItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseItemAdjudication>);
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): AdjudicationValueSetType;
    /**
     * Example-bound Value Set for reason
     */
    static reasonExampleValueSet(): AdjudicationReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A sub-detail adjudication of a simple product or service.
 */
export declare class ClaimResponseItemDetailSubDetail extends fhir.BackboneElement implements IClaimResponseItemDetailSubDetail {
    /**
     * A number to uniquely reference the claim sub-detail entry.
     */
    subDetailSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.subDetailSequence
     */
    _subDetailSequence?: fhir.FhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.subDetail.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ClaimResponseItemAdjudication[] | undefined;
    /**
     * Default constructor for ClaimResponseItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseItemDetailSubDetail>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimResponseItemDetail extends fhir.BackboneElement implements IClaimResponseItemDetail {
    /**
     * A number to uniquely reference the claim detail entry.
     */
    detailSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.detailSequence
     */
    _detailSequence?: fhir.FhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.detail.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * A sub-detail adjudication of a simple product or service.
     */
    subDetail?: fhir.ClaimResponseItemDetailSubDetail[] | undefined;
    /**
     * Default constructor for ClaimResponseItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseItemDetail>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare class ClaimResponseItem extends fhir.BackboneElement implements IClaimResponseItem {
    /**
     * A number to uniquely reference the claim item entries.
     */
    itemSequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.item.itemSequence
     */
    _itemSequence?: fhir.FhirElement | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.item.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.ClaimResponseItemDetail[] | undefined;
    /**
     * Default constructor for ClaimResponseItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseItem>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The third-tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetailSubDetail extends fhir.BackboneElement implements IClaimResponseAddItemDetailSubDetail {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.subDetail.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.subDetail.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * Default constructor for ClaimResponseAddItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseAddItemDetailSubDetail>);
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
 * The second-tier service adjudications for payor added services.
 */
export declare class ClaimResponseAddItemDetail extends fhir.BackboneElement implements IClaimResponseAddItemDetail {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detail.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.ClaimResponseAddItemDetailSubDetail[] | undefined;
    /**
     * Default constructor for ClaimResponseAddItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseAddItemDetail>);
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
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare class ClaimResponseAddItem extends fhir.BackboneElement implements IClaimResponseAddItem {
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.itemSequence
     */
    _itemSequence?: fhir.FhirElement[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.detailSequence
     */
    _detailSequence?: fhir.FhirElement[] | undefined;
    /**
     * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
     */
    subdetailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.subdetailSequence
     */
    _subdetailSequence?: fhir.FhirElement[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.Reference[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.serviced[x]
     */
    _servicedDate?: fhir.FhirElement | undefined;
    /**
     * The date or dates when the service or product was supplied, performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
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
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.addItem.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication: fhir.ClaimResponseItemAdjudication[] | null;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ClaimResponseAddItemDetail[] | undefined;
    /**
     * Default constructor for ClaimResponseAddItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseAddItem>);
    /**
     * Example-bound Value Set for productOrService
     */
    static productOrServiceExampleValueSet(): ServiceUsclsValueSetType;
    /**
     * Example-bound Value Set for modifier
     */
    static modifierExampleValueSet(): ClaimModifiersValueSetType;
    /**
     * Example-bound Value Set for programCode
     */
    static programCodeExampleValueSet(): ExProgramCodeValueSetType;
    /**
     * Example-bound Value Set for locationCodeableConcept
     */
    static locationCodeableConceptExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for locationAddress
     */
    static locationAddressExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for locationReference
     */
    static locationReferenceExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    static bodySiteExampleValueSet(): ToothValueSetType;
    /**
     * Example-bound Value Set for subSite
     */
    static subSiteExampleValueSet(): SurfaceValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare class ClaimResponseTotal extends fhir.BackboneElement implements IClaimResponseTotal {
    /**
     * For example codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.Money | null;
    /**
     * Default constructor for ClaimResponseTotal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseTotal>);
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): AdjudicationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Payment details for the adjudication of the claim.
 */
export declare class ClaimResponsePayment extends fhir.BackboneElement implements IClaimResponsePayment {
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Insurers will deduct amounts owing from the provider (adjustment), such as a prior overpayment, from the amount owing to the provider (benefits payable) when payment is made to the provider.
     */
    adjustment?: fhir.Money | undefined;
    /**
     * Reason for the payment adjustment.
     */
    adjustmentReason?: fhir.CodeableConcept | undefined;
    /**
     * Estimated date the payment will be issued or the actual issue date of payment.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.payment.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount: fhir.Money | null;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Default constructor for ClaimResponsePayment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponsePayment>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ExPaymenttypeValueSetType;
    /**
     * Example-bound Value Set for adjustmentReason
     */
    static adjustmentReasonExampleValueSet(): PaymentAdjustmentReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare class ClaimResponseProcessNote extends fhir.BackboneElement implements IClaimResponseProcessNote {
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.number
     */
    _number?: fhir.FhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: ClaimResponse.processNote.text
     */
    _text?: fhir.FhirElement | undefined;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimResponseProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseProcessNote>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): NoteTypeValueSetType;
    /**
     * Preferred-bound Value Set for language
     */
    static languagePreferredValueSet(): LanguagesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ClaimResponseInsurance extends fhir.BackboneElement implements IClaimResponseInsurance {
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: ClaimResponse.insurance.focal
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
     * Extended properties for primitive element: ClaimResponse.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseInsurance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
 */
export declare class ClaimResponseError extends fhir.BackboneElement implements IClaimResponseError {
    /**
     * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    itemSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.itemSequence
     */
    _itemSequence?: fhir.FhirElement | undefined;
    /**
     * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    detailSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.detailSequence
     */
    _detailSequence?: fhir.FhirElement | undefined;
    /**
     * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure.
     */
    subDetailSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.error.subDetailSequence
     */
    _subDetailSequence?: fhir.FhirElement | undefined;
    /**
     * An error code, from a specified code system, which details why the claim could not be adjudicated.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Default constructor for ClaimResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponseError>);
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
 * This resource provides the adjudication details from the processing of a Claim resource.
 */
export declare class ClaimResponse extends fhir.DomainResource implements IClaimResponse {
    /**
     * Resource Type Name
     */
    resourceType: "ClaimResponse";
    /**
     * A unique identifier assigned to this claim response.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ClaimResponse.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    type: fhir.CodeableConcept | null;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: ClaimResponse.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: ClaimResponse.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.Reference | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: RemittanceOutcomeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ClaimResponse.outcome
     */
    _outcome?: fhir.FhirElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.disposition
     */
    _disposition?: fhir.FhirElement | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string | undefined;
    /**
     * Extended properties for primitive element: ClaimResponse.preAuthRef
     */
    _preAuthRef?: fhir.FhirElement | undefined;
    /**
     * The time frame during which this authorization is effective.
     */
    preAuthPeriod?: fhir.Period | undefined;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    payeeType?: fhir.CodeableConcept | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ClaimResponseItem[] | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ClaimResponseAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ClaimResponseItemAdjudication[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ClaimResponseTotal[] | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.ClaimResponsePayment | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConcept | undefined;
    /**
     * Needed to permit insurers to include the actual form.
     */
    form?: fhir.Attachment | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.ClaimResponseProcessNote[] | undefined;
    /**
     * For example: professional reports, documents, images, clinical resources, or accident reports.
     */
    communicationRequest?: fhir.Reference[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhir.ClaimResponseInsurance[] | undefined;
    /**
     * If the request contains errors then an error element should be provided and no adjudication related sections (item, addItem, or payment) should be present.
     */
    error?: fhir.ClaimResponseError[] | undefined;
    /**
     * Default constructor for ClaimResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimResponse>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): ClaimTypeValueSetType;
    /**
     * Example-bound Value Set for subType
     */
    static subTypeExampleValueSet(): ClaimSubtypeValueSetType;
    /**
     * Required-bound Value Set for use
     */
    static useRequiredValueSet(): ClaimUseValueSetType;
    /**
     * Required-bound Value Set for outcome
     */
    static outcomeRequiredValueSet(): RemittanceOutcomeValueSetType;
    /**
     * Example-bound Value Set for payeeType
     */
    static payeeTypeExampleValueSet(): PayeetypeValueSetType;
    /**
     * Example-bound Value Set for fundsReserve
     */
    static fundsReserveExampleValueSet(): FundsreserveValueSetType;
    /**
     * Example-bound Value Set for formCode
     */
    static formCodeExampleValueSet(): FormsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ClaimResponse.d.ts.map