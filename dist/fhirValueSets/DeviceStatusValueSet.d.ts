import { Coding } from '../fhir.js';
/**
 * The availability status of the device.
 */
export declare const DeviceStatusValueSet: {
    /**
     * active: The device is available for use.  Note: For *implanted devices*  this means that the device is implanted in the patient.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: The device was entered in error and voided.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The device is no longer available for use (e.g. lost, expired, damaged).  Note: For *implanted devices*  this means that the device has been removed from the patient.
     */
    readonly Inactive: Coding;
    /**
     * unknown: The status of the device has not been determined.
     */
    readonly Unknown: Coding;
};
/**
 * The availability status of the device.
 */
export declare type DeviceStatusValueSetType = typeof DeviceStatusValueSet;
/**
 * The availability status of the device.
 */
//# sourceMappingURL=DeviceStatusValueSet.d.ts.map