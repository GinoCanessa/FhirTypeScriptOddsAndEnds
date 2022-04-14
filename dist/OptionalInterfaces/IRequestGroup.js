"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestGroupStatusEnum = exports.RequestGroupPriorityEnum = exports.RequestGroupIntentEnum = exports.RequestGroupActionSelectionBehaviorEnum = exports.RequestGroupActionRequiredBehaviorEnum = exports.RequestGroupActionPriorityEnum = exports.RequestGroupActionPrecheckBehaviorEnum = exports.RequestGroupActionGroupingBehaviorEnum = exports.RequestGroupActionCardinalityBehaviorEnum = exports.RequestGroupActionRelatedActionRelationshipEnum = exports.RequestGroupActionConditionKindEnum = void 0;
/**
 * Code Values for the RequestGroup.action.condition.kind field
 */
var RequestGroupActionConditionKindEnum;
(function (RequestGroupActionConditionKindEnum) {
    RequestGroupActionConditionKindEnum["APPLICABILITY"] = "applicability";
    RequestGroupActionConditionKindEnum["START"] = "start";
    RequestGroupActionConditionKindEnum["STOP"] = "stop";
})(RequestGroupActionConditionKindEnum = exports.RequestGroupActionConditionKindEnum || (exports.RequestGroupActionConditionKindEnum = {}));
/**
 * Code Values for the RequestGroup.action.relatedAction.relationship field
 */
var RequestGroupActionRelatedActionRelationshipEnum;
(function (RequestGroupActionRelatedActionRelationshipEnum) {
    RequestGroupActionRelatedActionRelationshipEnum["BEFORE_START"] = "before-start";
    RequestGroupActionRelatedActionRelationshipEnum["BEFORE"] = "before";
    RequestGroupActionRelatedActionRelationshipEnum["BEFORE_END"] = "before-end";
    RequestGroupActionRelatedActionRelationshipEnum["CONCURRENT_WITH_START"] = "concurrent-with-start";
    RequestGroupActionRelatedActionRelationshipEnum["CONCURRENT"] = "concurrent";
    RequestGroupActionRelatedActionRelationshipEnum["CONCURRENT_WITH_END"] = "concurrent-with-end";
    RequestGroupActionRelatedActionRelationshipEnum["AFTER_START"] = "after-start";
    RequestGroupActionRelatedActionRelationshipEnum["AFTER"] = "after";
    RequestGroupActionRelatedActionRelationshipEnum["AFTER_END"] = "after-end";
})(RequestGroupActionRelatedActionRelationshipEnum = exports.RequestGroupActionRelatedActionRelationshipEnum || (exports.RequestGroupActionRelatedActionRelationshipEnum = {}));
/**
 * Code Values for the RequestGroup.action.cardinalityBehavior field
 */
