import { Coding } from '../fhir.js';
/**
 * The current status of the task.
 */
export declare const TaskStatusValueSet: {
    /**
     * accepted: The potential performer has agreed to execute the task but has not yet started work.
     */
    readonly Accepted: Coding;
    /**
     * cancelled: The task was not completed.
     */
    readonly Cancelled: Coding;
    /**
     * completed: The task has been completed.
     */
    readonly Completed: Coding;
    /**
     * draft: The task is not yet ready to be acted upon.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: The task should never have existed and is retained only because of the possibility it may have used.
     */
    readonly EnteredInError: Coding;
    /**
     * failed: The task was attempted but could not be completed due to some error.
     */
    readonly Failed: Coding;
    /**
     * in-progress: The task has been started but is not yet complete.
     */
    readonly InProgress: Coding;
    /**
     * on-hold: The task has been started but work has been paused.
     */
    readonly OnHold: Coding;
    /**
     * ready: The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.
     */
    readonly Ready: Coding;
    /**
     * received: A potential performer has claimed ownership of the task and is evaluating whether to perform it.
     */
    readonly Received: Coding;
    /**
     * rejected: The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.
     */
    readonly Rejected: Coding;
    /**
     * requested: The task is ready to be acted upon and action is sought.
     */
    readonly Requested: Coding;
};
/**
 * The current status of the task.
 */
export declare type TaskStatusValueSetType = typeof TaskStatusValueSet;
/**
 * The current status of the task.
 */
export declare enum TaskStatusValueSetEnum {
    /**
     * accepted: The potential performer has agreed to execute the task but has not yet started work.
     */
    Accepted = "accepted",
    /**
     * cancelled: The task was not completed.
     */
    Cancelled = "cancelled",
    /**
     * completed: The task has been completed.
     */
    Completed = "completed",
    /**
     * draft: The task is not yet ready to be acted upon.
     */
    Draft = "draft",
    /**
     * entered-in-error: The task should never have existed and is retained only because of the possibility it may have used.
     */
    EnteredInError = "entered-in-error",
    /**
     * failed: The task was attempted but could not be completed due to some error.
     */
    Failed = "failed",
    /**
     * in-progress: The task has been started but is not yet complete.
     */
    InProgress = "in-progress",
    /**
     * on-hold: The task has been started but work has been paused.
     */
    OnHold = "on-hold",
    /**
     * ready: The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.
     */
    Ready = "ready",
    /**
     * received: A potential performer has claimed ownership of the task and is evaluating whether to perform it.
     */
    Received = "received",
    /**
     * rejected: The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.
     */
    Rejected = "rejected",
    /**
     * requested: The task is ready to be acted upon and action is sought.
     */
    Requested = "requested"
}
//# sourceMappingURL=TaskStatusValueSet.d.ts.map