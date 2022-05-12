import { Coding } from '../fhir.js';
/**
 * The availability status reason of the device.
 */
export declare const DeviceStatusReasonValueSet: {
    /**
     * hw-discon: The device hardware is disconnected.
     */
    readonly HardwareDisconnected: Coding;
    /**
     * not-ready: The device is not ready.
     */
    readonly NotReady: Coding;
    /**
     * off: The device is off.
     */
    readonly Off: Coding;
    /**
     * offline: The device is offline.
     */
    readonly Offline: Coding;
    /**
     * online: The device is off.
     */
    readonly Online: Coding;
    /**
     * paused: The device is paused.
     */
    readonly Paused: Coding;
    /**
     * standby: The device is ready but not actively operating.
     */
    readonly Standby: Coding;
    /**
     * transduc-discon: The device transducer is disconnected.
     */
    readonly TransducerDisconnected: Coding;
};
/**
 * The availability status reason of the device.
 */
export declare type DeviceStatusReasonValueSetType = typeof DeviceStatusReasonValueSet;
/**
 * The availability status reason of the device.
 */
//# sourceMappingURL=DeviceStatusReasonValueSet.d.ts.map