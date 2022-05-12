import { Coding } from '../fhir.js';
/**
 * Defines selection frequency behavior for an action or group.
 */
export declare const ActionPrecheckBehaviorValueSet: {
    /**
     * no: An action with this behavior is one of the less frequent actions included by the end user, for the particular context in which the action occurs. The system displaying the actions to the end user would typically not "pre-check" such an action.
     */
    readonly No: Coding;
    /**
     * yes: An action with this behavior is one of the most frequent action that is, or should be, included by an end user, for the particular context in which the action occurs. The system displaying the action to the end user should consider "pre-checking" such an action as a convenience for the user.
     */
    readonly Yes: Coding;
};
/**
 * Defines selection frequency behavior for an action or group.
 */
export declare type ActionPrecheckBehaviorValueSetType = typeof ActionPrecheckBehaviorValueSet;
/**
 * Defines selection frequency behavior for an action or group.
 */
//# sourceMappingURL=ActionPrecheckBehaviorValueSet.d.ts.map