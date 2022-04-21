import { Coding } from '../fhir.js';
/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export declare const GoalStatusValueSet: {
    /**
     * accepted: A proposed goal was accepted or acknowledged.
     */
    readonly Accepted: Coding;
    /**
     * active: The goal is being sought actively.
     */
    readonly Active: Coding;
    /**
     * cancelled: The goal has been abandoned.
     */
    readonly Cancelled: Coding;
    /**
     * completed: The goal is no longer being sought.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: The goal was entered in error and voided.
     */
    readonly EnteredInError: Coding;
    /**
     * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    readonly OnHold: Coding;
    /**
     * planned: A goal is planned for this patient.
     */
    readonly Planned: Coding;
    /**
     * proposed: A goal is proposed for this patient.
     */
    readonly Proposed: Coding;
    /**
     * rejected: A proposed goal was rejected.
     */
    readonly Rejected: Coding;
};
/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export declare type GoalStatusValueSetType = typeof GoalStatusValueSet;
/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export declare enum GoalStatusValueSetEnum {
    /**
     * accepted: A proposed goal was accepted or acknowledged.
     */
    Accepted = "accepted",
    /**
     * active: The goal is being sought actively.
     */
    Active = "active",
    /**
     * cancelled: The goal has been abandoned.
     */
    Cancelled = "cancelled",
    /**
     * completed: The goal is no longer being sought.
     */
    Completed = "completed",
    /**
     * entered-in-error: The goal was entered in error and voided.
     */
    EnteredInError = "entered-in-error",
    /**
     * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    OnHold = "on-hold",
    /**
     * planned: A goal is planned for this patient.
     */
    Planned = "planned",
    /**
     * proposed: A goal is proposed for this patient.
     */
    Proposed = "proposed",
    /**
     * rejected: A proposed goal was rejected.
     */
    Rejected = "rejected"
}
//# sourceMappingURL=GoalStatusValueSet.d.ts.map