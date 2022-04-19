import { Coding } from '../fhir';
/**
 * Defines expectations around whether an action or action group is required.
 */
export declare const ActionRequiredBehaviorValueSet: {
    /**
     * An action with this behavior may be included in the set of actions processed by the end user.
     */
    action_required_behavior_Could: Coding;
    /**
     * An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.
     */
    action_required_behavior_Must: Coding;
    /**
     * An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.
     */
    action_required_behavior_MustUnlessDocumented: Coding;
};
//# sourceMappingURL=ActionRequiredBehaviorValueSet.d.ts.map