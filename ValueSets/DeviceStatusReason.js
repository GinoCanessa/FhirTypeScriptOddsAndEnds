"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceStatusReason = void 0;
/**
 * The availability status reason of the device.
 */
exports.DeviceStatusReason = {
    /**
     * The device hardware is disconnected.
     */
    device_status_reason_HardwareDisconnected: {
        code: "hw-discon",
        display: "Hardware Disconnected",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    },
    /**
     * The device is not ready.
     */
    device_status_reason_NotReady: {
        code: "not-ready",
        display: "Not Ready",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    },
    /**
     * The device is off.
     */
    device_status_reason_Off: {
        code: "off",
        display: "Off",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    },
    /**
     * The device is offline.
     */
    device_status_reason_Offline: {
        code: "offline",
        display: "Offline",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    },
    /**
     * The device is off.
     */
    device_status_reason_Online: {
        code: "online",
        display: "Online",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    },
    /**
     * The device is paused.
     */
    device_status_reason_Paused: {
        code: "paused",
        display: "Paused",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    },
    /**
     * The device is ready but not actively operating.
     */
    device_status_reason_Standby: {
        code: "standby",
        display: "Standby",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    },
    /**
     * The device transducer is disconnected.
     */
    device_status_reason_TransducerDisconnected: {
        code: "transduc-discon",
        display: "Transducer Disconnected",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    },
};
//# sourceMappingURL=DeviceStatusReason.js.map