// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Indicates who or what performed the event.
 */
export type IMedicationDispensePerformer = fhir.IBackboneElement & {
  /**
   * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
   */
  actor: fhir.IReference|null;
  /**
   * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   */
  function?: fhir.ICodeableConcept|undefined;
}
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export type IMedicationDispenseSubstitution = fhir.IBackboneElement & {
  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  reason?: fhir.ICodeableConcept[]|undefined;
  /**
   * The person or organization that has primary responsibility for the substitution.
   */
  responsibleParty?: fhir.IReference[]|undefined;
  /**
   * A code signifying whether a different drug was dispensed from what was prescribed.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  wasSubstituted: boolean|null;
  _wasSubstituted?: fhir.IFhirElement|undefined;
}
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export type IMedicationDispense = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "MedicationDispense";
  /**
   * Maps to basedOn in Event logical model.
   */
  authorizingPrescription?: fhir.IReference[]|undefined;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
   */
  category?: fhir.ICodeableConcept|undefined;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  context?: fhir.IReference|undefined;
  /**
   * The amount of medication expressed as a timing amount.
   */
  daysSupply?: fhir.IQuantity|undefined;
  /**
   * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   */
  destination?: fhir.IReference|undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  detectedIssue?: fhir.IReference[]|undefined;
  /**
   * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
   * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
   */
  dosageInstruction?: fhir.IDosage[]|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  eventHistory?: fhir.IReference[]|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The principal physical location where the dispense was performed.
   */
  location?: fhir.IReference|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: fhir.IReference|undefined;
  /**
   * Extra information about the dispense that could not be conveyed in the other attributes.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * The procedure that trigger the dispense.
   */
  partOf?: fhir.IReference[]|undefined;
  /**
   * Indicates who or what performed the event.
   */
  performer?: fhir.IMedicationDispensePerformer[]|undefined;
  /**
   * The amount of medication that has been dispensed. Includes unit of measure.
   */
  quantity?: fhir.IQuantity|undefined;
  /**
   * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
   */
  receiver?: fhir.IReference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MedicationDispenseStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReasonCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReasonReference?: fhir.IReference|undefined;
  /**
   * SubstanceAdministration-&gt;subject-&gt;Patient.
   */
  subject?: fhir.IReference|undefined;
  /**
   * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
   */
  substitution?: fhir.IMedicationDispenseSubstitution|undefined;
  /**
   * Additional information that supports the medication being dispensed.
   */
  supportingInformation?: fhir.IReference[]|undefined;
  /**
   * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * The time the dispensed product was provided to the patient or their representative.
   */
  whenHandedOver?: string|undefined;
  _whenHandedOver?: fhir.IFhirElement|undefined;
  /**
   * The time when the dispensed product was packaged and reviewed.
   */
  whenPrepared?: string|undefined;
  _whenPrepared?: fhir.IFhirElement|undefined;
}
/**
 * Indicates who or what performed the event.
 */
