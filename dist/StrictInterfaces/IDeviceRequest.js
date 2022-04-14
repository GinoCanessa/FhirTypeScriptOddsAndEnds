"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRequestStatusEnum = exports.DeviceRequestPriorityEnum = exports.DeviceRequestIntentEnum = void 0;
/**
 * Code Values for the DeviceRequest.intent field
 */
var DeviceRequestIntentEnum;
(function (DeviceRequestIntentEnum) {
    DeviceRequestIntentEnum["PROPOSAL"] = "proposal";
    DeviceRequestIntentEnum["PLAN"] = "plan";
    DeviceRequestIntentEnum["DIRECTIVE"] = "directive";
    DeviceRequestIntentEnum["ORDER"] = "order";
    DeviceRequestIntentEnum["ORIGINAL_ORDER"] = "original-order";
    DeviceRequestIntentEnum["REFLEX_ORDER"] = "reflex-order";
    DeviceRequestIntentEnum["FILLER_ORDER"] = "filler-order";
    DeviceRequestIntentEnum["INSTANCE_ORDER"] = "instance-order";
    DeviceRequestIntentEnum["OPTION"] = "option";
})(DeviceRequestIntentEnum = exports.DeviceRequestIntentEnum || (exports.DeviceRequestIntentEnum = {}));
/**
 * Code Values for the DeviceRequest.priority field
 */
var DeviceRequestPriorityEnum;
(function (DeviceRequestPriorityEnum) {
    DeviceRequestPriorityEnum["ROUTINE"] = "routine";
    DeviceRequestPriorityEnum["URGENT"] = "urgent";
    DeviceRequestPriorityEnum["ASAP"] = "asap";
    DeviceRequestPriorityEnum["STAT"] = "stat";
})(DeviceRequestPriorityEnum = exports.DeviceRequestPriorityEnum || (exports.DeviceRequestPriorityEnum = {}));
/**
 * Code Values for the DeviceRequest.status field
 */
var DeviceRequestStatusEnum;
(function (DeviceRequestStatusEnum) {
    DeviceRequestStatusEnum["DRAFT"] = "draft";
    DeviceRequestStatusEnum["ACTIVE"] = "active";
    DeviceRequestStatusEnum["ON_HOLD"] = "on-hold";
    DeviceRequestStatusEnum["REVOKED"] = "revoked";
    DeviceRequestStatusEnum["COMPLETED"] = "completed";
    DeviceRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceRequestStatusEnum["UNKNOWN"] = "unknown";
})(DeviceRequestStatusEnum = exports.DeviceRequestStatusEnum || (exports.DeviceRequestStatusEnum = {}));
//# sourceMappingURL=IDeviceRequest.js.map