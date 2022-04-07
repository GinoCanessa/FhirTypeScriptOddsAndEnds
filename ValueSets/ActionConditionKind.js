/**
 * Defines the kinds of conditions that can appear on actions.
 */
export var ActionConditionKind = {
    /**
     * The condition describes whether or not a given action is applicable.
     */
    action_condition_kind_Applicability: {
        code: "applicability",
        display: "Applicability",
        system: "http://hl7.org/fhir/action-condition-kind"
    },
    /**
     * The condition is a starting condition for the action.
     */
    action_condition_kind_Start: {
        code: "start",
        display: "Start",
        system: "http://hl7.org/fhir/action-condition-kind"
    },
    /**
     * The condition is a stop, or exit condition for the action.
     */
    action_condition_kind_Stop: {
        code: "stop",
        display: "Stop",
        system: "http://hl7.org/fhir/action-condition-kind"
    }
};
