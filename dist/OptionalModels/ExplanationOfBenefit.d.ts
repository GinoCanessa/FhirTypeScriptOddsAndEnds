import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare class ExplanationOfBenefitRelated extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitRelated {
    /**
     * Reference to a related claim.
     */
    claim?: fhirModels.Reference | undefined;
    /**
     * For example, Property/Casualty insurer claim number or Workers Compensation case number.
     */
    reference?: fhirModels.Identifier | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitRelated from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitRelated>);
    /**
     * Factory function to create a ExplanationOfBenefitRelated from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitRelated): ExplanationOfBenefitRelated;
    /**
     * Check if the current ExplanationOfBenefitRelated contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 */
export declare class ExplanationOfBenefitPayee extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitPayee {
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhirModels.Reference | undefined;
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayee from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitPayee>);
    /**
     * Factory function to create a ExplanationOfBenefitPayee from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitPayee): ExplanationOfBenefitPayee;
    /**
     * Check if the current ExplanationOfBenefitPayee contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The members of the team who provided the products and services.
 */
export declare class ExplanationOfBenefitCareTeam extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitCareTeam {
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
     * Default constructor for ExplanationOfBenefitCareTeam from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitCareTeam>);
    /**
     * Factory function to create a ExplanationOfBenefitCareTeam from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitCareTeam): ExplanationOfBenefitCareTeam;
    /**
     * Check if the current ExplanationOfBenefitCareTeam contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class ExplanationOfBenefitSupportingInfo extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitSupportingInfo {
    /**
     * This may contain a category for the local bill type codes.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhirModels.Coding | undefined;
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
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueAttachment?: fhirModels.Attachment | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ExplanationOfBenefitSupportingInfo from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitSupportingInfo>);
    /**
     * Factory function to create a ExplanationOfBenefitSupportingInfo from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitSupportingInfo): ExplanationOfBenefitSupportingInfo;
    /**
     * Check if the current ExplanationOfBenefitSupportingInfo contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare class ExplanationOfBenefitDiagnosis extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitDiagnosis {
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
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
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
     * Default constructor for ExplanationOfBenefitDiagnosis from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitDiagnosis>);
    /**
     * Factory function to create a ExplanationOfBenefitDiagnosis from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitDiagnosis): ExplanationOfBenefitDiagnosis;
    /**
     * Check if the current ExplanationOfBenefitDiagnosis contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare class ExplanationOfBenefitProcedure extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitProcedure {
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
     * When the condition was observed or the relative ranking.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitProcedure from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitProcedure>);
    /**
     * Factory function to create a ExplanationOfBenefitProcedure from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitProcedure): ExplanationOfBenefitProcedure;
    /**
     * Check if the current ExplanationOfBenefitProcedure contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ExplanationOfBenefitInsurance extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitInsurance {
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage?: fhirModels.Reference | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal?: boolean | undefined;
    _focal?: fhirModels.Element | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitInsurance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitInsurance>);
    /**
     * Factory function to create a ExplanationOfBenefitInsurance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitInsurance): ExplanationOfBenefitInsurance;
    /**
     * Check if the current ExplanationOfBenefitInsurance contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Details of a accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare class ExplanationOfBenefitAccident extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitAccident {
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
     * Default constructor for ExplanationOfBenefitAccident from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitAccident>);
    /**
     * Factory function to create a ExplanationOfBenefitAccident from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitAccident): ExplanationOfBenefitAccident;
    /**
     * Check if the current ExplanationOfBenefitAccident contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare class ExplanationOfBenefitItemAdjudication extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitItemAdjudication {
    /**
     * For example, amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhirModels.Money | undefined;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * For example, may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhirModels.CodeableConcept | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemAdjudication from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitItemAdjudication>);
    /**
     * Factory function to create a ExplanationOfBenefitItemAdjudication from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitItemAdjudication): ExplanationOfBenefitItemAdjudication;
    /**
     * Check if the current ExplanationOfBenefitItemAdjudication contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Third-tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetailSubDetail extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitItemDetailSubDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhirModels.ExplanationOfBenefitItemAdjudication[] | undefined;
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
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
     * Default constructor for ExplanationOfBenefitItemDetailSubDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitItemDetailSubDetail>);
    /**
     * Factory function to create a ExplanationOfBenefitItemDetailSubDetail from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitItemDetailSubDetail): ExplanationOfBenefitItemDetailSubDetail;
    /**
     * Check if the current ExplanationOfBenefitItemDetailSubDetail contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Second-tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetail extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitItemDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhirModels.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhirModels.ExplanationOfBenefitItemDetailSubDetail[] | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhirModels.Reference[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitItemDetail>);
    /**
     * Factory function to create a ExplanationOfBenefitItemDetail from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitItemDetail): ExplanationOfBenefitItemDetail;
    /**
     * Check if the current ExplanationOfBenefitItemDetail contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare class ExplanationOfBenefitItem extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitItem {
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhirModels.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhirModels.CodeableConcept | undefined;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    _careTeamSequence?: fhirModels.Element[] | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * Second-tier of goods and services.
     */
    detail?: fhirModels.ExplanationOfBenefitItemDetail[] | undefined;
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    _diagnosisSequence?: fhirModels.Element[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Default constructor for ExplanationOfBenefitItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitItem>);
    /**
     * Factory function to create a ExplanationOfBenefitItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitItem): ExplanationOfBenefitItem;
    /**
     * Check if the current ExplanationOfBenefitItem contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The third-tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetailSubDetail extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitAddItemDetailSubDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhirModels.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    productOrService?: fhirModels.CodeableConcept | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAddItemDetailSubDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitAddItemDetailSubDetail>);
    /**
     * Factory function to create a ExplanationOfBenefitAddItemDetailSubDetail from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitAddItemDetailSubDetail): ExplanationOfBenefitAddItemDetailSubDetail;
    /**
     * Check if the current ExplanationOfBenefitAddItemDetailSubDetail contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The second-tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetail extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitAddItemDetail {
    /**
     * The adjudication results.
     */
    adjudication?: fhirModels.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    productOrService?: fhirModels.CodeableConcept | undefined;
    /**
     * The number of repetitions of a service or product.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhirModels.ExplanationOfBenefitAddItemDetailSubDetail[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAddItemDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitAddItemDetail>);
    /**
     * Factory function to create a ExplanationOfBenefitAddItemDetail from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitAddItemDetail): ExplanationOfBenefitAddItemDetail;
    /**
     * Check if the current ExplanationOfBenefitAddItemDetail contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare class ExplanationOfBenefitAddItem extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitAddItem {
    /**
     * The adjudication results.
     */
    adjudication?: fhirModels.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhirModels.CodeableConcept | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhirModels.ExplanationOfBenefitAddItemDetail[] | undefined;
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
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
    productOrService?: fhirModels.CodeableConcept | undefined;
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
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: number[] | undefined;
    _subDetailSequence?: fhirModels.Element[] | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
     */
    unitPrice?: fhirModels.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAddItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitAddItem>);
    /**
     * Factory function to create a ExplanationOfBenefitAddItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitAddItem): ExplanationOfBenefitAddItem;
    /**
     * Check if the current ExplanationOfBenefitAddItem contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare class ExplanationOfBenefitTotal extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitTotal {
    /**
     * Monetary total amount associated with the category.
     */
    amount?: fhirModels.Money | undefined;
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitTotal from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitTotal>);
    /**
     * Factory function to create a ExplanationOfBenefitTotal from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitTotal): ExplanationOfBenefitTotal;
    /**
     * Check if the current ExplanationOfBenefitTotal contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Payment details for the adjudication of the claim.
 */
