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
import { ExRevenueCenterValueSetType } from '../fhirValueSets/ExRevenueCenterValueSet.js';
import { ExBenefitcategoryValueSetType } from '../fhirValueSets/ExBenefitcategoryValueSet.js';
import { ServiceUsclsValueSetType } from '../fhirValueSets/ServiceUsclsValueSet.js';
import { ClaimModifiersValueSetType } from '../fhirValueSets/ClaimModifiersValueSet.js';
import { ExProgramCodeValueSetType } from '../fhirValueSets/ExProgramCodeValueSet.js';
import { ServicePlaceValueSetType } from '../fhirValueSets/ServicePlaceValueSet.js';
import { ToothValueSetType } from '../fhirValueSets/ToothValueSet.js';
import { SurfaceValueSetType } from '../fhirValueSets/SurfaceValueSet.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
import { ClaimTypeValueSetType } from '../fhirValueSets/ClaimTypeValueSet.js';
import { ClaimSubtypeValueSetType } from '../fhirValueSets/ClaimSubtypeValueSet.js';
import { ClaimUseValueSetType, ClaimUseValueSetEnum } from '../fhirValueSets/ClaimUseValueSet.js';
import { ProcessPriorityValueSetType } from '../fhirValueSets/ProcessPriorityValueSet.js';
import { FundsreserveValueSetType } from '../fhirValueSets/FundsreserveValueSet.js';
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare type IClaimRelated = fhir.IBackboneElement & {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.IReference | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.ICodeableConcept | undefined;
    /**
     * For example, Property/Casualty insurer claim # or Workers Compensation case # .
     */
    reference?: fhir.IIdentifier | undefined;
};
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export declare type IClaimPayee = fhir.IBackboneElement & {
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.IReference | undefined;
};
/**
 * The members of the team who provided the products and services.
 */
