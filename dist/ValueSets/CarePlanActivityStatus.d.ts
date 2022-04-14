import { Coding } from '../strictmodels';
/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
export declare const CarePlanActivityStatus: {
    /**
     * The planned care plan activity has been withdrawn.
     */
    care_plan_activity_status_Cancelled: Coding;
    /**
     * Care plan activity has been completed (more or less) as planned.
     */
    care_plan_activity_status_Completed: Coding;
    /**
     * Care plan activity was entered in error and voided.
     */
    care_plan_activity_status_EnteredInError: Coding;
    /**
     * Care plan activity has been started but is not yet complete.
     */
    care_plan_activity_status_InProgress: Coding;
    /**
     * Care plan activity is planned but no action has yet been taken.
     */
    care_plan_activity_status_NotStarted: Coding;
    /**
     * Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.
     */
    care_plan_activity_status_OnHold: Coding;
    /**
     * Appointment or other booking has occurred but activity has not yet begun.
     */
    care_plan_activity_status_Scheduled: Coding;
    /**
     * The planned care plan activity has been ended prior to completion after the activity was started.
     */
    care_plan_activity_status_Stopped: Coding;
    /**
     * The current state of the care plan activity is not known.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.
     */
    care_plan_activity_status_Unknown: Coding;
};
//# sourceMappingURL=CarePlanActivityStatus.d.ts.map