export declare class ExplanationOfBenefitPayment extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitPayment {
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
    amount?: fhirModels.Money | undefined;
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
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayment from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitPayment>);
    /**
     * Factory function to create a ExplanationOfBenefitPayment from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitPayment): ExplanationOfBenefitPayment;
    /**
     * Check if the current ExplanationOfBenefitPayment contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare class ExplanationOfBenefitProcessNote extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitProcessNote {
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
    text?: string | undefined;
    _text?: fhirModels.Element | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: ExplanationOfBenefitProcessNoteTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExplanationOfBenefitProcessNote from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitProcessNote>);
    /**
     * Factory function to create a ExplanationOfBenefitProcessNote from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitProcessNote): ExplanationOfBenefitProcessNote;
    /**
     * Check if the current ExplanationOfBenefitProcessNote contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class ExplanationOfBenefitBenefitBalanceFinancial extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitBenefitBalanceFinancial {
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    _allowedUnsignedInt?: fhirModels.Element | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    _allowedString?: fhirModels.Element | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhirModels.Money | undefined;
    /**
     * For example: deductible, visits, benefit amount.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    _usedUnsignedInt?: fhirModels.Element | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhirModels.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalanceFinancial from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitBenefitBalanceFinancial>);
    /**
     * Factory function to create a ExplanationOfBenefitBenefitBalanceFinancial from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitBenefitBalanceFinancial): ExplanationOfBenefitBenefitBalanceFinancial;
    /**
     * Check if the current ExplanationOfBenefitBenefitBalanceFinancial contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Balance by Benefit Category.
 */
