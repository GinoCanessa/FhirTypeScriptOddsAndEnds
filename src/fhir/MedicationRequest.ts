// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * If populating this element, either the quantity or the duration must be included.
 */
export type IMedicationRequestDispenseRequestInitialFill = fhir.IBackboneElement & {
  /**
   * The length of time that the first dispense is expected to last.
   */
  duration?: fhir.IDuration|undefined;
  /**
   * The amount or quantity to provide as part of the first dispense.
   */
  quantity?: fhir.IQuantity|undefined;
}
/**
 * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export type IMedicationRequestDispenseRequest = fhir.IBackboneElement & {
  /**
   * The minimum period of time that must occur between dispenses of the medication.
   */
  dispenseInterval?: fhir.IDuration|undefined;
  /**
   * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage). When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
   */
  expectedSupplyDuration?: fhir.IDuration|undefined;
  /**
   * If populating this element, either the quantity or the duration must be included.
   */
  initialFill?: fhir.IMedicationRequestDispenseRequestInitialFill|undefined;
  /**
   * If displaying "number of authorized fills", add 1 to this number.
   */
  numberOfRepeatsAllowed?: number|undefined;
  _numberOfRepeatsAllowed?: fhir.IFhirElement|undefined;
  /**
   * Indicates the intended dispensing Organization specified by the prescriber.
   */
  performer?: fhir.IReference|undefined;
  /**
   * The amount that is to be dispensed for one fill.
   */
  quantity?: fhir.IQuantity|undefined;
  /**
   * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
   */
  validityPeriod?: fhir.IPeriod|undefined;
}
/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export type IMedicationRequestSubstitution = fhir.IBackboneElement & {
  /**
   * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   */
  allowedBoolean?: boolean|undefined;
  _allowedBoolean?: fhir.IFhirElement|undefined;
  /**
   * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   */
  allowedCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Indicates the reason for the substitution, or why substitution must or must not be performed.
   */
  reason?: fhir.ICodeableConcept|undefined;
}
/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export type IMedicationRequest = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "MedicationRequest";
  /**
   * The date (and perhaps time) when the prescription was initially written or authored on.
   */
  authoredOn?: string|undefined;
  _authoredOn?: fhir.IFhirElement|undefined;
  /**
   * A plan or request that is fulfilled in whole or in part by this medication request.
   */
  basedOn?: fhir.IReference[]|undefined;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of requests.
   */
  category?: fhir.ICodeableConcept[]|undefined;
  /**
   * This attribute should not be confused with the protocol of the medication.
   */
  courseOfTherapyType?: fhir.ICodeableConcept|undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  detectedIssue?: fhir.IReference[]|undefined;
  /**
   * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
   */
  dispenseRequest?: fhir.IMedicationRequestDispenseRequest|undefined;
  /**
   * If do not perform is not specified, the request is a positive request e.g. "do perform".
   */
  doNotPerform?: boolean|undefined;
  _doNotPerform?: fhir.IFhirElement|undefined;
  /**
   * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine® (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient's condition at the time the dose is needed.
   */
  dosageInstruction?: fhir.IDosage[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter."    If there is a need to link to episodes of care they will be handled with an extension.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  eventHistory?: fhir.IReference[]|undefined;
  /**
   * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
   */
  groupIdentifier?: fhir.IIdentifier|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhir.IFhirElement[]|undefined;
  /**
   * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhir.IFhirElement[]|undefined;
  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  insurance?: fhir.IReference[]|undefined;
  /**
   * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
   * An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  intent: MedicationRequestIntentEnum|null;
  _intent?: fhir.IFhirElement|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
   */
  medicationReference?: fhir.IReference|undefined;
  /**
   * Extra information about the prescription that could not be conveyed by the other attributes.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
   */
  performer?: fhir.IReference|undefined;
  /**
   * If specified without indicating a performer, this indicates that the performer must be of the specified type. If specified with a performer then it indicates the requirements of the performer if the designated performer is not available.
   */
  performerType?: fhir.ICodeableConcept|undefined;
  /**
   * Indicates how quickly the Medication Request should be addressed with respect to other requests.
   */
  priority?: MedicationRequestPriorityEnum|undefined;
  _priority?: fhir.IFhirElement|undefined;
  /**
   * A link to a resource representing an earlier order related order or prescription.
   */
  priorPrescription?: fhir.IReference|undefined;
  /**
   * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
   */
  reasonCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
   */
  reasonReference?: fhir.IReference[]|undefined;
  /**
   * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
   */
  recorder?: fhir.IReference|undefined;
  /**
   * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   */
  reportedBoolean?: boolean|undefined;
  _reportedBoolean?: fhir.IFhirElement|undefined;
  /**
   * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   */
  reportedReference?: fhir.IReference|undefined;
  /**
   * The individual, organization, or device that initiated the request and has responsibility for its activation.
   */
  requester?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MedicationRequestStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * This is generally only used for "exception" statuses such as "suspended" or "cancelled". The reason why the MedicationRequest was created at all is captured in reasonCode, not here.
   */
  statusReason?: fhir.ICodeableConcept|undefined;
  /**
   * The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
   */
  subject: fhir.IReference|null;
  /**
   * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
   */
  substitution?: fhir.IMedicationRequestSubstitution|undefined;
  /**
   * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
   */
  supportingInformation?: fhir.IReference[]|undefined;
}
/**
 * If populating this element, either the quantity or the duration must be included.
 */
