/**
 * Defines selection frequency behavior for an action or group.
 */
export var ActionPrecheckBehavior = {
    /**
     * An action with this behavior is one of the less frequent actions included by the end user, for the particular context in which the action occurs. The system displaying the actions to the end user would typically not "pre-check" such an action.
     */
    action_precheck_behavior_No: {
        code: "no",
        display: "No",
        system: "http://hl7.org/fhir/action-precheck-behavior"
    },
    /**
     * An action with this behavior is one of the most frequent action that is, or should be, included by an end user, for the particular context in which the action occurs. The system displaying the action to the end user should consider "pre-checking" such an action as a convenience for the user.
     */
    action_precheck_behavior_Yes: {
        code: "yes",
        display: "Yes",
        system: "http://hl7.org/fhir/action-precheck-behavior"
    }
};
