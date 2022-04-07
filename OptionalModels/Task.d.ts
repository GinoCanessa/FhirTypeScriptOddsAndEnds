import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export declare class TaskRestriction extends fhirModels.BackboneElement implements fhirInterfaces.ITaskRestriction {
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhirModels.Period | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient?: fhirModels.Reference[] | undefined;
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number | undefined;
    _repetitions?: fhirModels.Element | undefined;
    /**
     * Default constructor for TaskRestriction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ITaskRestriction>);
    /**
     * Factory function to create a TaskRestriction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ITaskRestriction): TaskRestriction;
    /**
     * Check if the current TaskRestriction contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Additional information that may be needed in the execution of the task.
 */
export declare class TaskInput extends fhirModels.BackboneElement implements fhirInterfaces.ITaskInput {
    /**
     * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string | undefined;
    _valueId?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhirModels.Element | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAddress?: fhirModels.Address | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAge?: fhirModels.Age | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAnnotation?: fhirModels.Annotation | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAttachment?: fhirModels.Attachment | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCoding?: fhirModels.Coding | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactPoint?: fhirModels.ContactPoint | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCount?: fhirModels.Count | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDistance?: fhirModels.Distance | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDuration?: fhirModels.Duration | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueHumanName?: fhirModels.HumanName | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueIdentifier?: fhirModels.Identifier | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMoney?: fhirModels.Money | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePeriod?: fhirModels.Period | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRange?: fhirModels.Range | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRatio?: fhirModels.Ratio | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSampledData?: fhirModels.SampledData | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSignature?: fhirModels.Signature | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTiming?: fhirModels.Timing | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactDetail?: fhirModels.ContactDetail | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContributor?: fhirModels.Contributor | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueExpression?: fhirModels.Expression | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueParameterDefinition?: fhirModels.ParameterDefinition | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRelatedArtifact?: fhirModels.RelatedArtifact | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTriggerDefinition?: fhirModels.TriggerDefinition | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUsageContext?: fhirModels.UsageContext | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDosage?: fhirModels.Dosage | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMeta?: fhirModels.Meta | undefined;
    /**
     * Default constructor for TaskInput from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ITaskInput>);
    /**
     * Factory function to create a TaskInput from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ITaskInput): TaskInput;
    /**
     * Check if the current TaskInput contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Outputs produced by the Task.
 */
export declare class TaskOutput extends fhirModels.BackboneElement implements fhirInterfaces.ITaskOutput {
    /**
     * The name of the Output parameter.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string | undefined;
    _valueId?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhirModels.Element | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAddress?: fhirModels.Address | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAge?: fhirModels.Age | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAnnotation?: fhirModels.Annotation | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAttachment?: fhirModels.Attachment | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCoding?: fhirModels.Coding | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactPoint?: fhirModels.ContactPoint | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCount?: fhirModels.Count | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDistance?: fhirModels.Distance | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDuration?: fhirModels.Duration | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueHumanName?: fhirModels.HumanName | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueIdentifier?: fhirModels.Identifier | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMoney?: fhirModels.Money | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePeriod?: fhirModels.Period | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRange?: fhirModels.Range | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRatio?: fhirModels.Ratio | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSampledData?: fhirModels.SampledData | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSignature?: fhirModels.Signature | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTiming?: fhirModels.Timing | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactDetail?: fhirModels.ContactDetail | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContributor?: fhirModels.Contributor | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueExpression?: fhirModels.Expression | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueParameterDefinition?: fhirModels.ParameterDefinition | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRelatedArtifact?: fhirModels.RelatedArtifact | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTriggerDefinition?: fhirModels.TriggerDefinition | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUsageContext?: fhirModels.UsageContext | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDosage?: fhirModels.Dosage | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMeta?: fhirModels.Meta | undefined;
    /**
     * Default constructor for TaskOutput from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ITaskOutput>);
    /**
     * Factory function to create a TaskOutput from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ITaskOutput): TaskOutput;
    /**
     * Check if the current TaskOutput contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A task to be performed.
 */
export declare class Task extends fhirModels.DomainResource implements fhirInterfaces.ITask {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Task";
    /**
     * The date and time this task was created.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhirModels.Element | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhirModels.Period | undefined;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhirModels.Reference | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhirModels.Reference | undefined;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhirModels.Identifier | undefined;
    /**
     * The business identifier for this task.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: fhirModels.TaskInput[] | undefined;
    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: string | undefined;
    _instantiatesCanonical?: fhirModels.Element | undefined;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: string | undefined;
    _instantiatesUri?: fhirModels.Element | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: fhirModels.Reference[] | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent?: TaskIntentEnum | undefined;
    _intent?: fhirModels.Element | undefined;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string | undefined;
    _lastModified?: fhirModels.Element | undefined;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: fhirModels.Reference | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Outputs produced by the Task.
     */
    output?: fhirModels.TaskOutput[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhirModels.Reference | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf?: fhirModels.Reference[] | undefined;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: TaskPriorityEnum | undefined;
    _priority?: fhirModels.Element | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reasonCode?: fhirModels.CodeableConcept | undefined;
    /**
     * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
     */
    reasonReference?: fhirModels.Reference | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhirModels.Reference[] | undefined;
    /**
     * The creator of the task.
     */
    requester?: fhirModels.Reference | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhirModels.TaskRestriction | undefined;
    /**
     * The current status of the task.
     */
    status?: TaskStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for Task from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ITask>);
    /**
     * Factory function to create a Task from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ITask): Task;
    /**
     * Check if the current Task contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Task.intent field
 */
export declare enum TaskIntentEnum {
    UNKNOWN = "unknown",
    PROPOSAL = "proposal",
    PLAN = "plan",
    ORDER = "order",
    ORIGINAL_ORDER = "original-order",
    REFLEX_ORDER = "reflex-order",
    FILLER_ORDER = "filler-order",
    INSTANCE_ORDER = "instance-order",
    OPTION = "option"
}
/**
 * Code Values for the Task.priority field
 */
export declare enum TaskPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the Task.status field
 */
export declare enum TaskStatusEnum {
    DRAFT = "draft",
    REQUESTED = "requested",
    RECEIVED = "received",
    ACCEPTED = "accepted",
    REJECTED = "rejected",
    READY = "ready",
    CANCELLED = "cancelled",
    IN_PROGRESS = "in-progress",
    ON_HOLD = "on-hold",
    FAILED = "failed",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=Task.d.ts.map