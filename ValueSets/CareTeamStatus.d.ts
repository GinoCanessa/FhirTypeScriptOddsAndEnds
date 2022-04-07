import { Coding } from '../strictmodels';
/**
 * Indicates the status of the care team.
 */
export declare const CareTeamStatus: {
    /**
     * The care team is currently participating in the coordination and delivery of care.
     */
    care_team_status_Active: Coding;
    /**
     * The care team should have never existed.
     */
    care_team_status_EnteredInError: Coding;
    /**
     * The care team was, but is no longer, participating in the coordination and delivery of care.
     */
    care_team_status_Inactive: Coding;
    /**
     * The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
     */
    care_team_status_Proposed: Coding;
    /**
     * The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
     */
    care_team_status_Suspended: Coding;
};
//# sourceMappingURL=CareTeamStatus.d.ts.map