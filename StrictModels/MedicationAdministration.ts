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
 * Indicates who or what performed the medication administration and how they were involved.
 */
export class MedicationAdministrationPerformer extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationAdministrationPerformer {
  /**
   * Indicates who or what performed the medication administration.
   */
  actor: fhirModels.Reference;
  /**
   * Distinguishes the type of involvement of the performer in the medication administration.
   */
  function?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicationAdministrationPerformer from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicationAdministrationPerformer) {
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
 * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
 */
export class MedicationAdministrationDosage extends fhirModels.BackboneElement implements fhirInterfaces.IMedicationAdministrationDosage {
  /**
   * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administered over period of time of a single administration.
   */
  dose?: fhirModels.Quantity|undefined;
  /**
   * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
   */
  method?: fhirModels.CodeableConcept|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rateRatio?: fhirModels.Ratio|undefined;
  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be captured as a distinct MedicationAdministration, with a specific MedicationAdministration.dosage.rate, and the date time when the rate change occurred. Typically, the MedicationAdministration.dosage.rate element is not used to convey an average rate.
   */
  rateQuantity?: fhirModels.Quantity|undefined;
  /**
   * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
   */
  route?: fhirModels.CodeableConcept|undefined;
  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  site?: fhirModels.CodeableConcept|undefined;
  /**
   * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.
   * The dosage instructions should reflect the dosage of the medication that was administered.
   */
  text?: string|undefined;
  _text?: fhirModels.Element|undefined;
  /**
   * Default constructor for MedicationAdministrationDosage from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicationAdministrationDosage) {
    super(source);
    if (source["dose"] !== undefined) {
      this.dose = new fhirModels.Quantity(source.dose);
    }
    if (source["method"] !== undefined) {
      this.method = new fhirModels.CodeableConcept(source.method);
    }
    if (source["rateRatio"] !== undefined) {
      this.rateRatio = new fhirModels.Ratio(source.rateRatio);
    }
    if (source["rateQuantity"] !== undefined) {
      this.rateQuantity = new fhirModels.Quantity(source.rateQuantity);
    }
    if (source["route"] !== undefined) {
      this.route = new fhirModels.CodeableConcept(source.route);
    }
    if (source["site"] !== undefined) {
      this.site = new fhirModels.CodeableConcept(source.site);
    }
    if (source["text"] !== undefined) {
      this.text = source.text;
    }
    if (source["_text"] !== undefined) {
      this._text = new fhirModels.Element(source._text);
    }
  }
}
/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export class MedicationAdministration extends fhirModels.DomainResource implements fhirInterfaces.IMedicationAdministration {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicationAdministration";
  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  category?: fhirModels.CodeableConcept|undefined;
  /**
   * The visit, admission, or other contact between patient and health care provider during which the medication administration was performed.
   */
  context?: fhirModels.Reference|undefined;
  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  device?: fhirModels.Reference[]|undefined;
  /**
   * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  dosage?: fhirModels.MedicationAdministrationDosage|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectiveDateTime?: string|undefined;
  _effectiveDateTime?: fhirModels.Element|undefined;
  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
   */
  effectivePeriod?: fhirModels.Period|undefined;
  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the Provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the Provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.
   */
  eventHistory?: fhirModels.Reference[]|undefined;
  /**
   * This is a business identifier, not a resource identifier.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  instantiates?: string[]|undefined;
  _instantiates?: fhirModels.Element[]|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the medication resource is recommended.  For example, if you require form or lot number, then you must reference the Medication resource.
   */
  medicationReference?: fhirModels.Reference|undefined;
  /**
   * Extra information about the medication administration that is not conveyed by the other attributes.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: fhirModels.Reference[]|undefined;
  /**
   * Indicates who or what performed the medication administration and how they were involved.
   */
  performer?: fhirModels.MedicationAdministrationPerformer[]|undefined;
  /**
   * A code indicating why the medication was given.
   */
  reasonCode?: fhirModels.CodeableConcept[]|undefined;
  /**
   * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode.
   */
  reasonReference?: fhirModels.Reference[]|undefined;
  /**
   * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not reference MedicationRequests where the intent is any other value.
   */
  request?: fhirModels.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MedicationAdministrationStatusEnum;
  _status?: fhirModels.Element|undefined;
  /**
   * A code indicating why the administration was not performed.
   */
  statusReason?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The person or animal or group receiving the medication.
   */
  subject: fhirModels.Reference;
  /**
   * Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  supportingInformation?: fhirModels.Reference[]|undefined;
  /**
   * Default constructor for MedicationAdministration from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicationAdministration) {
    super(source);
    if ((source['resourceType'] !== "MedicationAdministration") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicationAdministration'; }
    if (source["category"] !== undefined) {
      this.category = new fhirModels.CodeableConcept(source.category);
    }
    if (source["context"] !== undefined) {
      this.context = new fhirModels.Reference(source.context);
    }
    if (source["device"] !== undefined) {
      this.device = source.device.map((x) => new fhirModels.Reference(x));
    }
    if (source["dosage"] !== undefined) {
      this.dosage = new fhirModels.MedicationAdministrationDosage(source.dosage);
    }
    if (source["effectiveDateTime"] !== undefined) {
      this.effectiveDateTime = source.effectiveDateTime;
    }
    if (source["_effectiveDateTime"] !== undefined) {
      this._effectiveDateTime = new fhirModels.Element(source._effectiveDateTime);
    }
    if (source["effectivePeriod"] !== undefined) {
      this.effectivePeriod = new fhirModels.Period(source.effectivePeriod);
    }
    if (source["eventHistory"] !== undefined) {
      this.eventHistory = source.eventHistory.map((x) => new fhirModels.Reference(x));
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["instantiates"] !== undefined) {
      this.instantiates = source.instantiates.map((x) => (x));
    }
    if (source["_instantiates"] !== undefined) {
      this._instantiates = source._instantiates.map((x) => new fhirModels.Element(x));
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
      this.performer = source.performer.map((x) => new fhirModels.MedicationAdministrationPerformer(x));
    }
    if (source["reasonCode"] !== undefined) {
      this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["reasonReference"] !== undefined) {
      this.reasonReference = source.reasonReference.map((x) => new fhirModels.Reference(x));
    }
    if (source["request"] !== undefined) {
      this.request = new fhirModels.Reference(source.request);
    }
    {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
    if (source["statusReason"] !== undefined) {
      this.statusReason = source.statusReason.map((x) => new fhirModels.CodeableConcept(x));
    }
    {
      this.subject = new fhirModels.Reference(source.subject);
    }
    if (source["supportingInformation"] !== undefined) {
      this.supportingInformation = source.supportingInformation.map((x) => new fhirModels.Reference(x));
    }
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
