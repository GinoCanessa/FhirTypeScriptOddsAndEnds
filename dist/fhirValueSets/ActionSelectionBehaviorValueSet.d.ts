import { Coding } from '../fhir';
/**
 * Defines selection behavior of a group.
 */
export declare const ActionSelectionBehaviorValueSet: {
    /**
     * All the actions in the group must be selected as a single unit.
     */
    action_selection_behavior_All: Coding;
    /**
     * All the actions in the group are meant to be chosen as a single unit: either all must be selected by the end user, or none may be selected.
     */
    action_selection_behavior_AllOrNone: Coding;
    /**
     * Any number of the actions in the group may be chosen, from zero to all.
     */
    action_selection_behavior_Any: Coding;
    /**
     * The end user may choose zero or at most one of the actions in the group.
     */
    action_selection_behavior_AtMostOne: Coding;
    /**
     * The end user must choose one and only one of the selectable actions in the group. The user SHALL NOT choose none of the actions in the group.
     */
    action_selection_behavior_ExactlyOne: Coding;
    /**
     * The end user must choose a minimum of one, and as many additional as desired.
     */
    action_selection_behavior_OneOrMore: Coding;
};
//# sourceMappingURL=ActionSelectionBehaviorValueSet.d.ts.map