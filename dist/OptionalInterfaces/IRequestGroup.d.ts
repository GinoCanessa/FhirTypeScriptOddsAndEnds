import * as fhirInterfaces from '../optionalinterfaces';
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export interface IRequestGroupActionCondition extends fhirInterfaces.IBackboneElement {
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhirInterfaces.IExpression | undefined;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind?: RequestGroupActionConditionKindEnum | undefined;
    _kind?: fhirInterfaces.IElement | undefined;
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
export interface IRequestGroupActionRelatedAction extends fhirInterfaces.IBackboneElement {
    /**
     * The element id of the action this is related to.
     */
    actionId?: string | undefined;
    _actionId?: fhirInterfaces.IElement | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhirInterfaces.IRange | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship?: RequestGroupActionRelatedActionRelationshipEnum | undefined;
    _relationship?: fhirInterfaces.IElement | undefined;
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
export interface IRequestGroupAction extends fhirInterfaces.IBackboneElement {
    /**
     * Sub actions.
     */
    action?: fhirInterfaces.IRequestGroupAction[] | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: RequestGroupActionCardinalityBehaviorEnum | undefined;
    _cardinalityBehavior?: fhirInterfaces.IElement | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhirInterfaces.IRequestGroupActionCondition[] | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhirInterfaces.IRelatedArtifact[] | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: RequestGroupActionGroupingBehaviorEnum | undefined;
    _groupingBehavior?: fhirInterfaces.IElement | undefined;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhirInterfaces.IReference[] | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: RequestGroupActionPrecheckBehaviorEnum | undefined;
    _precheckBehavior?: fhirInterfaces.IElement | undefined;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    _prefix?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestGroupActionPriorityEnum | undefined;
    _priority?: fhirInterfaces.IElement | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhirInterfaces.IRequestGroupActionRelatedAction[] | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: RequestGroupActionRequiredBehaviorEnum | undefined;
    _requiredBehavior?: fhirInterfaces.IElement | undefined;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhirInterfaces.IReference | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: RequestGroupActionSelectionBehaviorEnum | undefined;
    _selectionBehavior?: fhirInterfaces.IElement | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    _textEquivalent?: fhirInterfaces.IElement | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    _timingDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: fhirInterfaces.IAge | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: fhirInterfaces.IRange | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
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
export interface IRequestGroup extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "RequestGroup";
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhirInterfaces.IRequestGroupAction[] | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhirInterfaces.IReference | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhirInterfaces.IElement | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirInterfaces.IElement[] | undefined;
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirInterfaces.IElement[] | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent?: RequestGroupIntentEnum | undefined;
    _intent?: fhirInterfaces.IElement | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: RequestGroupPriorityEnum | undefined;
    _priority?: fhirInterfaces.IElement | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhirInterfaces.IReference[] | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status?: RequestGroupStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhirInterfaces.IReference | undefined;
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
//# sourceMappingURL=IRequestGroup.d.ts.map