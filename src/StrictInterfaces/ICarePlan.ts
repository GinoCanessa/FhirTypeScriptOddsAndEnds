// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../strictinterfaces'
/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export interface ICarePlanActivityDetail extends fhirInterfaces.IBackboneElement {
  /**
   * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
   */
  code?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  dailyAmount?: fhirInterfaces.IQuantity|undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: string|undefined;
  _description?: fhirInterfaces.IElement|undefined;
  /**
   * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   */
  doNotPerform?: boolean|undefined;
  _doNotPerform?: fhirInterfaces.IElement|undefined;
  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  goal?: fhirInterfaces.IReference[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhirInterfaces.IElement[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhirInterfaces.IElement[]|undefined;
  /**
   * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   */
  kind?: CarePlanActivityDetailKindEnum|undefined;
  _kind?: fhirInterfaces.IElement|undefined;
  /**
   * May reference a specific clinical location or may identify a type of location.
   */
  location?: fhirInterfaces.IReference|undefined;
  /**
   * A performer MAY also be a participant in the care plan.
   */
  performer?: fhirInterfaces.IReference[]|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: fhirInterfaces.IReference|undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: fhirInterfaces.IQuantity|undefined;
  /**
   * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
   */
  reasonCode?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   */
  reasonReference?: fhirInterfaces.IReference[]|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledTiming?: fhirInterfaces.ITiming|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledPeriod?: fhirInterfaces.IPeriod|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledString?: string|undefined;
  _scheduledString?: fhirInterfaces.IElement|undefined;
  /**
   * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.  
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
   */
  status: CarePlanActivityDetailStatusEnum;
  _status?: fhirInterfaces.IElement|undefined;
  /**
   * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
   */
  statusReason?: fhirInterfaces.ICodeableConcept|undefined;
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
export interface ICarePlanActivity extends fhirInterfaces.IBackboneElement {
  /**
   * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  detail?: fhirInterfaces.ICarePlanActivityDetail|undefined;
  /**
   * Note that this should not duplicate the activity status (e.g. completed or in progress).
   */
  outcomeCodeableConcept?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: fhirInterfaces.IReference[]|undefined;
  /**
   * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
   */
  progress?: fhirInterfaces.IAnnotation[]|undefined;
  /**
   * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.  
   * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
   */
  reference?: fhirInterfaces.IReference|undefined;
}
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export interface ICarePlan extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "CarePlan";
  /**
   * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   */
  activity?: fhirInterfaces.ICarePlanActivity[]|undefined;
  /**
   * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
   */
  addresses?: fhirInterfaces.IReference[]|undefined;
  /**
   * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
   */
  author?: fhirInterfaces.IReference|undefined;
  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  basedOn?: fhirInterfaces.IReference[]|undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  careTeam?: fhirInterfaces.IReference[]|undefined;
  /**
   * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
   */
  category?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Collaborative care plans may have multiple contributors.
   */
  contributor?: fhirInterfaces.IReference[]|undefined;
  /**
   * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   */
  created?: string|undefined;
  _created?: fhirInterfaces.IElement|undefined;
  /**
   * A description of the scope and nature of the plan.
   */
  description?: string|undefined;
  _description?: fhirInterfaces.IElement|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
   */
  encounter?: fhirInterfaces.IReference|undefined;
  /**
   * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   */
  goal?: fhirInterfaces.IReference[]|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhirInterfaces.IElement[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhirInterfaces.IElement[]|undefined;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  intent: CarePlanIntentEnum;
  _intent?: fhirInterfaces.IElement|undefined;
  /**
   * General notes about the care plan not covered elsewhere.
   */
  note?: fhirInterfaces.IAnnotation[]|undefined;
  /**
   * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
   */
  partOf?: fhirInterfaces.IReference[]|undefined;
  /**
   * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
   */
  period?: fhirInterfaces.IPeriod|undefined;
  /**
   * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
   */
  replaces?: fhirInterfaces.IReference[]|undefined;
  /**
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
   */
  status: CarePlanStatusEnum;
  _status?: fhirInterfaces.IElement|undefined;
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  subject: fhirInterfaces.IReference;
  /**
   * Use "concern" to identify specific conditions addressed by the care plan.
   */
  supportingInfo?: fhirInterfaces.IReference[]|undefined;
  /**
   * Human-friendly name for the care plan.
   */
  title?: string|undefined;
  _title?: fhirInterfaces.IElement|undefined;
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
