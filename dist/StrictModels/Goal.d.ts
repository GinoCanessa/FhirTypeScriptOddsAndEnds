import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 */
export declare class GoalTarget extends fhirModels.BackboneElement implements fhirInterfaces.IGoalTarget {
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailQuantity?: fhirModels.Quantity | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailRange?: fhirModels.Range | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailString?: string | undefined;
    _detailString?: fhirModels.Element | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailBoolean?: boolean | undefined;
    _detailBoolean?: fhirModels.Element | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailInteger?: number | undefined;
    _detailInteger?: fhirModels.Element | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailRatio?: fhirModels.Ratio | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDate?: string | undefined;
    _dueDate?: fhirModels.Element | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDuration?: fhirModels.Duration | undefined;
    /**
     * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for GoalTarget from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IGoalTarget);
}
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export declare class Goal extends fhirModels.DomainResource implements fhirInterfaces.IGoal {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Goal";
    /**
     * Describes the progression, or lack thereof, towards the goal against the target.
     */
    achievementStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * The identified conditions and other health record elements that are intended to be addressed by the goal.
     */
    addresses?: fhirModels.Reference[] | undefined;
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhirModels.CodeableConcept;
    /**
     * This is the individual responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
     */
    expressedBy?: fhirModels.Reference | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
     */
    lifecycleStatus: GoalLifecycleStatusEnum;
    _lifecycleStatus?: fhirModels.Element | undefined;
    /**
     * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Note that this should not duplicate the goal status.
     */
    outcomeCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: fhirModels.Reference[] | undefined;
    /**
     * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
     * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
     */
    priority?: fhirModels.CodeableConcept | undefined;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startDate?: string | undefined;
    _startDate?: fhirModels.Element | undefined;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * To see the date for past statuses, query history.
     */
    statusDate?: string | undefined;
    _statusDate?: fhirModels.Element | undefined;
    /**
     * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
     */
    statusReason?: string | undefined;
    _statusReason?: fhirModels.Element | undefined;
    /**
     * Identifies the patient, group or organization for whom the goal is being established.
     */
    subject: fhirModels.Reference;
    /**
     * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
     */
    target?: fhirModels.GoalTarget[] | undefined;
    /**
     * Default constructor for Goal from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IGoal);
}
/**
 * Code Values for the Goal.lifecycleStatus field
 */
export declare enum GoalLifecycleStatusEnum {
    PROPOSED = "proposed",
    PLANNED = "planned",
    ACCEPTED = "accepted",
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    REJECTED = "rejected"
}
//# sourceMappingURL=Goal.d.ts.map