"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDefinitionStatusEnum = exports.PlanDefinitionActionSelectionBehaviorEnum = exports.PlanDefinitionActionRequiredBehaviorEnum = exports.PlanDefinitionActionPriorityEnum = exports.PlanDefinitionActionPrecheckBehaviorEnum = exports.PlanDefinitionActionGroupingBehaviorEnum = exports.PlanDefinitionActionCardinalityBehaviorEnum = exports.PlanDefinitionActionParticipantTypeEnum = exports.PlanDefinitionActionRelatedActionRelationshipEnum = exports.PlanDefinitionActionConditionKindEnum = void 0;
/**
 * Code Values for the PlanDefinition.action.condition.kind field
 */
var PlanDefinitionActionConditionKindEnum;
(function (PlanDefinitionActionConditionKindEnum) {
    PlanDefinitionActionConditionKindEnum["APPLICABILITY"] = "applicability";
    PlanDefinitionActionConditionKindEnum["START"] = "start";
    PlanDefinitionActionConditionKindEnum["STOP"] = "stop";
})(PlanDefinitionActionConditionKindEnum = exports.PlanDefinitionActionConditionKindEnum || (exports.PlanDefinitionActionConditionKindEnum = {}));
/**
 * Code Values for the PlanDefinition.action.relatedAction.relationship field
 */
var PlanDefinitionActionRelatedActionRelationshipEnum;
(function (PlanDefinitionActionRelatedActionRelationshipEnum) {
    PlanDefinitionActionRelatedActionRelationshipEnum["BEFORE_START"] = "before-start";
    PlanDefinitionActionRelatedActionRelationshipEnum["BEFORE"] = "before";
    PlanDefinitionActionRelatedActionRelationshipEnum["BEFORE_END"] = "before-end";
    PlanDefinitionActionRelatedActionRelationshipEnum["CONCURRENT_WITH_START"] = "concurrent-with-start";
    PlanDefinitionActionRelatedActionRelationshipEnum["CONCURRENT"] = "concurrent";
    PlanDefinitionActionRelatedActionRelationshipEnum["CONCURRENT_WITH_END"] = "concurrent-with-end";
    PlanDefinitionActionRelatedActionRelationshipEnum["AFTER_START"] = "after-start";
    PlanDefinitionActionRelatedActionRelationshipEnum["AFTER"] = "after";
    PlanDefinitionActionRelatedActionRelationshipEnum["AFTER_END"] = "after-end";
})(PlanDefinitionActionRelatedActionRelationshipEnum = exports.PlanDefinitionActionRelatedActionRelationshipEnum || (exports.PlanDefinitionActionRelatedActionRelationshipEnum = {}));
/**
 * Code Values for the PlanDefinition.action.participant.type field
 */
var PlanDefinitionActionParticipantTypeEnum;
(function (PlanDefinitionActionParticipantTypeEnum) {
    PlanDefinitionActionParticipantTypeEnum["PATIENT"] = "patient";
    PlanDefinitionActionParticipantTypeEnum["PRACTITIONER"] = "practitioner";
    PlanDefinitionActionParticipantTypeEnum["RELATED_PERSON"] = "related-person";
    PlanDefinitionActionParticipantTypeEnum["DEVICE"] = "device";
})(PlanDefinitionActionParticipantTypeEnum = exports.PlanDefinitionActionParticipantTypeEnum || (exports.PlanDefinitionActionParticipantTypeEnum = {}));
/**
 * Code Values for the PlanDefinition.action.cardinalityBehavior field
 */
var PlanDefinitionActionCardinalityBehaviorEnum;
(function (PlanDefinitionActionCardinalityBehaviorEnum) {
    PlanDefinitionActionCardinalityBehaviorEnum["SINGLE"] = "single";
    PlanDefinitionActionCardinalityBehaviorEnum["MULTIPLE"] = "multiple";
})(PlanDefinitionActionCardinalityBehaviorEnum = exports.PlanDefinitionActionCardinalityBehaviorEnum || (exports.PlanDefinitionActionCardinalityBehaviorEnum = {}));
/**
 * Code Values for the PlanDefinition.action.groupingBehavior field
 */
