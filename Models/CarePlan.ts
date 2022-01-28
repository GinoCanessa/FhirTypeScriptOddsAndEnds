// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export class CarePlanActivityDetail extends fhirModels.BackboneElement implements fhirInterfaces.ICarePlanActivityDetail {
  /**
   * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  dailyAmount?: fhirModels.Quantity|undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   */
  doNotPerform?: boolean|undefined;
  _doNotPerform?: fhirModels.Element|undefined;
  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  goal?: fhirModels.Reference[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhirModels.Element[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhirModels.Element[]|undefined;
  /**
   * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   */
  kind?: CarePlanActivityDetailKindEnum|undefined;
  _kind?: fhirModels.Element|undefined;
  /**
   * May reference a specific clinical location or may identify a type of location.
   */
  location?: fhirModels.Reference|undefined;
  /**
   * A performer MAY also be a participant in the care plan.
   */
  performer?: fhirModels.Reference[]|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: fhirModels.Reference|undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: fhirModels.Quantity|undefined;
  /**
   * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
   */
  reasonCode?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   */
  reasonReference?: fhirModels.Reference[]|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledTiming?: fhirModels.Timing|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledPeriod?: fhirModels.Period|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledString?: string|undefined;
  _scheduledString?: fhirModels.Element|undefined;
  /**
   * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.  
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
   */
  status: CarePlanActivityDetailStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
   */
  statusReason?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for CarePlanActivityDetail from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ICarePlanActivityDetail>) {
    super(source);
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["dailyAmount"] !== undefined) { this.dailyAmount = new fhirModels.Quantity(source.dailyAmount); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["doNotPerform"] !== undefined) { this.doNotPerform = source.doNotPerform; }
    if (source["_doNotPerform"] !== undefined) { this._doNotPerform = new fhirModels.Element(source._doNotPerform); }
    if (source["goal"] !== undefined) { this.goal = source.goal.map((x) => new fhirModels.Reference(x)); }
    if (source["instantiatesCanonical"] !== undefined) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x)); }
    if (source["_instantiatesCanonical"] !== undefined) { this._instantiatesCanonical = source._instantiatesCanonical.map((x) => new fhirModels.Element(x)); }
    if (source["instantiatesUri"] !== undefined) { this.instantiatesUri = source.instantiatesUri.map((x) => (x)); }
    if (source["_instantiatesUri"] !== undefined) { this._instantiatesUri = source._instantiatesUri.map((x) => new fhirModels.Element(x)); }
    if (source["kind"] !== undefined) { this.kind = source.kind; }
    if (source["_kind"] !== undefined) { this._kind = new fhirModels.Element(source._kind); }
    if (source["location"] !== undefined) { this.location = new fhirModels.Reference(source.location); }
    if (source["performer"] !== undefined) { this.performer = source.performer.map((x) => new fhirModels.Reference(x)); }
    if (source["productCodeableConcept"] !== undefined) { this.productCodeableConcept = new fhirModels.CodeableConcept(source.productCodeableConcept); }
    if (source["productReference"] !== undefined) { this.productReference = new fhirModels.Reference(source.productReference); }
    if (source["quantity"] !== undefined) { this.quantity = new fhirModels.Quantity(source.quantity); }
    if (source["reasonCode"] !== undefined) { this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["reasonReference"] !== undefined) { this.reasonReference = source.reasonReference.map((x) => new fhirModels.Reference(x)); }
    if (source["scheduledTiming"] !== undefined) { this.scheduledTiming = new fhirModels.Timing(source.scheduledTiming); }
    if (source["scheduledPeriod"] !== undefined) { this.scheduledPeriod = new fhirModels.Period(source.scheduledPeriod); }
    if (source["scheduledString"] !== undefined) { this.scheduledString = source.scheduledString; }
    if (source["_scheduledString"] !== undefined) { this._scheduledString = new fhirModels.Element(source._scheduledString); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["statusReason"] !== undefined) { this.statusReason = new fhirModels.CodeableConcept(source.statusReason); }
  }
  /**
   * Check if the current CarePlanActivityDetail contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CarePlanActivityDetail from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ICarePlanActivityDetail):CarePlanActivityDetail {
    var dest:CarePlanActivityDetail = new CarePlanActivityDetail(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `CarePlanActivityDetail is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the CarePlan.activity.detail.kind field
 */
