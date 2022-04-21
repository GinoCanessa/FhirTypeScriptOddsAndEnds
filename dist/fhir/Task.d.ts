import * as fhir from '../fhir.js';
import { TaskStatusValueSetType, TaskStatusValueSetEnum } from '../fhirValueSets/TaskStatusValueSet.js';
import { TaskIntentValueSetType, TaskIntentValueSetEnum } from '../fhirValueSets/TaskIntentValueSet.js';
import { RequestPriorityValueSetType, RequestPriorityValueSetEnum } from '../fhirValueSets/RequestPriorityValueSet.js';
import { TaskCodeValueSetType } from '../fhirValueSets/TaskCodeValueSet.js';
import { PerformerRoleValueSetType } from '../fhirValueSets/PerformerRoleValueSet.js';
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export declare type ITaskRestriction = fhir.IBackboneElement & {
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number | undefined;
    /**
     * Extended properties for primitive element: Task.restriction.repetitions
     */
    _repetitions?: fhir.IFhirElement | undefined;
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient?: fhir.IReference[] | undefined;
};
/**
 * Additional information that may be needed in the execution of the task.
 */
export declare type ITaskInput = fhir.IBackboneElement & {
    /**
     * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueCanonical?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueInstant?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueOid?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUrl?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUuid?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAddress?: fhir.IAddress | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAge?: fhir.IAge | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAnnotation?: fhir.IAnnotation | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAttachment?: fhir.IAttachment | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCoding?: fhir.ICoding | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactPoint?: fhir.IContactPoint | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCount?: fhir.ICount | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDistance?: fhir.IDistance | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDuration?: fhir.IDuration | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueHumanName?: fhir.IHumanName | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueIdentifier?: fhir.IIdentifier | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMoney?: fhir.IMoney | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePeriod?: fhir.IPeriod | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRatio?: fhir.IRatio | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueReference?: fhir.IReference | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSampledData?: fhir.ISampledData | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSignature?: fhir.ISignature | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTiming?: fhir.ITiming | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactDetail?: fhir.IContactDetail | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContributor?: fhir.IContributor | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueExpression?: fhir.IExpression | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueParameterDefinition?: fhir.IParameterDefinition | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRelatedArtifact?: fhir.IRelatedArtifact | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUsageContext?: fhir.IUsageContext | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDosage?: fhir.IDosage | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMeta?: fhir.IMeta | undefined;
};
/**
 * Outputs produced by the Task.
 */
export declare type ITaskOutput = fhir.IBackboneElement & {
    /**
     * The name of the Output parameter.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueCanonical?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueInstant?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueOid?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUrl?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUuid?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAddress?: fhir.IAddress | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAge?: fhir.IAge | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAnnotation?: fhir.IAnnotation | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAttachment?: fhir.IAttachment | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCoding?: fhir.ICoding | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactPoint?: fhir.IContactPoint | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCount?: fhir.ICount | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDistance?: fhir.IDistance | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDuration?: fhir.IDuration | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueHumanName?: fhir.IHumanName | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueIdentifier?: fhir.IIdentifier | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMoney?: fhir.IMoney | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePeriod?: fhir.IPeriod | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRatio?: fhir.IRatio | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueReference?: fhir.IReference | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSampledData?: fhir.ISampledData | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSignature?: fhir.ISignature | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTiming?: fhir.ITiming | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactDetail?: fhir.IContactDetail | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContributor?: fhir.IContributor | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueExpression?: fhir.IExpression | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueParameterDefinition?: fhir.IParameterDefinition | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRelatedArtifact?: fhir.IRelatedArtifact | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUsageContext?: fhir.IUsageContext | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDosage?: fhir.IDosage | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMeta?: fhir.IMeta | undefined;
};
/**
 * A task to be performed.
 */
export declare type ITask = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Task";
    /**
     * The business identifier for this task.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Task.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.IFhirElement | undefined;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.instantiatesUri
     */
    _instantiatesUri?: fhir.IFhirElement | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhir.IIdentifier | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * The current status of the task.
     */
    status: TaskStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Task.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhir.ICodeableConcept | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhir.ICodeableConcept | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent: TaskIntentValueSetEnum | null;
    /**
     * Extended properties for primitive element: Task.intent
     */
    _intent?: fhir.IFhirElement | undefined;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Task.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Task.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhir.IReference | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhir.IReference | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhir.IPeriod | undefined;
    /**
     * The date and time this task was created.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: Task.authoredOn
     */
    _authoredOn?: fhir.IFhirElement | undefined;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string | undefined;
    /**
     * Extended properties for primitive element: Task.lastModified
     */
    _lastModified?: fhir.IFhirElement | undefined;
    /**
     * The creator of the task.
     */
    requester?: fhir.IReference | undefined;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.IReference | undefined;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: fhir.IReference | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reasonCode?: fhir.ICodeableConcept | undefined;
    /**
     * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
     */
    reasonReference?: fhir.IReference | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: fhir.IReference[] | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhir.IReference[] | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhir.ITaskRestriction | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: fhir.ITaskInput[] | undefined;
    /**
     * Outputs produced by the Task.
     */
    output?: fhir.ITaskOutput[] | undefined;
};
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export declare class TaskRestriction extends fhir.BackboneElement implements ITaskRestriction {
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number | undefined;
    /**
     * Extended properties for primitive element: Task.restriction.repetitions
     */
    _repetitions?: fhir.FhirElement | undefined;
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhir.Period | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient?: fhir.Reference[] | undefined;
    /**
     * Default constructor for TaskRestriction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITaskRestriction>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Additional information that may be needed in the execution of the task.
 */
export declare class TaskInput extends fhir.BackboneElement implements ITaskInput {
    /**
     * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueCanonical?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueId?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueInstant?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueMarkdown?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueOid?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUrl?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.input.value[x]
     */
    _valueUuid?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAge?: fhir.Age | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCount?: fhir.Count | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDistance?: fhir.Distance | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContactDetail?: fhir.ContactDetail | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueContributor?: fhir.Contributor | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueExpression?: fhir.Expression | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUsageContext?: fhir.UsageContext | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDosage?: fhir.Dosage | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMeta?: fhir.Meta | undefined;
    /**
     * Default constructor for TaskInput - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITaskInput>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Outputs produced by the Task.
 */
export declare class TaskOutput extends fhir.BackboneElement implements ITaskOutput {
    /**
     * The name of the Output parameter.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueCanonical?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueId?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueInstant?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueMarkdown?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueOid?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUrl?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: Task.output.value[x]
     */
    _valueUuid?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAge?: fhir.Age | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCount?: fhir.Count | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDistance?: fhir.Distance | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContactDetail?: fhir.ContactDetail | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueContributor?: fhir.Contributor | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueExpression?: fhir.Expression | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUsageContext?: fhir.UsageContext | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDosage?: fhir.Dosage | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMeta?: fhir.Meta | undefined;
    /**
     * Default constructor for TaskOutput - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITaskOutput>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A task to be performed.
 */
export declare class Task extends fhir.DomainResource implements ITask {
    /**
     * Resource Type Name
     */
    resourceType: "Task";
    /**
     * The business identifier for this task.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Task.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.FhirElement | undefined;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: string | undefined;
    /**
     * Extended properties for primitive element: Task.instantiatesUri
     */
    _instantiatesUri?: fhir.FhirElement | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * The current status of the task.
     */
    status: TaskStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Task.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhir.CodeableConcept | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent: TaskIntentValueSetEnum | null;
    /**
     * Extended properties for primitive element: Task.intent
     */
    _intent?: fhir.FhirElement | undefined;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Task.priority
     */
    _priority?: fhir.FhirElement | undefined;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Task.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhir.Reference | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhir.Reference | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhir.Period | undefined;
    /**
     * The date and time this task was created.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: Task.authoredOn
     */
    _authoredOn?: fhir.FhirElement | undefined;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string | undefined;
    /**
     * Extended properties for primitive element: Task.lastModified
     */
    _lastModified?: fhir.FhirElement | undefined;
    /**
     * The creator of the task.
     */
    requester?: fhir.Reference | undefined;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: fhir.CodeableConcept[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.Reference | undefined;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: fhir.Reference | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reasonCode?: fhir.CodeableConcept | undefined;
    /**
     * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: fhir.Reference[] | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhir.Reference[] | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhir.TaskRestriction | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: fhir.TaskInput[] | undefined;
    /**
     * Outputs produced by the Task.
     */
    output?: fhir.TaskOutput[] | undefined;
    /**
     * Default constructor for Task - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITask>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): TaskStatusValueSetType;
    /**
     * Required-bound Value Set for intent
     */
    intentRequiredValueSet(): TaskIntentValueSetType;
    /**
     * Required-bound Value Set for priority
     */
    priorityRequiredValueSet(): RequestPriorityValueSetType;
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): TaskCodeValueSetType;
    /**
     * Preferred-bound Value Set for performerType
     */
    performerTypePreferredValueSet(): PerformerRoleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Task.d.ts.map