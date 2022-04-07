/**
 * The availability status of the device.
 */
export var DeviceStatus = {
    /**
     * The device is available for use.  Note: For *implanted devices*  this means that the device is implanted in the patient.
     */
    device_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/device-status"
    },
    /**
     * The device was entered in error and voided.
     */
    device_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/device-status"
    },
    /**
     * The device is no longer available for use (e.g. lost, expired, damaged).  Note: For *implanted devices*  this means that the device has been removed from the patient.
     */
    device_status_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/device-status"
    },
    /**
     * The status of the device has not been determined.
     */
    device_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/device-status"
    }
};
