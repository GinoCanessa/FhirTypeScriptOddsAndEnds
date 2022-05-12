import * as fhir from '../fhir.js';
import { ObservationCodesValueSetType } from '../fhirValueSets/ObservationCodesValueSet.js';
import { GoalStatusValueSetType } from '../fhirValueSets/GoalStatusValueSet.js';
import { GoalStatusValueSetEnum } from '../valueSetEnums.js';
import { GoalAchievementValueSetType } from '../fhirValueSets/GoalAchievementValueSet.js';
import { GoalCategoryValueSetType } from '../fhirValueSets/GoalCategoryValueSet.js';
import { GoalPriorityValueSetType } from '../fhirValueSets/GoalPriorityValueSet.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
/**
 * Valid arguments for the GoalTarget type.
 */
export interface GoalTargetArgs extends fhir.BackboneElementArgs {
    /**
     * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConceptArgs | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detail?: fhir.Quantity | fhir.Range | fhir.CodeableConcept | fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.Ratio | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailRange?: fhir.RangeArgs | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailString?: fhir.FhirString | string | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailInteger?: fhir.FhirInteger | number | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detailRatio?: fhir.RatioArgs | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    due?: fhir.FhirDate | fhir.Duration | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDate?: fhir.FhirDate | string | undefined;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    dueDuration?: fhir.DurationArgs | undefined;
}
/**
 * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 */
export declare class GoalTarget extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConcept | undefined;
    /**
     * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
     */
    detail?: (fhir.Quantity | fhir.Range | fhir.CodeableConcept | fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.Ratio) | undefined;
    readonly __detailIsChoice: true;
    /**
     * Indicates either the date or the duration after start by which the goal should be met.
     */
    due?: (fhir.FhirDate | fhir.Duration) | undefined;
    readonly __dueIsChoice: true;
    /**
     * Default constructor for GoalTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GoalTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for measure
     */
    static measureExampleValueSet(): ObservationCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the Goal type.
 */
export interface GoalArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Goal" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
     */
    lifecycleStatus: GoalStatusValueSetEnum | null;
    /**
     * Describes the progression, or lack thereof, towards the goal against the target.
     */
    achievementStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
     * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhir.CodeableConceptArgs | null;
    /**
     * Identifies the patient, group or organization for whom the goal is being established.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    start?: fhir.FhirDate | fhir.CodeableConcept | undefined;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startDate?: fhir.FhirDate | string | undefined;
    /**
     * The date or event after which the goal should begin being pursued.
     */
    startCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
     */
    target?: fhir.GoalTargetArgs[] | undefined;
    /**
     * To see the date for past statuses, query history.
     */
    statusDate?: fhir.FhirDate | string | undefined;
    /**
     * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
     */
    statusReason?: fhir.FhirString | string | undefined;
    /**
     * This is the individual responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
     */
    expressedBy?: fhir.ReferenceArgs | undefined;
    /**
     * The identified conditions and other health record elements that are intended to be addressed by the goal.
     */
    addresses?: fhir.ReferenceArgs[] | undefined;
    /**
     * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Note that this should not duplicate the goal status.
     */
    outcomeCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export declare class Goal extends fhir.DomainResource {
    readonly __dataType: string;
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
    lifecycleStatus: GoalStatusValueSetEnum | null;
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
    start?: (fhir.FhirDate | fhir.CodeableConcept) | undefined;
    readonly __startIsChoice: true;
    /**
     * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
     */
    target?: fhir.GoalTarget[] | undefined;
    /**
     * To see the date for past statuses, query history.
     */
    statusDate?: fhir.FhirDate | undefined;
    /**
     * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
     */
    statusReason?: fhir.FhirString | undefined;
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
    /**
     * Default constructor for Goal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GoalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for lifecycleStatus
     */
    static lifecycleStatusRequiredValueSet(): GoalStatusValueSetType;
    /**
     * Preferred-bound Value Set for achievementStatus
     */
    static achievementStatusPreferredValueSet(): GoalAchievementValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): GoalCategoryValueSetType;
    /**
     * Preferred-bound Value Set for priority
     */
    static priorityPreferredValueSet(): GoalPriorityValueSetType;
    /**
     * Example-bound Value Set for description
     */
    static descriptionExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Example-bound Value Set for outcomeCode
     */
    static outcomeCodeExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Goal.d.ts.map