import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare class ClaimRelated extends fhirModels.BackboneElement implements fhirInterfaces.IClaimRelated {
    /**
     * Reference to a related claim.
     */
    claim?: fhirModels.Reference | undefined;
    /**
     * For example, Property/Casualty insurer claim # or Workers Compensation case # .
     */
    reference?: fhirModels.Identifier | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimRelated from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimRelated>);
    /**
     * Factory function to create a ClaimRelated from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimRelated): ClaimRelated;
    /**
     * Check if the current ClaimRelated contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export declare class ClaimPayee extends fhirModels.BackboneElement implements fhirInterfaces.IClaimPayee {
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhirModels.Reference | undefined;
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimPayee from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimPayee>);
    /**
     * Factory function to create a ClaimPayee from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimPayee): ClaimPayee;
    /**
     * Check if the current ClaimPayee contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The members of the team who provided the products and services.
 */
export declare class ClaimCareTeam extends fhirModels.BackboneElement implements fhirInterfaces.IClaimCareTeam {
    /**
     * Member of the team who provided the product or service.
     */
    provider?: fhirModels.Reference | undefined;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhirModels.CodeableConcept | undefined;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: boolean | undefined;
    _responsible?: fhirModels.Element | undefined;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhirModels.CodeableConcept | undefined;
    /**
     * A number to uniquely identify care team entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * Default constructor for ClaimCareTeam from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimCareTeam>);
    /**
     * Factory function to create a ClaimCareTeam from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimCareTeam): ClaimCareTeam;
    /**
     * Check if the current ClaimCareTeam contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class ClaimSupportingInfo extends fhirModels.BackboneElement implements fhirInterfaces.IClaimSupportingInfo {
    /**
     * This may contain a category for the local bill type codes.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhirModels.CodeableConcept | undefined;
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string | undefined;
    _timingDate?: fhirModels.Element | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhirModels.Period | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhirModels.Attachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ClaimSupportingInfo from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimSupportingInfo>);
    /**
     * Factory function to create a ClaimSupportingInfo from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimSupportingInfo): ClaimSupportingInfo;
    /**
     * Check if the current ClaimSupportingInfo contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare class ClaimDiagnosis extends fhirModels.BackboneElement implements fhirInterfaces.IClaimDiagnosis {
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhirModels.Reference | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhirModels.CodeableConcept | undefined;
    /**
     * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhirModels.CodeableConcept | undefined;
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for ClaimDiagnosis from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimDiagnosis>);
    /**
     * Factory function to create a ClaimDiagnosis from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimDiagnosis): ClaimDiagnosis;
    /**
     * Check if the current ClaimDiagnosis contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare class ClaimProcedure extends fhirModels.BackboneElement implements fhirInterfaces.IClaimProcedure {
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The code or reference to a Procedure resource which identifies the clinical intervention performed.
     */
    procedureReference?: fhirModels.Reference | undefined;
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * For example: primary, secondary.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for ClaimProcedure from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimProcedure>);
    /**
     * Factory function to create a ClaimProcedure from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimProcedure): ClaimProcedure;
    /**
     * Check if the current ClaimProcedure contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ClaimInsurance extends fhirModels.BackboneElement implements fhirInterfaces.IClaimInsurance {
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
    coverage?: fhirModels.Reference | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal?: boolean | undefined;
    _focal?: fhirModels.Element | undefined;
    /**
     * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when 'subrogation=true'.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhirModels.Element[] | undefined;
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * Default constructor for ClaimInsurance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimInsurance>);
    /**
     * Factory function to create a ClaimInsurance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimInsurance): ClaimInsurance;
    /**
     * Check if the current ClaimInsurance contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare class ClaimAccident extends fhirModels.BackboneElement implements fhirInterfaces.IClaimAccident {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: fhirModels.Address | undefined;
    /**
     * The physical location of the accident event.
     */
    locationReference?: fhirModels.Reference | undefined;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimAccident from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimAccident>);
    /**
     * Factory function to create a ClaimAccident from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimAccident): ClaimAccident;
    /**
     * Check if the current ClaimAccident contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimItemDetailSubDetail extends fhirModels.BackboneElement implements fhirInterfaces.IClaimItemDetailSubDetail {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhirModels.Money | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService?: fhirModels.CodeableConcept | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhirModels.CodeableConcept | undefined;
    /**
     * A number to uniquely identify item entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirModels.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ClaimItemDetailSubDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimItemDetailSubDetail>);
    /**
     * Factory function to create a ClaimItemDetailSubDetail from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimItemDetailSubDetail): ClaimItemDetailSubDetail;
    /**
     * Check if the current ClaimItemDetailSubDetail contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimItemDetail extends fhirModels.BackboneElement implements fhirInterfaces.IClaimItemDetail {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhirModels.Money | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService?: fhirModels.CodeableConcept | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhirModels.CodeableConcept | undefined;
    /**
     * A number to uniquely identify item entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    subDetail?: fhirModels.ClaimItemDetailSubDetail[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirModels.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ClaimItemDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimItemDetail>);
    /**
     * Factory function to create a ClaimItemDetail from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimItemDetail): ClaimItemDetail;
    /**
     * Check if the current ClaimItemDetail contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export declare class ClaimItem extends fhirModels.BackboneElement implements fhirInterfaces.IClaimItem {
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhirModels.CodeableConcept | undefined;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    _careTeamSequence?: fhirModels.Element[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhirModels.ClaimItemDetail[] | undefined;
    /**
     * Diagnosis applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    _diagnosisSequence?: fhirModels.Element[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhirModels.Reference[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    _informationSequence?: fhirModels.Element[] | undefined;
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
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    _procedureSequence?: fhirModels.Element[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService?: fhirModels.CodeableConcept | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhirModels.CodeableConcept | undefined;
    /**
     * A number to uniquely identify item entries.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
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
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirModels.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ClaimItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaimItem>);
    /**
     * Factory function to create a ClaimItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaimItem): ClaimItem;
    /**
     * Check if the current ClaimItem contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export declare class Claim extends fhirModels.DomainResource implements fhirInterfaces.IClaim {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Claim";
    /**
     * Details of an accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhirModels.ClaimAccident | undefined;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhirModels.Period | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhirModels.ClaimCareTeam[] | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhirModels.ClaimDiagnosis[] | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhirModels.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhirModels.Reference | undefined;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserve?: fhirModels.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this claim.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhirModels.ClaimInsurance[] | undefined;
    /**
     * The Insurer who is target of the request.
     */
    insurer?: fhirModels.Reference | undefined;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
     */
    item?: fhirModels.ClaimItem[] | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhirModels.Reference | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
     */
    payee?: fhirModels.ClaimPayee | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhirModels.Reference | undefined;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority?: fhirModels.CodeableConcept | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhirModels.ClaimProcedure[] | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider?: fhirModels.Reference | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhirModels.Reference | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhirModels.ClaimRelated[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: ClaimStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
     */
    subType?: fhirModels.CodeableConcept | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhirModels.ClaimSupportingInfo[] | undefined;
    /**
     * The total value of the all the items in the claim.
     */
    total?: fhirModels.Money | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use?: ClaimUseEnum | undefined;
    _use?: fhirModels.Element | undefined;
    /**
     * Default constructor for Claim from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IClaim>);
    /**
     * Factory function to create a Claim from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IClaim): Claim;
    /**
     * Check if the current Claim contains all required elements.
     */
    checkRequiredElements(): string[];
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