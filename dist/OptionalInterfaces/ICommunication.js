"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationStatusEnum = exports.CommunicationPriorityEnum = void 0;
/**
 * Code Values for the Communication.priority field
 */
var CommunicationPriorityEnum;
(function (CommunicationPriorityEnum) {
    CommunicationPriorityEnum["ROUTINE"] = "routine";
    CommunicationPriorityEnum["URGENT"] = "urgent";
    CommunicationPriorityEnum["ASAP"] = "asap";
    CommunicationPriorityEnum["STAT"] = "stat";
})(CommunicationPriorityEnum = exports.CommunicationPriorityEnum || (exports.CommunicationPriorityEnum = {}));
/**
 * Code Values for the Communication.status field
 */
var CommunicationStatusEnum;
(function (CommunicationStatusEnum) {
    CommunicationStatusEnum["PREPARATION"] = "preparation";
    CommunicationStatusEnum["IN_PROGRESS"] = "in-progress";
    CommunicationStatusEnum["NOT_DONE"] = "not-done";
    CommunicationStatusEnum["ON_HOLD"] = "on-hold";
    CommunicationStatusEnum["STOPPED"] = "stopped";
    CommunicationStatusEnum["COMPLETED"] = "completed";
    CommunicationStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    CommunicationStatusEnum["UNKNOWN"] = "unknown";
})(CommunicationStatusEnum = exports.CommunicationStatusEnum || (exports.CommunicationStatusEnum = {}));
//# sourceMappingURL=ICommunication.js.map