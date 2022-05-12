// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/device-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * The availability status of the device.
 */
export const DeviceStatusValueSet = {
    /**
     * active: The device is available for use.  Note: For *implanted devices*  this means that the device is implanted in the patient.
     */
    Active: new Coding({
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/device-status",
    }),
    /**
     * entered-in-error: The device was entered in error and voided.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/device-status",
    }),
    /**
     * inactive: The device is no longer available for use (e.g. lost, expired, damaged).  Note: For *implanted devices*  this means that the device has been removed from the patient.
     */
    Inactive: new Coding({
        display: "Inactive",
        code: "inactive",
        system: "http://hl7.org/fhir/device-status",
    }),
    /**
     * unknown: The status of the device has not been determined.
     */
    Unknown: new Coding({
        display: "Unknown",
        code: "unknown",
        system: "http://hl7.org/fhir/device-status",
    }),
};
/**
 * The availability status of the device.
 */
//# sourceMappingURL=DeviceStatusValueSet.js.map