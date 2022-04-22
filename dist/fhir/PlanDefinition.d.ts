import * as fhir from '../fhir.js';
import { ObservationCodesValueSetType } from '../fhirValueSets/ObservationCodesValueSet.js';
import { GoalCategoryValueSetType } from '../fhirValueSets/GoalCategoryValueSet.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
import { GoalPriorityValueSetType } from '../fhirValueSets/GoalPriorityValueSet.js';
import { GoalStartEventValueSetType } from '../fhirValueSets/GoalStartEventValueSet.js';
import { ConditionCodeValueSetType } from '../fhirValueSets/ConditionCodeValueSet.js';
import { ActionConditionKindValueSetType, ActionConditionKindValueSetEnum } from '../fhirValueSets/ActionConditionKindValueSet.js';
import { ActionRelationshipTypeValueSetType, ActionRelationshipTypeValueSetEnum } from '../fhirValueSets/ActionRelationshipTypeValueSet.js';
import { ActionParticipantTypeValueSetType, ActionParticipantTypeValueSetEnum } from '../fhirValueSets/ActionParticipantTypeValueSet.js';
import { RequestPriorityValueSetType, RequestPriorityValueSetEnum } from '../fhirValueSets/RequestPriorityValueSet.js';
import { SubjectTypeValueSetType } from '../fhirValueSets/SubjectTypeValueSet.js';
import { ActionTypeValueSetType } from '../fhirValueSets/ActionTypeValueSet.js';
import { ActionGroupingBehaviorValueSetType, ActionGroupingBehaviorValueSetEnum } from '../fhirValueSets/ActionGroupingBehaviorValueSet.js';
import { ActionSelectionBehaviorValueSetType, ActionSelectionBehaviorValueSetEnum } from '../fhirValueSets/ActionSelectionBehaviorValueSet.js';
import { ActionRequiredBehaviorValueSetType, ActionRequiredBehaviorValueSetEnum } from '../fhirValueSets/ActionRequiredBehaviorValueSet.js';
import { ActionPrecheckBehaviorValueSetType, ActionPrecheckBehaviorValueSetEnum } from '../fhirValueSets/ActionPrecheckBehaviorValueSet.js';
import { ActionCardinalityBehaviorValueSetType, ActionCardinalityBehaviorValueSetEnum } from '../fhirValueSets/ActionCardinalityBehaviorValueSet.js';
import { PlanDefinitionTypeValueSetType } from '../fhirValueSets/PlanDefinitionTypeValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { DefinitionTopicValueSetType } from '../fhirValueSets/DefinitionTopicValueSet.js';
/**
 * Indicates what should be done and within what timeframe.
 */
export declare type IPlanDefinitionGoalTarget = fhir.IBackboneElement & {
    /**
     * The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.ICodeableConcept | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailQuantity?: fhir.IQuantity | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailRange?: fhir.IRange | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates the timeframe after the start of the goal in which the goal should be met.
     */
    due?: fhir.IDuration | undefined;
};
/**
 * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export declare type IPlanDefinitionGoal = fhir.IBackboneElement & {
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhir.ICodeableConcept | null;
    /**
     * Identifies the expected level of importance associated with reaching/sustaining the defined goal.
     */
    priority?: fhir.ICodeableConcept | undefined;
    /**
     * The event after which the goal should begin being pursued.
     */
    start?: fhir.ICodeableConcept | undefined;
    /**
     * Identifies problems, conditions, issues, or concerns the goal is intended to address.
     */
    addresses?: fhir.ICodeableConcept[] | undefined;
    /**
     * Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.IRelatedArtifact[] | undefined;
    /**
     * Indicates what should be done and within what timeframe.
     */
    target?: fhir.IPlanDefinitionGoalTarget[] | undefined;
};
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
 */
export declare type IPlanDefinitionActionCondition = fhir.IBackboneElement & {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: ActionConditionKindValueSetEnum | null;
    /**
     * Extended properties for primitive element: PlanDefinition.action.condition.kind
     */
    _kind?: fhir.IFhirElement | undefined;
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.IExpression | undefined;
};
/**
 * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
 */
