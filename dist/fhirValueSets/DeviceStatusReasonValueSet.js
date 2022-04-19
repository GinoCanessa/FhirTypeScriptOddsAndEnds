// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The availability status reason of the device.
 */
export const DeviceStatusReasonValueSet = {
    /**
     * The device hardware is disconnected.
     */
    device_status_reason_HardwareDisconnected: Coding.FromStrict({
        code: "hw-discon",
        display: "Hardware Disconnected",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    }),
    /**
     * The device is not ready.
     */
    device_status_reason_NotReady: Coding.FromStrict({
        code: "not-ready",
        display: "Not Ready",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    }),
    /**
     * The device is off.
     */
    device_status_reason_Off: Coding.FromStrict({
        code: "off",
        display: "Off",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    }),
    /**
     * The device is offline.
     */
    device_status_reason_Offline: Coding.FromStrict({
        code: "offline",
        display: "Offline",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    }),
    /**
     * The device is off.
     */
    device_status_reason_Online: Coding.FromStrict({
        code: "online",
        display: "Online",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    }),
    /**
     * The device is paused.
     */
    device_status_reason_Paused: Coding.FromStrict({
        code: "paused",
        display: "Paused",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    }),
    /**
     * The device is ready but not actively operating.
     */
    device_status_reason_Standby: Coding.FromStrict({
        code: "standby",
        display: "Standby",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    }),
    /**
     * The device transducer is disconnected.
     */
    device_status_reason_TransducerDisconnected: Coding.FromStrict({
        code: "transduc-discon",
        display: "Transducer Disconnected",
        system: "http://terminology.hl7.org/CodeSystem/device-status-reason"
    }),
};
//# sourceMappingURL=DeviceStatusReasonValueSet.js.map