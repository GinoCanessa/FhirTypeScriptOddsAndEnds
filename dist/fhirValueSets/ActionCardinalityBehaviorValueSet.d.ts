import { Coding } from '../fhir.js';
/**
 * Defines behavior for an action or a group for how many times that item may be repeated.
 */
export declare const ActionCardinalityBehaviorValueSet: {
    /**
     * multiple: The action may be selected multiple times.
     */
    readonly Multiple: Coding;
    /**
     * single: The action may only be selected one time.
     */
    readonly Single: Coding;
};
/**
 * Defines behavior for an action or a group for how many times that item may be repeated.
 */
export declare type ActionCardinalityBehaviorValueSetType = typeof ActionCardinalityBehaviorValueSet;
/**
 * Defines behavior for an action or a group for how many times that item may be repeated.
 */
export declare enum ActionCardinalityBehaviorValueSetEnum {
    /**
     * multiple: The action may be selected multiple times.
     */
    Multiple = "multiple",
    /**
     * single: The action may only be selected one time.
     */
    Single = "single"
}
//# sourceMappingURL=ActionCardinalityBehaviorValueSet.d.ts.map