export class MedicationRequestDispenseRequestInitialFill extends fhir.BackboneElement implements fhir.IMedicationRequestDispenseRequestInitialFill {
  /**
   * The length of time that the first dispense is expected to last.
   */
  public duration?: fhir.Duration|undefined;
  /**
   * The amount or quantity to provide as part of the first dispense.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Default constructor for MedicationRequestDispenseRequestInitialFill - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationRequestDispenseRequestInitialFill> = {}) {
    super(source);
    if (source["duration"]) { this.duration = new fhir.Duration(source.duration!); }
    if (source["quantity"]) { this.quantity = new fhir.Quantity(source.quantity!); }
  }
  /**
   * Check if the current MedicationRequestDispenseRequestInitialFill contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationRequestDispenseRequestInitialFill from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IMedicationRequestDispenseRequestInitialFill):MedicationRequestDispenseRequestInitialFill {
    var dest:MedicationRequestDispenseRequestInitialFill = new MedicationRequestDispenseRequestInitialFill(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationRequestDispenseRequestInitialFill is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export class MedicationRequestDispenseRequest extends fhir.BackboneElement implements fhir.IMedicationRequestDispenseRequest {
  /**
   * The minimum period of time that must occur between dispenses of the medication.
   */
  public dispenseInterval?: fhir.Duration|undefined;
  /**
   * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage). When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
   */
  public expectedSupplyDuration?: fhir.Duration|undefined;
  /**
   * If populating this element, either the quantity or the duration must be included.
   */
  public initialFill?: fhir.MedicationRequestDispenseRequestInitialFill|undefined;
  /**
   * If displaying "number of authorized fills", add 1 to this number.
   */
  public numberOfRepeatsAllowed?: number|undefined;
  public _numberOfRepeatsAllowed?: fhir.FhirElement|undefined;
  /**
   * Indicates the intended dispensing Organization specified by the prescriber.
   */
  public performer?: fhir.Reference|undefined;
  /**
   * The amount that is to be dispensed for one fill.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
   */
  public validityPeriod?: fhir.Period|undefined;
  /**
   * Default constructor for MedicationRequestDispenseRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationRequestDispenseRequest> = {}) {
    super(source);
    if (source["dispenseInterval"]) { this.dispenseInterval = new fhir.Duration(source.dispenseInterval!); }
    if (source["expectedSupplyDuration"]) { this.expectedSupplyDuration = new fhir.Duration(source.expectedSupplyDuration!); }
    if (source["initialFill"]) { this.initialFill = new fhir.MedicationRequestDispenseRequestInitialFill(source.initialFill!); }
    if (source["numberOfRepeatsAllowed"]) { this.numberOfRepeatsAllowed = source.numberOfRepeatsAllowed; }
    if (source["_numberOfRepeatsAllowed"]) { this._numberOfRepeatsAllowed = new fhir.FhirElement(source._numberOfRepeatsAllowed!); }
    if (source["performer"]) { this.performer = new fhir.Reference(source.performer!); }
    if (source["quantity"]) { this.quantity = new fhir.Quantity(source.quantity!); }
    if (source["validityPeriod"]) { this.validityPeriod = new fhir.Period(source.validityPeriod!); }
  }
  /**
   * Check if the current MedicationRequestDispenseRequest contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationRequestDispenseRequest from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IMedicationRequestDispenseRequest):MedicationRequestDispenseRequest {
    var dest:MedicationRequestDispenseRequest = new MedicationRequestDispenseRequest(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationRequestDispenseRequest is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export class MedicationRequestSubstitution extends fhir.BackboneElement implements fhir.IMedicationRequestSubstitution {
  /**
   * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   */
  public allowedBoolean?: boolean|undefined;
  public _allowedBoolean?: fhir.FhirElement|undefined;
  /**
   * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   */
  public allowedCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the reason for the substitution, or why substitution must or must not be performed.
   */
  public reason?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicationRequestSubstitution - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationRequestSubstitution> = {}) {
    super(source);
    if (source["allowedBoolean"]) { this.allowedBoolean = source.allowedBoolean; }
    if (source["_allowedBoolean"]) { this._allowedBoolean = new fhir.FhirElement(source._allowedBoolean!); }
    if (source["allowedCodeableConcept"]) { this.allowedCodeableConcept = new fhir.CodeableConcept(source.allowedCodeableConcept!); }
    if (source["reason"]) { this.reason = new fhir.CodeableConcept(source.reason!); }
  }
  /**
   * Check if the current MedicationRequestSubstitution contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationRequestSubstitution from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IMedicationRequestSubstitution):MedicationRequestSubstitution {
    var dest:MedicationRequestSubstitution = new MedicationRequestSubstitution(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationRequestSubstitution is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export class MedicationRequest extends fhir.DomainResource implements fhir.IMedicationRequest {
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicationRequest";
  /**
   * The date (and perhaps time) when the prescription was initially written or authored on.
   */
  public authoredOn?: string|undefined;
  public _authoredOn?: fhir.FhirElement|undefined;
  /**
   * A plan or request that is fulfilled in whole or in part by this medication request.
   */
  public basedOn?: fhir.Reference[]|undefined;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of requests.
   */
  public category?: fhir.CodeableConcept[]|undefined;
  /**
   * This attribute should not be confused with the protocol of the medication.
   */
  public courseOfTherapyType?: fhir.CodeableConcept|undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  public detectedIssue?: fhir.Reference[]|undefined;
  /**
   * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
   */
  public dispenseRequest?: fhir.MedicationRequestDispenseRequest|undefined;
  /**
   * If do not perform is not specified, the request is a positive request e.g. "do perform".
   */
  public doNotPerform?: boolean|undefined;
  public _doNotPerform?: fhir.FhirElement|undefined;
  /**
   * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine® (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient's condition at the time the dose is needed.
   */
  public dosageInstruction?: fhir.Dosage[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter."    If there is a need to link to episodes of care they will be handled with an extension.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  public eventHistory?: fhir.Reference[]|undefined;
  /**
   * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
   */
  public groupIdentifier?: fhir.Identifier|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
   */
  public instantiatesCanonical?: string[]|undefined;
  public _instantiatesCanonical?: fhir.FhirElement[]|undefined;
  /**
   * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
   */
  public instantiatesUri?: string[]|undefined;
  public _instantiatesUri?: fhir.FhirElement[]|undefined;
  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  public insurance?: fhir.Reference[]|undefined;
  /**
   * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
   * An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  public intent: MedicationRequestIntentEnum|null;
  public _intent?: fhir.FhirElement|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
   */
  public medicationCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
   */
  public medicationReference?: fhir.Reference|undefined;
  /**
   * Extra information about the prescription that could not be conveyed by the other attributes.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
   */
  public performer?: fhir.Reference|undefined;
  /**
   * If specified without indicating a performer, this indicates that the performer must be of the specified type. If specified with a performer then it indicates the requirements of the performer if the designated performer is not available.
   */
  public performerType?: fhir.CodeableConcept|undefined;
  /**
   * Indicates how quickly the Medication Request should be addressed with respect to other requests.
   */
  public priority?: MedicationRequestPriorityEnum|undefined;
  public _priority?: fhir.FhirElement|undefined;
  /**
   * A link to a resource representing an earlier order related order or prescription.
   */
  public priorPrescription?: fhir.Reference|undefined;
  /**
   * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined;
  /**
   * This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
   */
  public reasonReference?: fhir.Reference[]|undefined;
  /**
   * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
   */
  public recorder?: fhir.Reference|undefined;
  /**
   * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   */
  public reportedBoolean?: boolean|undefined;
  public _reportedBoolean?: fhir.FhirElement|undefined;
  /**
   * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
   */
  public reportedReference?: fhir.Reference|undefined;
  /**
   * The individual, organization, or device that initiated the request and has responsibility for its activation.
   */
  public requester?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: MedicationRequestStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * This is generally only used for "exception" statuses such as "suspended" or "cancelled". The reason why the MedicationRequest was created at all is captured in reasonCode, not here.
   */
  public statusReason?: fhir.CodeableConcept|undefined;
  /**
   * The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
   */
  public subject: fhir.Reference|null;
  /**
   * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
   */
  public substitution?: fhir.MedicationRequestSubstitution|undefined;
  /**
   * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
   */
  public supportingInformation?: fhir.Reference[]|undefined;
  /**
   * Default constructor for MedicationRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationRequest> = {}) {
    super(source);
    this.resourceType = 'MedicationRequest';
    if (source["authoredOn"]) { this.authoredOn = source.authoredOn; }
    if (source["_authoredOn"]) { this._authoredOn = new fhir.FhirElement(source._authoredOn!); }
    if (source["basedOn"]) { this.basedOn = source.basedOn.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["category"]) { this.category = source.category.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["courseOfTherapyType"]) { this.courseOfTherapyType = new fhir.CodeableConcept(source.courseOfTherapyType!); }
    if (source["detectedIssue"]) { this.detectedIssue = source.detectedIssue.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["dispenseRequest"]) { this.dispenseRequest = new fhir.MedicationRequestDispenseRequest(source.dispenseRequest!); }
    if (source["doNotPerform"]) { this.doNotPerform = source.doNotPerform; }
    if (source["_doNotPerform"]) { this._doNotPerform = new fhir.FhirElement(source._doNotPerform!); }
    if (source["dosageInstruction"]) { this.dosageInstruction = source.dosageInstruction.map((x:Partial<fhir.IDosage>) => new fhir.Dosage(x)); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["eventHistory"]) { this.eventHistory = source.eventHistory.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["groupIdentifier"]) { this.groupIdentifier = new fhir.Identifier(source.groupIdentifier!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["instantiatesCanonical"]) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x)); }
    if (source["_instantiatesCanonical"]) { this._instantiatesCanonical = source._instantiatesCanonical.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["instantiatesUri"]) { this.instantiatesUri = source.instantiatesUri.map((x) => (x)); }
    if (source["_instantiatesUri"]) { this._instantiatesUri = source._instantiatesUri.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["insurance"]) { this.insurance = source.insurance.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    this.intent = null;
    if (source["intent"]) { this.intent = source.intent; }
    if (this.intent === undefined) { this.intent = null }
    if (source["_intent"]) { this._intent = new fhir.FhirElement(source._intent!); }
    if (source["medicationCodeableConcept"]) { this.medicationCodeableConcept = new fhir.CodeableConcept(source.medicationCodeableConcept!); }
    if (source["medicationReference"]) { this.medicationReference = new fhir.Reference(source.medicationReference!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["performer"]) { this.performer = new fhir.Reference(source.performer!); }
    if (source["performerType"]) { this.performerType = new fhir.CodeableConcept(source.performerType!); }
    if (source["priority"]) { this.priority = source.priority; }
    if (source["_priority"]) { this._priority = new fhir.FhirElement(source._priority!); }
    if (source["priorPrescription"]) { this.priorPrescription = new fhir.Reference(source.priorPrescription!); }
    if (source["reasonCode"]) { this.reasonCode = source.reasonCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["reasonReference"]) { this.reasonReference = source.reasonReference.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["recorder"]) { this.recorder = new fhir.Reference(source.recorder!); }
    if (source["reportedBoolean"]) { this.reportedBoolean = source.reportedBoolean; }
    if (source["_reportedBoolean"]) { this._reportedBoolean = new fhir.FhirElement(source._reportedBoolean!); }
    if (source["reportedReference"]) { this.reportedReference = new fhir.Reference(source.reportedReference!); }
    if (source["requester"]) { this.requester = new fhir.Reference(source.requester!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["statusReason"]) { this.statusReason = new fhir.CodeableConcept(source.statusReason!); }
    this.subject = null;
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (this.subject === undefined) { this.subject = null }
    if (source["substitution"]) { this.substitution = new fhir.MedicationRequestSubstitution(source.substitution!); }
    if (source["supportingInformation"]) { this.supportingInformation = source.supportingInformation.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
  }
  /**
   * Check if the current MedicationRequest contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["intent"] === undefined) { missingElements.push("intent"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["subject"] === undefined) { missingElements.push("subject"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationRequest from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IMedicationRequest):MedicationRequest {
    var dest:MedicationRequest = new MedicationRequest(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationRequest is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the MedicationRequest.intent field
 */
export enum MedicationRequestIntentEnum {
  PROPOSAL = "proposal",
  PLAN = "plan",
  ORDER = "order",
  ORIGINAL_ORDER = "original-order",
  REFLEX_ORDER = "reflex-order",
  FILLER_ORDER = "filler-order",
  INSTANCE_ORDER = "instance-order",
  OPTION = "option",
}
/**
 * Code Values for the MedicationRequest.priority field
 */
export enum MedicationRequestPriorityEnum {
  ROUTINE = "routine",
  URGENT = "urgent",
  ASAP = "asap",
  STAT = "stat",
}
/**
 * Code Values for the MedicationRequest.status field
 */
export enum MedicationRequestStatusEnum {
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  STOPPED = "stopped",
  DRAFT = "draft",
  UNKNOWN = "unknown",
}
