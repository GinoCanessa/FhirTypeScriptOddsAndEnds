// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The availability status of the device.
 */
export const DeviceStatusValueSet = {
    /**
     * The device is available for use.  Note: For *implanted devices*  this means that the device is implanted in the patient.
     */
    device_status_Active: new Coding({
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/device-status"
    }),
    /**
     * The device was entered in error and voided.
     */
    device_status_EnteredInError: new Coding({
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/device-status"
    }),
    /**
     * The device is no longer available for use (e.g. lost, expired, damaged).  Note: For *implanted devices*  this means that the device has been removed from the patient.
     */
    device_status_Inactive: new Coding({
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/device-status"
    }),
    /**
     * The status of the device has not been determined.
     */
    device_status_Unknown: new Coding({
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/device-status"
    }),
};
//# sourceMappingURL=DeviceStatusValueSet.js.map