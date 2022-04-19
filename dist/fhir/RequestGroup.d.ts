import * as fhir from '../fhir';
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export declare type IRequestGroupActionCondition = fhir.IBackboneElement & {
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.IExpression | undefined;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: RequestGroupActionConditionKindEnum | null;
    _kind?: fhir.IFhirElement | undefined;
};
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export declare type IRequestGroupActionRelatedAction = fhir.IBackboneElement & {
    /**
     * The element id of the action this is related to.
     */
    actionId: string | null;
    _actionId?: fhir.IFhirElement | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhir.IDuration | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhir.IRange | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship: RequestGroupActionRelatedActionRelationshipEnum | null;
    _relationship?: fhir.IFhirElement | undefined;
};
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export declare type IRequestGroupAction = fhir.IBackboneElement & {
    /**
     * Sub actions.
     */
    action?: fhir.IRequestGroupAction[] | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: RequestGroupActionCardinalityBehaviorEnum | undefined;
    _cardinalityBehavior?: fhir.IFhirElement | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhir.IRequestGroupActionCondition[] | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.IRelatedArtifact[] | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: RequestGroupActionGroupingBehaviorEnum | undefined;
    _groupingBehavior?: fhir.IFhirElement | undefined;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhir.IReference[] | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: RequestGroupActionPrecheckBehaviorEnum | undefined;
    _precheckBehavior?: fhir.IFhirElement | undefined;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    _prefix?: fhir.IFhirElement | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestGroupActionPriorityEnum | undefined;
    _priority?: fhir.IFhirElement | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhir.IRequestGroupActionRelatedAction[] | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: RequestGroupActionRequiredBehaviorEnum | undefined;
    _requiredBehavior?: fhir.IFhirElement | undefined;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.IReference | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: RequestGroupActionSelectionBehaviorEnum | undefined;
    _selectionBehavior?: fhir.IFhirElement | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    _textEquivalent?: fhir.IFhirElement | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    _timingDateTime?: fhir.IFhirElement | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: fhir.IAge | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: fhir.IPeriod | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: fhir.IDuration | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: fhir.IRange | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: fhir.ITiming | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export declare type IRequestGroup = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup";
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhir.IRequestGroupAction[] | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.IReference | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhir.IFhirElement | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.IIdentifier | undefined;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhir.IFhirElement[] | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: RequestGroupIntentEnum | null;
    _intent?: fhir.IFhirElement | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: RequestGroupPriorityEnum | undefined;
    _priority?: fhir.IFhirElement | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.IReference[] | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status: RequestGroupStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.IReference | undefined;
};
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export declare class RequestGroupActionCondition extends fhir.BackboneElement implements fhir.IRequestGroupActionCondition {
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: RequestGroupActionConditionKindEnum | null;
    _kind?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RequestGroupActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRequestGroupActionCondition>);
    /**
     * Check if the current RequestGroupActionCondition contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a RequestGroupActionCondition from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRequestGroupActionCondition): RequestGroupActionCondition;
}
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export declare class RequestGroupActionRelatedAction extends fhir.BackboneElement implements fhir.IRequestGroupActionRelatedAction {
    /**
     * The element id of the action this is related to.
     */
    actionId: string | null;
    _actionId?: fhir.FhirElement | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhir.Duration | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhir.Range | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship: RequestGroupActionRelatedActionRelationshipEnum | null;
    _relationship?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RequestGroupActionRelatedAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRequestGroupActionRelatedAction>);
    /**
     * Check if the current RequestGroupActionRelatedAction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a RequestGroupActionRelatedAction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRequestGroupActionRelatedAction): RequestGroupActionRelatedAction;
}
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export declare class RequestGroupAction extends fhir.BackboneElement implements fhir.IRequestGroupAction {
    /**
     * Sub actions.
     */
    action?: fhir.RequestGroupAction[] | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: RequestGroupActionCardinalityBehaviorEnum | undefined;
    _cardinalityBehavior?: fhir.FhirElement | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhir.RequestGroupActionCondition[] | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifact[] | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: RequestGroupActionGroupingBehaviorEnum | undefined;
    _groupingBehavior?: fhir.FhirElement | undefined;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhir.Reference[] | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: RequestGroupActionPrecheckBehaviorEnum | undefined;
    _precheckBehavior?: fhir.FhirElement | undefined;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    _prefix?: fhir.FhirElement | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestGroupActionPriorityEnum | undefined;
    _priority?: fhir.FhirElement | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhir.RequestGroupActionRelatedAction[] | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: RequestGroupActionRequiredBehaviorEnum | undefined;
    _requiredBehavior?: fhir.FhirElement | undefined;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.Reference | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: RequestGroupActionSelectionBehaviorEnum | undefined;
    _selectionBehavior?: fhir.FhirElement | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    _textEquivalent?: fhir.FhirElement | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    _timingDateTime?: fhir.FhirElement | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: fhir.Age | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: fhir.Duration | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: fhir.Range | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for RequestGroupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRequestGroupAction>);
    /**
     * Check if the current RequestGroupAction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a RequestGroupAction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRequestGroupAction): RequestGroupAction;
}
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export declare class RequestGroup extends fhir.DomainResource implements fhir.IRequestGroup {
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup";
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhir.RequestGroupAction[] | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.Reference | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhir.FhirElement | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhir.FhirElement[] | undefined;
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhir.FhirElement[] | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: RequestGroupIntentEnum | null;
    _intent?: fhir.FhirElement | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: RequestGroupPriorityEnum | undefined;
    _priority?: fhir.FhirElement | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.Reference[] | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status: RequestGroupStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Default constructor for RequestGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRequestGroup>);
    /**
     * Check if the current RequestGroup contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a RequestGroup from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRequestGroup): RequestGroup;
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