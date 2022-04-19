// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Indicates who or what performed the medication administration and how they were involved.
 */
export type IMedicationAdministrationPerformer = fhir.IBackboneElement & {
  /**
   * Indicates who or what performed the medication administration.
   */
  actor: fhir.IReference|null;
  /**
   * Distinguishes the type of involvement of the performer in the medication administration.
   */
  function?: fhir.ICodeableConcept|undefined;
}
/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export type IMedicationAdministrationDosage = fhir.IBackboneElement & {
  /**
   * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
   */
  dose?: fhir.IQuantity|undefined;
  /**
   * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
   */
  method?: fhir.ICodeableConcept|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rateRatio?: fhir.IRatio|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rateQuantity?: fhir.IQuantity|undefined;
  /**
   * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
   */
  route?: fhir.ICodeableConcept|undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  site?: fhir.ICodeableConcept|undefined;
  /**
   * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
   * The dosage instructions should reflect the dosage of the medication that was administered.
   */
  text?: string|undefined;
  _text?: fhir.IFhirElement|undefined;
}
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export type IMedicationAdministration = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "MedicationAdministration";
  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  category?: fhir.ICodeableConcept|undefined;
  /**
   * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
   */
  context?: fhir.IReference|undefined;
  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  device?: fhir.IReference[]|undefined;
  /**
   * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  dosage?: fhir.IMedicationAdministrationDosage|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectiveDateTime?: string|undefined;
  _effectiveDateTime?: fhir.IFhirElement|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectivePeriod?: fhir.IPeriod|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
   */
  eventHistory?: fhir.IReference[]|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  instantiates?: string[]|undefined;
  _instantiates?: fhir.IFhirElement[]|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: fhir.IReference|undefined;
  /**
   * Extra information about the medication administration that is not conveyed by the other attributes.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: fhir.IReference[]|undefined;
  /**
   * Indicates who or what performed the medication administration and how they were involved.
   */
  performer?: fhir.IMedicationAdministrationPerformer[]|undefined;
  /**
   * A code indicating why the medication was given.
   */
  reasonCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
   */
  reasonReference?: fhir.IReference[]|undefined;
  /**
   * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
   */
  request?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MedicationAdministrationStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * A code indicating why the administration was not performed.
   */
  statusReason?: fhir.ICodeableConcept[]|undefined;
  /**
   * The person or animal or group receiving the medication.
   */
  subject: fhir.IReference|null;
  /**
   * Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  supportingInformation?: fhir.IReference[]|undefined;
}
/**
 * Indicates who or what performed the medication administration and how they were involved.
 */
