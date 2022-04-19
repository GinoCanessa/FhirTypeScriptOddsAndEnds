import * as fhir from '../fhir';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare type IExplanationOfBenefitRelated = fhir.IBackboneElement & {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.IReference | undefined;
    /**
     * For example, Property/Casualty insurer claim number or Workers Compensation case number.
     */
    reference?: fhir.IIdentifier | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.ICodeableConcept | undefined;
};
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 */
export declare type IExplanationOfBenefitPayee = fhir.IBackboneElement & {
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.IReference | undefined;
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * The members of the team who provided the products and services.
 */
export declare type IExplanationOfBenefitCareTeam = fhir.IBackboneElement & {
    /**
     * Member of the team who provided the product or service.
     */
    provider: fhir.IReference | null;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhir.ICodeableConcept | undefined;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: boolean | undefined;
    _responsible?: fhir.IFhirElement | undefined;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhir.ICodeableConcept | undefined;
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
};
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare type IExplanationOfBenefitSupportingInfo = fhir.IBackboneElement & {
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.ICoding | undefined;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string | undefined;
    _timingDate?: fhir.IFhirElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.IPeriod | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhir.IAttachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhir.IReference | undefined;
};
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare type IExplanationOfBenefitDiagnosis = fhir.IBackboneElement & {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.IReference | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhir.ICodeableConcept | undefined;
    /**
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.ICodeableConcept | undefined;
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare type IExplanationOfBenefitProcedure = fhir.IBackboneElement & {
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureReference?: fhir.IReference | undefined;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
};
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare type IExplanationOfBenefitInsurance = fhir.IBackboneElement & {
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.IReference | null;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    _focal?: fhir.IFhirElement | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhir.IFhirElement[] | undefined;
};
/**
 * Details of a accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare type IExplanationOfBenefitAccident = fhir.IBackboneElement & {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: fhir.IAddress | undefined;
    /**
     * The physical location of the accident event.
     */
    locationReference?: fhir.IReference | undefined;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare type IExplanationOfBenefitItemAdjudication = fhir.IBackboneElement & {
    /**
     * For example, amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.IMoney | undefined;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * For example, may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.ICodeableConcept | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * Third-tier of goods and services.
 */
export declare type IExplanationOfBenefitItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
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
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.ICodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * Second-tier of goods and services.
 */
export declare type IExplanationOfBenefitItemDetail = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.ICodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhir.IExplanationOfBenefitItemDetailSubDetail[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare type IExplanationOfBenefitItem = fhir.IBackboneElement & {
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    _careTeamSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * Second-tier of goods and services.
     */
    detail?: fhir.IExplanationOfBenefitItemDetail[] | undefined;
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    _diagnosisSequence?: fhir.IFhirElement[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhir.IReference[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    _informationSequence?: fhir.IFhirElement[] | undefined;
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    _procedureSequence?: fhir.IFhirElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.ICodeableConcept | undefined;
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
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
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.ICodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * The third-tier service adjudications for payor added services.
 */
export declare type IExplanationOfBenefitAddItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
export declare type IExplanationOfBenefitAddItemDetail = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    subDetail?: fhir.IExplanationOfBenefitAddItemDetailSubDetail[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare type IExplanationOfBenefitAddItem = fhir.IBackboneElement & {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.IExplanationOfBenefitAddItemDetail[] | undefined;
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: number[] | undefined;
    _subDetailSequence?: fhir.IFhirElement[] | undefined;
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
export declare type IExplanationOfBenefitTotal = fhir.IBackboneElement & {
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.IMoney | null;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.ICodeableConcept | null;
};
/**
 * Payment details for the adjudication of the claim.
 */
export declare type IExplanationOfBenefitPayment = fhir.IBackboneElement & {
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
    amount?: fhir.IMoney | undefined;
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
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare type IExplanationOfBenefitProcessNote = fhir.IBackboneElement & {
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
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: ExplanationOfBenefitProcessNoteTypeEnum | undefined;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Benefits Used to date.
 */
export declare type IExplanationOfBenefitBenefitBalanceFinancial = fhir.IBackboneElement & {
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    _allowedUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    _allowedString?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.IMoney | undefined;
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    _usedUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.IMoney | undefined;
};
/**
 * Balance by Benefit Category.
 */
export declare type IExplanationOfBenefitBenefitBalance = fhir.IBackboneElement & {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    _excluded?: fhir.IFhirElement | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: fhir.IExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.ICodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.ICodeableConcept | undefined;
};
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export declare type IExplanationOfBenefit = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ExplanationOfBenefit";
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.IExplanationOfBenefitAccident | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.IExplanationOfBenefitAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhir.IExplanationOfBenefitBenefitBalance[] | undefined;
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhir.IPeriod | undefined;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.IPeriod | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.IExplanationOfBenefitCareTeam[] | undefined;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: fhir.IReference | undefined;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: fhir.IReference | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: string | null;
    _created?: fhir.IFhirElement | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.IExplanationOfBenefitDiagnosis[] | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.IReference | undefined;
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
     * This field is only used for preauthorizations.
     */
    fundsReserveRequested?: fhir.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.IExplanationOfBenefitInsurance[] | null;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.IReference | null;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.IExplanationOfBenefitItem[] | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.IReference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: ExplanationOfBenefitOutcomeEnum | null;
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient: fhir.IReference | null;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
     */
    payee?: fhir.IExplanationOfBenefitPayee | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.IExplanationOfBenefitPayment | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhir.IFhirElement[] | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhir.IPeriod[] | undefined;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: number | undefined;
    _precedence?: fhir.IFhirElement | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.IReference | undefined;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority?: fhir.ICodeableConcept | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.IExplanationOfBenefitProcedure[] | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.IExplanationOfBenefitProcessNote[] | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.IReference | null;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.IReference | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.IExplanationOfBenefitRelated[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ExplanationOfBenefitStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhir.ICodeableConcept | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.IExplanationOfBenefitSupportingInfo[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.IExplanationOfBenefitTotal[] | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ExplanationOfBenefitUseEnum | null;
    _use?: fhir.IFhirElement | undefined;
};
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare class ExplanationOfBenefitRelated extends fhir.BackboneElement implements fhir.IExplanationOfBenefitRelated {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.Reference | undefined;
    /**
     * For example, Property/Casualty insurer claim number or Workers Compensation case number.
     */
    reference?: fhir.Identifier | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitRelated>);
    /**
     * Check if the current ExplanationOfBenefitRelated contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitRelated from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitRelated): ExplanationOfBenefitRelated;
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 */
export declare class ExplanationOfBenefitPayee extends fhir.BackboneElement implements fhir.IExplanationOfBenefitPayee {
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.Reference | undefined;
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitPayee>);
    /**
     * Check if the current ExplanationOfBenefitPayee contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitPayee from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitPayee): ExplanationOfBenefitPayee;
}
/**
 * The members of the team who provided the products and services.
 */
export declare class ExplanationOfBenefitCareTeam extends fhir.BackboneElement implements fhir.IExplanationOfBenefitCareTeam {
    /**
     * Member of the team who provided the product or service.
     */
    provider: fhir.Reference | null;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhir.CodeableConcept | undefined;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: boolean | undefined;
    _responsible?: fhir.FhirElement | undefined;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExplanationOfBenefitCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitCareTeam>);
    /**
     * Check if the current ExplanationOfBenefitCareTeam contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitCareTeam from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitCareTeam): ExplanationOfBenefitCareTeam;
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class ExplanationOfBenefitSupportingInfo extends fhir.BackboneElement implements fhir.IExplanationOfBenefitSupportingInfo {
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.CodeableConcept | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.Coding | undefined;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string | undefined;
    _timingDate?: fhir.FhirElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Default constructor for ExplanationOfBenefitSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitSupportingInfo>);
    /**
     * Check if the current ExplanationOfBenefitSupportingInfo contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitSupportingInfo from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitSupportingInfo): ExplanationOfBenefitSupportingInfo;
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare class ExplanationOfBenefitDiagnosis extends fhir.BackboneElement implements fhir.IExplanationOfBenefitDiagnosis {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.Reference | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhir.CodeableConcept | undefined;
    /**
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConcept | undefined;
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitDiagnosis>);
    /**
     * Check if the current ExplanationOfBenefitDiagnosis contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitDiagnosis from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitDiagnosis): ExplanationOfBenefitDiagnosis;
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare class ExplanationOfBenefitProcedure extends fhir.BackboneElement implements fhir.IExplanationOfBenefitProcedure {
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureReference?: fhir.Reference | undefined;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitProcedure>);
    /**
     * Check if the current ExplanationOfBenefitProcedure contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitProcedure from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitProcedure): ExplanationOfBenefitProcedure;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ExplanationOfBenefitInsurance extends fhir.BackboneElement implements fhir.IExplanationOfBenefitInsurance {
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    _focal?: fhir.FhirElement | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitInsurance>);
    /**
     * Check if the current ExplanationOfBenefitInsurance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitInsurance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitInsurance): ExplanationOfBenefitInsurance;
}
/**
 * Details of a accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare class ExplanationOfBenefitAccident extends fhir.BackboneElement implements fhir.IExplanationOfBenefitAccident {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * The physical location of the accident event.
     */
    locationReference?: fhir.Reference | undefined;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAccident - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitAccident>);
    /**
     * Check if the current ExplanationOfBenefitAccident contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitAccident from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitAccident): ExplanationOfBenefitAccident;
}
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare class ExplanationOfBenefitItemAdjudication extends fhir.BackboneElement implements fhir.IExplanationOfBenefitItemAdjudication {
    /**
     * For example, amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * For example, may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitItemAdjudication>);
    /**
     * Check if the current ExplanationOfBenefitItemAdjudication contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitItemAdjudication from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitItemAdjudication): ExplanationOfBenefitItemAdjudication;
}
/**
 * Third-tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetailSubDetail extends fhir.BackboneElement implements fhir.IExplanationOfBenefitItemDetailSubDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
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
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitItemDetailSubDetail>);
    /**
     * Check if the current ExplanationOfBenefitItemDetailSubDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitItemDetailSubDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitItemDetailSubDetail): ExplanationOfBenefitItemDetailSubDetail;
}
/**
 * Second-tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetail extends fhir.BackboneElement implements fhir.IExplanationOfBenefitItemDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhir.ExplanationOfBenefitItemDetailSubDetail[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitItemDetail>);
    /**
     * Check if the current ExplanationOfBenefitItemDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitItemDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitItemDetail): ExplanationOfBenefitItemDetail;
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare class ExplanationOfBenefitItem extends fhir.BackboneElement implements fhir.IExplanationOfBenefitItem {
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    _careTeamSequence?: fhir.FhirElement[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Second-tier of goods and services.
     */
    detail?: fhir.ExplanationOfBenefitItemDetail[] | undefined;
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    _diagnosisSequence?: fhir.FhirElement[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhir.Reference[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    _informationSequence?: fhir.FhirElement[] | undefined;
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    _procedureSequence?: fhir.FhirElement[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
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
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitItem>);
    /**
     * Check if the current ExplanationOfBenefitItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitItem): ExplanationOfBenefitItem;
}
/**
 * The third-tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetailSubDetail extends fhir.BackboneElement implements fhir.IExplanationOfBenefitAddItemDetailSubDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Default constructor for ExplanationOfBenefitAddItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitAddItemDetailSubDetail>);
    /**
     * Check if the current ExplanationOfBenefitAddItemDetailSubDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitAddItemDetailSubDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitAddItemDetailSubDetail): ExplanationOfBenefitAddItemDetailSubDetail;
}
/**
 * The second-tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetail extends fhir.BackboneElement implements fhir.IExplanationOfBenefitAddItemDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    subDetail?: fhir.ExplanationOfBenefitAddItemDetailSubDetail[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAddItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitAddItemDetail>);
    /**
     * Check if the current ExplanationOfBenefitAddItemDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitAddItemDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitAddItemDetail): ExplanationOfBenefitAddItemDetail;
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare class ExplanationOfBenefitAddItem extends fhir.BackboneElement implements fhir.IExplanationOfBenefitAddItem {
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ExplanationOfBenefitAddItemDetail[] | undefined;
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: number[] | undefined;
    _subDetailSequence?: fhir.FhirElement[] | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAddItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitAddItem>);
    /**
     * Check if the current ExplanationOfBenefitAddItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitAddItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitAddItem): ExplanationOfBenefitAddItem;
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare class ExplanationOfBenefitTotal extends fhir.BackboneElement implements fhir.IExplanationOfBenefitTotal {
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.Money | null;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Default constructor for ExplanationOfBenefitTotal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitTotal>);
    /**
     * Check if the current ExplanationOfBenefitTotal contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitTotal from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitTotal): ExplanationOfBenefitTotal;
}
/**
 * Payment details for the adjudication of the claim.
 */
export declare class ExplanationOfBenefitPayment extends fhir.BackboneElement implements fhir.IExplanationOfBenefitPayment {
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
    amount?: fhir.Money | undefined;
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
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitPayment>);
    /**
     * Check if the current ExplanationOfBenefitPayment contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitPayment from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitPayment): ExplanationOfBenefitPayment;
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare class ExplanationOfBenefitProcessNote extends fhir.BackboneElement implements fhir.IExplanationOfBenefitProcessNote {
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
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: ExplanationOfBenefitProcessNoteTypeEnum | undefined;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExplanationOfBenefitProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitProcessNote>);
    /**
     * Check if the current ExplanationOfBenefitProcessNote contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitProcessNote from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitProcessNote): ExplanationOfBenefitProcessNote;
}
/**
 * Benefits Used to date.
 */
export declare class ExplanationOfBenefitBenefitBalanceFinancial extends fhir.BackboneElement implements fhir.IExplanationOfBenefitBenefitBalanceFinancial {
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    _allowedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    _allowedString?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.Money | undefined;
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    _usedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalanceFinancial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitBenefitBalanceFinancial>);
    /**
     * Check if the current ExplanationOfBenefitBenefitBalanceFinancial contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitBenefitBalanceFinancial from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitBenefitBalanceFinancial): ExplanationOfBenefitBenefitBalanceFinancial;
}
/**
 * Balance by Benefit Category.
 */
export declare class ExplanationOfBenefitBenefitBalance extends fhir.BackboneElement implements fhir.IExplanationOfBenefitBenefitBalance {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category: fhir.CodeableConcept | null;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    _excluded?: fhir.FhirElement | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: fhir.ExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.CodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.CodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefitBenefitBalance>);
    /**
     * Check if the current ExplanationOfBenefitBenefitBalance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefitBenefitBalance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefitBenefitBalance): ExplanationOfBenefitBenefitBalance;
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export declare class ExplanationOfBenefit extends fhir.DomainResource implements fhir.IExplanationOfBenefit {
    /**
     * Resource Type Name
     */
    resourceType: "ExplanationOfBenefit";
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ExplanationOfBenefitAccident | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ExplanationOfBenefitAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhir.ExplanationOfBenefitBenefitBalance[] | undefined;
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhir.Period | undefined;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.Period | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ExplanationOfBenefitCareTeam[] | undefined;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: fhir.Reference | undefined;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: string | null;
    _created?: fhir.FhirElement | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ExplanationOfBenefitDiagnosis[] | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhir.FhirElement | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
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
     * This field is only used for preauthorizations.
     */
    fundsReserveRequested?: fhir.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ExplanationOfBenefitInsurance[] | null;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.Reference | null;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ExplanationOfBenefitItem[] | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: ExplanationOfBenefitOutcomeEnum | null;
    _outcome?: fhir.FhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
     */
    payee?: fhir.ExplanationOfBenefitPayee | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.ExplanationOfBenefitPayment | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhir.FhirElement[] | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhir.Period[] | undefined;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: number | undefined;
    _precedence?: fhir.FhirElement | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ExplanationOfBenefitProcedure[] | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhir.ExplanationOfBenefitProcessNote[] | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.Reference | null;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.Reference | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.ExplanationOfBenefitRelated[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ExplanationOfBenefitStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ExplanationOfBenefitSupportingInfo[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ExplanationOfBenefitTotal[] | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ExplanationOfBenefitUseEnum | null;
    _use?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExplanationOfBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExplanationOfBenefit>);
    /**
     * Check if the current ExplanationOfBenefit contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ExplanationOfBenefit from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IExplanationOfBenefit): ExplanationOfBenefit;
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
//# sourceMappingURL=ExplanationOfBenefit.d.ts.map