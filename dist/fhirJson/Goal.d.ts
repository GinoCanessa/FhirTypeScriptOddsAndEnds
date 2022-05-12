import * as fhir from '../fhirJson.js';
/**
 * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 */
export interface GoalTarget extends fhir.BackboneElement {
    /**
     * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConcept | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailQuantity?: fhir.Quantity | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailRange?: fhir.Range | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailString?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.target.detail[x]
     */
    _detailString?: fhir.FhirElement;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Goal.target.detail[x]
     */
    _detailBoolean?: fhir.FhirElement;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Goal.target.detail[x]
     */
    _detailInteger?: fhir.FhirElement;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailRatio?: fhir.Ratio | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.target.due[x]
     */
    _dueDate?: fhir.FhirElement;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDuration?: fhir.Duration | undefined;
}
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export interface Goal extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Goal";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
     */
    lifecycleStatus: 'accepted' | 'active' | 'cancelled' | 'completed' | 'entered-in-error' | 'on-hold' | 'planned' | 'proposed' | 'rejected' | null;
    /**
     * Describes the progression, or lack thereof, towards the goal against the target.
     */
    achievementStatus?: fhir.CodeableConcept | undefined;
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
     * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhir.CodeableConcept | null;
    /**
     * Identifies the patient, group or organization for whom the goal is being established.
     */
    subject: fhir.Reference | null;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.start[x]
     */
    _startDate?: fhir.FhirElement;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
     */
    target?: fhir.GoalTarget[] | undefined;
    /**
     * To see the date for past statuses, query history.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
     */
    statusReason?: string | undefined;
    /**
     * Extended properties for primitive element: Goal.statusReason
     */
    _statusReason?: fhir.FhirElement;
    /**
     * This is the individual responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
     */
    expressedBy?: fhir.Reference | undefined;
    /**
     * The identified conditions and other health record elements that are intended to be addressed by the goal.
     */
    addresses?: fhir.Reference[] | undefined;
    /**
     * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Note that this should not duplicate the goal status.
     */
    outcomeCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: fhir.Reference[] | undefined;
}
//# sourceMappingURL=Goal.d.ts.map