import * as fhirInterfaces from '../optionalinterfaces';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export interface IExplanationOfBenefitRelated extends fhirInterfaces.IBackboneElement {
    /**
     * Reference to a related claim.
     */
    claim?: fhirInterfaces.IReference | undefined;
    /**
     * For example, Property/Casualty insurer claim number or Workers Compensation case number.
     */
    reference?: fhirInterfaces.IIdentifier | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 */
export interface IExplanationOfBenefitPayee extends fhirInterfaces.IBackboneElement {
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhirInterfaces.IReference | undefined;
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The members of the team who provided the products and services.
 */
export interface IExplanationOfBenefitCareTeam extends fhirInterfaces.IBackboneElement {
    /**
     * Member of the team who provided the product or service.
     */
    provider?: fhirInterfaces.IReference | undefined;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: boolean | undefined;
    _responsible?: fhirInterfaces.IElement | undefined;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A number to uniquely identify care team entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export interface IExplanationOfBenefitSupportingInfo extends fhirInterfaces.IBackboneElement {
    /**
     * This may contain a category for the local bill type codes.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhirInterfaces.ICoding | undefined;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string | undefined;
    _timingDate?: fhirInterfaces.IElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export interface IExplanationOfBenefitDiagnosis extends fhirInterfaces.IBackboneElement {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhirInterfaces.IReference | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export interface IExplanationOfBenefitProcedure extends fhirInterfaces.IBackboneElement {
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureReference?: fhirInterfaces.IReference | undefined;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirInterfaces.IReference[] | undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface IExplanationOfBenefitInsurance extends fhirInterfaces.IBackboneElement {
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage?: fhirInterfaces.IReference | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal?: boolean | undefined;
    _focal?: fhirInterfaces.IElement | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhirInterfaces.IElement[] | undefined;
}
/**
 * Details of a accident which resulted in injuries which required the products and services listed in the claim.
 */
export interface IExplanationOfBenefitAccident extends fhirInterfaces.IBackboneElement {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * The physical location of the accident event.
     */
    locationReference?: fhirInterfaces.IReference | undefined;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export interface IExplanationOfBenefitItemAdjudication extends fhirInterfaces.IBackboneElement {
    /**
     * For example, amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhirInterfaces.IMoney | undefined;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example, may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    _value?: fhirInterfaces.IElement | undefined;
}
/**
 * Third-tier of goods and services.
 */
export interface IExplanationOfBenefitItemDetailSubDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication?: fhirInterfaces.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
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
    productOrService?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirInterfaces.IReference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * Second-tier of goods and services.
 */
export interface IExplanationOfBenefitItemDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication?: fhirInterfaces.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    productOrService?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhirInterfaces.IExplanationOfBenefitItemDetailSubDetail[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirInterfaces.IReference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export interface IExplanationOfBenefitItem extends fhirInterfaces.IBackboneElement {
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhirInterfaces.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    _careTeamSequence?: fhirInterfaces.IElement[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Second-tier of goods and services.
     */
    detail?: fhirInterfaces.IExplanationOfBenefitItemDetail[] | undefined;
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    _diagnosisSequence?: fhirInterfaces.IElement[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhirInterfaces.IReference[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    _informationSequence?: fhirInterfaces.IElement[] | undefined;
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    _procedureSequence?: fhirInterfaces.IElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A number to uniquely identify item entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
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
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirInterfaces.IReference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * The third-tier service adjudications for payor added services.
 */
export interface IExplanationOfBenefitAddItemDetailSubDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication?: fhirInterfaces.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    productOrService?: fhirInterfaces.ICodeableConcept | undefined;
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
export interface IExplanationOfBenefitAddItemDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication?: fhirInterfaces.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    productOrService?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhirInterfaces.IExplanationOfBenefitAddItemDetailSubDetail[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirInterfaces.IMoney | undefined;
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export interface IExplanationOfBenefitAddItem extends fhirInterfaces.IBackboneElement {
    /**
     * The adjudication results.
     */
    adjudication?: fhirInterfaces.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhirInterfaces.IExplanationOfBenefitAddItemDetail[] | undefined;
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    productOrService?: fhirInterfaces.ICodeableConcept | undefined;
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
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: number[] | undefined;
    _subDetailSequence?: fhirInterfaces.IElement[] | undefined;
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
export interface IExplanationOfBenefitTotal extends fhirInterfaces.IBackboneElement {
    /**
     * Monetary total amount associated with the category.
     */
    amount?: fhirInterfaces.IMoney | undefined;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Payment details for the adjudication of the claim.
 */
export interface IExplanationOfBenefitPayment extends fhirInterfaces.IBackboneElement {
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
    amount?: fhirInterfaces.IMoney | undefined;
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
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export interface IExplanationOfBenefitProcessNote extends fhirInterfaces.IBackboneElement {
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
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: ExplanationOfBenefitProcessNoteTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ExplanationOfBenefit.processNote.type field
 */
export declare enum ExplanationOfBenefitProcessNoteTypeEnum {
    DISPLAY = "display",
    PRINT = "print",
    PRINTOPER = "printoper"
}
/**
 * Benefits Used to date.
 */
export interface IExplanationOfBenefitBenefitBalanceFinancial extends fhirInterfaces.IBackboneElement {
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
    usedMoney?: fhirInterfaces.IMoney | undefined;
}
/**
 * Balance by Benefit Category.
 */
export interface IExplanationOfBenefitBenefitBalance extends fhirInterfaces.IBackboneElement {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    _excluded?: fhirInterfaces.IElement | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: fhirInterfaces.IExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
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
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export interface IExplanationOfBenefit extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ExplanationOfBenefit";
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhirInterfaces.IExplanationOfBenefitAccident | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhirInterfaces.IExplanationOfBenefitAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhirInterfaces.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhirInterfaces.IExplanationOfBenefitBenefitBalance[] | undefined;
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhirInterfaces.IExplanationOfBenefitCareTeam[] | undefined;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: fhirInterfaces.IReference | undefined;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: fhirInterfaces.IReference | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhirInterfaces.IExplanationOfBenefitDiagnosis[] | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhirInterfaces.IElement | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhirInterfaces.IReference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhirInterfaces.IReference | undefined;
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
     * This field is only used for preauthorizations.
     */
    fundsReserveRequested?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhirInterfaces.IExplanationOfBenefitInsurance[] | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer?: fhirInterfaces.IReference | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhirInterfaces.IExplanationOfBenefitItem[] | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhirInterfaces.IReference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: ExplanationOfBenefitOutcomeEnum | undefined;
    _outcome?: fhirInterfaces.IElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
     */
    payee?: fhirInterfaces.IExplanationOfBenefitPayee | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhirInterfaces.IExplanationOfBenefitPayment | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhirInterfaces.IElement[] | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhirInterfaces.IPeriod[] | undefined;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: number | undefined;
    _precedence?: fhirInterfaces.IElement | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhirInterfaces.IReference | undefined;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhirInterfaces.IExplanationOfBenefitProcedure[] | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhirInterfaces.IExplanationOfBenefitProcessNote[] | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhirInterfaces.IReference | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhirInterfaces.IReference | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhirInterfaces.IExplanationOfBenefitRelated[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: ExplanationOfBenefitStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhirInterfaces.IExplanationOfBenefitSupportingInfo[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhirInterfaces.IExplanationOfBenefitTotal[] | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use?: ExplanationOfBenefitUseEnum | undefined;
    _use?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ExplanationOfBenefit.outcome field
 */
export declare enum ExplanationOfBenefitOutcomeEnum {
    QUEUED = "queued",
    COMPLETE = "complete",
    ERROR = "error",
    PARTIAL = "partial"
}
/**
 * Code Values for the ExplanationOfBenefit.status field
 */
export declare enum ExplanationOfBenefitStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
/**
 * Code Values for the ExplanationOfBenefit.use field
 */
export declare enum ExplanationOfBenefitUseEnum {
    CLAIM = "claim",
    PREAUTHORIZATION = "preauthorization",
    PREDETERMINATION = "predetermination"
}
//# sourceMappingURL=IExplanationOfBenefit.d.ts.map