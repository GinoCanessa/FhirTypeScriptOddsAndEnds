import * as fhirInterfaces from '../strictinterfaces';
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export interface ITaskRestriction extends fhirInterfaces.IBackboneElement {
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient?: fhirInterfaces.IReference[] | undefined;
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number | undefined;
    _repetitions?: fhirInterfaces.IElement | undefined;
}
/**
 * Additional information that may be needed in the execution of the task.
 */
export interface ITaskInput extends fhirInterfaces.IBackboneElement {
    /**
     * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
     */
    type: fhirInterfaces.ICodeableConcept;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string | undefined;
    _valueId?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAge?: fhirInterfaces.IAge | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAnnotation?: fhirInterfaces.IAnnotation | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactPoint?: fhirInterfaces.IContactPoint | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCount?: fhirInterfaces.ICount | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDistance?: fhirInterfaces.IDistance | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueHumanName?: fhirInterfaces.IHumanName | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRange?: fhirInterfaces.IRange | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSampledData?: fhirInterfaces.ISampledData | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactDetail?: fhirInterfaces.IContactDetail | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContributor?: fhirInterfaces.IContributor | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDataRequirement?: fhirInterfaces.IDataRequirement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueExpression?: fhirInterfaces.IExpression | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueParameterDefinition?: fhirInterfaces.IParameterDefinition | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRelatedArtifact?: fhirInterfaces.IRelatedArtifact | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTriggerDefinition?: fhirInterfaces.ITriggerDefinition | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUsageContext?: fhirInterfaces.IUsageContext | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDosage?: fhirInterfaces.IDosage | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMeta?: fhirInterfaces.IMeta | undefined;
}
/**
 * Outputs produced by the Task.
 */
export interface ITaskOutput extends fhirInterfaces.IBackboneElement {
    /**
     * The name of the Output parameter.
     */
    type: fhirInterfaces.ICodeableConcept;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string | undefined;
    _valueId?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhirInterfaces.IElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAge?: fhirInterfaces.IAge | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAnnotation?: fhirInterfaces.IAnnotation | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactPoint?: fhirInterfaces.IContactPoint | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCount?: fhirInterfaces.ICount | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDistance?: fhirInterfaces.IDistance | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueHumanName?: fhirInterfaces.IHumanName | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRange?: fhirInterfaces.IRange | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSampledData?: fhirInterfaces.ISampledData | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactDetail?: fhirInterfaces.IContactDetail | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContributor?: fhirInterfaces.IContributor | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDataRequirement?: fhirInterfaces.IDataRequirement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueExpression?: fhirInterfaces.IExpression | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueParameterDefinition?: fhirInterfaces.IParameterDefinition | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRelatedArtifact?: fhirInterfaces.IRelatedArtifact | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTriggerDefinition?: fhirInterfaces.ITriggerDefinition | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUsageContext?: fhirInterfaces.IUsageContext | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDosage?: fhirInterfaces.IDosage | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMeta?: fhirInterfaces.IMeta | undefined;
}
/**
 * A task to be performed.
 */
export interface ITask extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Task";
    /**
     * The date and time this task was created.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhirInterfaces.IElement | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhirInterfaces.IReference | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhirInterfaces.IReference | undefined;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The business identifier for this task.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: fhirInterfaces.ITaskInput[] | undefined;
    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: string | undefined;
    _instantiatesCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: string | undefined;
    _instantiatesUri?: fhirInterfaces.IElement | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: fhirInterfaces.IReference[] | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent: TaskIntentEnum;
    _intent?: fhirInterfaces.IElement | undefined;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string | undefined;
    _lastModified?: fhirInterfaces.IElement | undefined;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: fhirInterfaces.IReference | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Outputs produced by the Task.
     */
    output?: fhirInterfaces.ITaskOutput[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhirInterfaces.IReference | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf?: fhirInterfaces.IReference[] | undefined;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: TaskPriorityEnum | undefined;
    _priority?: fhirInterfaces.IElement | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
     */
    reasonReference?: fhirInterfaces.IReference | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhirInterfaces.IReference[] | undefined;
    /**
     * The creator of the task.
     */
    requester?: fhirInterfaces.IReference | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhirInterfaces.ITaskRestriction | undefined;
    /**
     * The current status of the task.
     */
    status: TaskStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhirInterfaces.ICodeableConcept | undefined;
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
//# sourceMappingURL=ITask.d.ts.map