"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterStatus = void 0;
/**
 * Current state of the encounter.
 */
exports.EncounterStatus = {
    /**
     * The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    encounter_status_Arrived: {
        code: "arrived",
        display: "Arrived",
        system: "http://hl7.org/fhir/encounter-status"
    },
    /**
     * The Encounter has ended before it has begun.
     */
    encounter_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/encounter-status"
    },
    /**
     * This instance should not have been part of this patient's medical record.
     */
    encounter_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/encounter-status"
    },
    /**
     * The Encounter has ended.
     */
    encounter_status_Finished: {
        code: "finished",
        display: "Finished",
        system: "http://hl7.org/fhir/encounter-status"
    },
    /**
     * The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
     */
    encounter_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/encounter-status"
    },
    /**
     * The Encounter has begun, but the patient is temporarily on leave.
     */
    encounter_status_OnLeave: {
        code: "onleave",
        display: "On Leave",
        system: "http://hl7.org/fhir/encounter-status"
    },
    /**
     * The Encounter has not yet started.
     */
    encounter_status_Planned: {
        code: "planned",
        display: "Planned",
        system: "http://hl7.org/fhir/encounter-status"
    },
    /**
     * The patient has been assessed for the priority of their treatment based on the severity of their condition.
     */
    encounter_status_Triaged: {
        code: "triaged",
        display: "Triaged",
        system: "http://hl7.org/fhir/encounter-status"
    },
    /**
     * The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    encounter_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/encounter-status"
    },
};
//# sourceMappingURL=EncounterStatus.js.map