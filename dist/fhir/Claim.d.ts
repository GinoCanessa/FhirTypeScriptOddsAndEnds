import * as fhir from '../fhir';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare type IClaimRelated = fhir.IBackboneElement & {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.IReference | undefined;
    /**
     * For example, Property/Casualty insurer claim # or Workers Compensation case # .
     */
    reference?: fhir.IIdentifier | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.ICodeableConcept | undefined;
};
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export declare type IClaimPayee = fhir.IBackboneElement & {
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.IReference | undefined;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * The members of the team who provided the products and services.
 */
export declare type IClaimCareTeam = fhir.IBackboneElement & {
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
export declare type IClaimSupportingInfo = fhir.IBackboneElement & {
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.ICodeableConcept | undefined;
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
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhir.IAttachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhir.IReference | undefined;
};
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare type IClaimDiagnosis = fhir.IBackboneElement & {
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
     * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
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
export declare type IClaimProcedure = fhir.IBackboneElement & {
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
     * For example: primary, secondary.
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
export declare type IClaimInsurance = fhir.IBackboneElement & {
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
     * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when 'subrogation=true'.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhir.IFhirElement[] | undefined;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    _sequence?: fhir.IFhirElement | undefined;
};
/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare type IClaimAccident = fhir.IBackboneElement & {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date: string | null;
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
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare type IClaimItemDetailSubDetail = fhir.IBackboneElement & {
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
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
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.IMoney | undefined;
};
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare type IClaimItemDetail = fhir.IBackboneElement & {
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    subDetail?: fhir.IClaimItemDetailSubDetail[] | undefined;
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
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export declare type IClaimItem = fhir.IBackboneElement & {
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    _careTeamSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.IClaimItemDetail[] | undefined;
    /**
     * Diagnosis applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    _diagnosisSequence?: fhir.IFhirElement[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
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
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export declare type IClaim = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Claim";
    /**
     * Details of an accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.IClaimAccident | undefined;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.IPeriod | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.IClaimCareTeam[] | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: string | null;
    _created?: fhir.IFhirElement | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.IClaimDiagnosis[] | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.IReference | undefined;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserve?: fhir.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this claim.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.IClaimInsurance[] | null;
    /**
     * The Insurer who is target of the request.
     */
    insurer?: fhir.IReference | undefined;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
     */
    item?: fhir.IClaimItem[] | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.IReference | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
     */
    patient: fhir.IReference | null;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
     */
    payee?: fhir.IClaimPayee | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.IReference | undefined;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority: fhir.ICodeableConcept | null;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.IClaimProcedure[] | undefined;
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
    related?: fhir.IClaimRelated[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ClaimStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.ICodeableConcept | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.IClaimSupportingInfo[] | undefined;
    /**
     * The total value of the all the items in the claim.
     */
    total?: fhir.IMoney | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseEnum | null;
    _use?: fhir.IFhirElement | undefined;
};
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare class ClaimRelated extends fhir.BackboneElement implements fhir.IClaimRelated {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.Reference | undefined;
    /**
     * For example, Property/Casualty insurer claim # or Workers Compensation case # .
     */
    reference?: fhir.Identifier | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimRelated>);
    /**
     * Check if the current ClaimRelated contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimRelated from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimRelated): ClaimRelated;
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export declare class ClaimPayee extends fhir.BackboneElement implements fhir.IClaimPayee {
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.Reference | undefined;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for ClaimPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimPayee>);
    /**
     * Check if the current ClaimPayee contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimPayee from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimPayee): ClaimPayee;
}
/**
 * The members of the team who provided the products and services.
 */
export declare class ClaimCareTeam extends fhir.BackboneElement implements fhir.IClaimCareTeam {
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
     * Default constructor for ClaimCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimCareTeam>);
    /**
     * Check if the current ClaimCareTeam contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimCareTeam from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimCareTeam): ClaimCareTeam;
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class ClaimSupportingInfo extends fhir.BackboneElement implements fhir.IClaimSupportingInfo {
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.CodeableConcept | null;
    /**
     * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.CodeableConcept | undefined;
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
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimSupportingInfo>);
    /**
     * Check if the current ClaimSupportingInfo contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimSupportingInfo from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimSupportingInfo): ClaimSupportingInfo;
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare class ClaimDiagnosis extends fhir.BackboneElement implements fhir.IClaimDiagnosis {
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
     * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
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
     * Default constructor for ClaimDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimDiagnosis>);
    /**
     * Check if the current ClaimDiagnosis contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimDiagnosis from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimDiagnosis): ClaimDiagnosis;
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare class ClaimProcedure extends fhir.BackboneElement implements fhir.IClaimProcedure {
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
     * For example: primary, secondary.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ClaimProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimProcedure>);
    /**
     * Check if the current ClaimProcedure contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimProcedure from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimProcedure): ClaimProcedure;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ClaimInsurance extends fhir.BackboneElement implements fhir.IClaimInsurance {
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
     * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when 'subrogation=true'.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhir.FhirElement[] | undefined;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ClaimInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimInsurance>);
    /**
     * Check if the current ClaimInsurance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimInsurance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimInsurance): ClaimInsurance;
}
/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare class ClaimAccident extends fhir.BackboneElement implements fhir.IClaimAccident {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date: string | null;
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
     * Default constructor for ClaimAccident - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimAccident>);
    /**
     * Check if the current ClaimAccident contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimAccident from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimAccident): ClaimAccident;
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimItemDetailSubDetail extends fhir.BackboneElement implements fhir.IClaimItemDetailSubDetail {
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
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
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ClaimItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimItemDetailSubDetail>);
    /**
     * Check if the current ClaimItemDetailSubDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimItemDetailSubDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimItemDetailSubDetail): ClaimItemDetailSubDetail;
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimItemDetail extends fhir.BackboneElement implements fhir.IClaimItemDetail {
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    subDetail?: fhir.ClaimItemDetailSubDetail[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhir.Money | undefined;
    /**
     * Default constructor for ClaimItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimItemDetail>);
    /**
     * Check if the current ClaimItemDetail contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimItemDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimItemDetail): ClaimItemDetail;
}
/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export declare class ClaimItem extends fhir.BackboneElement implements fhir.IClaimItem {
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    _careTeamSequence?: fhir.FhirElement[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.ClaimItemDetail[] | undefined;
    /**
     * Diagnosis applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    _diagnosisSequence?: fhir.FhirElement[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
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
     * Default constructor for ClaimItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaimItem>);
    /**
     * Check if the current ClaimItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ClaimItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaimItem): ClaimItem;
}
/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export declare class Claim extends fhir.DomainResource implements fhir.IClaim {
    /**
     * Resource Type Name
     */
    resourceType: "Claim";
    /**
     * Details of an accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ClaimAccident | undefined;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.Period | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ClaimCareTeam[] | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: string | null;
    _created?: fhir.FhirElement | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ClaimDiagnosis[] | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this claim.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ClaimInsurance[] | null;
    /**
     * The Insurer who is target of the request.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
     */
    item?: fhir.ClaimItem[] | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
     */
    payee?: fhir.ClaimPayee | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority: fhir.CodeableConcept | null;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ClaimProcedure[] | undefined;
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
    related?: fhir.ClaimRelated[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ClaimStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ClaimSupportingInfo[] | undefined;
    /**
     * The total value of the all the items in the claim.
     */
    total?: fhir.Money | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseEnum | null;
    _use?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Claim - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IClaim>);
    /**
     * Check if the current Claim contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Claim from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IClaim): Claim;
}
/**
 * Code Values for the Claim.status field
 */
export declare enum ClaimStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
/**
 * Code Values for the Claim.use field
 */
export declare enum ClaimUseEnum {
    CLAIM = "claim",
    PREAUTHORIZATION = "preauthorization",
    PREDETERMINATION = "predetermination"
}
//# sourceMappingURL=Claim.d.ts.map