var PlanDefinitionActionGroupingBehaviorEnum;
(function (PlanDefinitionActionGroupingBehaviorEnum) {
    PlanDefinitionActionGroupingBehaviorEnum["VISUAL_GROUP"] = "visual-group";
    PlanDefinitionActionGroupingBehaviorEnum["LOGICAL_GROUP"] = "logical-group";
    PlanDefinitionActionGroupingBehaviorEnum["SENTENCE_GROUP"] = "sentence-group";
})(PlanDefinitionActionGroupingBehaviorEnum = exports.PlanDefinitionActionGroupingBehaviorEnum || (exports.PlanDefinitionActionGroupingBehaviorEnum = {}));
/**
 * Code Values for the PlanDefinition.action.precheckBehavior field
 */
var PlanDefinitionActionPrecheckBehaviorEnum;
(function (PlanDefinitionActionPrecheckBehaviorEnum) {
    PlanDefinitionActionPrecheckBehaviorEnum["YES"] = "yes";
    PlanDefinitionActionPrecheckBehaviorEnum["NO"] = "no";
})(PlanDefinitionActionPrecheckBehaviorEnum = exports.PlanDefinitionActionPrecheckBehaviorEnum || (exports.PlanDefinitionActionPrecheckBehaviorEnum = {}));
/**
 * Code Values for the PlanDefinition.action.priority field
 */
var PlanDefinitionActionPriorityEnum;
(function (PlanDefinitionActionPriorityEnum) {
    PlanDefinitionActionPriorityEnum["ROUTINE"] = "routine";
    PlanDefinitionActionPriorityEnum["URGENT"] = "urgent";
    PlanDefinitionActionPriorityEnum["ASAP"] = "asap";
    PlanDefinitionActionPriorityEnum["STAT"] = "stat";
})(PlanDefinitionActionPriorityEnum = exports.PlanDefinitionActionPriorityEnum || (exports.PlanDefinitionActionPriorityEnum = {}));
/**
 * Code Values for the PlanDefinition.action.requiredBehavior field
 */
var PlanDefinitionActionRequiredBehaviorEnum;
(function (PlanDefinitionActionRequiredBehaviorEnum) {
    PlanDefinitionActionRequiredBehaviorEnum["MUST"] = "must";
    PlanDefinitionActionRequiredBehaviorEnum["COULD"] = "could";
    PlanDefinitionActionRequiredBehaviorEnum["MUST_UNLESS_DOCUMENTED"] = "must-unless-documented";
})(PlanDefinitionActionRequiredBehaviorEnum = exports.PlanDefinitionActionRequiredBehaviorEnum || (exports.PlanDefinitionActionRequiredBehaviorEnum = {}));
/**
 * Code Values for the PlanDefinition.action.selectionBehavior field
 */
var PlanDefinitionActionSelectionBehaviorEnum;
(function (PlanDefinitionActionSelectionBehaviorEnum) {
    PlanDefinitionActionSelectionBehaviorEnum["ANY"] = "any";
    PlanDefinitionActionSelectionBehaviorEnum["ALL"] = "all";
    PlanDefinitionActionSelectionBehaviorEnum["ALL_OR_NONE"] = "all-or-none";
    PlanDefinitionActionSelectionBehaviorEnum["EXACTLY_ONE"] = "exactly-one";
    PlanDefinitionActionSelectionBehaviorEnum["AT_MOST_ONE"] = "at-most-one";
    PlanDefinitionActionSelectionBehaviorEnum["ONE_OR_MORE"] = "one-or-more";
})(PlanDefinitionActionSelectionBehaviorEnum = exports.PlanDefinitionActionSelectionBehaviorEnum || (exports.PlanDefinitionActionSelectionBehaviorEnum = {}));
/**
 * Code Values for the PlanDefinition.status field
 */
var PlanDefinitionStatusEnum;
(function (PlanDefinitionStatusEnum) {
    PlanDefinitionStatusEnum["DRAFT"] = "draft";
    PlanDefinitionStatusEnum["ACTIVE"] = "active";
    PlanDefinitionStatusEnum["RETIRED"] = "retired";
    PlanDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(PlanDefinitionStatusEnum = exports.PlanDefinitionStatusEnum || (exports.PlanDefinitionStatusEnum = {}));
//# sourceMappingURL=IPlanDefinition.js.map