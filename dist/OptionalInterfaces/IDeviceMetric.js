"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMetricOperationalStatusEnum = exports.DeviceMetricColorEnum = exports.DeviceMetricCategoryEnum = exports.DeviceMetricCalibrationTypeEnum = exports.DeviceMetricCalibrationStateEnum = void 0;
/**
 * Code Values for the DeviceMetric.calibration.state field
 */
var DeviceMetricCalibrationStateEnum;
(function (DeviceMetricCalibrationStateEnum) {
    DeviceMetricCalibrationStateEnum["NOT_CALIBRATED"] = "not-calibrated";
    DeviceMetricCalibrationStateEnum["CALIBRATION_REQUIRED"] = "calibration-required";
    DeviceMetricCalibrationStateEnum["CALIBRATED"] = "calibrated";
    DeviceMetricCalibrationStateEnum["UNSPECIFIED"] = "unspecified";
})(DeviceMetricCalibrationStateEnum = exports.DeviceMetricCalibrationStateEnum || (exports.DeviceMetricCalibrationStateEnum = {}));
/**
 * Code Values for the DeviceMetric.calibration.type field
 */
var DeviceMetricCalibrationTypeEnum;
(function (DeviceMetricCalibrationTypeEnum) {
    DeviceMetricCalibrationTypeEnum["UNSPECIFIED"] = "unspecified";
    DeviceMetricCalibrationTypeEnum["OFFSET"] = "offset";
    DeviceMetricCalibrationTypeEnum["GAIN"] = "gain";
    DeviceMetricCalibrationTypeEnum["TWO_POINT"] = "two-point";
})(DeviceMetricCalibrationTypeEnum = exports.DeviceMetricCalibrationTypeEnum || (exports.DeviceMetricCalibrationTypeEnum = {}));
/**
 * Code Values for the DeviceMetric.category field
 */
var DeviceMetricCategoryEnum;
(function (DeviceMetricCategoryEnum) {
    DeviceMetricCategoryEnum["MEASUREMENT"] = "measurement";
    DeviceMetricCategoryEnum["SETTING"] = "setting";
    DeviceMetricCategoryEnum["CALCULATION"] = "calculation";
    DeviceMetricCategoryEnum["UNSPECIFIED"] = "unspecified";
})(DeviceMetricCategoryEnum = exports.DeviceMetricCategoryEnum || (exports.DeviceMetricCategoryEnum = {}));
/**
 * Code Values for the DeviceMetric.color field
 */
var DeviceMetricColorEnum;
(function (DeviceMetricColorEnum) {
    DeviceMetricColorEnum["BLACK"] = "black";
    DeviceMetricColorEnum["RED"] = "red";
    DeviceMetricColorEnum["GREEN"] = "green";
    DeviceMetricColorEnum["YELLOW"] = "yellow";
    DeviceMetricColorEnum["BLUE"] = "blue";
    DeviceMetricColorEnum["MAGENTA"] = "magenta";
    DeviceMetricColorEnum["CYAN"] = "cyan";
    DeviceMetricColorEnum["WHITE"] = "white";
})(DeviceMetricColorEnum = exports.DeviceMetricColorEnum || (exports.DeviceMetricColorEnum = {}));
/**
 * Code Values for the DeviceMetric.operationalStatus field
 */
var DeviceMetricOperationalStatusEnum;
(function (DeviceMetricOperationalStatusEnum) {
    DeviceMetricOperationalStatusEnum["ON"] = "on";
    DeviceMetricOperationalStatusEnum["OFF"] = "off";
    DeviceMetricOperationalStatusEnum["STANDBY"] = "standby";
    DeviceMetricOperationalStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(DeviceMetricOperationalStatusEnum = exports.DeviceMetricOperationalStatusEnum || (exports.DeviceMetricOperationalStatusEnum = {}));
//# sourceMappingURL=IDeviceMetric.js.map