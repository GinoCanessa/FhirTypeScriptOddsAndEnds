"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusEnum = exports.TaskPriorityEnum = exports.TaskIntentEnum = void 0;
/**
 * Code Values for the Task.intent field
 */
var TaskIntentEnum;
(function (TaskIntentEnum) {
    TaskIntentEnum["UNKNOWN"] = "unknown";
    TaskIntentEnum["PROPOSAL"] = "proposal";
    TaskIntentEnum["PLAN"] = "plan";
    TaskIntentEnum["ORDER"] = "order";
    TaskIntentEnum["ORIGINAL_ORDER"] = "original-order";
    TaskIntentEnum["REFLEX_ORDER"] = "reflex-order";
    TaskIntentEnum["FILLER_ORDER"] = "filler-order";
    TaskIntentEnum["INSTANCE_ORDER"] = "instance-order";
    TaskIntentEnum["OPTION"] = "option";
})(TaskIntentEnum = exports.TaskIntentEnum || (exports.TaskIntentEnum = {}));
/**
 * Code Values for the Task.priority field
 */
var TaskPriorityEnum;
(function (TaskPriorityEnum) {
    TaskPriorityEnum["ROUTINE"] = "routine";
    TaskPriorityEnum["URGENT"] = "urgent";
    TaskPriorityEnum["ASAP"] = "asap";
    TaskPriorityEnum["STAT"] = "stat";
})(TaskPriorityEnum = exports.TaskPriorityEnum || (exports.TaskPriorityEnum = {}));
/**
 * Code Values for the Task.status field
 */
var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum["DRAFT"] = "draft";
    TaskStatusEnum["REQUESTED"] = "requested";
    TaskStatusEnum["RECEIVED"] = "received";
    TaskStatusEnum["ACCEPTED"] = "accepted";
    TaskStatusEnum["REJECTED"] = "rejected";
    TaskStatusEnum["READY"] = "ready";
    TaskStatusEnum["CANCELLED"] = "cancelled";
    TaskStatusEnum["IN_PROGRESS"] = "in-progress";
    TaskStatusEnum["ON_HOLD"] = "on-hold";
    TaskStatusEnum["FAILED"] = "failed";
    TaskStatusEnum["COMPLETED"] = "completed";
    TaskStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(TaskStatusEnum = exports.TaskStatusEnum || (exports.TaskStatusEnum = {}));
//# sourceMappingURL=ITask.js.map