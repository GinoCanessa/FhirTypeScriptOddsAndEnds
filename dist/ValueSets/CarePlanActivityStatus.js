"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarePlanActivityStatus = void 0;
/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
exports.CarePlanActivityStatus = {
    /**
     * The planned care plan activity has been withdrawn.
     */
    care_plan_activity_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
    /**
     * Care plan activity has been completed (more or less) as planned.
     */
    care_plan_activity_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
    /**
     * Care plan activity was entered in error and voided.
     */
    care_plan_activity_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
    /**
     * Care plan activity has been started but is not yet complete.
     */
    care_plan_activity_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
    /**
     * Care plan activity is planned but no action has yet been taken.
     */
    care_plan_activity_status_NotStarted: {
        code: "not-started",
        display: "Not Started",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
    /**
     * Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.
     */
    care_plan_activity_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
    /**
     * Appointment or other booking has occurred but activity has not yet begun.
     */
    care_plan_activity_status_Scheduled: {
        code: "scheduled",
        display: "Scheduled",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
    /**
     * The planned care plan activity has been ended prior to completion after the activity was started.
     */
    care_plan_activity_status_Stopped: {
        code: "stopped",
        display: "Stopped",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
    /**
     * The current state of the care plan activity is not known.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.
     */
    care_plan_activity_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/care-plan-activity-status"
    },
};
//# sourceMappingURL=CarePlanActivityStatus.js.map