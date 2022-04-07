/**
 * Defines expectations around whether an action or action group is required.
 */
export var ActionRequiredBehavior = {
    /**
     * An action with this behavior may be included in the set of actions processed by the end user.
     */
    action_required_behavior_Could: {
        code: "could",
        display: "Could",
        system: "http://hl7.org/fhir/action-required-behavior"
    },
    /**
     * An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.
     */
    action_required_behavior_Must: {
        code: "must",
        display: "Must",
        system: "http://hl7.org/fhir/action-required-behavior"
    },
    /**
     * An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.
     */
    action_required_behavior_MustUnlessDocumented: {
        code: "must-unless-documented",
        display: "Must Unless Documented",
        system: "http://hl7.org/fhir/action-required-behavior"
    }
};
