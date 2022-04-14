"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationRequestStatusEnum = exports.MedicationRequestPriorityEnum = exports.MedicationRequestIntentEnum = void 0;
/**
 * Code Values for the MedicationRequest.intent field
 */
var MedicationRequestIntentEnum;
(function (MedicationRequestIntentEnum) {
    MedicationRequestIntentEnum["PROPOSAL"] = "proposal";
    MedicationRequestIntentEnum["PLAN"] = "plan";
    MedicationRequestIntentEnum["ORDER"] = "order";
    MedicationRequestIntentEnum["ORIGINAL_ORDER"] = "original-order";
    MedicationRequestIntentEnum["REFLEX_ORDER"] = "reflex-order";
    MedicationRequestIntentEnum["FILLER_ORDER"] = "filler-order";
    MedicationRequestIntentEnum["INSTANCE_ORDER"] = "instance-order";
    MedicationRequestIntentEnum["OPTION"] = "option";
})(MedicationRequestIntentEnum = exports.MedicationRequestIntentEnum || (exports.MedicationRequestIntentEnum = {}));
/**
 * Code Values for the MedicationRequest.priority field
 */
var MedicationRequestPriorityEnum;
(function (MedicationRequestPriorityEnum) {
    MedicationRequestPriorityEnum["ROUTINE"] = "routine";
    MedicationRequestPriorityEnum["URGENT"] = "urgent";
    MedicationRequestPriorityEnum["ASAP"] = "asap";
    MedicationRequestPriorityEnum["STAT"] = "stat";
})(MedicationRequestPriorityEnum = exports.MedicationRequestPriorityEnum || (exports.MedicationRequestPriorityEnum = {}));
/**
 * Code Values for the MedicationRequest.status field
 */
var MedicationRequestStatusEnum;
(function (MedicationRequestStatusEnum) {
    MedicationRequestStatusEnum["ACTIVE"] = "active";
    MedicationRequestStatusEnum["ON_HOLD"] = "on-hold";
    MedicationRequestStatusEnum["CANCELLED"] = "cancelled";
    MedicationRequestStatusEnum["COMPLETED"] = "completed";
    MedicationRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationRequestStatusEnum["STOPPED"] = "stopped";
    MedicationRequestStatusEnum["DRAFT"] = "draft";
    MedicationRequestStatusEnum["UNKNOWN"] = "unknown";
})(MedicationRequestStatusEnum = exports.MedicationRequestStatusEnum || (exports.MedicationRequestStatusEnum = {}));
//# sourceMappingURL=IMedicationRequest.js.map