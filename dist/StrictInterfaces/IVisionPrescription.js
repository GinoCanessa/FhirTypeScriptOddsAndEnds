"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionPrescriptionStatusEnum = exports.VisionPrescriptionLensSpecificationEyeEnum = exports.VisionPrescriptionLensSpecificationPrismBaseEnum = void 0;
/**
 * Code Values for the VisionPrescription.lensSpecification.prism.base field
 */
var VisionPrescriptionLensSpecificationPrismBaseEnum;
(function (VisionPrescriptionLensSpecificationPrismBaseEnum) {
    VisionPrescriptionLensSpecificationPrismBaseEnum["UP"] = "up";
    VisionPrescriptionLensSpecificationPrismBaseEnum["DOWN"] = "down";
    VisionPrescriptionLensSpecificationPrismBaseEnum["IN"] = "in";
    VisionPrescriptionLensSpecificationPrismBaseEnum["OUT"] = "out";
})(VisionPrescriptionLensSpecificationPrismBaseEnum = exports.VisionPrescriptionLensSpecificationPrismBaseEnum || (exports.VisionPrescriptionLensSpecificationPrismBaseEnum = {}));
/**
 * Code Values for the VisionPrescription.lensSpecification.eye field
 */
var VisionPrescriptionLensSpecificationEyeEnum;
(function (VisionPrescriptionLensSpecificationEyeEnum) {
    VisionPrescriptionLensSpecificationEyeEnum["RIGHT"] = "right";
    VisionPrescriptionLensSpecificationEyeEnum["LEFT"] = "left";
})(VisionPrescriptionLensSpecificationEyeEnum = exports.VisionPrescriptionLensSpecificationEyeEnum || (exports.VisionPrescriptionLensSpecificationEyeEnum = {}));
/**
 * Code Values for the VisionPrescription.status field
 */
var VisionPrescriptionStatusEnum;
(function (VisionPrescriptionStatusEnum) {
    VisionPrescriptionStatusEnum["ACTIVE"] = "active";
    VisionPrescriptionStatusEnum["CANCELLED"] = "cancelled";
    VisionPrescriptionStatusEnum["DRAFT"] = "draft";
    VisionPrescriptionStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(VisionPrescriptionStatusEnum = exports.VisionPrescriptionStatusEnum || (exports.VisionPrescriptionStatusEnum = {}));
//# sourceMappingURL=IVisionPrescription.js.map