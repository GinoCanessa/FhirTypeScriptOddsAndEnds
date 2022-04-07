import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export declare class CarePlanActivityDetail extends fhirModels.BackboneElement implements fhirInterfaces.ICarePlanActivityDetail {
    /**
     * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Identifies the quantity expected to be consumed in a given day.
     */
    dailyAmount?: fhirModels.Quantity | undefined;
    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhirModels.Element | undefined;
    /**
     * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
     */
    goal?: fhirModels.Reference[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirModels.Element[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirModels.Element[] | undefined;
    /**
     * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
     */
    kind?: CarePlanActivityDetailKindEnum | undefined;
    _kind?: fhirModels.Element | undefined;
    /**
     * May reference a specific clinical location or may identify a type of location.
     */
    location?: fhirModels.Reference | undefined;
    /**
     * A performer MAY also be a participant in the care plan.
     */
    performer?: fhirModels.Reference[] | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productReference?: fhirModels.Reference | undefined;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledTiming?: fhirModels.Timing | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledPeriod?: fhirModels.Period | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledString?: string | undefined;
    _scheduledString?: fhirModels.Element | undefined;
    /**
     * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
     */
    status?: CarePlanActivityDetailStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
     */
    statusReason?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for CarePlanActivityDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICarePlanActivityDetail>);
    /**
     * Factory function to create a CarePlanActivityDetail from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICarePlanActivityDetail): CarePlanActivityDetail;
    /**
     * Check if the current CarePlanActivityDetail contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the CarePlan.activity.detail.kind field
 */
export declare enum CarePlanActivityDetailKindEnum {
    APPOINTMENT = "Appointment",
    COMMUNICATIONREQUEST = "CommunicationRequest",
    DEVICEREQUEST = "DeviceRequest",
    MEDICATIONREQUEST = "MedicationRequest",
    NUTRITIONORDER = "NutritionOrder",
    TASK = "Task",
    SERVICEREQUEST = "ServiceRequest",
    VISIONPRESCRIPTION = "VisionPrescription"
}
/**
 * Code Values for the CarePlan.activity.detail.status field
 */
export declare enum CarePlanActivityDetailStatusEnum {
    NOT_STARTED = "not-started",
    SCHEDULED = "scheduled",
    IN_PROGRESS = "in-progress",
    ON_HOLD = "on-hold",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    STOPPED = "stopped",
    UNKNOWN = "unknown",
    ENTERED_IN_ERROR = "entered-in-error"
}
/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export declare class CarePlanActivity extends fhirModels.BackboneElement implements fhirInterfaces.ICarePlanActivity {
    /**
     * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
     */
    detail?: fhirModels.CarePlanActivityDetail | undefined;
    /**
     * Note that this should not duplicate the activity status (e.g. completed or in progress).
     */
    outcomeCodeableConcept?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: fhirModels.Reference[] | undefined;
    /**
     * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
     */
    progress?: fhirModels.Annotation[] | undefined;
    /**
     * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.
     * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
     */
    reference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for CarePlanActivity from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICarePlanActivity>);
    /**
     * Factory function to create a CarePlanActivity from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICarePlanActivity): CarePlanActivity;
    /**
     * Check if the current CarePlanActivity contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export declare class CarePlan extends fhirModels.DomainResource implements fhirInterfaces.ICarePlan {
    /**
     * Resource Type Name
     */
    readonly resourceType = "CarePlan";
    /**
     * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
     */
    activity?: fhirModels.CarePlanActivity[] | undefined;
    /**
     * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
     */
    addresses?: fhirModels.Reference[] | undefined;
    /**
     * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * A care plan that is fulfilled in whole or in part by this care plan.
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
     */
    careTeam?: fhirModels.Reference[] | undefined;
    /**
     * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Collaborative care plans may have multiple contributors.
     */
    contributor?: fhirModels.Reference[] | undefined;
    /**
     * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * A description of the scope and nature of the plan.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
     */
    goal?: fhirModels.Reference[] | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirModels.Element[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirModels.Element[] | undefined;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent?: CarePlanIntentEnum | undefined;
    _intent?: fhirModels.Element | undefined;
    /**
     * General notes about the care plan not covered elsewhere.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
     */
    partOf?: fhirModels.Reference[] | undefined;
    /**
     * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
     */
    period?: fhirModels.Period | undefined;
    /**
     * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
     */
    replaces?: fhirModels.Reference[] | undefined;
    /**
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
     */
    status?: CarePlanStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Use "concern" to identify specific conditions addressed by the care plan.
     */
    supportingInfo?: fhirModels.Reference[] | undefined;
    /**
     * Human-friendly name for the care plan.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Default constructor for CarePlan from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICarePlan>);
    /**
     * Factory function to create a CarePlan from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICarePlan): CarePlan;
    /**
     * Check if the current CarePlan contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the CarePlan.intent field
 */
export declare enum CarePlanIntentEnum {
    PROPOSAL = "proposal",
    PLAN = "plan",
    ORDER = "order",
    OPTION = "option"
}
/**
 * Code Values for the CarePlan.status field
 */
export declare enum CarePlanStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    REVOKED = "revoked",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=CarePlan.d.ts.map