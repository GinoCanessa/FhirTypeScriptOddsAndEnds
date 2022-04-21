// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-cardinality-behavior|4.0.1
import { Coding } from '../fhir.js';
/**
 * Defines behavior for an action or a group for how many times that item may be repeated.
 */
export const ActionCardinalityBehaviorValueSet = {
    /**
     * multiple: The action may be selected multiple times.
     */
    Multiple: new Coding({
        display: "Multiple",
        code: "multiple",
        system: "http://hl7.org/fhir/action-cardinality-behavior",
    }),
    /**
     * single: The action may only be selected one time.
     */
    Single: new Coding({
        display: "Single",
        code: "single",
        system: "http://hl7.org/fhir/action-cardinality-behavior",
    }),
};
/**
 * Defines behavior for an action or a group for how many times that item may be repeated.
 */
export var ActionCardinalityBehaviorValueSetEnum;
(function (ActionCardinalityBehaviorValueSetEnum) {
    /**
     * multiple: The action may be selected multiple times.
     */
    ActionCardinalityBehaviorValueSetEnum["Multiple"] = "multiple";
    /**
     * single: The action may only be selected one time.
     */
    ActionCardinalityBehaviorValueSetEnum["Single"] = "single";
})(ActionCardinalityBehaviorValueSetEnum || (ActionCardinalityBehaviorValueSetEnum = {}));
//# sourceMappingURL=ActionCardinalityBehaviorValueSet.js.map