export enum CarePlanActivityDetailKindEnum {
  APPOINTMENT = "Appointment",
  COMMUNICATIONREQUEST = "CommunicationRequest",
  DEVICEREQUEST = "DeviceRequest",
  MEDICATIONREQUEST = "MedicationRequest",
  NUTRITIONORDER = "NutritionOrder",
  TASK = "Task",
  SERVICEREQUEST = "ServiceRequest",
  VISIONPRESCRIPTION = "VisionPrescription",
}
/**
 * Code Values for the CarePlan.activity.detail.status field
 */
export enum CarePlanActivityDetailStatusEnum {
  NOT_STARTED = "not-started",
  SCHEDULED = "scheduled",
  IN_PROGRESS = "in-progress",
  ON_HOLD = "on-hold",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  STOPPED = "stopped",
  UNKNOWN = "unknown",
  ENTERED_IN_ERROR = "entered-in-error",
}
/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export class CarePlanActivity extends fhirModels.BackboneElement implements fhirInterfaces.ICarePlanActivity {
  /**
   * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  detail?: fhirModels.CarePlanActivityDetail|undefined;
  /**
   * Note that this should not duplicate the activity status (e.g. completed or in progress).
   */
  outcomeCodeableConcept?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: fhirModels.Reference[]|undefined;
  /**
   * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
   */
  progress?: fhirModels.Annotation[]|undefined;
  /**
   * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.  
   * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
   */
  reference?: fhirModels.Reference|undefined;
  /**
   * Default constructor for CarePlanActivity from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ICarePlanActivity>) {
    super(source);
    if (source["detail"] !== undefined) { this.detail = new fhirModels.CarePlanActivityDetail(source.detail); }
    if (source["outcomeCodeableConcept"] !== undefined) { this.outcomeCodeableConcept = source.outcomeCodeableConcept.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["outcomeReference"] !== undefined) { this.outcomeReference = source.outcomeReference.map((x) => new fhirModels.Reference(x)); }
    if (source["progress"] !== undefined) { this.progress = source.progress.map((x) => new fhirModels.Annotation(x)); }
    if (source["reference"] !== undefined) { this.reference = new fhirModels.Reference(source.reference); }
  }
  /**
   * Check if the current CarePlanActivity contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CarePlanActivity from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ICarePlanActivity):CarePlanActivity {
    var dest:CarePlanActivity = new CarePlanActivity(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `CarePlanActivity is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export class CarePlan extends fhirModels.DomainResource implements fhirInterfaces.ICarePlan {
  /**
   * Resource Type Name
   */
  readonly resourceType = "CarePlan";
  /**
   * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   */
  activity?: fhirModels.CarePlanActivity[]|undefined;
  /**
   * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
   */
  addresses?: fhirModels.Reference[]|undefined;
  /**
   * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
   */
  author?: fhirModels.Reference|undefined;
  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  basedOn?: fhirModels.Reference[]|undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  careTeam?: fhirModels.Reference[]|undefined;
  /**
   * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
   */
  category?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Collaborative care plans may have multiple contributors.
   */
  contributor?: fhirModels.Reference[]|undefined;
  /**
   * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   */
  created?: string|undefined;
  _created?: fhirModels.Element|undefined;
  /**
   * A description of the scope and nature of the plan.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
   */
  encounter?: fhirModels.Reference|undefined;
  /**
   * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   */
  goal?: fhirModels.Reference[]|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhirModels.Element[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhirModels.Element[]|undefined;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  intent: CarePlanIntentEnum|undefined;
  _intent?: fhirModels.Element|undefined;
  /**
   * General notes about the care plan not covered elsewhere.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
   */
  partOf?: fhirModels.Reference[]|undefined;
  /**
   * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
   */
  period?: fhirModels.Period|undefined;
  /**
   * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
   */
  replaces?: fhirModels.Reference[]|undefined;
  /**
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
   */
  status: CarePlanStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  subject: fhirModels.Reference|undefined;
  /**
   * Use "concern" to identify specific conditions addressed by the care plan.
   */
  supportingInfo?: fhirModels.Reference[]|undefined;
  /**
   * Human-friendly name for the care plan.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * Default constructor for CarePlan from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ICarePlan>) {
    super(source);
    if ((source['resourceType'] !== "CarePlan") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a CarePlan'; }
    if (source["activity"] !== undefined) { this.activity = source.activity.map((x) => new fhirModels.CarePlanActivity(x)); }
    if (source["addresses"] !== undefined) { this.addresses = source.addresses.map((x) => new fhirModels.Reference(x)); }
    if (source["author"] !== undefined) { this.author = new fhirModels.Reference(source.author); }
    if (source["basedOn"] !== undefined) { this.basedOn = source.basedOn.map((x) => new fhirModels.Reference(x)); }
    if (source["careTeam"] !== undefined) { this.careTeam = source.careTeam.map((x) => new fhirModels.Reference(x)); }
    if (source["category"] !== undefined) { this.category = source.category.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["contributor"] !== undefined) { this.contributor = source.contributor.map((x) => new fhirModels.Reference(x)); }
    if (source["created"] !== undefined) { this.created = source.created; }
    if (source["_created"] !== undefined) { this._created = new fhirModels.Element(source._created); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["encounter"] !== undefined) { this.encounter = new fhirModels.Reference(source.encounter); }
    if (source["goal"] !== undefined) { this.goal = source.goal.map((x) => new fhirModels.Reference(x)); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["instantiatesCanonical"] !== undefined) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x)); }
    if (source["_instantiatesCanonical"] !== undefined) { this._instantiatesCanonical = source._instantiatesCanonical.map((x) => new fhirModels.Element(x)); }
    if (source["instantiatesUri"] !== undefined) { this.instantiatesUri = source.instantiatesUri.map((x) => (x)); }
    if (source["_instantiatesUri"] !== undefined) { this._instantiatesUri = source._instantiatesUri.map((x) => new fhirModels.Element(x)); }
    if (source["intent"] !== undefined) { this.intent = source.intent; }
    if (source["_intent"] !== undefined) { this._intent = new fhirModels.Element(source._intent); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["partOf"] !== undefined) { this.partOf = source.partOf.map((x) => new fhirModels.Reference(x)); }
    if (source["period"] !== undefined) { this.period = new fhirModels.Period(source.period); }
    if (source["replaces"] !== undefined) { this.replaces = source.replaces.map((x) => new fhirModels.Reference(x)); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["subject"] !== undefined) { this.subject = new fhirModels.Reference(source.subject); }
    if (source["supportingInfo"] !== undefined) { this.supportingInfo = source.supportingInfo.map((x) => new fhirModels.Reference(x)); }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = new fhirModels.Element(source._title); }
  }
  /**
   * Check if the current CarePlan contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["intent"] === undefined) { missingElements.push("intent"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["subject"] === undefined) { missingElements.push("subject"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CarePlan from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ICarePlan):CarePlan {
    var dest:CarePlan = new CarePlan(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `CarePlan is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the CarePlan.intent field
 */
export enum CarePlanIntentEnum {
  PROPOSAL = "proposal",
  PLAN = "plan",
  ORDER = "order",
  OPTION = "option",
}
/**
 * Code Values for the CarePlan.status field
 */
export enum CarePlanStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  REVOKED = "revoked",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}
