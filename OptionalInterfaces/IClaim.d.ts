// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * For example,  for the original treatment and follow-up exams.
 */
export interface IClaimRelated extends fhirInterfaces.IBackboneElement {
  /**
   * Reference to a related claim.
   */
  claim?: fhirInterfaces.IReference|undefined;
  /**
   * For example, Property/Casualty insurer claim # or Workers Compensation case # .
   */
  reference?: fhirInterfaces.IIdentifier|undefined;
  /**
   * For example, prior claim or umbrella.
   */
  relationship?: fhirInterfaces.ICodeableConcept|undefined;
}
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
export interface IClaimPayee extends fhirInterfaces.IBackboneElement {
  /**
   * Not required if the payee is 'subscriber' or 'provider'.
   */
  party?: fhirInterfaces.IReference|undefined;
  /**
   * Type of Party to be reimbursed: subscriber, provider, other.
   */
  type?: fhirInterfaces.ICodeableConcept|undefined;
}
/**
 * The members of the team who provided the products and services.
 */
export interface IClaimCareTeam extends fhirInterfaces.IBackboneElement {
  /**
   * Member of the team who provided the product or service.
   */
  provider?: fhirInterfaces.IReference|undefined;
  /**
   * The qualification of the practitioner which is applicable for this service.
   */
  qualification?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Responsible might not be required when there is only a single provider listed.
   */
  responsible?: boolean|undefined;
  _responsible?: fhirInterfaces.IElement|undefined;
  /**
   * Role might not be required when there is only a single provider listed.
   */
  role?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A number to uniquely identify care team entries.
   */
  sequence?: number|undefined;
  _sequence?: fhirInterfaces.IElement|undefined;
}
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export interface IClaimSupportingInfo extends fhirInterfaces.IBackboneElement {
  /**
   * This may contain a category for the local bill type codes.
   */
  category?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
   */
  code?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * For example: the reason for the additional stay, or why a tooth is  missing.
   */
  reason?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A number to uniquely identify supporting information entries.
   */
  sequence?: number|undefined;
  _sequence?: fhirInterfaces.IElement|undefined;
  /**
   * The date when or period to which this information refers.
   */
  timingDate?: string|undefined;
  _timingDate?: fhirInterfaces.IElement|undefined;
  /**
   * The date when or period to which this information refers.
   */
  timingPeriod?: fhirInterfaces.IPeriod|undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueBoolean?: boolean|undefined;
  _valueBoolean?: fhirInterfaces.IElement|undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueString?: string|undefined;
  _valueString?: fhirInterfaces.IElement|undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueQuantity?: fhirInterfaces.IQuantity|undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueAttachment?: fhirInterfaces.IAttachment|undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueReference?: fhirInterfaces.IReference|undefined;
}
/**
 * Information about diagnoses relevant to the claim items.
 */