export class MedicationAdministrationPerformer extends fhir.BackboneElement implements fhir.IMedicationAdministrationPerformer {
  /**
   * Indicates who or what performed the medication administration.
   */
  public actor: fhir.Reference|null;
  /**
   * Distinguishes the type of involvement of the performer in the medication administration.
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicationAdministrationPerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationAdministrationPerformer> = {}) {
    super(source);
    this.actor = null;
    if (source["actor"]) { this.actor = new fhir.Reference(source.actor!); }
    if (this.actor === undefined) { this.actor = null }
    if (source["function"]) { this.function = new fhir.CodeableConcept(source.function!); }
  }
  /**
   * Check if the current MedicationAdministrationPerformer contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["actor"] === undefined) { missingElements.push("actor"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationAdministrationPerformer from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IMedicationAdministrationPerformer):MedicationAdministrationPerformer {
    var dest:MedicationAdministrationPerformer = new MedicationAdministrationPerformer(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationAdministrationPerformer is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export class MedicationAdministrationDosage extends fhir.BackboneElement implements fhir.IMedicationAdministrationDosage {
  /**
   * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
   */
  public dose?: fhir.Quantity|undefined;
  /**
   * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  public rateRatio?: fhir.Ratio|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  public rateQuantity?: fhir.Quantity|undefined;
  /**
   * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
   */
  public route?: fhir.CodeableConcept|undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  public site?: fhir.CodeableConcept|undefined;
  /**
   * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
   * The dosage instructions should reflect the dosage of the medication that was administered.
   */
  public text?: string|undefined;
  public _text?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MedicationAdministrationDosage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationAdministrationDosage> = {}) {
    super(source);
    if (source["dose"]) { this.dose = new fhir.Quantity(source.dose!); }
    if (source["method"]) { this.method = new fhir.CodeableConcept(source.method!); }
    if (source["rateRatio"]) { this.rateRatio = new fhir.Ratio(source.rateRatio!); }
    if (source["rateQuantity"]) { this.rateQuantity = new fhir.Quantity(source.rateQuantity!); }
    if (source["route"]) { this.route = new fhir.CodeableConcept(source.route!); }
    if (source["site"]) { this.site = new fhir.CodeableConcept(source.site!); }
    if (source["text"]) { this.text = source.text; }
    if (source["_text"]) { this._text = new fhir.FhirElement(source._text!); }
  }
  /**
   * Check if the current MedicationAdministrationDosage contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationAdministrationDosage from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IMedicationAdministrationDosage):MedicationAdministrationDosage {
    var dest:MedicationAdministrationDosage = new MedicationAdministrationDosage(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationAdministrationDosage is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export class MedicationAdministration extends fhir.DomainResource implements fhir.IMedicationAdministration {
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicationAdministration";
  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
   */
  public context?: fhir.Reference|undefined;
  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  public device?: fhir.Reference[]|undefined;
  /**
   * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  public dosage?: fhir.MedicationAdministrationDosage|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  public effectiveDateTime?: string|undefined;
  public _effectiveDateTime?: fhir.FhirElement|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
   */
  public eventHistory?: fhir.Reference[]|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  public instantiates?: string[]|undefined;
  public _instantiates?: fhir.FhirElement[]|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  public medicationCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  public medicationReference?: fhir.Reference|undefined;
  /**
   * Extra information about the medication administration that is not conveyed by the other attributes.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * A larger event of which this particular event is a component or step.
   */
  public partOf?: fhir.Reference[]|undefined;
  /**
   * Indicates who or what performed the medication administration and how they were involved.
   */
  public performer?: fhir.MedicationAdministrationPerformer[]|undefined;
  /**
   * A code indicating why the medication was given.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined;
  /**
   * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
   */
  public reasonReference?: fhir.Reference[]|undefined;
  /**
   * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
   */
  public request?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: MedicationAdministrationStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * A code indicating why the administration was not performed.
   */
  public statusReason?: fhir.CodeableConcept[]|undefined;
  /**
   * The person or animal or group receiving the medication.
   */
  public subject: fhir.Reference|null;
  /**
   * Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  public supportingInformation?: fhir.Reference[]|undefined;
  /**
   * Default constructor for MedicationAdministration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMedicationAdministration> = {}) {
    super(source);
    this.resourceType = 'MedicationAdministration';
    if (source["category"]) { this.category = new fhir.CodeableConcept(source.category!); }
    if (source["context"]) { this.context = new fhir.Reference(source.context!); }
    if (source["device"]) { this.device = source.device.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["dosage"]) { this.dosage = new fhir.MedicationAdministrationDosage(source.dosage!); }
    if (source["effectiveDateTime"]) { this.effectiveDateTime = source.effectiveDateTime; }
    if (source["_effectiveDateTime"]) { this._effectiveDateTime = new fhir.FhirElement(source._effectiveDateTime!); }
    if (source["effectivePeriod"]) { this.effectivePeriod = new fhir.Period(source.effectivePeriod!); }
    if (source["eventHistory"]) { this.eventHistory = source.eventHistory.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["instantiates"]) { this.instantiates = source.instantiates.map((x) => (x)); }
    if (source["_instantiates"]) { this._instantiates = source._instantiates.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["medicationCodeableConcept"]) { this.medicationCodeableConcept = new fhir.CodeableConcept(source.medicationCodeableConcept!); }
    if (source["medicationReference"]) { this.medicationReference = new fhir.Reference(source.medicationReference!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["partOf"]) { this.partOf = source.partOf.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["performer"]) { this.performer = source.performer.map((x:Partial<fhir.IMedicationAdministrationPerformer>) => new fhir.MedicationAdministrationPerformer(x)); }
    if (source["reasonCode"]) { this.reasonCode = source.reasonCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["reasonReference"]) { this.reasonReference = source.reasonReference.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["request"]) { this.request = new fhir.Reference(source.request!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["statusReason"]) { this.statusReason = source.statusReason.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    this.subject = null;
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (this.subject === undefined) { this.subject = null }
    if (source["supportingInformation"]) { this.supportingInformation = source.supportingInformation.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
  }
  /**
   * Check if the current MedicationAdministration contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["subject"] === undefined) { missingElements.push("subject"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicationAdministration from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IMedicationAdministration):MedicationAdministration {
    var dest:MedicationAdministration = new MedicationAdministration(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `MedicationAdministration is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the MedicationAdministration.status field
 */
export enum MedicationAdministrationStatusEnum {
  IN_PROGRESS = "in-progress",
  NOT_DONE = "not-done",
  ON_HOLD = "on-hold",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  STOPPED = "stopped",
  UNKNOWN = "unknown",
}
