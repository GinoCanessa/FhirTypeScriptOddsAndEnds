import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export declare class RequestGroupActionCondition extends fhirModels.BackboneElement implements fhirInterfaces.IRequestGroupActionCondition {
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhirModels.Expression | undefined;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind?: RequestGroupActionConditionKindEnum | undefined;
    _kind?: fhirModels.Element | undefined;
    /**
     * Default constructor for RequestGroupActionCondition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IRequestGroupActionCondition>);
    /**
     * Factory function to create a RequestGroupActionCondition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRequestGroupActionCondition): RequestGroupActionCondition;
    /**
     * Check if the current RequestGroupActionCondition contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the RequestGroup.action.condition.kind field
 */
export declare enum RequestGroupActionConditionKindEnum {
    APPLICABILITY = "applicability",
    START = "start",
    STOP = "stop"
}
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export declare class RequestGroupActionRelatedAction extends fhirModels.BackboneElement implements fhirInterfaces.IRequestGroupActionRelatedAction {
    /**
     * The element id of the action this is related to.
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
    relationship?: RequestGroupActionRelatedActionRelationshipEnum | undefined;
    _relationship?: fhirModels.Element | undefined;
    /**
     * Default constructor for RequestGroupActionRelatedAction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IRequestGroupActionRelatedAction>);
    /**
     * Factory function to create a RequestGroupActionRelatedAction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRequestGroupActionRelatedAction): RequestGroupActionRelatedAction;
    /**
     * Check if the current RequestGroupActionRelatedAction contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the RequestGroup.action.relatedAction.relationship field
 */
export declare enum RequestGroupActionRelatedActionRelationshipEnum {
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
 * The actions, if any, produced by the evaluation of the artifact.
 */
export declare class RequestGroupAction extends fhirModels.BackboneElement implements fhirInterfaces.IRequestGroupAction {
    /**
     * Sub actions.
     */
    action?: fhirModels.RequestGroupAction[] | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: RequestGroupActionCardinalityBehaviorEnum | undefined;
    _cardinalityBehavior?: fhirModels.Element | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhirModels.RequestGroupActionCondition[] | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhirModels.RelatedArtifact[] | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: RequestGroupActionGroupingBehaviorEnum | undefined;
    _groupingBehavior?: fhirModels.Element | undefined;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhirModels.Reference[] | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: RequestGroupActionPrecheckBehaviorEnum | undefined;
    _precheckBehavior?: fhirModels.Element | undefined;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    _prefix?: fhirModels.Element | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestGroupActionPriorityEnum | undefined;
    _priority?: fhirModels.Element | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhirModels.RequestGroupActionRelatedAction[] | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: RequestGroupActionRequiredBehaviorEnum | undefined;
    _requiredBehavior?: fhirModels.Element | undefined;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhirModels.Reference | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: RequestGroupActionSelectionBehaviorEnum | undefined;
    _selectionBehavior?: fhirModels.Element | undefined;
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
     * The type of action to perform (create, update, remove).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for RequestGroupAction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IRequestGroupAction>);
    /**
     * Factory function to create a RequestGroupAction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRequestGroupAction): RequestGroupAction;
    /**
     * Check if the current RequestGroupAction contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the RequestGroup.action.cardinalityBehavior field
 */
export declare enum RequestGroupActionCardinalityBehaviorEnum {
    SINGLE = "single",
    MULTIPLE = "multiple"
}
/**
 * Code Values for the RequestGroup.action.groupingBehavior field
 */
export declare enum RequestGroupActionGroupingBehaviorEnum {
    VISUAL_GROUP = "visual-group",
    LOGICAL_GROUP = "logical-group",
    SENTENCE_GROUP = "sentence-group"
}
/**
 * Code Values for the RequestGroup.action.precheckBehavior field
 */
export declare enum RequestGroupActionPrecheckBehaviorEnum {
    YES = "yes",
    NO = "no"
}
/**
 * Code Values for the RequestGroup.action.priority field
 */
export declare enum RequestGroupActionPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the RequestGroup.action.requiredBehavior field
 */
export declare enum RequestGroupActionRequiredBehaviorEnum {
    MUST = "must",
    COULD = "could",
    MUST_UNLESS_DOCUMENTED = "must-unless-documented"
}
/**
 * Code Values for the RequestGroup.action.selectionBehavior field
 */
export declare enum RequestGroupActionSelectionBehaviorEnum {
    ANY = "any",
    ALL = "all",
    ALL_OR_NONE = "all-or-none",
    EXACTLY_ONE = "exactly-one",
    AT_MOST_ONE = "at-most-one",
    ONE_OR_MORE = "one-or-more"
}
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export declare class RequestGroup extends fhirModels.DomainResource implements fhirInterfaces.IRequestGroup {
    /**
     * Resource Type Name
     */
    readonly resourceType = "RequestGroup";
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhirModels.RequestGroupAction[] | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhirModels.Element | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhirModels.Identifier | undefined;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirModels.Element[] | undefined;
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirModels.Element[] | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent?: RequestGroupIntentEnum | undefined;
    _intent?: fhirModels.Element | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: RequestGroupPriorityEnum | undefined;
    _priority?: fhirModels.Element | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhirModels.Reference[] | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status?: RequestGroupStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Default constructor for RequestGroup from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IRequestGroup>);
    /**
     * Factory function to create a RequestGroup from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRequestGroup): RequestGroup;
    /**
     * Check if the current RequestGroup contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the RequestGroup.intent field
 */
export declare enum RequestGroupIntentEnum {
    PROPOSAL = "proposal",
    PLAN = "plan",
    DIRECTIVE = "directive",
    ORDER = "order",
    ORIGINAL_ORDER = "original-order",
    REFLEX_ORDER = "reflex-order",
    FILLER_ORDER = "filler-order",
    INSTANCE_ORDER = "instance-order",
    OPTION = "option"
}
/**
 * Code Values for the RequestGroup.priority field
 */
export declare enum RequestGroupPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the RequestGroup.status field
 */
export declare enum RequestGroupStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    REVOKED = "revoked",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=RequestGroup.d.ts.map