export declare type IClaimCareTeam = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.careTeam.sequence
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
     * Extended properties for primitive element: Claim.careTeam.responsible
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
export declare type IClaimSupportingInfo = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.ICodeableConcept | null;
    /**
     * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.timing[x]
     */
    _timingDate?: fhir.IFhirElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.IPeriod | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.value[x]
     */
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
    /**
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.ICodeableConcept | undefined;
};
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare type IClaimDiagnosis = fhir.IBackboneElement & {
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.diagnosis.sequence
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
     * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.ICodeableConcept | undefined;
};
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare type IClaimProcedure = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.procedure.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * For example: primary, secondary.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.procedure.date
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
export declare type IClaimInsurance = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.insurance.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: Claim.insurance.focal
     */
    _focal?: fhir.IFhirElement | undefined;
    /**
     * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when 'subrogation=true'.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.IReference | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.businessArrangement
     */
    _businessArrangement?: fhir.IFhirElement | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.preAuthRef
     */
    _preAuthRef?: fhir.IFhirElement[] | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.IReference | undefined;
};
/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare type IClaimAccident = fhir.IBackboneElement & {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: Claim.accident.date
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
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare type IClaimItemDetailSubDetail = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.sequence
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: Claim.item.detail.subDetail.factor
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
};
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare type IClaimItemDetail = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.detail.sequence
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: Claim.item.detail.factor
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    subDetail?: fhir.IClaimItemDetailSubDetail[] | undefined;
};
/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export declare type IClaimItem = fhir.IBackboneElement & {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.careTeamSequence
     */
    _careTeamSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Diagnosis applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.diagnosisSequence
     */
    _diagnosisSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.procedureSequence
     */
    _procedureSequence?: fhir.IFhirElement[] | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.informationSequence
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
     * Extended properties for primitive element: Claim.item.serviced[x]
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
     * Extended properties for primitive element: Claim.item.factor
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
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.IReference[] | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.IClaimItemDetail[] | undefined;
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
     * A unique identifier assigned to this claim.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Claim.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
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
     * Extended properties for primitive element: Claim.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
     */
    patient: fhir.IReference | null;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.IPeriod | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: Claim.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * The Insurer who is target of the request.
     */
    insurer?: fhir.IReference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.IReference | null;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority: fhir.ICodeableConcept | null;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserve?: fhir.ICodeableConcept | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.IClaimRelated[] | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.IReference | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.IReference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
     */
    payee?: fhir.IClaimPayee | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.IReference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.IReference | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.IClaimCareTeam[] | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.IClaimSupportingInfo[] | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.IClaimDiagnosis[] | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.IClaimProcedure[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.IClaimInsurance[] | null;
    /**
     * Details of an accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.IClaimAccident | undefined;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
     */
    item?: fhir.IClaimItem[] | undefined;
    /**
     * The total value of the all the items in the claim.
     */
    total?: fhir.IMoney | undefined;
};
/**
 * For example,  for the original treatment and follow-up exams.
 */
export declare class ClaimRelated extends fhir.BackboneElement implements IClaimRelated {
    /**
     * Reference to a related claim.
     */
    claim?: fhir.Reference | undefined;
    /**
     * For example, prior claim or umbrella.
     */
    relationship?: fhir.CodeableConcept | undefined;
    /**
     * For example, Property/Casualty insurer claim # or Workers Compensation case # .
     */
    reference?: fhir.Identifier | undefined;
    /**
     * Default constructor for ClaimRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimRelated>);
    /**
     * Example-bound Value Set for relationship
     */
    static relationshipExampleValueSet(): RelatedClaimRelationshipValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export declare class ClaimPayee extends fhir.BackboneElement implements IClaimPayee {
    /**
     * Type of Party to be reimbursed: subscriber, provider, other.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Not required if the payee is 'subscriber' or 'provider'.
     */
    party?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimPayee - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimPayee>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): PayeetypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The members of the team who provided the products and services.
 */
export declare class ClaimCareTeam extends fhir.BackboneElement implements IClaimCareTeam {
    /**
     * A number to uniquely identify care team entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.careTeam.sequence
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
     * Extended properties for primitive element: Claim.careTeam.responsible
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
     * Default constructor for ClaimCareTeam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimCareTeam>);
    /**
     * Example-bound Value Set for role
     */
    static roleExampleValueSet(): ClaimCareteamroleValueSetType;
    /**
     * Example-bound Value Set for qualification
     */
    static qualificationExampleValueSet(): ProviderQualificationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export declare class ClaimSupportingInfo extends fhir.BackboneElement implements IClaimSupportingInfo {
    /**
     * A number to uniquely identify supporting information entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * This may contain a category for the local bill type codes.
     */
    category: fhir.CodeableConcept | null;
    /**
     * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingDate?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.timing[x]
     */
    _timingDate?: fhir.FhirElement | undefined;
    /**
     * The date when or period to which this information refers.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.supportingInfo.value[x]
     */
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
     * For example: the reason for the additional stay, or why a tooth is  missing.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimSupportingInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimSupportingInfo>);
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): ClaimInformationcategoryValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ClaimExceptionValueSetType;
    /**
     * Example-bound Value Set for reason
     */
    static reasonExampleValueSet(): MissingToothReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export declare class ClaimDiagnosis extends fhir.BackboneElement implements IClaimDiagnosis {
    /**
     * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.diagnosis.sequence
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
     * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
     */
    packageCode?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ClaimDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimDiagnosis>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ExDiagnosistypeValueSetType;
    /**
     * Example-bound Value Set for onAdmission
     */
    static onAdmissionExampleValueSet(): ExDiagnosisOnAdmissionValueSetType;
    /**
     * Example-bound Value Set for packageCode
     */
    static packageCodeExampleValueSet(): ExDiagnosisrelatedgroupValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export declare class ClaimProcedure extends fhir.BackboneElement implements IClaimProcedure {
    /**
     * A number to uniquely identify procedure entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.procedure.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * For example: primary, secondary.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Date and optionally time the procedure was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.procedure.date
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
     * Default constructor for ClaimProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimProcedure>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): ExProcedureTypeValueSetType;
    /**
     * Example-bound Value Set for procedureCodeableConcept
     */
    static procedureCodeableConceptExampleValueSet(): Icd10ProceduresValueSetType;
    /**
     * Example-bound Value Set for procedureReference
     */
    static procedureReferenceExampleValueSet(): Icd10ProceduresValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export declare class ClaimInsurance extends fhir.BackboneElement implements IClaimInsurance {
    /**
     * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.insurance.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
     */
    focal: boolean | null;
    /**
     * Extended properties for primitive element: Claim.insurance.focal
     */
    _focal?: fhir.FhirElement | undefined;
    /**
     * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when 'subrogation=true'.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
     */
    coverage: fhir.Reference | null;
    /**
     * A business agreement number established between the provider and the insurer for special business processing purposes.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement | undefined;
    /**
     * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
     */
    preAuthRef?: string[] | undefined;
    /**
     * Extended properties for primitive element: Claim.insurance.preAuthRef
     */
    _preAuthRef?: fhir.FhirElement[] | undefined;
    /**
     * Must not be specified when 'focal=true' for this insurance.
     */
    claimResponse?: fhir.Reference | undefined;
    /**
     * Default constructor for ClaimInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimInsurance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export declare class ClaimAccident extends fhir.BackboneElement implements IClaimAccident {
    /**
     * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: Claim.accident.date
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
     * Default constructor for ClaimAccident - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimAccident>);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): V3ActIncidentCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimItemDetailSubDetail extends fhir.BackboneElement implements IClaimItemDetailSubDetail {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.detail.subDetail.sequence
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: Claim.item.detail.subDetail.factor
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
     * Default constructor for ClaimItemDetailSubDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimItemDetailSubDetail>);
    /**
     * Example-bound Value Set for revenue
     */
    static revenueExampleValueSet(): ExRevenueCenterValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): ExBenefitcategoryValueSetType;
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export declare class ClaimItemDetail extends fhir.BackboneElement implements IClaimItemDetail {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.detail.sequence
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
     * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
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
     * Extended properties for primitive element: Claim.item.detail.factor
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
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    subDetail?: fhir.ClaimItemDetailSubDetail[] | undefined;
    /**
     * Default constructor for ClaimItemDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimItemDetail>);
    /**
     * Example-bound Value Set for revenue
     */
    static revenueExampleValueSet(): ExRevenueCenterValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): ExBenefitcategoryValueSetType;
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export declare class ClaimItem extends fhir.BackboneElement implements IClaimItem {
    /**
     * A number to uniquely identify item entries.
     */
    sequence: number | null;
    /**
     * Extended properties for primitive element: Claim.item.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
    /**
     * CareTeam members related to this service or product.
     */
    careTeamSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.careTeamSequence
     */
    _careTeamSequence?: fhir.FhirElement[] | undefined;
    /**
     * Diagnosis applicable for this service or product.
     */
    diagnosisSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.diagnosisSequence
     */
    _diagnosisSequence?: fhir.FhirElement[] | undefined;
    /**
     * Procedures applicable for this service or product.
     */
    procedureSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.procedureSequence
     */
    _procedureSequence?: fhir.FhirElement[] | undefined;
    /**
     * Exceptions, special conditions and supporting information applicable for this service or product.
     */
    informationSequence?: number[] | undefined;
    /**
     * Extended properties for primitive element: Claim.item.informationSequence
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
     * Extended properties for primitive element: Claim.item.serviced[x]
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
     * Extended properties for primitive element: Claim.item.factor
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
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference[] | undefined;
    /**
     * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
     */
    detail?: fhir.ClaimItemDetail[] | undefined;
    /**
     * Default constructor for ClaimItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaimItem>);
    /**
     * Example-bound Value Set for revenue
     */
    static revenueExampleValueSet(): ExRevenueCenterValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): ExBenefitcategoryValueSetType;
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
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export declare class Claim extends fhir.DomainResource implements IClaim {
    /**
     * Resource Type Name
     */
    resourceType: "Claim";
    /**
     * A unique identifier assigned to this claim.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Claim.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
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
     * Extended properties for primitive element: Claim.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
     */
    patient: fhir.Reference | null;
    /**
     * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
     */
    billablePeriod?: fhir.Period | undefined;
    /**
     * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: Claim.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The Insurer who is target of the request.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
     */
    provider: fhir.Reference | null;
    /**
     * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
     */
    priority: fhir.CodeableConcept | null;
    /**
     * This field is only used for preauthorizations.
     */
    fundsReserve?: fhir.CodeableConcept | undefined;
    /**
     * For example,  for the original treatment and follow-up exams.
     */
    related?: fhir.ClaimRelated[] | undefined;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: fhir.Reference | undefined;
    /**
     * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
     */
    originalPrescription?: fhir.Reference | undefined;
    /**
     * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
     */
    payee?: fhir.ClaimPayee | undefined;
    /**
     * The referral resource which lists the date, practitioner, reason and other supporting information.
     */
    referral?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: fhir.ClaimCareTeam[] | undefined;
    /**
     * Often there are multiple jurisdiction specific valuesets which are required.
     */
    supportingInfo?: fhir.ClaimSupportingInfo[] | undefined;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: fhir.ClaimDiagnosis[] | undefined;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: fhir.ClaimProcedure[] | undefined;
    /**
     * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
     */
    insurance: fhir.ClaimInsurance[] | null;
    /**
     * Details of an accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: fhir.ClaimAccident | undefined;
    /**
     * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
     */
    item?: fhir.ClaimItem[] | undefined;
    /**
     * The total value of the all the items in the claim.
     */
    total?: fhir.Money | undefined;
    /**
     * Default constructor for Claim - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IClaim>);
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
     * Example-bound Value Set for priority
     */
    static priorityExampleValueSet(): ProcessPriorityValueSetType;
    /**
     * Example-bound Value Set for fundsReserve
     */
    static fundsReserveExampleValueSet(): FundsreserveValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Claim.d.ts.map