"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionOrderStatusEnum = exports.NutritionOrderIntentEnum = void 0;
/**
 * Code Values for the NutritionOrder.intent field
 */
var NutritionOrderIntentEnum;
(function (NutritionOrderIntentEnum) {
    NutritionOrderIntentEnum["PROPOSAL"] = "proposal";
    NutritionOrderIntentEnum["PLAN"] = "plan";
    NutritionOrderIntentEnum["DIRECTIVE"] = "directive";
    NutritionOrderIntentEnum["ORDER"] = "order";
    NutritionOrderIntentEnum["ORIGINAL_ORDER"] = "original-order";
    NutritionOrderIntentEnum["REFLEX_ORDER"] = "reflex-order";
    NutritionOrderIntentEnum["FILLER_ORDER"] = "filler-order";
    NutritionOrderIntentEnum["INSTANCE_ORDER"] = "instance-order";
    NutritionOrderIntentEnum["OPTION"] = "option";
})(NutritionOrderIntentEnum = exports.NutritionOrderIntentEnum || (exports.NutritionOrderIntentEnum = {}));
/**
 * Code Values for the NutritionOrder.status field
 */
var NutritionOrderStatusEnum;
(function (NutritionOrderStatusEnum) {
    NutritionOrderStatusEnum["DRAFT"] = "draft";
    NutritionOrderStatusEnum["ACTIVE"] = "active";
    NutritionOrderStatusEnum["ON_HOLD"] = "on-hold";
    NutritionOrderStatusEnum["REVOKED"] = "revoked";
    NutritionOrderStatusEnum["COMPLETED"] = "completed";
    NutritionOrderStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    NutritionOrderStatusEnum["UNKNOWN"] = "unknown";
})(NutritionOrderStatusEnum = exports.NutritionOrderStatusEnum || (exports.NutritionOrderStatusEnum = {}));
//# sourceMappingURL=INutritionOrder.js.map