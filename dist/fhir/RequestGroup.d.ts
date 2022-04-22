import * as fhir from '../fhir.js';
import { ActionConditionKindValueSetType, ActionConditionKindValueSetEnum } from '../fhirValueSets/ActionConditionKindValueSet.js';
import { ActionRelationshipTypeValueSetType, ActionRelationshipTypeValueSetEnum } from '../fhirValueSets/ActionRelationshipTypeValueSet.js';
import { RequestPriorityValueSetType, RequestPriorityValueSetEnum } from '../fhirValueSets/RequestPriorityValueSet.js';
import { ActionTypeValueSetType } from '../fhirValueSets/ActionTypeValueSet.js';
import { ActionGroupingBehaviorValueSetType, ActionGroupingBehaviorValueSetEnum } from '../fhirValueSets/ActionGroupingBehaviorValueSet.js';
import { ActionSelectionBehaviorValueSetType, ActionSelectionBehaviorValueSetEnum } from '../fhirValueSets/ActionSelectionBehaviorValueSet.js';
import { ActionRequiredBehaviorValueSetType, ActionRequiredBehaviorValueSetEnum } from '../fhirValueSets/ActionRequiredBehaviorValueSet.js';
import { ActionPrecheckBehaviorValueSetType, ActionPrecheckBehaviorValueSetEnum } from '../fhirValueSets/ActionPrecheckBehaviorValueSet.js';
import { ActionCardinalityBehaviorValueSetType, ActionCardinalityBehaviorValueSetEnum } from '../fhirValueSets/ActionCardinalityBehaviorValueSet.js';
import { RequestStatusValueSetType, RequestStatusValueSetEnum } from '../fhirValueSets/RequestStatusValueSet.js';
import { RequestIntentValueSetType, RequestIntentValueSetEnum } from '../fhirValueSets/RequestIntentValueSet.js';
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export declare type IRequestGroupActionCondition = fhir.IBackboneElement & {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: ActionConditionKindValueSetEnum | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.kind
     */
    _kind?: fhir.IFhirElement | undefined;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.IExpression | undefined;
};
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export declare type IRequestGroupActionRelatedAction = fhir.IBackboneElement & {
    /**
     * The element id of the action this is related to.
     */
    actionId: string | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.actionId
     */
    _actionId?: fhir.IFhirElement | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship: ActionRelationshipTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.relationship
     */
    _relationship?: fhir.IFhirElement | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhir.IDuration | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhir.IRange | undefined;
};
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export declare type IRequestGroupAction = fhir.IBackboneElement & {
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.prefix
     */
    _prefix?: fhir.IFhirElement | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.textEquivalent
     */
    _textEquivalent?: fhir.IFhirElement | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.IRelatedArtifact[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhir.IRequestGroupActionCondition[] | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhir.IRequestGroupActionRelatedAction[] | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.timing[x]
     */
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
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhir.IReference[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: ActionGroupingBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.groupingBehavior
     */
    _groupingBehavior?: fhir.IFhirElement | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: ActionSelectionBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.selectionBehavior
     */
    _selectionBehavior?: fhir.IFhirElement | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: ActionRequiredBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.requiredBehavior
     */
    _requiredBehavior?: fhir.IFhirElement | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: ActionPrecheckBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.precheckBehavior
     */
    _precheckBehavior?: fhir.IFhirElement | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: ActionCardinalityBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.cardinalityBehavior
     */
    _cardinalityBehavior?: fhir.IFhirElement | undefined;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.IReference | undefined;
    /**
     * Sub actions.
     */
    action?: fhir.IRequestGroupAction[] | undefined;
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
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.instantiatesUri
     */
    _instantiatesUri?: fhir.IFhirElement[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.IReference[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.IIdentifier | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: RequestGroup.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: RequestIntentValueSetEnum | null;
    /**
     * Extended properties for primitive element: RequestGroup.intent
     */
    _intent?: fhir.IFhirElement | undefined;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.IReference | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.authoredOn
     */
    _authoredOn?: fhir.IFhirElement | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.IReference | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhir.IRequestGroupAction[] | undefined;
};
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export declare class RequestGroupActionCondition extends fhir.BackboneElement implements IRequestGroupActionCondition {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: ActionConditionKindValueSetEnum | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.kind
     */
    _kind?: fhir.FhirElement | undefined;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
    /**
     * Default constructor for RequestGroupActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRequestGroupActionCondition>);
    /**
     * Required-bound Value Set for kind
     */
    static kindRequiredValueSet(): ActionConditionKindValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export declare class RequestGroupActionRelatedAction extends fhir.BackboneElement implements IRequestGroupActionRelatedAction {
    /**
     * The element id of the action this is related to.
     */
    actionId: string | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.actionId
     */
    _actionId?: fhir.FhirElement | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship: ActionRelationshipTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.relationship
     */
    _relationship?: fhir.FhirElement | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhir.Duration | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhir.Range | undefined;
    /**
     * Default constructor for RequestGroupActionRelatedAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRequestGroupActionRelatedAction>);
    /**
     * Required-bound Value Set for relationship
     */
    static relationshipRequiredValueSet(): ActionRelationshipTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export declare class RequestGroupAction extends fhir.BackboneElement implements IRequestGroupAction {
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.prefix
     */
    _prefix?: fhir.FhirElement | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.textEquivalent
     */
    _textEquivalent?: fhir.FhirElement | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.priority
     */
    _priority?: fhir.FhirElement | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifact[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhir.RequestGroupActionCondition[] | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhir.RequestGroupActionRelatedAction[] | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.timing[x]
     */
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
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhir.Reference[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: ActionGroupingBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.groupingBehavior
     */
    _groupingBehavior?: fhir.FhirElement | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: ActionSelectionBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.selectionBehavior
     */
    _selectionBehavior?: fhir.FhirElement | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: ActionRequiredBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.requiredBehavior
     */
    _requiredBehavior?: fhir.FhirElement | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: ActionPrecheckBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.precheckBehavior
     */
    _precheckBehavior?: fhir.FhirElement | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: ActionCardinalityBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.cardinalityBehavior
     */
    _cardinalityBehavior?: fhir.FhirElement | undefined;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.Reference | undefined;
    /**
     * Sub actions.
     */
    action?: fhir.RequestGroupAction[] | undefined;
    /**
     * Default constructor for RequestGroupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRequestGroupAction>);
    /**
     * Required-bound Value Set for priority
     */
    static priorityRequiredValueSet(): RequestPriorityValueSetType;
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): ActionTypeValueSetType;
    /**
     * Required-bound Value Set for groupingBehavior
     */
    static groupingBehaviorRequiredValueSet(): ActionGroupingBehaviorValueSetType;
    /**
     * Required-bound Value Set for selectionBehavior
     */
    static selectionBehaviorRequiredValueSet(): ActionSelectionBehaviorValueSetType;
    /**
     * Required-bound Value Set for requiredBehavior
     */
    static requiredBehaviorRequiredValueSet(): ActionRequiredBehaviorValueSetType;
    /**
     * Required-bound Value Set for precheckBehavior
     */
    static precheckBehaviorRequiredValueSet(): ActionPrecheckBehaviorValueSetType;
    /**
     * Required-bound Value Set for cardinalityBehavior
     */
    static cardinalityBehaviorRequiredValueSet(): ActionCardinalityBehaviorValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export declare class RequestGroup extends fhir.DomainResource implements IRequestGroup {
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup";
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.FhirElement[] | undefined;
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.instantiatesUri
     */
    _instantiatesUri?: fhir.FhirElement[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.Reference[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: RequestGroup.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: RequestIntentValueSetEnum | null;
    /**
     * Extended properties for primitive element: RequestGroup.intent
     */
    _intent?: fhir.FhirElement | undefined;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.priority
     */
    _priority?: fhir.FhirElement | undefined;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.authoredOn
     */
    _authoredOn?: fhir.FhirElement | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.Reference | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhir.RequestGroupAction[] | undefined;
    /**
     * Default constructor for RequestGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRequestGroup>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): RequestStatusValueSetType;
    /**
     * Required-bound Value Set for intent
     */
    static intentRequiredValueSet(): RequestIntentValueSetType;
    /**
     * Required-bound Value Set for priority
     */
    static priorityRequiredValueSet(): RequestPriorityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=RequestGroup.d.ts.map