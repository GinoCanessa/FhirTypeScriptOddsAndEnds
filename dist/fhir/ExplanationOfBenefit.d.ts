import * as fhir from '../fhir.js';
import { RelatedClaimRelationshipValueSetType } from '../fhirValueSets/RelatedClaimRelationshipValueSet.js';
import { PayeetypeValueSetType } from '../fhirValueSets/PayeetypeValueSet.js';
import { ClaimCareteamroleValueSetType } from '../fhirValueSets/ClaimCareteamroleValueSet.js';
import { ProviderQualificationValueSetType } from '../fhirValueSets/ProviderQualificationValueSet.js';
import { ClaimInformationcategoryValueSetType } from '../fhirValueSets/ClaimInformationcategoryValueSet.js';
import { ClaimExceptionValueSetType } from '../fhirValueSets/ClaimExceptionValueSet.js';
import { MissingToothReasonValueSetType } from '../fhirValueSets/MissingToothReasonValueSet.js';
import { ExDiagnosistypeValueSetType } from '../fhirValueSets/ExDiagnosistypeValueSet.js';
import { ExDiagnosisOnAdmissionValueSetType } from '../fhirValueSets/ExDiagnosisOnAdmissionValueSet.js';
import { ExDiagnosisrelatedgroupValueSetType } from '../fhirValueSets/ExDiagnosisrelatedgroupValueSet.js';
import { ExProcedureTypeValueSetType } from '../fhirValueSets/ExProcedureTypeValueSet.js';
import { Icd10ProceduresValueSetType } from '../fhirValueSets/Icd10ProceduresValueSet.js';
import { V3ActIncidentCodeValueSetType } from '../fhirValueSets/V3ActIncidentCodeValueSet.js';
import { AdjudicationValueSetType } from '../fhirValueSets/AdjudicationValueSet.js';
import { AdjudicationReasonValueSetType } from '../fhirValueSets/AdjudicationReasonValueSet.js';
import { ExRevenueCenterValueSetType } from '../fhirValueSets/ExRevenueCenterValueSet.js';
import { ExBenefitcategoryValueSetType } from '../fhirValueSets/ExBenefitcategoryValueSet.js';
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
import { BenefitTypeValueSetType } from '../fhirValueSets/BenefitTypeValueSet.js';
import { BenefitNetworkValueSetType } from '../fhirValueSets/BenefitNetworkValueSet.js';
import { BenefitUnitValueSetType } from '../fhirValueSets/BenefitUnitValueSet.js';
import { BenefitTermValueSetType } from '../fhirValueSets/BenefitTermValueSet.js';
import { ExplanationofbenefitStatusValueSetType, ExplanationofbenefitStatusValueSetEnum } from '../fhirValueSets/ExplanationofbenefitStatusValueSet.js';
import { ClaimTypeValueSetType } from '../fhirValueSets/ClaimTypeValueSet.js';
import { ClaimSubtypeValueSetType } from '../fhirValueSets/ClaimSubtypeValueSet.js';
import { ClaimUseValueSetType, ClaimUseValueSetEnum } from '../fhirValueSets/ClaimUseValueSet.js';
import { FundsreserveValueSetType } from '../fhirValueSets/FundsreserveValueSet.js';
import { RemittanceOutcomeValueSetType, RemittanceOutcomeValueSetEnum } from '../fhirValueSets/RemittanceOutcomeValueSet.js';
import { FormsValueSetType } from '../fhirValueSets/FormsValueSet.js';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare type IExplanationOfBenefitRelated = fhir.IBackboneElement & {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.IReference | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.ICodeableConcept | undefined;
    /**
     * For example, Property/Casualty insurer claim number or Workers Compensation case number.
     */
    reference?: fhir.IIdentifier | undefined;
};
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 */
export declare type IExplanationOfBenefitPayee = fhir.IBackboneElement & {
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.IReference | undefined;
};
/**
 * The members of the team who provided the products and services.
 */
