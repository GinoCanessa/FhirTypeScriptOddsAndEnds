import * as fhir from '../fhir';
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export declare type ITaskRestriction = fhir.IBackboneElement & {
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient?: fhir.IReference[] | undefined;
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number | undefined;
    _repetitions?: fhir.IFhirElement | undefined;
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
    _valueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string | undefined;
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhir.IFhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUuid?: string | undefined;
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
    _valueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string | undefined;
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhir.IFhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string | undefined;
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
     * The date and time this task was created.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhir.IFhirElement | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhir.ICodeableConcept | undefined;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhir.IPeriod | undefined;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhir.IReference | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhir.IReference | undefined;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhir.IIdentifier | undefined;
    /**
     * The business identifier for this task.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: fhir.ITaskInput[] | undefined;
    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: string | undefined;
    _instantiatesCanonical?: fhir.IFhirElement | undefined;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: string | undefined;
    _instantiatesUri?: fhir.IFhirElement | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: fhir.IReference[] | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent: TaskIntentEnum | null;
    _intent?: fhir.IFhirElement | undefined;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string | undefined;
    _lastModified?: fhir.IFhirElement | undefined;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: fhir.IReference | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Outputs produced by the Task.
     */
    output?: fhir.ITaskOutput[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.IReference | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: TaskPriorityEnum | undefined;
    _priority?: fhir.IFhirElement | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reasonCode?: fhir.ICodeableConcept | undefined;
    /**
     * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
     */
    reasonReference?: fhir.IReference | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhir.IReference[] | undefined;
    /**
     * The creator of the task.
     */
    requester?: fhir.IReference | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhir.ITaskRestriction | undefined;
    /**
     * The current status of the task.
     */
    status: TaskStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhir.ICodeableConcept | undefined;
};
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export declare class TaskRestriction extends fhir.BackboneElement implements fhir.ITaskRestriction {
    /**
     * Note that period.high is the due date representing the time by which the task should be completed.
     */
    period?: fhir.Period | undefined;
    /**
     * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
     */
    recipient?: fhir.Reference[] | undefined;
    /**
     * Indicates the number of times the requested action should occur.
     */
    repetitions?: number | undefined;
    _repetitions?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TaskRestriction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITaskRestriction>);
    /**
     * Check if the current TaskRestriction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TaskRestriction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITaskRestriction): TaskRestriction;
}
/**
 * Additional information that may be needed in the execution of the task.
 */
export declare class TaskInput extends fhir.BackboneElement implements fhir.ITaskInput {
    /**
     * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueId?: string | undefined;
    _valueId?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhir.FhirElement | undefined;
    /**
     * The value of the input parameter as a basic type.
     */
    valueUuid?: string | undefined;
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
    constructor(source?: Partial<fhir.ITaskInput>);
    /**
     * Check if the current TaskInput contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TaskInput from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITaskInput): TaskInput;
}
/**
 * Outputs produced by the Task.
 */
export declare class TaskOutput extends fhir.BackboneElement implements fhir.ITaskOutput {
    /**
     * The name of the Output parameter.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string | undefined;
    _valueId?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhir.FhirElement | undefined;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string | undefined;
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
    constructor(source?: Partial<fhir.ITaskOutput>);
    /**
     * Check if the current TaskOutput contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TaskOutput from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITaskOutput): TaskOutput;
}
/**
 * A task to be performed.
 */
export declare class Task extends fhir.DomainResource implements fhir.ITask {
    /**
     * Resource Type Name
     */
    resourceType: "Task";
    /**
     * The date and time this task was created.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhir.FhirElement | undefined;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: fhir.CodeableConcept | undefined;
    /**
     * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: fhir.Period | undefined;
    /**
     * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
     */
    focus?: fhir.Reference | undefined;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: fhir.Reference | undefined;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * The business identifier for this task.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: fhir.TaskInput[] | undefined;
    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: string | undefined;
    _instantiatesCanonical?: fhir.FhirElement | undefined;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: string | undefined;
    _instantiatesUri?: fhir.FhirElement | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: fhir.Reference[] | undefined;
    /**
     * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
     * In most cases, Tasks will have an intent of "order".
     */
    intent: TaskIntentEnum | null;
    _intent?: fhir.FhirElement | undefined;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: string | undefined;
    _lastModified?: fhir.FhirElement | undefined;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: fhir.Reference | undefined;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Outputs produced by the Task.
     */
    output?: fhir.TaskOutput[] | undefined;
    /**
     * Tasks may be created with an owner not yet identified.
     */
    owner?: fhir.Reference | undefined;
    /**
     * This should usually be 0..1.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: TaskPriorityEnum | undefined;
    _priority?: fhir.FhirElement | undefined;
    /**
     * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
     */
    reasonCode?: fhir.CodeableConcept | undefined;
    /**
     * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhir.Reference[] | undefined;
    /**
     * The creator of the task.
     */
    requester?: fhir.Reference | undefined;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: fhir.TaskRestriction | undefined;
    /**
     * The current status of the task.
     */
    status: TaskStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Task - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITask>);
    /**
     * Check if the current Task contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Task from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITask): Task;
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