"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarePlanStatusEnum = exports.CarePlanIntentEnum = exports.CarePlanActivityDetailStatusEnum = exports.CarePlanActivityDetailKindEnum = void 0;
/**
 * Code Values for the CarePlan.activity.detail.kind field
 */
var CarePlanActivityDetailKindEnum;
(function (CarePlanActivityDetailKindEnum) {
    CarePlanActivityDetailKindEnum["APPOINTMENT"] = "Appointment";
    CarePlanActivityDetailKindEnum["COMMUNICATIONREQUEST"] = "CommunicationRequest";
    CarePlanActivityDetailKindEnum["DEVICEREQUEST"] = "DeviceRequest";
    CarePlanActivityDetailKindEnum["MEDICATIONREQUEST"] = "MedicationRequest";
    CarePlanActivityDetailKindEnum["NUTRITIONORDER"] = "NutritionOrder";
    CarePlanActivityDetailKindEnum["TASK"] = "Task";
    CarePlanActivityDetailKindEnum["SERVICEREQUEST"] = "ServiceRequest";
    CarePlanActivityDetailKindEnum["VISIONPRESCRIPTION"] = "VisionPrescription";
})(CarePlanActivityDetailKindEnum = exports.CarePlanActivityDetailKindEnum || (exports.CarePlanActivityDetailKindEnum = {}));
/**
 * Code Values for the CarePlan.activity.detail.status field
 */
var CarePlanActivityDetailStatusEnum;
(function (CarePlanActivityDetailStatusEnum) {
    CarePlanActivityDetailStatusEnum["NOT_STARTED"] = "not-started";
    CarePlanActivityDetailStatusEnum["SCHEDULED"] = "scheduled";
    CarePlanActivityDetailStatusEnum["IN_PROGRESS"] = "in-progress";
    CarePlanActivityDetailStatusEnum["ON_HOLD"] = "on-hold";
    CarePlanActivityDetailStatusEnum["COMPLETED"] = "completed";
    CarePlanActivityDetailStatusEnum["CANCELLED"] = "cancelled";
    CarePlanActivityDetailStatusEnum["STOPPED"] = "stopped";
    CarePlanActivityDetailStatusEnum["UNKNOWN"] = "unknown";
    CarePlanActivityDetailStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CarePlanActivityDetailStatusEnum = exports.CarePlanActivityDetailStatusEnum || (exports.CarePlanActivityDetailStatusEnum = {}));
/**
 * Code Values for the CarePlan.intent field
 */
var CarePlanIntentEnum;
(function (CarePlanIntentEnum) {
    CarePlanIntentEnum["PROPOSAL"] = "proposal";
    CarePlanIntentEnum["PLAN"] = "plan";
    CarePlanIntentEnum["ORDER"] = "order";
    CarePlanIntentEnum["OPTION"] = "option";
})(CarePlanIntentEnum = exports.CarePlanIntentEnum || (exports.CarePlanIntentEnum = {}));
/**
 * Code Values for the CarePlan.status field
 */
var CarePlanStatusEnum;
(function (CarePlanStatusEnum) {
    CarePlanStatusEnum["DRAFT"] = "draft";
    CarePlanStatusEnum["ACTIVE"] = "active";
    CarePlanStatusEnum["ON_HOLD"] = "on-hold";
    CarePlanStatusEnum["REVOKED"] = "revoked";
    CarePlanStatusEnum["COMPLETED"] = "completed";
    CarePlanStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    CarePlanStatusEnum["UNKNOWN"] = "unknown";
})(CarePlanStatusEnum = exports.CarePlanStatusEnum || (exports.CarePlanStatusEnum = {}));
//# sourceMappingURL=ICarePlan.js.map