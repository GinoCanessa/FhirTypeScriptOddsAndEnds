"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterLocationStatus = void 0;
/**
 * The status of the location.
 */
exports.EncounterLocationStatus = {
    /**
     * The patient is currently at this location, or was between the period specified.
     * A system may update these records when the patient leaves the location to either reserved, or completed.
     */
    encounter_location_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/encounter-location-status"
    },
    /**
     * The patient was at this location during the period specified.
     * Not to be used when the patient is currently at the location.
     */
    encounter_location_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/encounter-location-status"
    },
    /**
     * The patient is planned to be moved to this location at some point in the future.
     */
    encounter_location_status_Planned: {
        code: "planned",
        display: "Planned",
        system: "http://hl7.org/fhir/encounter-location-status"
    },
    /**
     * This location is held empty for this patient.
     */
    encounter_location_status_Reserved: {
        code: "reserved",
        display: "Reserved",
        system: "http://hl7.org/fhir/encounter-location-status"
    },
};
//# sourceMappingURL=EncounterLocationStatus.js.map