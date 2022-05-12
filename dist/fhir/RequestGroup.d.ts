import * as fhir from '../fhir.js';
import { ActionConditionKindValueSetType } from '../fhirValueSets/ActionConditionKindValueSet.js';
import { ActionConditionKindValueSetEnum } from '../valueSetEnums.js';
import { ActionRelationshipTypeValueSetType } from '../fhirValueSets/ActionRelationshipTypeValueSet.js';
import { ActionRelationshipTypeValueSetEnum } from '../valueSetEnums.js';
import { RequestPriorityValueSetType } from '../fhirValueSets/RequestPriorityValueSet.js';
import { RequestPriorityValueSetEnum } from '../valueSetEnums.js';
import { ActionTypeValueSetType } from '../fhirValueSets/ActionTypeValueSet.js';
import { ActionGroupingBehaviorValueSetType } from '../fhirValueSets/ActionGroupingBehaviorValueSet.js';
import { ActionGroupingBehaviorValueSetEnum } from '../valueSetEnums.js';
import { ActionSelectionBehaviorValueSetType } from '../fhirValueSets/ActionSelectionBehaviorValueSet.js';
import { ActionSelectionBehaviorValueSetEnum } from '../valueSetEnums.js';
import { ActionRequiredBehaviorValueSetType } from '../fhirValueSets/ActionRequiredBehaviorValueSet.js';
import { ActionRequiredBehaviorValueSetEnum } from '../valueSetEnums.js';
import { ActionPrecheckBehaviorValueSetType } from '../fhirValueSets/ActionPrecheckBehaviorValueSet.js';
import { ActionPrecheckBehaviorValueSetEnum } from '../valueSetEnums.js';
import { ActionCardinalityBehaviorValueSetType } from '../fhirValueSets/ActionCardinalityBehaviorValueSet.js';
import { ActionCardinalityBehaviorValueSetEnum } from '../valueSetEnums.js';
import { RequestStatusValueSetType } from '../fhirValueSets/RequestStatusValueSet.js';
import { RequestStatusValueSetEnum } from '../valueSetEnums.js';
import { RequestIntentValueSetType } from '../fhirValueSets/RequestIntentValueSet.js';
import { RequestIntentValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the RequestGroupActionCondition type.
 */
export interface RequestGroupActionConditionArgs extends fhir.BackboneElementArgs {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: ActionConditionKindValueSetEnum | null;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.ExpressionArgs | undefined;
}
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export declare class RequestGroupActionCondition extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: ActionConditionKindValueSetEnum | null;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
    /**
     * Default constructor for RequestGroupActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupActionConditionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for kind
     */
    static kindRequiredValueSet(): ActionConditionKindValueSetType;
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
 * Valid arguments for the RequestGroupActionRelatedAction type.
 */
export interface RequestGroupActionRelatedActionArgs extends fhir.BackboneElementArgs {
    /**
     * The element id of the action this is related to.
     */
    actionId: fhir.FhirId | string | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship: ActionRelationshipTypeValueSetEnum | null;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offset?: fhir.Duration | fhir.Range | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhir.DurationArgs | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhir.RangeArgs | undefined;
}
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export declare class RequestGroupActionRelatedAction extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The element id of the action this is related to.
     */
    actionId: fhir.FhirId | null;
    /**
     * The relationship of this action to the related action.
     */
    relationship: ActionRelationshipTypeValueSetEnum | null;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offset?: (fhir.Duration | fhir.Range) | undefined;
    readonly __offsetIsChoice: true;
    /**
     * Default constructor for RequestGroupActionRelatedAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupActionRelatedActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for relationship
     */
    static relationshipRequiredValueSet(): ActionRelationshipTypeValueSetType;
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
 * Valid arguments for the RequestGroupAction type.
 */
export interface RequestGroupActionArgs extends fhir.BackboneElementArgs {
    /**
     * A user-visible prefix for the action.
     */
    prefix?: fhir.FhirString | string | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | string | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhir.RequestGroupActionConditionArgs[] | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhir.RequestGroupActionRelatedActionArgs[] | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timing?: fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: fhir.AgeArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: fhir.PeriodArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: fhir.DurationArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: fhir.RangeArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: fhir.TimingArgs | undefined;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhir.ReferenceArgs[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: ActionGroupingBehaviorValueSetEnum | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: ActionSelectionBehaviorValueSetEnum | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: ActionRequiredBehaviorValueSetEnum | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: ActionPrecheckBehaviorValueSetEnum | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: ActionCardinalityBehaviorValueSetEnum | undefined;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.ReferenceArgs | undefined;
    /**
     * Sub actions.
     */
    action?: fhir.RequestGroupActionArgs[] | undefined;
}
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export declare class RequestGroupAction extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: fhir.FhirString | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
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
    timing?: (fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing) | undefined;
    readonly __timingIsChoice: true;
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
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: ActionSelectionBehaviorValueSetEnum | undefined;
    /**
     * Defines expectations around whether an action is required.
     */
    requiredBehavior?: ActionRequiredBehaviorValueSetEnum | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: ActionPrecheckBehaviorValueSetEnum | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: ActionCardinalityBehaviorValueSetEnum | undefined;
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
    constructor(source?: Partial<RequestGroupActionArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the RequestGroup type.
 */
export interface RequestGroupArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup" | undefined;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: RequestIntentValueSetEnum | null;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhir.RequestGroupActionArgs[] | undefined;
}
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export declare class RequestGroup extends fhir.DomainResource {
    readonly __dataType: string;
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
    instantiatesCanonical?: fhir.FhirCanonical[] | undefined;
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: fhir.FhirUri[] | undefined;
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
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: RequestIntentValueSetEnum | null;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
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
    authoredOn?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<RequestGroupArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=RequestGroup.d.ts.map