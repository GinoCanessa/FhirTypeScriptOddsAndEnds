"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareTeamStatus = void 0;
/**
 * Indicates the status of the care team.
 */
exports.CareTeamStatus = {
    /**
     * The care team is currently participating in the coordination and delivery of care.
     */
    care_team_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/care-team-status"
    },
    /**
     * The care team should have never existed.
     */
    care_team_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/care-team-status"
    },
    /**
     * The care team was, but is no longer, participating in the coordination and delivery of care.
     */
    care_team_status_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/care-team-status"
    },
    /**
     * The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
     */
    care_team_status_Proposed: {
        code: "proposed",
        display: "Proposed",
        system: "http://hl7.org/fhir/care-team-status"
    },
    /**
     * The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
     */
    care_team_status_Suspended: {
        code: "suspended",
        display: "Suspended",
        system: "http://hl7.org/fhir/care-team-status"
    },
};
//# sourceMappingURL=CareTeamStatus.js.map