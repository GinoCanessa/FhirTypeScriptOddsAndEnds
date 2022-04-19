// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Indicates the status of the care team.
 */
export const CareTeamStatusValueSet = {
    /**
     * The care team is currently participating in the coordination and delivery of care.
     */
    care_team_status_Active: Coding.FromStrict({
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/care-team-status"
    }),
    /**
     * The care team should have never existed.
     */
    care_team_status_EnteredInError: Coding.FromStrict({
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/care-team-status"
    }),
    /**
     * The care team was, but is no longer, participating in the coordination and delivery of care.
     */
    care_team_status_Inactive: Coding.FromStrict({
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/care-team-status"
    }),
    /**
     * The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
     */
    care_team_status_Proposed: Coding.FromStrict({
        code: "proposed",
        display: "Proposed",
        system: "http://hl7.org/fhir/care-team-status"
    }),
    /**
     * The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
     */
    care_team_status_Suspended: Coding.FromStrict({
        code: "suspended",
        display: "Suspended",
        system: "http://hl7.org/fhir/care-team-status"
    }),
};
//# sourceMappingURL=CareTeamStatusValueSet.js.map