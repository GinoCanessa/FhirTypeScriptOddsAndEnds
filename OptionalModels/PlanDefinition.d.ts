import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Indicates what should be done and within what timeframe.
 */
export declare class PlanDefinitionGoalTarget extends fhirModels.BackboneElement implements fhirInterfaces.IPlanDefinitionGoalTarget {
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailQuantity?: fhirModels.Quantity | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailRange?: fhirModels.Range | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Indicates the timeframe after the start of the goal in which the goal should be met.
     */
    due?: fhirModels.Duration | undefined;
    /**
     * The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for PlanDefinitionGoalTarget from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPlanDefinitionGoalTarget>);
    /**
     * Factory function to create a PlanDefinitionGoalTarget from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPlanDefinitionGoalTarget): PlanDefinitionGoalTarget;
    /**
     * Check if the current PlanDefinitionGoalTarget contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export declare class PlanDefinitionGoal extends fhirModels.BackboneElement implements fhirInterfaces.IPlanDefinitionGoal {
    /**
     * Identifies problems, conditions, issues, or concerns the goal is intended to address.
     */
    addresses?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description?: fhirModels.CodeableConcept | undefined;
    /**
     * Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhirModels.RelatedArtifact[] | undefined;
    /**
     * Identifies the expected level of importance associated with reaching/sustaining the defined goal.
     */
    priority?: fhirModels.CodeableConcept | undefined;
    /**
     * The event after which the goal should begin being pursued.
     */
    start?: fhirModels.CodeableConcept | undefined;
    /**
     * Indicates what should be done and within what timeframe.
     */
    target?: fhirModels.PlanDefinitionGoalTarget[] | undefined;
    /**
     * Default constructor for PlanDefinitionGoal from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPlanDefinitionGoal>);
    /**
     * Factory function to create a PlanDefinitionGoal from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPlanDefinitionGoal): PlanDefinitionGoal;
    /**
     * Check if the current PlanDefinitionGoal contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
 */
export declare class PlanDefinitionActionCondition extends fhirModels.BackboneElement implements fhirInterfaces.IPlanDefinitionActionCondition {
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhirModels.Expression | undefined;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind?: PlanDefinitionActionConditionKindEnum | undefined;
    _kind?: fhirModels.Element | undefined;
    /**
     * Default constructor for PlanDefinitionActionCondition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPlanDefinitionActionCondition>);
    /**
     * Factory function to create a PlanDefinitionActionCondition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPlanDefinitionActionCondition): PlanDefinitionActionCondition;
    /**
     * Check if the current PlanDefinitionActionCondition contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the PlanDefinition.action.condition.kind field
 */
export declare enum PlanDefinitionActionConditionKindEnum {
    APPLICABILITY = "applicability",
    START = "start",
    STOP = "stop"
}
/**
 * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
 */
export declare class PlanDefinitionActionRelatedAction extends fhirModels.BackboneElement implements fhirInterfaces.IPlanDefinitionActionRelatedAction {
    /**
     * The element id of the related action.
     */
    actionId?: string | undefined;
    _actionId?: fhirModels.Element | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhirModels.Duration | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhirModels.Range | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship?: PlanDefinitionActionRelatedActionRelationshipEnum | undefined;
    _relationship?: fhirModels.Element | undefined;
    /**
     * Default constructor for PlanDefinitionActionRelatedAction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPlanDefinitionActionRelatedAction>);
    /**
     * Factory function to create a PlanDefinitionActionRelatedAction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPlanDefinitionActionRelatedAction): PlanDefinitionActionRelatedAction;
    /**
     * Check if the current PlanDefinitionActionRelatedAction contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the PlanDefinition.action.relatedAction.relationship field
 */
export declare enum PlanDefinitionActionRelatedActionRelationshipEnum {
    BEFORE_START = "before-start",
    BEFORE = "before",
    BEFORE_END = "before-end",
    CONCURRENT_WITH_START = "concurrent-with-start",
    CONCURRENT = "concurrent",
    CONCURRENT_WITH_END = "concurrent-with-end",
    AFTER_START = "after-start",
    AFTER = "after",
    AFTER_END = "after-end"
}
/**
 * Indicates who should participate in performing the action described.
 */
export declare class PlanDefinitionActionParticipant extends fhirModels.BackboneElement implements fhirInterfaces.IPlanDefinitionActionParticipant {
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhirModels.CodeableConcept | undefined;
    /**
     * The type of participant in the action.
     */
    type?: PlanDefinitionActionParticipantTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for PlanDefinitionActionParticipant from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPlanDefinitionActionParticipant>);
    /**
     * Factory function to create a PlanDefinitionActionParticipant from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPlanDefinitionActionParticipant): PlanDefinitionActionParticipant;
    /**
     * Check if the current PlanDefinitionActionParticipant contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the PlanDefinition.action.participant.type field
 */
export declare enum PlanDefinitionActionParticipantTypeEnum {
    PATIENT = "patient",
    PRACTITIONER = "practitioner",
    RELATED_PERSON = "related-person",
    DEVICE = "device"
}
/**
 * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
 */
export declare class PlanDefinitionActionDynamicValue extends fhirModels.BackboneElement implements fhirInterfaces.IPlanDefinitionActionDynamicValue {
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhirModels.Expression | undefined;
    /**
     * To specify the path to the current action being realized, the %action environment variable is available in this path. For example, to specify the description element of the target action, the path would be %action.description. The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    _path?: fhirModels.Element | undefined;
    /**
     * Default constructor for PlanDefinitionActionDynamicValue from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPlanDefinitionActionDynamicValue>);
    /**
     * Factory function to create a PlanDefinitionActionDynamicValue from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPlanDefinitionActionDynamicValue): PlanDefinitionActionDynamicValue;
    /**
     * Check if the current PlanDefinitionActionDynamicValue contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
 */
export declare class PlanDefinitionAction extends fhirModels.BackboneElement implements fhirInterfaces.IPlanDefinitionAction {
    /**
     * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
     */
    action?: fhirModels.PlanDefinitionAction[] | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: PlanDefinitionActionCardinalityBehaviorEnum | undefined;
    _cardinalityBehavior?: fhirModels.Element | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
     */
    condition?: fhirModels.PlanDefinitionActionCondition[] | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definitionCanonical?: string | undefined;
    _definitionCanonical?: fhirModels.Element | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definitionUri?: string | undefined;
    _definitionUri?: fhirModels.Element | undefined;
    /**
     * A brief description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhirModels.RelatedArtifact[] | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    dynamicValue?: fhirModels.PlanDefinitionActionDynamicValue[] | undefined;
    /**
     * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
     */
    goalId?: string[] | undefined;
    _goalId?: fhirModels.Element[] | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: PlanDefinitionActionGroupingBehaviorEnum | undefined;
    _groupingBehavior?: fhirModels.Element | undefined;
    /**
     * Defines input data requirements for the action.
     */
    input?: fhirModels.DataRequirement[] | undefined;
    /**
     * Defines the outputs of the action, if any.
     */
    output?: fhirModels.DataRequirement[] | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: fhirModels.PlanDefinitionActionParticipant[] | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: PlanDefinitionActionPrecheckBehaviorEnum | undefined;
    _precheckBehavior?: fhirModels.Element | undefined;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    _prefix?: fhirModels.Element | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: PlanDefinitionActionPriorityEnum | undefined;
    _priority?: fhirModels.Element | undefined;
    /**
     * This is different than the clinical evidence documentation, it's an actual business description of the reason for performing the action.
     */
    reason?: fhirModels.CodeableConcept[] | undefined;
    /**
     * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
     */
    relatedAction?: fhirModels.PlanDefinitionActionRelatedAction[] | undefined;
    /**
     * Defines the required behavior for the action.
     */
    requiredBehavior?: PlanDefinitionActionRequiredBehaviorEnum | undefined;
    _requiredBehavior?: fhirModels.Element | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: PlanDefinitionActionSelectionBehaviorEnum | undefined;
    _selectionBehavior?: fhirModels.Element | undefined;
    /**
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subjectCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subjectReference?: fhirModels.Reference | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    _textEquivalent?: fhirModels.Element | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    _timingDateTime?: fhirModels.Element | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: fhirModels.Age | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: fhirModels.Period | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: fhirModels.Duration | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: fhirModels.Range | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: fhirModels.Timing | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Note that when a referenced ActivityDefinition also defines a transform, the transform specified here generally takes precedence. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    transform?: string | undefined;
    _transform?: fhirModels.Element | undefined;
    /**
     * A description of when the action should be triggered.
     */
    trigger?: fhirModels.TriggerDefinition[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for PlanDefinitionAction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPlanDefinitionAction>);
    /**
     * Factory function to create a PlanDefinitionAction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPlanDefinitionAction): PlanDefinitionAction;
    /**
     * Check if the current PlanDefinitionAction contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the PlanDefinition.action.cardinalityBehavior field
 */
export declare enum PlanDefinitionActionCardinalityBehaviorEnum {
    SINGLE = "single",
    MULTIPLE = "multiple"
}
/**
 * Code Values for the PlanDefinition.action.groupingBehavior field
 */
export declare enum PlanDefinitionActionGroupingBehaviorEnum {
    VISUAL_GROUP = "visual-group",
    LOGICAL_GROUP = "logical-group",
    SENTENCE_GROUP = "sentence-group"
}
/**
 * Code Values for the PlanDefinition.action.precheckBehavior field
 */
export declare enum PlanDefinitionActionPrecheckBehaviorEnum {
    YES = "yes",
    NO = "no"
}
/**
 * Code Values for the PlanDefinition.action.priority field
 */
export declare enum PlanDefinitionActionPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the PlanDefinition.action.requiredBehavior field
 */
export declare enum PlanDefinitionActionRequiredBehaviorEnum {
    MUST = "must",
    COULD = "could",
    MUST_UNLESS_DOCUMENTED = "must-unless-documented"
}
/**
 * Code Values for the PlanDefinition.action.selectionBehavior field
 */
export declare enum PlanDefinitionActionSelectionBehaviorEnum {
    ANY = "any",
    ALL = "all",
    ALL_OR_NONE = "all-or-none",
    EXACTLY_ONE = "exactly-one",
    AT_MOST_ONE = "at-most-one",
    ONE_OR_MORE = "one-or-more"
}
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
export declare class PlanDefinition extends fhirModels.DomainResource implements fhirInterfaces.IPlanDefinition {
    /**
     * Resource Type Name
     */
    readonly resourceType = "PlanDefinition";
    /**
     * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
     */
    action?: fhirModels.PlanDefinitionAction[] | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhirModels.Element | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhirModels.ContactDetail[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the plan definition is presumed to be the predominant language in the place the plan definition was created).
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhirModels.ContactDetail[] | undefined;
    /**
     * The effective period for a plan definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhirModels.Period | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhirModels.ContactDetail[] | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    goal?: fhirModels.PlanDefinitionGoal[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhirModels.Element | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the plan definition.
     */
    library?: string[] | undefined;
    _library?: fhirModels.Element[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the plan definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhirModels.RelatedArtifact[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhirModels.ContactDetail[] | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    status?: PlanDefinitionStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectReference?: fhirModels.Reference | undefined;
    /**
     * An explanatory or alternate title for the plan definition giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhirModels.Element | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
     */
    topic?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * A detailed description of how the plan definition is used from a clinical perspective.
     */
    usage?: string | undefined;
    _usage?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for PlanDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPlanDefinition>);
    /**
     * Factory function to create a PlanDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPlanDefinition): PlanDefinition;
    /**
     * Check if the current PlanDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the PlanDefinition.status field
 */
export declare enum PlanDefinitionStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=PlanDefinition.d.ts.map