export declare class ExplanationOfBenefitBenefitBalance extends fhirModels.BackboneElement implements fhirInterfaces.IExplanationOfBenefitBenefitBalance {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    _excluded?: fhirModels.Element | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: fhirModels.ExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhirModels.CodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhirModels.CodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefitBenefitBalance>);
    /**
     * Factory function to create a ExplanationOfBenefitBenefitBalance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefitBenefitBalance): ExplanationOfBenefitBenefitBalance;
    /**
     * Check if the current ExplanationOfBenefitBenefitBalance contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export declare class ExplanationOfBenefit extends fhirModels.DomainResource implements fhirInterfaces.IExplanationOfBenefit {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ExplanationOfBenefit";
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhirModels.ExplanationOfBenefitAccident | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhirModels.ExplanationOfBenefitAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhirModels.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhirModels.ExplanationOfBenefitBenefitBalance[] | undefined;
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhirModels.Period | undefined;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhirModels.Period | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhirModels.ExplanationOfBenefitCareTeam[] | undefined;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: fhirModels.Reference | undefined;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: fhirModels.Reference | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhirModels.ExplanationOfBenefitDiagnosis[] | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    _disposition?: fhirModels.Element | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhirModels.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhirModels.Reference | undefined;
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
     * This field is only used for preauthorizations.
     */
    fundsReserveRequested?: fhirModels.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance?: fhirModels.ExplanationOfBenefitInsurance[] | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer?: fhirModels.Reference | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhirModels.ExplanationOfBenefitItem[] | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhirModels.Reference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: ExplanationOfBenefitOutcomeEnum | undefined;
    _outcome?: fhirModels.Element | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
     */
    payee?: fhirModels.ExplanationOfBenefitPayee | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhirModels.ExplanationOfBenefitPayment | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string[] | undefined;
    _preAuthRef?: fhirModels.Element[] | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhirModels.Period[] | undefined;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: number | undefined;
    _precedence?: fhirModels.Element | undefined;
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
    procedure?: fhirModels.ExplanationOfBenefitProcedure[] | undefined;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: fhirModels.ExplanationOfBenefitProcessNote[] | undefined;
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
    related?: fhirModels.ExplanationOfBenefitRelated[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: ExplanationOfBenefitStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhirModels.CodeableConcept | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhirModels.ExplanationOfBenefitSupportingInfo[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhirModels.ExplanationOfBenefitTotal[] | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use?: ExplanationOfBenefitUseEnum | undefined;
    _use?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExplanationOfBenefit from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExplanationOfBenefit>);
    /**
     * Factory function to create a ExplanationOfBenefit from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExplanationOfBenefit): ExplanationOfBenefit;
    /**
     * Check if the current ExplanationOfBenefit contains all required elements.
     */
    checkRequiredElements(): string[];
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