export class MedicationDispensePerformer extends fhir.BackboneElement implements fhir.IMedicationDispensePerformer {
  /**
   * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
   */
  public actor: fhir.Reference|null;
  /**
   * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicationDispensePerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationDispensePerformer> = {}) {
    super(source);
    this.actor = null;
    if (source["actor"]) { this.actor = new fhir.Reference(source.actor!); }
    if (this.actor === undefined) { this.actor = null }
    if (source["function"]) { this.function = new fhir.CodeableConcept(source.function!); }
  }
  /**
   * Check if the current MedicationDispensePerformer contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["actor"] === undefined) { missingElements.push("actor"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationDispensePerformer from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMedicationDispensePerformer):MedicationDispensePerformer {
    var dest:MedicationDispensePerformer = new MedicationDispensePerformer(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationDispensePerformer is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export class MedicationDispenseSubstitution extends fhir.BackboneElement implements fhir.IMedicationDispenseSubstitution {
  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  public reason?: fhir.CodeableConcept[]|undefined;
  /**
   * The person or organization that has primary responsibility for the substitution.
   */
  public responsibleParty?: fhir.Reference[]|undefined;
  /**
   * A code signifying whether a different drug was dispensed from what was prescribed.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  public wasSubstituted: boolean|null;
  public _wasSubstituted?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MedicationDispenseSubstitution - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationDispenseSubstitution> = {}) {
    super(source);
    if (source["reason"]) { this.reason = source.reason.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["responsibleParty"]) { this.responsibleParty = source.responsibleParty.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    this.wasSubstituted = null;
    if (source["wasSubstituted"]) { this.wasSubstituted = source.wasSubstituted; }
    if (this.wasSubstituted === undefined) { this.wasSubstituted = null }
    if (source["_wasSubstituted"]) { this._wasSubstituted = new fhir.FhirElement(source._wasSubstituted!); }
  }
  /**
   * Check if the current MedicationDispenseSubstitution contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["wasSubstituted"] === undefined) { missingElements.push("wasSubstituted"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationDispenseSubstitution from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMedicationDispenseSubstitution):MedicationDispenseSubstitution {
    var dest:MedicationDispenseSubstitution = new MedicationDispenseSubstitution(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationDispenseSubstitution is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export class MedicationDispense extends fhir.DomainResource implements fhir.IMedicationDispense {
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicationDispense";
  /**
   * Maps to basedOn in Event logical model.
   */
  public authorizingPrescription?: fhir.Reference[]|undefined;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  public context?: fhir.Reference|undefined;
  /**
   * The amount of medication expressed as a timing amount.
   */
  public daysSupply?: fhir.Quantity|undefined;
  /**
   * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   */
  public destination?: fhir.Reference|undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  public detectedIssue?: fhir.Reference[]|undefined;
  /**
   * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
   * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
   */
  public dosageInstruction?: fhir.Dosage[]|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  public eventHistory?: fhir.Reference[]|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The principal physical location where the dispense was performed.
   */
  public location?: fhir.Reference|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  public medicationCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  public medicationReference?: fhir.Reference|undefined;
  /**
   * Extra information about the dispense that could not be conveyed in the other attributes.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * The procedure that trigger the dispense.
   */
  public partOf?: fhir.Reference[]|undefined;
  /**
   * Indicates who or what performed the event.
   */
  public performer?: fhir.MedicationDispensePerformer[]|undefined;
  /**
   * The amount of medication that has been dispensed. Includes unit of measure.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
   */
  public receiver?: fhir.Reference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: MedicationDispenseStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  public statusReasonCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  public statusReasonReference?: fhir.Reference|undefined;
  /**
   * SubstanceAdministration-&gt;subject-&gt;Patient.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
   */
  public substitution?: fhir.MedicationDispenseSubstitution|undefined;
  /**
   * Additional information that supports the medication being dispensed.
   */
  public supportingInformation?: fhir.Reference[]|undefined;
  /**
   * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The time the dispensed product was provided to the patient or their representative.
   */
  public whenHandedOver?: string|undefined;
  public _whenHandedOver?: fhir.FhirElement|undefined;
  /**
   * The time when the dispensed product was packaged and reviewed.
   */
  public whenPrepared?: string|undefined;
  public _whenPrepared?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MedicationDispense - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationDispense> = {}) {
    super(source);
    this.resourceType = 'MedicationDispense';
    if (source["authorizingPrescription"]) { this.authorizingPrescription = source.authorizingPrescription.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["category"]) { this.category = new fhir.CodeableConcept(source.category!); }
    if (source["context"]) { this.context = new fhir.Reference(source.context!); }
    if (source["daysSupply"]) { this.daysSupply = new fhir.Quantity(source.daysSupply!); }
    if (source["destination"]) { this.destination = new fhir.Reference(source.destination!); }
    if (source["detectedIssue"]) { this.detectedIssue = source.detectedIssue.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["dosageInstruction"]) { this.dosageInstruction = source.dosageInstruction.map((x:Partial<fhir.IDosage>) => new fhir.Dosage(x)); }
    if (source["eventHistory"]) { this.eventHistory = source.eventHistory.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["location"]) { this.location = new fhir.Reference(source.location!); }
    if (source["medicationCodeableConcept"]) { this.medicationCodeableConcept = new fhir.CodeableConcept(source.medicationCodeableConcept!); }
    if (source["medicationReference"]) { this.medicationReference = new fhir.Reference(source.medicationReference!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["partOf"]) { this.partOf = source.partOf.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["performer"]) { this.performer = source.performer.map((x:Partial<fhir.IMedicationDispensePerformer>) => new fhir.MedicationDispensePerformer(x)); }
    if (source["quantity"]) { this.quantity = new fhir.Quantity(source.quantity!); }
    if (source["receiver"]) { this.receiver = source.receiver.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["statusReasonCodeableConcept"]) { this.statusReasonCodeableConcept = new fhir.CodeableConcept(source.statusReasonCodeableConcept!); }
    if (source["statusReasonReference"]) { this.statusReasonReference = new fhir.Reference(source.statusReasonReference!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (source["substitution"]) { this.substitution = new fhir.MedicationDispenseSubstitution(source.substitution!); }
    if (source["supportingInformation"]) { this.supportingInformation = source.supportingInformation.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source["whenHandedOver"]) { this.whenHandedOver = source.whenHandedOver; }
    if (source["_whenHandedOver"]) { this._whenHandedOver = new fhir.FhirElement(source._whenHandedOver!); }
    if (source["whenPrepared"]) { this.whenPrepared = source.whenPrepared; }
    if (source["_whenPrepared"]) { this._whenPrepared = new fhir.FhirElement(source._whenPrepared!); }
  }
  /**
   * Check if the current MedicationDispense contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationDispense from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMedicationDispense):MedicationDispense {
    var dest:MedicationDispense = new MedicationDispense(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationDispense is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the MedicationDispense.status field
 */
export enum MedicationDispenseStatusEnum {
  PREPARATION = "preparation",
  IN_PROGRESS = "in-progress",
  CANCELLED = "cancelled",
  ON_HOLD = "on-hold",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  STOPPED = "stopped",
  DECLINED = "declined",
  UNKNOWN = "unknown",
}
