/**
 * The current status of the task.
 */
export var TaskStatus = {
    /**
     * The potential performer has agreed to execute the task but has not yet started work.
     */
    task_status_Accepted: {
        code: "accepted",
        display: "Accepted",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task was not completed.
     */
    task_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task has been completed.
     */
    task_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task is not yet ready to be acted upon.
     */
    task_status_Draft: {
        code: "draft",
        display: "Draft",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task should never have existed and is retained only because of the possibility it may have used.
     */
    task_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task was attempted but could not be completed due to some error.
     */
    task_status_Failed: {
        code: "failed",
        display: "Failed",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task has been started but is not yet complete.
     */
    task_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task has been started but work has been paused.
     */
    task_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.
     */
    task_status_Ready: {
        code: "ready",
        display: "Ready",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * A potential performer has claimed ownership of the task and is evaluating whether to perform it.
     */
    task_status_Received: {
        code: "received",
        display: "Received",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.
     */
    task_status_Rejected: {
        code: "rejected",
        display: "Rejected",
        system: "http://hl7.org/fhir/task-status"
    },
    /**
     * The task is ready to be acted upon and action is sought.
     */
    task_status_Requested: {
        code: "requested",
        display: "Requested",
        system: "http://hl7.org/fhir/task-status"
    }
};