// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 */
export class GoalTarget extends fhirModels.BackboneElement implements fhirInterfaces.IGoalTarget {
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailQuantity?: fhirModels.Quantity|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailRange?: fhirModels.Range|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailString?: string|undefined;
  _detailString?: fhirModels.Element|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailBoolean?: boolean|undefined;
  _detailBoolean?: fhirModels.Element|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailInteger?: number|undefined;
  _detailInteger?: fhirModels.Element|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailRatio?: fhirModels.Ratio|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDate?: string|undefined;
  _dueDate?: fhirModels.Element|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDuration?: fhirModels.Duration|undefined;
  /**
   * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  measure?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for GoalTarget from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IGoalTarget>) {
    super(source);
    if (source["detailQuantity"] !== undefined) { this.detailQuantity = new fhirModels.Quantity(source.detailQuantity); }
    if (source["detailRange"] !== undefined) { this.detailRange = new fhirModels.Range(source.detailRange); }
    if (source["detailCodeableConcept"] !== undefined) { this.detailCodeableConcept = new fhirModels.CodeableConcept(source.detailCodeableConcept); }
    if (source["detailString"] !== undefined) { this.detailString = source.detailString; }
    if (source["_detailString"] !== undefined) { this._detailString = new fhirModels.Element(source._detailString); }
    if (source["detailBoolean"] !== undefined) { this.detailBoolean = source.detailBoolean; }
    if (source["_detailBoolean"] !== undefined) { this._detailBoolean = new fhirModels.Element(source._detailBoolean); }
    if (source["detailInteger"] !== undefined) { this.detailInteger = source.detailInteger; }
    if (source["_detailInteger"] !== undefined) { this._detailInteger = new fhirModels.Element(source._detailInteger); }
    if (source["detailRatio"] !== undefined) { this.detailRatio = new fhirModels.Ratio(source.detailRatio); }
    if (source["dueDate"] !== undefined) { this.dueDate = source.dueDate; }
    if (source["_dueDate"] !== undefined) { this._dueDate = new fhirModels.Element(source._dueDate); }
    if (source["dueDuration"] !== undefined) { this.dueDuration = new fhirModels.Duration(source.dueDuration); }
    if (source["measure"] !== undefined) { this.measure = new fhirModels.CodeableConcept(source.measure); }
  }
  /**
   * Factory function to create a GoalTarget from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IGoalTarget):GoalTarget {
    var dest:GoalTarget = new GoalTarget(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `GoalTarget is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current GoalTarget contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export class Goal extends fhirModels.DomainResource implements fhirInterfaces.IGoal {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Goal";
  /**
   * Describes the progression, or lack thereof, towards the goal against the target.
   */
  achievementStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  addresses?: fhirModels.Reference[]|undefined;
  /**
   * Indicates a category the goal falls within.
   */
  category?: fhirModels.CodeableConcept[]|undefined;
  /**
   * If no code is available, use CodeableConcept.text.
   */
  description?: fhirModels.CodeableConcept|undefined;
  /**
   * This is the individual responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
   */
  expressedBy?: fhirModels.Reference|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
   */
  lifecycleStatus?: GoalLifecycleStatusEnum|undefined;
  _lifecycleStatus?: fhirModels.Element|undefined;
  /**
   * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * Note that this should not duplicate the goal status.
   */
  outcomeCode?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: fhirModels.Reference[]|undefined;
  /**
   * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
   * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
   */
  priority?: fhirModels.CodeableConcept|undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  startDate?: string|undefined;
  _startDate?: fhirModels.Element|undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  startCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * To see the date for past statuses, query history.
   */
  statusDate?: string|undefined;
  _statusDate?: fhirModels.Element|undefined;
  /**
   * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
   */
  statusReason?: string|undefined;
  _statusReason?: fhirModels.Element|undefined;
  /**
   * Identifies the patient, group or organization for whom the goal is being established.
   */
  subject?: fhirModels.Reference|undefined;
  /**
   * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
   */
  target?: fhirModels.GoalTarget[]|undefined;
  /**
   * Default constructor for Goal from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IGoal>) {
    super(source);
    if ((source['resourceType'] !== "Goal") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Goal'; }
    if (source["achievementStatus"] !== undefined) { this.achievementStatus = new fhirModels.CodeableConcept(source.achievementStatus); }
    if (source["addresses"] !== undefined) { this.addresses = source.addresses.map((x) => new fhirModels.Reference(x)); }
    if (source["category"] !== undefined) { this.category = source.category.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["description"] !== undefined) { this.description = new fhirModels.CodeableConcept(source.description); }
    if (source["expressedBy"] !== undefined) { this.expressedBy = new fhirModels.Reference(source.expressedBy); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["lifecycleStatus"] !== undefined) { this.lifecycleStatus = source.lifecycleStatus; }
    if (source["_lifecycleStatus"] !== undefined) { this._lifecycleStatus = new fhirModels.Element(source._lifecycleStatus); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["outcomeCode"] !== undefined) { this.outcomeCode = source.outcomeCode.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["outcomeReference"] !== undefined) { this.outcomeReference = source.outcomeReference.map((x) => new fhirModels.Reference(x)); }
    if (source["priority"] !== undefined) { this.priority = new fhirModels.CodeableConcept(source.priority); }
    if (source["startDate"] !== undefined) { this.startDate = source.startDate; }
    if (source["_startDate"] !== undefined) { this._startDate = new fhirModels.Element(source._startDate); }
    if (source["startCodeableConcept"] !== undefined) { this.startCodeableConcept = new fhirModels.CodeableConcept(source.startCodeableConcept); }
    if (source["statusDate"] !== undefined) { this.statusDate = source.statusDate; }
    if (source["_statusDate"] !== undefined) { this._statusDate = new fhirModels.Element(source._statusDate); }
    if (source["statusReason"] !== undefined) { this.statusReason = source.statusReason; }
    if (source["_statusReason"] !== undefined) { this._statusReason = new fhirModels.Element(source._statusReason); }
    if (source["subject"] !== undefined) { this.subject = new fhirModels.Reference(source.subject); }
    if (source["target"] !== undefined) { this.target = source.target.map((x) => new fhirModels.GoalTarget(x)); }
  }
  /**
   * Factory function to create a Goal from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IGoal):Goal {
    var dest:Goal = new Goal(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Goal is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current Goal contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["description"] === undefined) { missingElements.push("description"); }
    if (this["lifecycleStatus"] === undefined) { missingElements.push("lifecycleStatus"); }
    if (this["subject"] === undefined) { missingElements.push("subject"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the Goal.lifecycleStatus field
 */
export enum GoalLifecycleStatusEnum {
  PROPOSED = "proposed",
  PLANNED = "planned",
  ACCEPTED = "accepted",
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  ENTERED_IN_ERROR = "entered-in-error",
  REJECTED = "rejected",
}