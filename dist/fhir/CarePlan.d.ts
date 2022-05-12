import * as fhir from '../fhir.js';
import { CarePlanActivityKindValueSetType } from '../fhirValueSets/CarePlanActivityKindValueSet.js';
import { CarePlanActivityKindValueSetEnum } from '../valueSetEnums.js';
import { ProcedureCodeValueSetType } from '../fhirValueSets/ProcedureCodeValueSet.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
import { CarePlanActivityStatusValueSetType } from '../fhirValueSets/CarePlanActivityStatusValueSet.js';
import { CarePlanActivityStatusValueSetEnum } from '../valueSetEnums.js';
import { CarePlanActivityOutcomeValueSetType } from '../fhirValueSets/CarePlanActivityOutcomeValueSet.js';
import { RequestStatusValueSetType } from '../fhirValueSets/RequestStatusValueSet.js';
import { RequestStatusValueSetEnum } from '../valueSetEnums.js';
import { CarePlanIntentValueSetType } from '../fhirValueSets/CarePlanIntentValueSet.js';
import { CarePlanIntentValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the CarePlanActivityDetail type.
 */
export interface CarePlanActivityDetailArgs extends fhir.BackboneElementArgs {
    /**
     * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
     */
    kind?: CarePlanActivityKindValueSetEnum | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
     */
    goal?: fhir.ReferenceArgs[] | undefined;
    /**
     * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
     */
    status: CarePlanActivityStatusValueSetEnum | null;
    /**
     * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
     */
    doNotPerform?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduled?: fhir.Timing | fhir.Period | fhir.FhirString | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledTiming?: fhir.TimingArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduledString?: fhir.FhirString | string | undefined;
    /**
     * May reference a specific clinical location or may identify a type of location.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * A performer MAY also be a participant in the care plan.
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    product?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    productReference?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the quantity expected to be consumed in a given day.
     */
    dailyAmount?: fhir.QuantityArgs | undefined;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: fhir.FhirString | string | undefined;
}
/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export declare class CarePlanActivityDetail extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
     */
    kind?: CarePlanActivityKindValueSetEnum | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
     */
    goal?: fhir.Reference[] | undefined;
    /**
     * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
     */
    status: CarePlanActivityStatusValueSetEnum | null;
    /**
     * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
     */
    doNotPerform?: fhir.FhirBoolean | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    scheduled?: (fhir.Timing | fhir.Period | fhir.FhirString) | undefined;
    readonly __scheduledIsChoice: true;
    /**
     * May reference a specific clinical location or may identify a type of location.
     */
    location?: fhir.Reference | undefined;
    /**
     * A performer MAY also be a participant in the care plan.
     */
    performer?: fhir.Reference[] | undefined;
    /**
     * Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
    product?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    readonly __productIsChoice: true;
    /**
     * Identifies the quantity expected to be consumed in a given day.
     */
    dailyAmount?: fhir.Quantity | undefined;
    /**
     * Identifies the quantity expected to be supplied, administered or consumed by the subject.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for CarePlanActivityDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanActivityDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for kind
     */
    static kindRequiredValueSet(): CarePlanActivityKindValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ProcedureCodeValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): CarePlanActivityStatusValueSetType;
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
 * Valid arguments for the CarePlanActivity type.
 */
export interface CarePlanActivityArgs extends fhir.BackboneElementArgs {
    /**
     * Note that this should not duplicate the activity status (e.g. completed or in progress).
     */
    outcomeCodeableConcept?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
     */
    progress?: fhir.AnnotationArgs[] | undefined;
    /**
     * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.
     * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
     */
    reference?: fhir.ReferenceArgs | undefined;
    /**
     * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
     */
    detail?: fhir.CarePlanActivityDetailArgs | undefined;
}
/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export declare class CarePlanActivity extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Note that this should not duplicate the activity status (e.g. completed or in progress).
     */
    outcomeCodeableConcept?: fhir.CodeableConcept[] | undefined;
    /**
     * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
     */
    outcomeReference?: fhir.Reference[] | undefined;
    /**
     * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
     */
    progress?: fhir.Annotation[] | undefined;
    /**
     * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.
     * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
     */
    reference?: fhir.Reference | undefined;
    /**
     * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
     */
    detail?: fhir.CarePlanActivityDetail | undefined;
    /**
     * Default constructor for CarePlanActivity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanActivityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for outcomeCodeableConcept
     */
    static outcomeCodeableConceptExampleValueSet(): CarePlanActivityOutcomeValueSetType;
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
 * Valid arguments for the CarePlan type.
 */
export interface CarePlanArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CarePlan" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * A care plan that is fulfilled in whole or in part by this care plan.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: CarePlanIntentValueSetEnum | null;
    /**
     * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Human-friendly name for the care plan.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * A description of the scope and nature of the plan.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Collaborative care plans may have multiple contributors.
     */
    contributor?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
     */
    careTeam?: fhir.ReferenceArgs[] | undefined;
    /**
     * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
     */
    addresses?: fhir.ReferenceArgs[] | undefined;
    /**
     * Use "concern" to identify specific conditions addressed by the care plan.
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
     */
    goal?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
     */
    activity?: fhir.CarePlanActivityArgs[] | undefined;
    /**
     * General notes about the care plan not covered elsewhere.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export declare class CarePlan extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CarePlan";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | undefined;
    /**
     * A care plan that is fulfilled in whole or in part by this care plan.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
     */
    replaces?: fhir.Reference[] | undefined;
    /**
     * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: CarePlanIntentValueSetEnum | null;
    /**
     * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Human-friendly name for the care plan.
     */
    title?: fhir.FhirString | undefined;
    /**
     * A description of the scope and nature of the plan.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Identifies the patient or group whose intended care is described by the plan.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
     */
    period?: fhir.Period | undefined;
    /**
     * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
     */
    author?: fhir.Reference | undefined;
    /**
     * Collaborative care plans may have multiple contributors.
     */
    contributor?: fhir.Reference[] | undefined;
    /**
     * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
     */
    careTeam?: fhir.Reference[] | undefined;
    /**
     * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
     */
    addresses?: fhir.Reference[] | undefined;
    /**
     * Use "concern" to identify specific conditions addressed by the care plan.
     */
    supportingInfo?: fhir.Reference[] | undefined;
    /**
     * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
     */
    goal?: fhir.Reference[] | undefined;
    /**
     * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
     */
    activity?: fhir.CarePlanActivity[] | undefined;
    /**
     * General notes about the care plan not covered elsewhere.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for CarePlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CarePlanArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): RequestStatusValueSetType;
    /**
     * Required-bound Value Set for intent
     */
    static intentRequiredValueSet(): CarePlanIntentValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=CarePlan.d.ts.map