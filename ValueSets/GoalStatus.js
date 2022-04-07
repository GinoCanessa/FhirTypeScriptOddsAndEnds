/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export var GoalStatus = {
    /**
     * A proposed goal was accepted or acknowledged.
     */
    goal_status_Accepted: {
        code: "accepted",
        display: "Accepted",
        system: "http://hl7.org/fhir/goal-status"
    },
    /**
     * The goal is being sought actively.
     */
    goal_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/goal-status"
    },
    /**
     * The goal has been abandoned.
     */
    goal_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/goal-status"
    },
    /**
     * The goal is no longer being sought.
     */
    goal_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/goal-status"
    },
    /**
     * The goal was entered in error and voided.
     */
    goal_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/goal-status"
    },
    /**
     * The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    goal_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://hl7.org/fhir/goal-status"
    },
    /**
     * A goal is planned for this patient.
     */
    goal_status_Planned: {
        code: "planned",
        display: "Planned",
        system: "http://hl7.org/fhir/goal-status"
    },
    /**
     * A goal is proposed for this patient.
     */
    goal_status_Proposed: {
        code: "proposed",
        display: "Proposed",
        system: "http://hl7.org/fhir/goal-status"
    },
    /**
     * A proposed goal was rejected.
     */
    goal_status_Rejected: {
        code: "rejected",
        display: "Rejected",
        system: "http://hl7.org/fhir/goal-status"
    }
};
