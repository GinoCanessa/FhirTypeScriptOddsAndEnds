import { Coding } from '../strictmodels';
/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export declare const GoalStatus: {
    /**
     * A proposed goal was accepted or acknowledged.
     */
    goal_status_Accepted: Coding;
    /**
     * The goal is being sought actively.
     */
    goal_status_Active: Coding;
    /**
     * The goal has been abandoned.
     */
    goal_status_Cancelled: Coding;
    /**
     * The goal is no longer being sought.
     */
    goal_status_Completed: Coding;
    /**
     * The goal was entered in error and voided.
     */
    goal_status_EnteredInError: Coding;
    /**
     * The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    goal_status_OnHold: Coding;
    /**
     * A goal is planned for this patient.
     */
    goal_status_Planned: Coding;
    /**
     * A goal is proposed for this patient.
     */
    goal_status_Proposed: Coding;
    /**
     * A proposed goal was rejected.
     */
    goal_status_Rejected: Coding;
};
//# sourceMappingURL=GoalStatus.d.ts.map