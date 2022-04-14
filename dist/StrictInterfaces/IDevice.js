"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceStatusEnum = exports.DeviceDeviceNameTypeEnum = exports.DeviceUdiCarrierEntryTypeEnum = void 0;
/**
 * Code Values for the Device.udiCarrier.entryType field
 */
var DeviceUdiCarrierEntryTypeEnum;
(function (DeviceUdiCarrierEntryTypeEnum) {
    DeviceUdiCarrierEntryTypeEnum["BARCODE"] = "barcode";
    DeviceUdiCarrierEntryTypeEnum["RFID"] = "rfid";
    DeviceUdiCarrierEntryTypeEnum["MANUAL"] = "manual";
    DeviceUdiCarrierEntryTypeEnum["CARD"] = "card";
    DeviceUdiCarrierEntryTypeEnum["SELF_REPORTED"] = "self-reported";
    DeviceUdiCarrierEntryTypeEnum["UNKNOWN"] = "unknown";
})(DeviceUdiCarrierEntryTypeEnum = exports.DeviceUdiCarrierEntryTypeEnum || (exports.DeviceUdiCarrierEntryTypeEnum = {}));
/**
 * Code Values for the Device.deviceName.type field
 */
var DeviceDeviceNameTypeEnum;
(function (DeviceDeviceNameTypeEnum) {
    DeviceDeviceNameTypeEnum["UDI_LABEL_NAME"] = "udi-label-name";
    DeviceDeviceNameTypeEnum["USER_FRIENDLY_NAME"] = "user-friendly-name";
    DeviceDeviceNameTypeEnum["PATIENT_REPORTED_NAME"] = "patient-reported-name";
    DeviceDeviceNameTypeEnum["MANUFACTURER_NAME"] = "manufacturer-name";
    DeviceDeviceNameTypeEnum["MODEL_NAME"] = "model-name";
    DeviceDeviceNameTypeEnum["OTHER"] = "other";
})(DeviceDeviceNameTypeEnum = exports.DeviceDeviceNameTypeEnum || (exports.DeviceDeviceNameTypeEnum = {}));
/**
 * Code Values for the Device.status field
 */
var DeviceStatusEnum;
(function (DeviceStatusEnum) {
    DeviceStatusEnum["ACTIVE"] = "active";
    DeviceStatusEnum["INACTIVE"] = "inactive";
    DeviceStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceStatusEnum["UNKNOWN"] = "unknown";
})(DeviceStatusEnum = exports.DeviceStatusEnum || (exports.DeviceStatusEnum = {}));
//# sourceMappingURL=IDevice.js.map