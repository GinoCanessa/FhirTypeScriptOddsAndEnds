"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationStatus = void 0;
/**
 * Indicates whether the location is still in use.
 */
exports.LocationStatus = {
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
    },
};
//# sourceMappingURL=LocationStatus.js.map