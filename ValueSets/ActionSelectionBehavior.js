/**
 * Defines selection behavior of a group.
 */
export var ActionSelectionBehavior = {
    /**
     * All the actions in the group must be selected as a single unit.
     */
    action_selection_behavior_All: {
        code: "all",
        display: "All",
        system: "http://hl7.org/fhir/action-selection-behavior"
    },
    /**
     * All the actions in the group are meant to be chosen as a single unit: either all must be selected by the end user, or none may be selected.
     */
    action_selection_behavior_AllOrNone: {
        code: "all-or-none",
        display: "All Or None",
        system: "http://hl7.org/fhir/action-selection-behavior"
    },
    /**
     * Any number of the actions in the group may be chosen, from zero to all.
     */
    action_selection_behavior_Any: {
        code: "any",
        display: "Any",
        system: "http://hl7.org/fhir/action-selection-behavior"
    },
    /**
     * The end user may choose zero or at most one of the actions in the group.
     */
    action_selection_behavior_AtMostOne: {
        code: "at-most-one",
        display: "At Most One",
        system: "http://hl7.org/fhir/action-selection-behavior"
    },
    /**
     * The end user must choose one and only one of the selectable actions in the group. The user SHALL NOT choose none of the actions in the group.
     */
    action_selection_behavior_ExactlyOne: {
        code: "exactly-one",
        display: "Exactly One",
        system: "http://hl7.org/fhir/action-selection-behavior"
    },
    /**
     * The end user must choose a minimum of one, and as many additional as desired.
     */
    action_selection_behavior_OneOrMore: {
        code: "one-or-more",
        display: "One Or More",
        system: "http://hl7.org/fhir/action-selection-behavior"
    }
};