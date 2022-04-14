"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationRequestStatusEnum = exports.CommunicationRequestPriorityEnum = void 0;
/**
 * Code Values for the CommunicationRequest.priority field
 */
var CommunicationRequestPriorityEnum;
(function (CommunicationRequestPriorityEnum) {
    CommunicationRequestPriorityEnum["ROUTINE"] = "routine";
    CommunicationRequestPriorityEnum["URGENT"] = "urgent";
    CommunicationRequestPriorityEnum["ASAP"] = "asap";
    CommunicationRequestPriorityEnum["STAT"] = "stat";
})(CommunicationRequestPriorityEnum = exports.CommunicationRequestPriorityEnum || (exports.CommunicationRequestPriorityEnum = {}));
/**
 * Code Values for the CommunicationRequest.status field
 */
var CommunicationRequestStatusEnum;
(function (CommunicationRequestStatusEnum) {
    CommunicationRequestStatusEnum["DRAFT"] = "draft";
    CommunicationRequestStatusEnum["ACTIVE"] = "active";
    CommunicationRequestStatusEnum["ON_HOLD"] = "on-hold";
    CommunicationRequestStatusEnum["REVOKED"] = "revoked";
    CommunicationRequestStatusEnum["COMPLETED"] = "completed";
    CommunicationRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    CommunicationRequestStatusEnum["UNKNOWN"] = "unknown";
})(CommunicationRequestStatusEnum = exports.CommunicationRequestStatusEnum || (exports.CommunicationRequestStatusEnum = {}));
//# sourceMappingURL=ICommunicationRequest.js.map