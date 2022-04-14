"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyRequestStatusEnum = exports.SupplyRequestPriorityEnum = void 0;
/**
 * Code Values for the SupplyRequest.priority field
 */
var SupplyRequestPriorityEnum;
(function (SupplyRequestPriorityEnum) {
    SupplyRequestPriorityEnum["ROUTINE"] = "routine";
    SupplyRequestPriorityEnum["URGENT"] = "urgent";
    SupplyRequestPriorityEnum["ASAP"] = "asap";
    SupplyRequestPriorityEnum["STAT"] = "stat";
})(SupplyRequestPriorityEnum = exports.SupplyRequestPriorityEnum || (exports.SupplyRequestPriorityEnum = {}));
/**
 * Code Values for the SupplyRequest.status field
 */
var SupplyRequestStatusEnum;
(function (SupplyRequestStatusEnum) {
    SupplyRequestStatusEnum["DRAFT"] = "draft";
    SupplyRequestStatusEnum["ACTIVE"] = "active";
    SupplyRequestStatusEnum["SUSPENDED"] = "suspended";
    SupplyRequestStatusEnum["CANCELLED"] = "cancelled";
    SupplyRequestStatusEnum["COMPLETED"] = "completed";
    SupplyRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    SupplyRequestStatusEnum["UNKNOWN"] = "unknown";
})(SupplyRequestStatusEnum = exports.SupplyRequestStatusEnum || (exports.SupplyRequestStatusEnum = {}));
//# sourceMappingURL=ISupplyRequest.js.map