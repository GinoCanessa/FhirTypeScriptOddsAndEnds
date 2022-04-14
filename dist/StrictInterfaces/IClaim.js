"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimUseEnum = exports.ClaimStatusEnum = void 0;
/**
 * Code Values for the Claim.status field
 */
var ClaimStatusEnum;
(function (ClaimStatusEnum) {
    ClaimStatusEnum["ACTIVE"] = "active";
    ClaimStatusEnum["CANCELLED"] = "cancelled";
    ClaimStatusEnum["DRAFT"] = "draft";
    ClaimStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ClaimStatusEnum = exports.ClaimStatusEnum || (exports.ClaimStatusEnum = {}));
/**
 * Code Values for the Claim.use field
 */
var ClaimUseEnum;
(function (ClaimUseEnum) {
    ClaimUseEnum["CLAIM"] = "claim";
    ClaimUseEnum["PREAUTHORIZATION"] = "preauthorization";
    ClaimUseEnum["PREDETERMINATION"] = "predetermination";
})(ClaimUseEnum = exports.ClaimUseEnum || (exports.ClaimUseEnum = {}));
//# sourceMappingURL=IClaim.js.map