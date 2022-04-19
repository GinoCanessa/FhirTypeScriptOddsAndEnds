import { Coding } from '../fhir';
/**
 * The availability status of the device.
 */
export declare const DeviceStatusValueSet: {
    /**
     * The device is available for use.  Note: For *implanted devices*  this means that the device is implanted in the patient.
     */
    device_status_Active: Coding;
    /**
     * The device was entered in error and voided.
     */
    device_status_EnteredInError: Coding;
    /**
     * The device is no longer available for use (e.g. lost, expired, damaged).  Note: For *implanted devices*  this means that the device has been removed from the patient.
     */
    device_status_Inactive: Coding;
    /**
     * The status of the device has not been determined.
     */
    device_status_Unknown: Coding;
};
//# sourceMappingURL=DeviceStatusValueSet.d.ts.map