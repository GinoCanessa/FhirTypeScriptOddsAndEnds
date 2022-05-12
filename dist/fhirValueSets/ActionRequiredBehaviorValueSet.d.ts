import { Coding } from '../fhir.js';
/**
 * Defines expectations around whether an action or action group is required.
 */
export declare const ActionRequiredBehaviorValueSet: {
    /**
     * could: An action with this behavior may be included in the set of actions processed by the end user.
     */
    readonly Could: Coding;
    /**
     * must: An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.
     */
    readonly Must: Coding;
    /**
     * must-unless-documented: An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.
     */
    readonly MustUnlessDocumented: Coding;
};
/**
 * Defines expectations around whether an action or action group is required.
 */
export declare type ActionRequiredBehaviorValueSetType = typeof ActionRequiredBehaviorValueSet;
/**
 * Defines expectations around whether an action or action group is required.
 */
//# sourceMappingURL=ActionRequiredBehaviorValueSet.d.ts.map