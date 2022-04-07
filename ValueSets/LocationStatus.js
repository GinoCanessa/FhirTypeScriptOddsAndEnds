/**
 * Indicates whether the location is still in use.
 */
export var LocationStatus = {
    /**
     * The location is operational.
     */
    location_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/location-status"
    },
    /**
     * The location is no longer used.
     */
    location_status_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/location-status"
    },
    /**
     * The location is temporarily closed.
     */
    location_status_Suspended: {
        code: "suspended",
        display: "Suspended",
        system: "http://hl7.org/fhir/location-status"
    }
};
