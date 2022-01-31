// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Indicates who or what performed the event.
 */
export class MedicationDispensePerformer extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationDispensePerformer {
  /**
   * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
   */
  actor: fhirModels.Reference;
  /**
   * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   */
  function?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicationDispensePerformer from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicationDispensePerformer) {
    super(source);
    {
      this.actor = new fhirModels.Reference(source.actor);
    }
    if (source["function"] !== undefined) {
      this.function = new fhirModels.CodeableConcept(source.function);
    }
  }
}
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export class MedicationDispenseSubstitution extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationDispenseSubstitution {
  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  reason?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The person or organization that has primary responsibility for the substitution.
   */
  responsibleParty?: fhirModels.Reference[]|undefined;
  /**
   * A code signifying whether a different drug was dispensed from what was prescribed.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  wasSubstituted: boolean;
  _wasSubstituted?: fhirModels.Element|undefined;
  /**
   * Default constructor for MedicationDispenseSubstitution from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicationDispenseSubstitution) {
    super(source);
    if (source["reason"] !== undefined) {
      this.reason = source.reason.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["responsibleParty"] !== undefined) {
      this.responsibleParty = source.responsibleParty.map((x) => new fhirModels.Reference(x));
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
    {
      this.wasSubstituted = source.wasSubstituted;
    }
    if (source["_wasSubstituted"] !== undefined) {
      this._wasSubstituted = new fhirModels.Element(source._wasSubstituted);
    }
  }
}
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export class MedicationDispense extends fhirModels.DomainResource implements fhirInterfaces.IMedicationDispense {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicationDispense";
  /**
   * Maps to basedOn in Event logical model.
   */
  authorizingPrescription?: fhirModels.Reference[]|undefined;
  /**
   * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invariants can be used to bind to different value sets when profiling to bind.
   */
  category?: fhirModels.CodeableConcept|undefined;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  context?: fhirModels.Reference|undefined;
  /**
   * The amount of medication expressed as a timing amount.
   */
  daysSupply?: fhirModels.Quantity|undefined;
  /**
   * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   */
  destination?: fhirModels.Reference|undefined;
  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
   */
  detectedIssue?: fhirModels.Reference[]|undefined;
  /**
   * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
   * The pharmacist reviews the medication order prior to dispense and updates the dosageInstruction based on the actual product being dispensed.
   */
  dosageInstruction?: fhirModels.Dosage[]|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
   */
  eventHistory?: fhirModels.Reference[]|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The principal physical location where the dispense was performed.
   */
  location?: fhirModels.Reference|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: fhirModels.Reference|undefined;
  /**
   * Extra information about the dispense that could not be conveyed in the other attributes.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * The procedure that trigger the dispense.
   */
  partOf?: fhirModels.Reference[]|undefined;
  /**
   * Indicates who or what performed the event.
   */
  performer?: fhirModels.MedicationDispensePerformer[]|undefined;
  /**
   * The amount of medication that has been dispensed. Includes unit of measure.
   */
  quantity?: fhirModels.Quantity|undefined;
  /**
   * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
   */
  receiver?: fhirModels.Reference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MedicationDispenseStatusEnum;
  _status?: fhirModels.Element|undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReasonCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Indicates the reason why a dispense was not performed.
   */
  statusReasonReference?: fhirModels.Reference|undefined;
  /**
   * SubstanceAdministration-&gt;subject-&gt;Patient.
   */
  subject?: fhirModels.Reference|undefined;
  /**
   * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
   */
  substitution?: fhirModels.MedicationDispenseSubstitution|undefined;
  /**
   * Additional information that supports the medication being dispensed.
   */
  supportingInformation?: fhirModels.Reference[]|undefined;
  /**
   * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * The time the dispensed product was provided to the patient or their representative.
   */
  whenHandedOver?: string|undefined;
  _whenHandedOver?: fhirModels.Element|undefined;
  /**
   * The time when the dispensed product was packaged and reviewed.
   */
  whenPrepared?: string|undefined;
  _whenPrepared?: fhirModels.Element|undefined;
  /**
   * Default constructor for MedicationDispense from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicationDispense) {
    super(source);
    if ((source['resourceType'] !== "MedicationDispense") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicationDispense'; }
    if (source["authorizingPrescription"] !== undefined) {
      this.authorizingPrescription = source.authorizingPrescription.map((x) => new fhirModels.Reference(x));
    }
    if (source["category"] !== undefined) {
      this.category = new fhirModels.CodeableConcept(source.category);
    }
    if (source["context"] !== undefined) {
      this.context = new fhirModels.Reference(source.context);
    }
    if (source["daysSupply"] !== undefined) {
      this.daysSupply = new fhirModels.Quantity(source.daysSupply);
    }
    if (source["destination"] !== undefined) {
      this.destination = new fhirModels.Reference(source.destination);
    }
    if (source["detectedIssue"] !== undefined) {
      this.detectedIssue = source.detectedIssue.map((x) => new fhirModels.Reference(x));
    }
    if (source["dosageInstruction"] !== undefined) {
      this.dosageInstruction = source.dosageInstruction.map((x) => new fhirModels.Dosage(x));
    }
    if (source["eventHistory"] !== undefined) {
      this.eventHistory = source.eventHistory.map((x) => new fhirModels.Reference(x));
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["location"] !== undefined) {
      this.location = new fhirModels.Reference(source.location);
    }
    if (source["medicationCodeableConcept"] !== undefined) {
      this.medicationCodeableConcept = new fhirModels.CodeableConcept(source.medicationCodeableConcept);
    }
    if (source["medicationReference"] !== undefined) {
      this.medicationReference = new fhirModels.Reference(source.medicationReference);
    }
    if (source["note"] !== undefined) {
      this.note = source.note.map((x) => new fhirModels.Annotation(x));
    }
    if (source["partOf"] !== undefined) {
      this.partOf = source.partOf.map((x) => new fhirModels.Reference(x));
    }
    if (source["performer"] !== undefined) {
      this.performer = source.performer.map((x) => new fhirModels.MedicationDispensePerformer(x));
    }
    if (source["quantity"] !== undefined) {
      this.quantity = new fhirModels.Quantity(source.quantity);
    }
    if (source["receiver"] !== undefined) {
      this.receiver = source.receiver.map((x) => new fhirModels.Reference(x));
    }
    {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
    if (source["statusReasonCodeableConcept"] !== undefined) {
      this.statusReasonCodeableConcept = new fhirModels.CodeableConcept(source.statusReasonCodeableConcept);
    }
    if (source["statusReasonReference"] !== undefined) {
      this.statusReasonReference = new fhirModels.Reference(source.statusReasonReference);
    }
    if (source["subject"] !== undefined) {
      this.subject = new fhirModels.Reference(source.subject);
    }
    if (source["substitution"] !== undefined) {
      this.substitution = new fhirModels.MedicationDispenseSubstitution(source.substitution);
    }
    if (source["supportingInformation"] !== undefined) {
      this.supportingInformation = source.supportingInformation.map((x) => new fhirModels.Reference(x));
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
    if (source["whenHandedOver"] !== undefined) {
      this.whenHandedOver = source.whenHandedOver;
    }
    if (source["_whenHandedOver"] !== undefined) {
      this._whenHandedOver = new fhirModels.Element(source._whenHandedOver);
    }
    if (source["whenPrepared"] !== undefined) {
      this.whenPrepared = source.whenPrepared;
    }
    if (source["_whenPrepared"] !== undefined) {
      this._whenPrepared = new fhirModels.Element(source._whenPrepared);
    }
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