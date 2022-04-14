"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestStatusEnum = exports.ServiceRequestPriorityEnum = exports.ServiceRequestIntentEnum = void 0;
/**
 * Code Values for the ServiceRequest.intent field
 */
var ServiceRequestIntentEnum;
(function (ServiceRequestIntentEnum) {
    ServiceRequestIntentEnum["PROPOSAL"] = "proposal";
    ServiceRequestIntentEnum["PLAN"] = "plan";
    ServiceRequestIntentEnum["DIRECTIVE"] = "directive";
    ServiceRequestIntentEnum["ORDER"] = "order";
    ServiceRequestIntentEnum["ORIGINAL_ORDER"] = "original-order";
    ServiceRequestIntentEnum["REFLEX_ORDER"] = "reflex-order";
    ServiceRequestIntentEnum["FILLER_ORDER"] = "filler-order";
    ServiceRequestIntentEnum["INSTANCE_ORDER"] = "instance-order";
    ServiceRequestIntentEnum["OPTION"] = "option";
})(ServiceRequestIntentEnum = exports.ServiceRequestIntentEnum || (exports.ServiceRequestIntentEnum = {}));
/**
 * Code Values for the ServiceRequest.priority field
 */
var ServiceRequestPriorityEnum;
(function (ServiceRequestPriorityEnum) {
    ServiceRequestPriorityEnum["ROUTINE"] = "routine";
    ServiceRequestPriorityEnum["URGENT"] = "urgent";
    ServiceRequestPriorityEnum["ASAP"] = "asap";
    ServiceRequestPriorityEnum["STAT"] = "stat";
})(ServiceRequestPriorityEnum = exports.ServiceRequestPriorityEnum || (exports.ServiceRequestPriorityEnum = {}));
/**
 * Code Values for the ServiceRequest.status field
 */
var ServiceRequestStatusEnum;
(function (ServiceRequestStatusEnum) {
    ServiceRequestStatusEnum["DRAFT"] = "draft";
    ServiceRequestStatusEnum["ACTIVE"] = "active";
    ServiceRequestStatusEnum["ON_HOLD"] = "on-hold";
    ServiceRequestStatusEnum["REVOKED"] = "revoked";
    ServiceRequestStatusEnum["COMPLETED"] = "completed";
    ServiceRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    ServiceRequestStatusEnum["UNKNOWN"] = "unknown";
})(ServiceRequestStatusEnum = exports.ServiceRequestStatusEnum || (exports.ServiceRequestStatusEnum = {}));
//# sourceMappingURL=IServiceRequest.js.map