import { Coding } from '../fhir.js';
/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare const ActionConditionKindValueSet: {
    /**
     * applicability: The condition describes whether or not a given action is applicable.
     */
    readonly Applicability: Coding;
    /**
     * start: The condition is a starting condition for the action.
     */
    readonly Start: Coding;
    /**
     * stop: The condition is a stop, or exit condition for the action.
     */
    readonly Stop: Coding;
};
/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare type ActionConditionKindValueSetType = typeof ActionConditionKindValueSet;
/**
 * Defines the kinds of conditions that can appear on actions.
 */
export declare enum ActionConditionKindValueSetEnum {
    /**
     * applicability: The condition describes whether or not a given action is applicable.
     */
    Applicability = "applicability",
    /**
     * start: The condition is a starting condition for the action.
     */
    Start = "start",
    /**
     * stop: The condition is a stop, or exit condition for the action.
     */
    Stop = "stop"
}
//# sourceMappingURL=ActionConditionKindValueSet.d.ts.map