export declare type IExplanationOfBenefitCareTeam = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * Member of the team who provided the product or service.
     */
    provider: fhir.IReference | null;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.responsible
     */
    _responsible?: fhir.IFhirElement | undefined;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhir.ICodeableConcept | undefined;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhir.ICodeableConcept | undefined;
};
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare type IExplanationOfBenefitSupportingInfo = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.timing[x]
     */
    _timingDate?: fhir.IFhirElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.IPeriod | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.value[x]
     */
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
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.ICoding | undefined;
};
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare type IExplanationOfBenefitDiagnosis = fhir.IBackboneElement & {
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.diagnosis.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.IReference | undefined;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhir.ICodeableConcept | undefined;
    /**
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.ICodeableConcept | undefined;
};
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare type IExplanationOfBenefitProcedure = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.date
     */
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
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
};
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare type IExplanationOfBenefitInsurance = fhir.IBackboneElement & {
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.insurance.focal
     */
    _focal?: fhir.IFhirElement | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.IReference | null;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.insurance.preAuthRef
     */
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
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.accident.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: fhir.IAddress | undefined;
    /**
     * The physical location of the accident event.
     */
    locationReference?: fhir.IReference | undefined;
};
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare type IExplanationOfBenefitItemAdjudication = fhir.IBackboneElement & {
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * For example, may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.ICodeableConcept | undefined;
    /**
     * For example, amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.IMoney | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.adjudication.value
     */
    _value?: fhir.IFhirElement | undefined;
};
/**
 * Third-tier of goods and services.
 */
export declare type IExplanationOfBenefitItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.ICodeableConcept | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.ICodeableConcept[] | undefined;
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
};
/**
 * Second-tier of goods and services.
 */
