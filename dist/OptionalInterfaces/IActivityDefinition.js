"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityDefinitionStatusEnum = exports.ActivityDefinitionPriorityEnum = exports.ActivityDefinitionIntentEnum = exports.ActivityDefinitionParticipantTypeEnum = void 0;
/**
 * Code Values for the ActivityDefinition.participant.type field
 */
var ActivityDefinitionParticipantTypeEnum;
(function (ActivityDefinitionParticipantTypeEnum) {
    ActivityDefinitionParticipantTypeEnum["PATIENT"] = "patient";
    ActivityDefinitionParticipantTypeEnum["PRACTITIONER"] = "practitioner";
    ActivityDefinitionParticipantTypeEnum["RELATED_PERSON"] = "related-person";
    ActivityDefinitionParticipantTypeEnum["DEVICE"] = "device";
})(ActivityDefinitionParticipantTypeEnum = exports.ActivityDefinitionParticipantTypeEnum || (exports.ActivityDefinitionParticipantTypeEnum = {}));
/**
 * Code Values for the ActivityDefinition.intent field
 */
var ActivityDefinitionIntentEnum;
(function (ActivityDefinitionIntentEnum) {
    ActivityDefinitionIntentEnum["PROPOSAL"] = "proposal";
    ActivityDefinitionIntentEnum["PLAN"] = "plan";
    ActivityDefinitionIntentEnum["DIRECTIVE"] = "directive";
    ActivityDefinitionIntentEnum["ORDER"] = "order";
    ActivityDefinitionIntentEnum["ORIGINAL_ORDER"] = "original-order";
    ActivityDefinitionIntentEnum["REFLEX_ORDER"] = "reflex-order";
    ActivityDefinitionIntentEnum["FILLER_ORDER"] = "filler-order";
    ActivityDefinitionIntentEnum["INSTANCE_ORDER"] = "instance-order";
    ActivityDefinitionIntentEnum["OPTION"] = "option";
})(ActivityDefinitionIntentEnum = exports.ActivityDefinitionIntentEnum || (exports.ActivityDefinitionIntentEnum = {}));
/**
 * Code Values for the ActivityDefinition.priority field
 */
var ActivityDefinitionPriorityEnum;
(function (ActivityDefinitionPriorityEnum) {
    ActivityDefinitionPriorityEnum["ROUTINE"] = "routine";
    ActivityDefinitionPriorityEnum["URGENT"] = "urgent";
    ActivityDefinitionPriorityEnum["ASAP"] = "asap";
    ActivityDefinitionPriorityEnum["STAT"] = "stat";
})(ActivityDefinitionPriorityEnum = exports.ActivityDefinitionPriorityEnum || (exports.ActivityDefinitionPriorityEnum = {}));
/**
 * Code Values for the ActivityDefinition.status field
 */
var ActivityDefinitionStatusEnum;
(function (ActivityDefinitionStatusEnum) {
    ActivityDefinitionStatusEnum["DRAFT"] = "draft";
    ActivityDefinitionStatusEnum["ACTIVE"] = "active";
    ActivityDefinitionStatusEnum["RETIRED"] = "retired";
    ActivityDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(ActivityDefinitionStatusEnum = exports.ActivityDefinitionStatusEnum || (exports.ActivityDefinitionStatusEnum = {}));
//# sourceMappingURL=IActivityDefinition.js.map