export declare type IPlanDefinitionActionRelatedAction = fhir.IBackboneElement & {
    /**
     * The element id of the related action.
     */
    actionId: string | null;
    /**
     * Extended properties for primitive element: PlanDefinition.action.relatedAction.actionId
     */
    _actionId?: fhir.IFhirElement | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship: ActionRelationshipTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: PlanDefinition.action.relatedAction.relationship
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
 * Indicates who should participate in performing the action described.
 */
export declare type IPlanDefinitionActionParticipant = fhir.IBackboneElement & {
    /**
     * The type of participant in the action.
     */
    type: ActionParticipantTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: PlanDefinition.action.participant.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.ICodeableConcept | undefined;
};
/**
 * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
 */
export declare type IPlanDefinitionActionDynamicValue = fhir.IBackboneElement & {
    /**
     * To specify the path to the current action being realized, the %action environment variable is available in this path. For example, to specify the description element of the target action, the path would be %action.description. The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.dynamicValue.path
     */
    _path?: fhir.IFhirElement | undefined;
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.IExpression | undefined;
};
/**
 * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
 */
export declare type IPlanDefinitionAction = fhir.IBackboneElement & {
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.prefix
     */
    _prefix?: fhir.IFhirElement | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * A brief description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.textEquivalent
     */
    _textEquivalent?: fhir.IFhirElement | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * This is different than the clinical evidence documentation, it's an actual business description of the reason for performing the action.
     */
    reason?: fhir.ICodeableConcept[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.IRelatedArtifact[] | undefined;
    /**
     * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
     */
    goalId?: string[] | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.goalId
     */
    _goalId?: fhir.IFhirElement[] | undefined;
    /**
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subjectCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subjectReference?: fhir.IReference | undefined;
    /**
     * A description of when the action should be triggered.
     */
    trigger?: fhir.ITriggerDefinition[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
     */
    condition?: fhir.IPlanDefinitionActionCondition[] | undefined;
    /**
     * Defines input data requirements for the action.
     */
    input?: fhir.IDataRequirement[] | undefined;
    /**
     * Defines the outputs of the action, if any.
     */
    output?: fhir.IDataRequirement[] | undefined;
    /**
     * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
     */
    relatedAction?: fhir.IPlanDefinitionActionRelatedAction[] | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.timing[x]
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
     * Indicates who should participate in performing the action described.
     */
    participant?: fhir.IPlanDefinitionActionParticipant[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: ActionGroupingBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.groupingBehavior
     */
    _groupingBehavior?: fhir.IFhirElement | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: ActionSelectionBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.selectionBehavior
     */
    _selectionBehavior?: fhir.IFhirElement | undefined;
    /**
     * Defines the required behavior for the action.
     */
    requiredBehavior?: ActionRequiredBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.requiredBehavior
     */
    _requiredBehavior?: fhir.IFhirElement | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: ActionPrecheckBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.precheckBehavior
     */
    _precheckBehavior?: fhir.IFhirElement | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: ActionCardinalityBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.cardinalityBehavior
     */
    _cardinalityBehavior?: fhir.IFhirElement | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definitionCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.definition[x]
     */
    _definitionCanonical?: fhir.IFhirElement | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definitionUri?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.definition[x]
     */
    _definitionUri?: fhir.IFhirElement | undefined;
    /**
     * Note that when a referenced ActivityDefinition also defines a transform, the transform specified here generally takes precedence. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    transform?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.transform
     */
    _transform?: fhir.IFhirElement | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    dynamicValue?: fhir.IPlanDefinitionActionDynamicValue[] | undefined;
    /**
     * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
     */
    action?: fhir.IPlanDefinitionAction[] | undefined;
};
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
export declare type IPlanDefinition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "PlanDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * An explanatory or alternate title for the plan definition giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.subtitle
     */
    _subtitle?: fhir.IFhirElement | undefined;
    /**
     * A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: PlanDefinition.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectReference?: fhir.IReference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the plan definition is presumed to be the predominant language in the place the plan definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the plan definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * A detailed description of how the plan definition is used from a clinical perspective.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.usage
     */
    _usage?: fhir.IFhirElement | undefined;
    /**
     * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.approvalDate
     */
    _approvalDate?: fhir.IFhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.IFhirElement | undefined;
    /**
     * The effective period for a plan definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
     */
    topic?: fhir.ICodeableConcept[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.IContactDetail[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.IRelatedArtifact[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the plan definition.
     */
    library?: string[] | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.library
     */
    _library?: fhir.IFhirElement[] | undefined;
    /**
     * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    goal?: fhir.IPlanDefinitionGoal[] | undefined;
    /**
     * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
     */
    action?: fhir.IPlanDefinitionAction[] | undefined;
};
/**
 * Indicates what should be done and within what timeframe.
 */
export declare class PlanDefinitionGoalTarget extends fhir.BackboneElement implements IPlanDefinitionGoalTarget {
    /**
     * The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConcept | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailQuantity?: fhir.Quantity | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailRange?: fhir.Range | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the timeframe after the start of the goal in which the goal should be met.
     */
    due?: fhir.Duration | undefined;
    /**
     * Default constructor for PlanDefinitionGoalTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPlanDefinitionGoalTarget>);
    /**
     * Example-bound Value Set for measure
     */
    static measureExampleValueSet(): ObservationCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export declare class PlanDefinitionGoal extends fhir.BackboneElement implements IPlanDefinitionGoal {
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhir.CodeableConcept | null;
    /**
     * Identifies the expected level of importance associated with reaching/sustaining the defined goal.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * The event after which the goal should begin being pursued.
     */
    start?: fhir.CodeableConcept | undefined;
    /**
     * Identifies problems, conditions, issues, or concerns the goal is intended to address.
     */
    addresses?: fhir.CodeableConcept[] | undefined;
    /**
     * Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifact[] | undefined;
    /**
     * Indicates what should be done and within what timeframe.
     */
    target?: fhir.PlanDefinitionGoalTarget[] | undefined;
    /**
     * Default constructor for PlanDefinitionGoal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPlanDefinitionGoal>);
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): GoalCategoryValueSetType;
    /**
     * Example-bound Value Set for description
     */
    static descriptionExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Preferred-bound Value Set for priority
     */
    static priorityPreferredValueSet(): GoalPriorityValueSetType;
    /**
     * Example-bound Value Set for start
     */
    static startExampleValueSet(): GoalStartEventValueSetType;
    /**
     * Example-bound Value Set for addresses
     */
    static addressesExampleValueSet(): ConditionCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
 */
export declare class PlanDefinitionActionCondition extends fhir.BackboneElement implements IPlanDefinitionActionCondition {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: ActionConditionKindValueSetEnum | null;
    /**
     * Extended properties for primitive element: PlanDefinition.action.condition.kind
     */
    _kind?: fhir.FhirElement | undefined;
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
    /**
     * Default constructor for PlanDefinitionActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPlanDefinitionActionCondition>);
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
 * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
 */
export declare class PlanDefinitionActionRelatedAction extends fhir.BackboneElement implements IPlanDefinitionActionRelatedAction {
    /**
     * The element id of the related action.
     */
    actionId: string | null;
    /**
     * Extended properties for primitive element: PlanDefinition.action.relatedAction.actionId
     */
    _actionId?: fhir.FhirElement | undefined;
    /**
     * The relationship of this action to the related action.
     */
    relationship: ActionRelationshipTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: PlanDefinition.action.relatedAction.relationship
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
     * Default constructor for PlanDefinitionActionRelatedAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPlanDefinitionActionRelatedAction>);
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
 * Indicates who should participate in performing the action described.
 */
export declare class PlanDefinitionActionParticipant extends fhir.BackboneElement implements IPlanDefinitionActionParticipant {
    /**
     * The type of participant in the action.
     */
    type: ActionParticipantTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: PlanDefinition.action.participant.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for PlanDefinitionActionParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPlanDefinitionActionParticipant>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): ActionParticipantTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
 */
export declare class PlanDefinitionActionDynamicValue extends fhir.BackboneElement implements IPlanDefinitionActionDynamicValue {
    /**
     * To specify the path to the current action being realized, the %action environment variable is available in this path. For example, to specify the description element of the target action, the path would be %action.description. The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.dynamicValue.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
    /**
     * Default constructor for PlanDefinitionActionDynamicValue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPlanDefinitionActionDynamicValue>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
 */
export declare class PlanDefinitionAction extends fhir.BackboneElement implements IPlanDefinitionAction {
    /**
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.prefix
     */
    _prefix?: fhir.FhirElement | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * A brief description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.textEquivalent
     */
    _textEquivalent?: fhir.FhirElement | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.priority
     */
    _priority?: fhir.FhirElement | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * This is different than the clinical evidence documentation, it's an actual business description of the reason for performing the action.
     */
    reason?: fhir.CodeableConcept[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifact[] | undefined;
    /**
     * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
     */
    goalId?: string[] | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.goalId
     */
    _goalId?: fhir.FhirElement[] | undefined;
    /**
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * A description of when the action should be triggered.
     */
    trigger?: fhir.TriggerDefinition[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
     */
    condition?: fhir.PlanDefinitionActionCondition[] | undefined;
    /**
     * Defines input data requirements for the action.
     */
    input?: fhir.DataRequirement[] | undefined;
    /**
     * Defines the outputs of the action, if any.
     */
    output?: fhir.DataRequirement[] | undefined;
    /**
     * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
     */
    relatedAction?: fhir.PlanDefinitionActionRelatedAction[] | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.timing[x]
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
     * Indicates who should participate in performing the action described.
     */
    participant?: fhir.PlanDefinitionActionParticipant[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: ActionGroupingBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.groupingBehavior
     */
    _groupingBehavior?: fhir.FhirElement | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: ActionSelectionBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.selectionBehavior
     */
    _selectionBehavior?: fhir.FhirElement | undefined;
    /**
     * Defines the required behavior for the action.
     */
    requiredBehavior?: ActionRequiredBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.requiredBehavior
     */
    _requiredBehavior?: fhir.FhirElement | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: ActionPrecheckBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.precheckBehavior
     */
    _precheckBehavior?: fhir.FhirElement | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: ActionCardinalityBehaviorValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.cardinalityBehavior
     */
    _cardinalityBehavior?: fhir.FhirElement | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definitionCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.definition[x]
     */
    _definitionCanonical?: fhir.FhirElement | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definitionUri?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.definition[x]
     */
    _definitionUri?: fhir.FhirElement | undefined;
    /**
     * Note that when a referenced ActivityDefinition also defines a transform, the transform specified here generally takes precedence. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    transform?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.transform
     */
    _transform?: fhir.FhirElement | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    dynamicValue?: fhir.PlanDefinitionActionDynamicValue[] | undefined;
    /**
     * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
     */
    action?: fhir.PlanDefinitionAction[] | undefined;
    /**
     * Default constructor for PlanDefinitionAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPlanDefinitionAction>);
    /**
     * Required-bound Value Set for priority
     */
    static priorityRequiredValueSet(): RequestPriorityValueSetType;
    /**
     * Extensible-bound Value Set for subjectCodeableConcept
     */
    static subjectCodeableConceptExtensibleValueSet(): SubjectTypeValueSetType;
    /**
     * Extensible-bound Value Set for subjectReference
     */
    static subjectReferenceExtensibleValueSet(): SubjectTypeValueSetType;
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
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
export declare class PlanDefinition extends fhir.DomainResource implements IPlanDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "PlanDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * An explanatory or alternate title for the plan definition giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.subtitle
     */
    _subtitle?: fhir.FhirElement | undefined;
    /**
     * A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: PlanDefinition.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the plan definition is presumed to be the predominant language in the place the plan definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the plan definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * A detailed description of how the plan definition is used from a clinical perspective.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.usage
     */
    _usage?: fhir.FhirElement | undefined;
    /**
     * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement | undefined;
    /**
     * The effective period for a plan definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConcept[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetail[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the plan definition.
     */
    library?: string[] | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.library
     */
    _library?: fhir.FhirElement[] | undefined;
    /**
     * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    goal?: fhir.PlanDefinitionGoal[] | undefined;
    /**
     * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
     */
    action?: fhir.PlanDefinitionAction[] | undefined;
    /**
     * Default constructor for PlanDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPlanDefinition>);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): PlanDefinitionTypeValueSetType;
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Extensible-bound Value Set for subjectCodeableConcept
     */
    static subjectCodeableConceptExtensibleValueSet(): SubjectTypeValueSetType;
    /**
     * Extensible-bound Value Set for subjectReference
     */
    static subjectReferenceExtensibleValueSet(): SubjectTypeValueSetType;
    /**
     * Example-bound Value Set for topic
     */
    static topicExampleValueSet(): DefinitionTopicValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=PlanDefinition.d.ts.map