export declare type IExplanationOfBenefitItemDetail = fhir.IBackboneElement & {
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.ICodeableConcept | undefined;
    /**
     * Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.ICodeableConcept[] | undefined;
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhir.IExplanationOfBenefitItemDetailSubDetail[] | undefined;
};
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare type IExplanationOfBenefitItem = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.careTeamSequence
     */
    _careTeamSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.diagnosisSequence
     */
    _diagnosisSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.procedureSequence
     */
    _procedureSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.informationSequence
     */
    _informationSequence?: fhir.IFhirElement[] | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.ICodeableConcept | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.serviced[x]
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.IReference[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.ICodeableConcept[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhir.IReference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Second-tier of goods and services.
     */
    detail?: fhir.IExplanationOfBenefitItemDetail[] | undefined;
};
/**
 * The third-tier service adjudications for payor added services.
 */
export declare type IExplanationOfBenefitAddItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.subDetail.factor
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.subDetail.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
};
/**
 * The second-tier service adjudications for payor added services.
 */
export declare type IExplanationOfBenefitAddItemDetail = fhir.IBackboneElement & {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.factor
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.IExplanationOfBenefitAddItemDetailSubDetail[] | undefined;
};
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare type IExplanationOfBenefitAddItem = fhir.IBackboneElement & {
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.itemSequence
     */
    _itemSequence?: fhir.IFhirElement[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detailSequence
     */
    _detailSequence?: fhir.IFhirElement[] | undefined;
    /**
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.subDetailSequence
     */
    _subDetailSequence?: fhir.IFhirElement[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.IReference[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.ICodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.serviced[x]
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.IMoney | undefined;
    /**
     * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.noteNumber
     */
    _noteNumber?: fhir.IFhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.IExplanationOfBenefitAddItemDetail[] | undefined;
};
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare type IExplanationOfBenefitTotal = fhir.IBackboneElement & {
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
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
export declare type IExplanationOfBenefitPayment = fhir.IBackboneElement & {
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type?: fhir.ICodeableConcept | undefined;
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
     * Extended properties for primitive element: ExplanationOfBenefit.payment.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount?: fhir.IMoney | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.IIdentifier | undefined;
};
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare type IExplanationOfBenefitProcessNote = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.number
     */
    _number?: fhir.IFhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.text
     */
    _text?: fhir.IFhirElement | undefined;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.ICodeableConcept | undefined;
};
/**
 * Benefits Used to date.
 */
export declare type IExplanationOfBenefitBenefitBalanceFinancial = fhir.IBackboneElement & {
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    _allowedUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    _allowedString?: fhir.IFhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.IMoney | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.used[x]
     */
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
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.excluded
     */
    _excluded?: fhir.IFhirElement | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.ICodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.ICodeableConcept | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: fhir.IExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
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
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ExplanationofbenefitStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhir.ICodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient: fhir.IReference | null;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.IPeriod | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.IReference | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.IReference | null;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority?: fhir.ICodeableConcept | undefined;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserveRequested?: fhir.ICodeableConcept | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.ICodeableConcept | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.IExplanationOfBenefitRelated[] | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.IReference | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.IReference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
     */
    payee?: fhir.IExplanationOfBenefitPayee | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.IReference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.IReference | undefined;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: fhir.IReference | undefined;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: fhir.IReference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: RemittanceOutcomeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.outcome
     */
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.disposition
     */
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.preAuthRef
     */
    _preAuthRef?: fhir.IFhirElement[] | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhir.IPeriod[] | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.IExplanationOfBenefitCareTeam[] | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.IExplanationOfBenefitSupportingInfo[] | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.IExplanationOfBenefitDiagnosis[] | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.IExplanationOfBenefitProcedure[] | undefined;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.precedence
     */
    _precedence?: fhir.IFhirElement | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.IExplanationOfBenefitInsurance[] | null;
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.IExplanationOfBenefitAccident | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.IExplanationOfBenefitItem[] | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.IExplanationOfBenefitAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.IExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.IExplanationOfBenefitTotal[] | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.IExplanationOfBenefitPayment | undefined;
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
    processNote?: fhir.IExplanationOfBenefitProcessNote[] | undefined;
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhir.IPeriod | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhir.IExplanationOfBenefitBenefitBalance[] | undefined;
};
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare class ExplanationOfBenefitRelated extends fhir.BackboneElement implements IExplanationOfBenefitRelated {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.Reference | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * For example, Property/Casualty insurer claim number or Workers Compensation case number.
     */
    reference?: fhir.Identifier | undefined;
    /**
     * Default constructor for ExplanationOfBenefitRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitRelated>);
    /**
     * Example-bound Value Set for relationship
     */
    relationshipExampleValueSet(): RelatedClaimRelationshipValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
 */
export declare class ExplanationOfBenefitPayee extends fhir.BackboneElement implements IExplanationOfBenefitPayee {
    /**
     * Type of Party to be reimbursed: Subscriber, provider, other.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitPayee>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): PayeetypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The members of the team who provided the products and services.
 */
export declare class ExplanationOfBenefitCareTeam extends fhir.BackboneElement implements IExplanationOfBenefitCareTeam {
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Member of the team who provided the product or service.
     */
    provider: fhir.Reference | null;
    /**
     * Responsible might not be required when there is only a single provider listed.
     */
    responsible?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.careTeam.responsible
     */
    _responsible?: fhir.FhirElement | undefined;
    /**
     * Role might not be required when there is only a single provider listed.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The qualification of the practitioner which is applicable for this service.
     */
    qualification?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitCareTeam>);
    /**
     * Example-bound Value Set for role
     */
    roleExampleValueSet(): ClaimCareteamroleValueSetType;
    /**
     * Example-bound Value Set for qualification
     */
    qualificationExampleValueSet(): ProviderQualificationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class ExplanationOfBenefitSupportingInfo extends fhir.BackboneElement implements IExplanationOfBenefitSupportingInfo {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.CodeableConcept | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.timing[x]
     */
    _timingDate?: fhir.FhirElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.supportingInfo.value[x]
     */
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
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.Coding | undefined;
    /**
     * Default constructor for ExplanationOfBenefitSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitSupportingInfo>);
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): ClaimInformationcategoryValueSetType;
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): ClaimExceptionValueSetType;
    /**
     * Example-bound Value Set for reason
     */
    reasonExampleValueSet(): MissingToothReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare class ExplanationOfBenefitDiagnosis extends fhir.BackboneElement implements IExplanationOfBenefitDiagnosis {
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.diagnosis.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
     */
    diagnosisReference?: fhir.Reference | undefined;
    /**
     * For example: admitting, primary, secondary, discharge.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Indication of whether the diagnosis was present on admission to a facility.
     */
    onAdmission?: fhir.CodeableConcept | undefined;
    /**
     * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitDiagnosis>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): ExDiagnosistypeValueSetType;
    /**
     * Example-bound Value Set for onAdmission
     */
    onAdmissionExampleValueSet(): ExDiagnosisOnAdmissionValueSetType;
    /**
     * Example-bound Value Set for packageCode
     */
    packageCodeExampleValueSet(): ExDiagnosisrelatedgroupValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare class ExplanationOfBenefitProcedure extends fhir.BackboneElement implements IExplanationOfBenefitProcedure {
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * When the condition was observed or the relative ranking.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.procedure.date
     */
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
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitProcedure>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): ExProcedureTypeValueSetType;
    /**
     * Example-bound Value Set for procedureCodeableConcept
     */
    procedureCodeableConceptExampleValueSet(): Icd10ProceduresValueSetType;
    /**
     * Example-bound Value Set for procedureReference
     */
    procedureReferenceExampleValueSet(): Icd10ProceduresValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ExplanationOfBenefitInsurance extends fhir.BackboneElement implements IExplanationOfBenefitInsurance {
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.insurance.focal
     */
    _focal?: fhir.FhirElement | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.insurance.preAuthRef
     */
    _preAuthRef?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitInsurance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Details of a accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare class ExplanationOfBenefitAccident extends fhir.BackboneElement implements IExplanationOfBenefitAccident {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.accident.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The physical location of the accident event.
     */
    locationAddress?: fhir.Address | undefined;
    /**
     * The physical location of the accident event.
     */
    locationReference?: fhir.Reference | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAccident - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitAccident>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): V3ActIncidentCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
 */
export declare class ExplanationOfBenefitItemAdjudication extends fhir.BackboneElement implements IExplanationOfBenefitItemAdjudication {
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * For example, may indicate that the funds for this benefit type have been exhausted.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * For example, amount submitted, eligible amount, co-payment, and benefit payable.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example: eligible percentage or co-payment percentage.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.adjudication.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemAdjudication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitItemAdjudication>);
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): AdjudicationValueSetType;
    /**
     * Example-bound Value Set for reason
     */
    reasonExampleValueSet(): AdjudicationReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Third-tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetailSubDetail extends fhir.BackboneElement implements IExplanationOfBenefitItemDetailSubDetail {
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.subDetail.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitItemDetailSubDetail>);
    /**
     * Example-bound Value Set for revenue
     */
    revenueExampleValueSet(): ExRevenueCenterValueSetType;
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): ExBenefitcategoryValueSetType;
    /**
     * Example-bound Value Set for productOrService
     */
    productOrServiceExampleValueSet(): ServiceUsclsValueSetType;
    /**
     * Example-bound Value Set for modifier
     */
    modifierExampleValueSet(): ClaimModifiersValueSetType;
    /**
     * Example-bound Value Set for programCode
     */
    programCodeExampleValueSet(): ExProgramCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Second-tier of goods and services.
 */
export declare class ExplanationOfBenefitItemDetail extends fhir.BackboneElement implements IExplanationOfBenefitItemDetail {
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Examples include: Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
     */
    modifier?: fhir.CodeableConcept[] | undefined;
    /**
     * For example: Neonatal program, child dental program or drug users recovery program.
     */
    programCode?: fhir.CodeableConcept[] | undefined;
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.detail.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Third-tier of goods and services.
     */
    subDetail?: fhir.ExplanationOfBenefitItemDetailSubDetail[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitItemDetail>);
    /**
     * Example-bound Value Set for revenue
     */
    revenueExampleValueSet(): ExRevenueCenterValueSetType;
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): ExBenefitcategoryValueSetType;
    /**
     * Example-bound Value Set for productOrService
     */
    productOrServiceExampleValueSet(): ServiceUsclsValueSetType;
    /**
     * Example-bound Value Set for modifier
     */
    modifierExampleValueSet(): ClaimModifiersValueSetType;
    /**
     * Example-bound Value Set for programCode
     */
    programCodeExampleValueSet(): ExProgramCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
 */
export declare class ExplanationOfBenefitItem extends fhir.BackboneElement implements IExplanationOfBenefitItem {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Care team members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.careTeamSequence
     */
    _careTeamSequence?: fhir.FhirElement[] | undefined;
    /**
     * Diagnoses applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.diagnosisSequence
     */
    _diagnosisSequence?: fhir.FhirElement[] | undefined;
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.procedureSequence
     */
    _procedureSequence?: fhir.FhirElement[] | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.informationSequence
     */
    _informationSequence?: fhir.FhirElement[] | undefined;
    /**
     * The type of revenue or cost center providing the product and/or service.
     */
    revenue?: fhir.CodeableConcept | undefined;
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.serviced[x]
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
     * Extended properties for primitive element: ExplanationOfBenefit.item.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * Unique Device Identifiers associated with this line item.
     */
    udi?: fhir.Reference[] | undefined;
    /**
     * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
     */
    subSite?: fhir.CodeableConcept[] | undefined;
    /**
     * A billed item may include goods or services provided in multiple encounters.
     */
    encounter?: fhir.Reference[] | undefined;
    /**
     * The numbers associated with notes below which apply to the adjudication of this item.
     */
    noteNumber?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.item.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Second-tier of goods and services.
     */
    detail?: fhir.ExplanationOfBenefitItemDetail[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitItem>);
    /**
     * Example-bound Value Set for revenue
     */
    revenueExampleValueSet(): ExRevenueCenterValueSetType;
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): ExBenefitcategoryValueSetType;
    /**
     * Example-bound Value Set for productOrService
     */
    productOrServiceExampleValueSet(): ServiceUsclsValueSetType;
    /**
     * Example-bound Value Set for modifier
     */
    modifierExampleValueSet(): ClaimModifiersValueSetType;
    /**
     * Example-bound Value Set for programCode
     */
    programCodeExampleValueSet(): ExProgramCodeValueSetType;
    /**
     * Example-bound Value Set for locationCodeableConcept
     */
    locationCodeableConceptExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for locationAddress
     */
    locationAddressExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for locationReference
     */
    locationReferenceExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    bodySiteExampleValueSet(): ToothValueSetType;
    /**
     * Example-bound Value Set for subSite
     */
    subSiteExampleValueSet(): SurfaceValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The third-tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetailSubDetail extends fhir.BackboneElement implements IExplanationOfBenefitAddItemDetailSubDetail {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.subDetail.factor
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.subDetail.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAddItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitAddItemDetailSubDetail>);
    /**
     * Example-bound Value Set for productOrService
     */
    productOrServiceExampleValueSet(): ServiceUsclsValueSetType;
    /**
     * Example-bound Value Set for modifier
     */
    modifierExampleValueSet(): ClaimModifiersValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The second-tier service adjudications for payor added services.
 */
export declare class ExplanationOfBenefitAddItemDetail extends fhir.BackboneElement implements IExplanationOfBenefitAddItemDetail {
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.factor
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detail.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * The third-tier service adjudications for payor added services.
     */
    subDetail?: fhir.ExplanationOfBenefitAddItemDetailSubDetail[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAddItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitAddItemDetail>);
    /**
     * Example-bound Value Set for productOrService
     */
    productOrServiceExampleValueSet(): ServiceUsclsValueSetType;
    /**
     * Example-bound Value Set for modifier
     */
    modifierExampleValueSet(): ClaimModifiersValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The first-tier service adjudications for payor added product or service lines.
 */
export declare class ExplanationOfBenefitAddItem extends fhir.BackboneElement implements IExplanationOfBenefitAddItem {
    /**
     * Claim items which this service line is intended to replace.
     */
    itemSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.itemSequence
     */
    _itemSequence?: fhir.FhirElement[] | undefined;
    /**
     * The sequence number of the details within the claim item which this line is intended to replace.
     */
    detailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.detailSequence
     */
    _detailSequence?: fhir.FhirElement[] | undefined;
    /**
     * The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.
     */
    subDetailSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.subDetailSequence
     */
    _subDetailSequence?: fhir.FhirElement[] | undefined;
    /**
     * The providers who are authorized for the services rendered to the patient.
     */
    provider?: fhir.Reference[] | undefined;
    /**
     * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
     */
    productOrService: fhir.CodeableConcept | null;
    /**
     * For example, in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.serviced[x]
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
     */
    net?: fhir.Money | undefined;
    /**
     * For example, providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
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
     * Extended properties for primitive element: ExplanationOfBenefit.addItem.noteNumber
     */
    _noteNumber?: fhir.FhirElement[] | undefined;
    /**
     * The adjudication results.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * The second-tier service adjudications for payor added services.
     */
    detail?: fhir.ExplanationOfBenefitAddItemDetail[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitAddItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitAddItem>);
    /**
     * Example-bound Value Set for productOrService
     */
    productOrServiceExampleValueSet(): ServiceUsclsValueSetType;
    /**
     * Example-bound Value Set for modifier
     */
    modifierExampleValueSet(): ClaimModifiersValueSetType;
    /**
     * Example-bound Value Set for programCode
     */
    programCodeExampleValueSet(): ExProgramCodeValueSetType;
    /**
     * Example-bound Value Set for locationCodeableConcept
     */
    locationCodeableConceptExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for locationAddress
     */
    locationAddressExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for locationReference
     */
    locationReferenceExampleValueSet(): ServicePlaceValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    bodySiteExampleValueSet(): ToothValueSetType;
    /**
     * Example-bound Value Set for subSite
     */
    subSiteExampleValueSet(): SurfaceValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Totals for amounts submitted, co-pays, benefits payable etc.
 */
export declare class ExplanationOfBenefitTotal extends fhir.BackboneElement implements IExplanationOfBenefitTotal {
    /**
     * For example, codes indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
     */
    category: fhir.CodeableConcept | null;
    /**
     * Monetary total amount associated with the category.
     */
    amount: fhir.Money | null;
    /**
     * Default constructor for ExplanationOfBenefitTotal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitTotal>);
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): AdjudicationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Payment details for the adjudication of the claim.
 */
export declare class ExplanationOfBenefitPayment extends fhir.BackboneElement implements IExplanationOfBenefitPayment {
    /**
     * Whether this represents partial or complete payment of the benefits payable.
     */
    type?: fhir.CodeableConcept | undefined;
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
     * Extended properties for primitive element: ExplanationOfBenefit.payment.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Benefits payable less any payment adjustment.
     */
    amount?: fhir.Money | undefined;
    /**
     * For example: EFT number or check number.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Default constructor for ExplanationOfBenefitPayment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitPayment>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): ExPaymenttypeValueSetType;
    /**
     * Example-bound Value Set for adjustmentReason
     */
    adjustmentReasonExampleValueSet(): PaymentAdjustmentReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A note that describes or explains adjudication results in a human readable form.
 */
export declare class ExplanationOfBenefitProcessNote extends fhir.BackboneElement implements IExplanationOfBenefitProcessNote {
    /**
     * A number to uniquely identify a note entry.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.number
     */
    _number?: fhir.FhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.processNote.text
     */
    _text?: fhir.FhirElement | undefined;
    /**
     * Only required if the language is different from the resource language.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ExplanationOfBenefitProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitProcessNote>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): NoteTypeValueSetType;
    /**
     * Preferred-bound Value Set for language
     */
    languagePreferredValueSet(): LanguagesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Benefits Used to date.
 */
export declare class ExplanationOfBenefitBenefitBalanceFinancial extends fhir.BackboneElement implements IExplanationOfBenefitBenefitBalanceFinancial {
    /**
     * For example: deductible, visits, benefit amount.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    _allowedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedString?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.allowed[x]
     */
    _allowedString?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which is permitted under the coverage.
     */
    allowedMoney?: fhir.Money | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.financial.used[x]
     */
    _usedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The quantity of the benefit which have been consumed to date.
     */
    usedMoney?: fhir.Money | undefined;
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalanceFinancial - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitBenefitBalanceFinancial>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): BenefitTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Balance by Benefit Category.
 */
export declare class ExplanationOfBenefitBenefitBalance extends fhir.BackboneElement implements IExplanationOfBenefitBenefitBalance {
    /**
     * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
     */
    category: fhir.CodeableConcept | null;
    /**
     * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
     */
    excluded?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.excluded
     */
    _excluded?: fhir.FhirElement | undefined;
    /**
     * For example: MED01, or DENT2.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.benefitBalance.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
     */
    network?: fhir.CodeableConcept | undefined;
    /**
     * Indicates if the benefits apply to an individual or to the family.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
     */
    term?: fhir.CodeableConcept | undefined;
    /**
     * Benefits Used to date.
     */
    financial?: fhir.ExplanationOfBenefitBenefitBalanceFinancial[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefitBenefitBalance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefitBenefitBalance>);
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): ExBenefitcategoryValueSetType;
    /**
     * Example-bound Value Set for network
     */
    networkExampleValueSet(): BenefitNetworkValueSetType;
    /**
     * Example-bound Value Set for unit
     */
    unitExampleValueSet(): BenefitUnitValueSetType;
    /**
     * Example-bound Value Set for term
     */
    termExampleValueSet(): BenefitTermValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export declare class ExplanationOfBenefit extends fhir.DomainResource implements IExplanationOfBenefit {
    /**
     * Resource Type Name
     */
    resourceType: "ExplanationOfBenefit";
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ExplanationofbenefitStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
     */
    type: fhir.CodeableConcept | null;
    /**
     * This may contain the local bill type codes such as the US UB-04 bill type code.
     */
    subType?: fhir.CodeableConcept | undefined;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use: ClaimUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.Period | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: fhir.Reference | null;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.Reference | null;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserveRequested?: fhir.CodeableConcept | undefined;
    /**
     * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, patient, none.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.ExplanationOfBenefitRelated[] | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and may choose to pay the subscriber instead.
     */
    payee?: fhir.ExplanationOfBenefitPayee | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: fhir.Reference | undefined;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome: RemittanceOutcomeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.outcome
     */
    _outcome?: fhir.FhirElement | undefined;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.disposition
     */
    _disposition?: fhir.FhirElement | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRef?: string[] | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.preAuthRef
     */
    _preAuthRef?: fhir.FhirElement[] | undefined;
    /**
     * This value is only present on preauthorization adjudications.
     */
    preAuthRefPeriod?: fhir.Period[] | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ExplanationOfBenefitCareTeam[] | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ExplanationOfBenefitSupportingInfo[] | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ExplanationOfBenefitDiagnosis[] | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ExplanationOfBenefitProcedure[] | undefined;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: number | undefined;
    /**
     * Extended properties for primitive element: ExplanationOfBenefit.precedence
     */
    _precedence?: fhir.FhirElement | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ExplanationOfBenefitInsurance[] | null;
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ExplanationOfBenefitAccident | undefined;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: fhir.ExplanationOfBenefitItem[] | undefined;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: fhir.ExplanationOfBenefitAddItem[] | undefined;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: fhir.ExplanationOfBenefitItemAdjudication[] | undefined;
    /**
     * Totals for amounts submitted, co-pays, benefits payable etc.
     */
    total?: fhir.ExplanationOfBenefitTotal[] | undefined;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: fhir.ExplanationOfBenefitPayment | undefined;
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
    processNote?: fhir.ExplanationOfBenefitProcessNote[] | undefined;
    /**
     * Not applicable when use=claim.
     */
    benefitPeriod?: fhir.Period | undefined;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: fhir.ExplanationOfBenefitBenefitBalance[] | undefined;
    /**
     * Default constructor for ExplanationOfBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExplanationOfBenefit>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): ExplanationofbenefitStatusValueSetType;
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): ClaimTypeValueSetType;
    /**
     * Example-bound Value Set for subType
     */
    subTypeExampleValueSet(): ClaimSubtypeValueSetType;
    /**
     * Required-bound Value Set for use
     */
    useRequiredValueSet(): ClaimUseValueSetType;
    /**
     * Example-bound Value Set for fundsReserveRequested
     */
    fundsReserveRequestedExampleValueSet(): FundsreserveValueSetType;
    /**
     * Example-bound Value Set for fundsReserve
     */
    fundsReserveExampleValueSet(): FundsreserveValueSetType;
    /**
     * Required-bound Value Set for outcome
     */
    outcomeRequiredValueSet(): RemittanceOutcomeValueSetType;
    /**
     * Example-bound Value Set for formCode
     */
    formCodeExampleValueSet(): FormsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ExplanationOfBenefit.d.ts.map