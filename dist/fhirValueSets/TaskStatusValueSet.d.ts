import { Coding } from '../fhir';
/**
 * The current status of the task.
 */
export declare const TaskStatusValueSet: {
    /**
     * The potential performer has agreed to execute the task but has not yet started work.
     */
    task_status_Accepted: Coding;
    /**
     * The task was not completed.
     */
    task_status_Cancelled: Coding;
    /**
     * The task has been completed.
     */
    task_status_Completed: Coding;
    /**
     * The task is not yet ready to be acted upon.
     */
    task_status_Draft: Coding;
    /**
     * The task should never have existed and is retained only because of the possibility it may have used.
     */
    task_status_EnteredInError: Coding;
    /**
     * The task was attempted but could not be completed due to some error.
     */
    task_status_Failed: Coding;
    /**
     * The task has been started but is not yet complete.
     */
    task_status_InProgress: Coding;
    /**
     * The task has been started but work has been paused.
     */
    task_status_OnHold: Coding;
    /**
     * The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.
     */
    task_status_Ready: Coding;
    /**
     * A potential performer has claimed ownership of the task and is evaluating whether to perform it.
     */
    task_status_Received: Coding;
    /**
     * The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.
     */
    task_status_Rejected: Coding;
    /**
     * The task is ready to be acted upon and action is sought.
     */
    task_status_Requested: Coding;
};
//# sourceMappingURL=TaskStatusValueSet.d.ts.map