var RequestGroupActionCardinalityBehaviorEnum;
(function (RequestGroupActionCardinalityBehaviorEnum) {
    RequestGroupActionCardinalityBehaviorEnum["SINGLE"] = "single";
    RequestGroupActionCardinalityBehaviorEnum["MULTIPLE"] = "multiple";
})(RequestGroupActionCardinalityBehaviorEnum = exports.RequestGroupActionCardinalityBehaviorEnum || (exports.RequestGroupActionCardinalityBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.action.groupingBehavior field
 */
var RequestGroupActionGroupingBehaviorEnum;
(function (RequestGroupActionGroupingBehaviorEnum) {
    RequestGroupActionGroupingBehaviorEnum["VISUAL_GROUP"] = "visual-group";
    RequestGroupActionGroupingBehaviorEnum["LOGICAL_GROUP"] = "logical-group";
    RequestGroupActionGroupingBehaviorEnum["SENTENCE_GROUP"] = "sentence-group";
})(RequestGroupActionGroupingBehaviorEnum = exports.RequestGroupActionGroupingBehaviorEnum || (exports.RequestGroupActionGroupingBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.action.precheckBehavior field
 */
var RequestGroupActionPrecheckBehaviorEnum;
(function (RequestGroupActionPrecheckBehaviorEnum) {
    RequestGroupActionPrecheckBehaviorEnum["YES"] = "yes";
    RequestGroupActionPrecheckBehaviorEnum["NO"] = "no";
})(RequestGroupActionPrecheckBehaviorEnum = exports.RequestGroupActionPrecheckBehaviorEnum || (exports.RequestGroupActionPrecheckBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.action.priority field
 */
var RequestGroupActionPriorityEnum;
(function (RequestGroupActionPriorityEnum) {
    RequestGroupActionPriorityEnum["ROUTINE"] = "routine";
    RequestGroupActionPriorityEnum["URGENT"] = "urgent";
    RequestGroupActionPriorityEnum["ASAP"] = "asap";
    RequestGroupActionPriorityEnum["STAT"] = "stat";
})(RequestGroupActionPriorityEnum = exports.RequestGroupActionPriorityEnum || (exports.RequestGroupActionPriorityEnum = {}));
/**
 * Code Values for the RequestGroup.action.requiredBehavior field
 */
var RequestGroupActionRequiredBehaviorEnum;
(function (RequestGroupActionRequiredBehaviorEnum) {
    RequestGroupActionRequiredBehaviorEnum["MUST"] = "must";
    RequestGroupActionRequiredBehaviorEnum["COULD"] = "could";
    RequestGroupActionRequiredBehaviorEnum["MUST_UNLESS_DOCUMENTED"] = "must-unless-documented";
})(RequestGroupActionRequiredBehaviorEnum = exports.RequestGroupActionRequiredBehaviorEnum || (exports.RequestGroupActionRequiredBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.action.selectionBehavior field
 */
var RequestGroupActionSelectionBehaviorEnum;
(function (RequestGroupActionSelectionBehaviorEnum) {
    RequestGroupActionSelectionBehaviorEnum["ANY"] = "any";
    RequestGroupActionSelectionBehaviorEnum["ALL"] = "all";
    RequestGroupActionSelectionBehaviorEnum["ALL_OR_NONE"] = "all-or-none";
    RequestGroupActionSelectionBehaviorEnum["EXACTLY_ONE"] = "exactly-one";
    RequestGroupActionSelectionBehaviorEnum["AT_MOST_ONE"] = "at-most-one";
    RequestGroupActionSelectionBehaviorEnum["ONE_OR_MORE"] = "one-or-more";
})(RequestGroupActionSelectionBehaviorEnum = exports.RequestGroupActionSelectionBehaviorEnum || (exports.RequestGroupActionSelectionBehaviorEnum = {}));
/**
 * Code Values for the RequestGroup.intent field
 */
var RequestGroupIntentEnum;
(function (RequestGroupIntentEnum) {
    RequestGroupIntentEnum["PROPOSAL"] = "proposal";
    RequestGroupIntentEnum["PLAN"] = "plan";
    RequestGroupIntentEnum["DIRECTIVE"] = "directive";
    RequestGroupIntentEnum["ORDER"] = "order";
    RequestGroupIntentEnum["ORIGINAL_ORDER"] = "original-order";
    RequestGroupIntentEnum["REFLEX_ORDER"] = "reflex-order";
    RequestGroupIntentEnum["FILLER_ORDER"] = "filler-order";
    RequestGroupIntentEnum["INSTANCE_ORDER"] = "instance-order";
    RequestGroupIntentEnum["OPTION"] = "option";
})(RequestGroupIntentEnum = exports.RequestGroupIntentEnum || (exports.RequestGroupIntentEnum = {}));
/**
 * Code Values for the RequestGroup.priority field
 */
var RequestGroupPriorityEnum;
(function (RequestGroupPriorityEnum) {
    RequestGroupPriorityEnum["ROUTINE"] = "routine";
    RequestGroupPriorityEnum["URGENT"] = "urgent";
    RequestGroupPriorityEnum["ASAP"] = "asap";
    RequestGroupPriorityEnum["STAT"] = "stat";
})(RequestGroupPriorityEnum = exports.RequestGroupPriorityEnum || (exports.RequestGroupPriorityEnum = {}));
/**
 * Code Values for the RequestGroup.status field
 */
var RequestGroupStatusEnum;
(function (RequestGroupStatusEnum) {
    RequestGroupStatusEnum["DRAFT"] = "draft";
    RequestGroupStatusEnum["ACTIVE"] = "active";
    RequestGroupStatusEnum["ON_HOLD"] = "on-hold";
    RequestGroupStatusEnum["REVOKED"] = "revoked";
    RequestGroupStatusEnum["COMPLETED"] = "completed";
    RequestGroupStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    RequestGroupStatusEnum["UNKNOWN"] = "unknown";
})(RequestGroupStatusEnum = exports.RequestGroupStatusEnum || (exports.RequestGroupStatusEnum = {}));
//# sourceMappingURL=IRequestGroup.js.map