export interface IClaimDiagnosis extends fhirInterfaces.IBackboneElement {
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisCodeableConcept?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisReference?: fhirInterfaces.IReference|undefined;
  /**
   * Indication of whether the diagnosis was present on admission to a facility.
   */
  onAdmission?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * For example DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardial Infarction and a DRG for HeartAttack would be assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
   */
  packageCode?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
   */
  sequence?: number|undefined;
  _sequence?: fhirInterfaces.IElement|undefined;
  /**
   * For example: admitting, primary, secondary, discharge.
   */
  type?: fhirInterfaces.ICodeableConcept[]|undefined;
}
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export interface IClaimProcedure extends fhirInterfaces.IBackboneElement {
  /**
   * Date and optionally time the procedure was performed.
   */
  date?: string|undefined;
  _date?: fhirInterfaces.IElement|undefined;
  /**
   * The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  procedureCodeableConcept?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  procedureReference?: fhirInterfaces.IReference|undefined;
  /**
   * A number to uniquely identify procedure entries.
   */
  sequence?: number|undefined;
  _sequence?: fhirInterfaces.IElement|undefined;
  /**
   * For example: primary, secondary.
   */
  type?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: fhirInterfaces.IReference[]|undefined;
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export interface IClaimInsurance extends fhirInterfaces.IBackboneElement {
  /**
   * A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  businessArrangement?: string|undefined;
  _businessArrangement?: fhirInterfaces.IElement|undefined;
  /**
   * Must not be specified when 'focal=true' for this insurance.
   */
  claimResponse?: fhirInterfaces.IReference|undefined;
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage?: fhirInterfaces.IReference|undefined;
  /**
   * A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies.
   */
  focal?: boolean|undefined;
  _focal?: fhirInterfaces.IElement|undefined;
  /**
   * Only required in jurisdictions where insurers, rather than the provider, are required to send claims to  insurers that appear after them in the list. This element is not required when 'subrogation=true'.
   */
  identifier?: fhirInterfaces.IIdentifier|undefined;
  /**
   * This value is an alphanumeric string that may be provided over the phone, via text, via paper, or within a ClaimResponse resource and is not a FHIR Identifier.
   */
  preAuthRef?: string[]|undefined;
  _preAuthRef?: fhirInterfaces.IElement[]|undefined;
  /**
   * A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.
   */
  sequence?: number|undefined;
  _sequence?: fhirInterfaces.IElement|undefined;
}
/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
export interface IClaimAccident extends fhirInterfaces.IBackboneElement {
  /**
   * The date of the accident has to precede the dates of the products and services but within a reasonable timeframe.
   */
  date?: string|undefined;
  _date?: fhirInterfaces.IElement|undefined;
  /**
   * The physical location of the accident event.
   */
  locationAddress?: fhirInterfaces.IAddress|undefined;
  /**
   * The physical location of the accident event.
   */
  locationReference?: fhirInterfaces.IReference|undefined;
  /**
   * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
   */
  type?: fhirInterfaces.ICodeableConcept|undefined;
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export interface IClaimItemDetailSubDetail extends fhirInterfaces.IBackboneElement {
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  factor?: number|undefined;
  _factor?: fhirInterfaces.IElement|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   */
  net?: fhirInterfaces.IMoney|undefined;
  /**
   * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
   */
  productOrService?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * For example: Neonatal program, child dental program or drug users recovery program.
   */
  programCode?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * The number of repetitions of a service or product.
   */
  quantity?: fhirInterfaces.IQuantity|undefined;
  /**
   * The type of revenue or cost center providing the product and/or service.
   */
  revenue?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A number to uniquely identify item entries.
   */
  sequence?: number|undefined;
  _sequence?: fhirInterfaces.IElement|undefined;
  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: fhirInterfaces.IReference[]|undefined;
  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   */
  unitPrice?: fhirInterfaces.IMoney|undefined;
}
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
export interface IClaimItemDetail extends fhirInterfaces.IBackboneElement {
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  factor?: number|undefined;
  _factor?: fhirInterfaces.IElement|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   */
  net?: fhirInterfaces.IMoney|undefined;
  /**
   * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
   */
  productOrService?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * For example: Neonatal program, child dental program or drug users recovery program.
   */
  programCode?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * The number of repetitions of a service or product.
   */
  quantity?: fhirInterfaces.IQuantity|undefined;
  /**
   * The type of revenue or cost center providing the product and/or service.
   */
  revenue?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A number to uniquely identify item entries.
   */
  sequence?: number|undefined;
  _sequence?: fhirInterfaces.IElement|undefined;
  /**
   * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
   */
  subDetail?: fhirInterfaces.IClaimItemDetailSubDetail[]|undefined;
  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: fhirInterfaces.IReference[]|undefined;
  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   */
  unitPrice?: fhirInterfaces.IMoney|undefined;
}
/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
export interface IClaimItem extends fhirInterfaces.IBackboneElement {
  /**
   * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was previously removed.
   */
  bodySite?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * CareTeam members related to this service or product.
   */
  careTeamSequence?: number[]|undefined;
  _careTeamSequence?: fhirInterfaces.IElement[]|undefined;
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
   */
  detail?: fhirInterfaces.IClaimItemDetail[]|undefined;
  /**
   * Diagnosis applicable for this service or product.
   */
  diagnosisSequence?: number[]|undefined;
  _diagnosisSequence?: fhirInterfaces.IElement[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhirInterfaces.IReference[]|undefined;
  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  factor?: number|undefined;
  _factor?: fhirInterfaces.IElement|undefined;
  /**
   * Exceptions, special conditions and supporting information applicable for this service or product.
   */
  informationSequence?: number[]|undefined;
  _informationSequence?: fhirInterfaces.IElement[]|undefined;
  /**
   * Where the product or service was provided.
   */
  locationCodeableConcept?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Where the product or service was provided.
   */
  locationAddress?: fhirInterfaces.IAddress|undefined;
  /**
   * Where the product or service was provided.
   */
  locationReference?: fhirInterfaces.IReference|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or outside of office hours.
   */
  modifier?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   */
  net?: fhirInterfaces.IMoney|undefined;
  /**
   * Procedures applicable for this service or product.
   */
  procedureSequence?: number[]|undefined;
  _procedureSequence?: fhirInterfaces.IElement[]|undefined;
  /**
   * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI). If a grouping item then use a group code to indicate the type of thing being grouped e.g. 'glasses' or 'compound'.
   */
  productOrService?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * For example: Neonatal program, child dental program or drug users recovery program.
   */
  programCode?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * The number of repetitions of a service or product.
   */
  quantity?: fhirInterfaces.IQuantity|undefined;
  /**
   * The type of revenue or cost center providing the product and/or service.
   */
  revenue?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A number to uniquely identify item entries.
   */
  sequence?: number|undefined;
  _sequence?: fhirInterfaces.IElement|undefined;
  /**
   * The date or dates when the service or product was supplied, performed or completed.
   */
  servicedDate?: string|undefined;
  _servicedDate?: fhirInterfaces.IElement|undefined;
  /**
   * The date or dates when the service or product was supplied, performed or completed.
   */
  servicedPeriod?: fhirInterfaces.IPeriod|undefined;
  /**
   * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   */
  subSite?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: fhirInterfaces.IReference[]|undefined;
  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   */
  unitPrice?: fhirInterfaces.IMoney|undefined;
}
/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface IClaim extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "Claim";
  /**
   * Details of an accident which resulted in injuries which required the products and services listed in the claim.
   */
  accident?: fhirInterfaces.IClaimAccident|undefined;
  /**
   * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterminations. Typically line item dates of service should fall within the billing period if one is specified.
   */
  billablePeriod?: fhirInterfaces.IPeriod|undefined;
  /**
   * The members of the team who provided the products and services.
   */
  careTeam?: fhirInterfaces.IClaimCareTeam[]|undefined;
  /**
   * This field is independent of the date of creation of the resource as it may reflect the creation date of a source document prior to digitization. Typically for claims all services must be completed as of this date.
   */
  created?: string|undefined;
  _created?: fhirInterfaces.IElement|undefined;
  /**
   * Information about diagnoses relevant to the claim items.
   */
  diagnosis?: fhirInterfaces.IClaimDiagnosis[]|undefined;
  /**
   * Individual who created the claim, predetermination or preauthorization.
   */
  enterer?: fhirInterfaces.IReference|undefined;
  /**
   * Facility where the services were provided.
   */
  facility?: fhirInterfaces.IReference|undefined;
  /**
   * This field is only used for preauthorizations.
   */
  fundsReserve?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A unique identifier assigned to this claim.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: fhirInterfaces.IClaimInsurance[]|undefined;
  /**
   * The Insurer who is target of the request.
   */
  insurer?: fhirInterfaces.IReference|undefined;
  /**
   * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
   */
  item?: fhirInterfaces.IClaimItem[]|undefined;
  /**
   * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefore issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
   */
  originalPrescription?: fhirInterfaces.IReference|undefined;
  /**
   * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.
   */
  patient?: fhirInterfaces.IReference|undefined;
  /**
   * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
   */
  payee?: fhirInterfaces.IClaimPayee|undefined;
  /**
   * Prescription to support the dispensing of pharmacy, device or vision products.
   */
  prescription?: fhirInterfaces.IReference|undefined;
  /**
   * If a claim processor is unable to complete the processing as per the priority then they should generate and error and not process the request.
   */
  priority?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Procedures performed on the patient relevant to the billing items with the claim.
   */
  procedure?: fhirInterfaces.IClaimProcedure[]|undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  provider?: fhirInterfaces.IReference|undefined;
  /**
   * The referral resource which lists the date, practitioner, reason and other supporting information.
   */
  referral?: fhirInterfaces.IReference|undefined;
  /**
   * For example,  for the original treatment and follow-up exams.
   */
  related?: fhirInterfaces.IClaimRelated[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: ClaimStatusEnum|undefined;
  _status?: fhirInterfaces.IElement|undefined;
  /**
   * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
   */
  subType?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  supportingInfo?: fhirInterfaces.IClaimSupportingInfo[]|undefined;
  /**
   * The total value of the all the items in the claim.
   */
  total?: fhirInterfaces.IMoney|undefined;
  /**
   * The majority of jurisdictions use: oral, pharmacy, vision, professional and institutional, or variants on those terms, as the general styles of claims. The valueset is extensible to accommodate other jurisdictional requirements.
   */
  type?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
   */
  use?: ClaimUseEnum|undefined;
  _use?: fhirInterfaces.IElement|undefined;
}
/**
 * Code Values for the Claim.status field
 */
export enum ClaimStatusEnum {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  DRAFT = "draft",
  ENTERED_IN_ERROR = "entered-in-error",
}
/**
 * Code Values for the Claim.use field
 */
export enum ClaimUseEnum {
  CLAIM = "claim",
  PREAUTHORIZATION = "preauthorization",
  PREDETERMINATION = "predetermination",
}
