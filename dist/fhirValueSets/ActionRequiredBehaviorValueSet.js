// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-required-behavior|4.0.1
import { Coding } from '../fhir.js';
/**
 * Defines expectations around whether an action or action group is required.
 */
export const ActionRequiredBehaviorValueSet = {
    /**
     * could: An action with this behavior may be included in the set of actions processed by the end user.
     */
    Could: new Coding({
        display: "Could",
        code: "could",
        system: "http://hl7.org/fhir/action-required-behavior",
    }),
    /**
     * must: An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.
     */
    Must: new Coding({
        display: "Must",
        code: "must",
        system: "http://hl7.org/fhir/action-required-behavior",
    }),
    /**
     * must-unless-documented: An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.
     */
    MustUnlessDocumented: new Coding({
        display: "Must Unless Documented",
        code: "must-unless-documented",
        system: "http://hl7.org/fhir/action-required-behavior",
    }),
};
/**
 * Defines expectations around whether an action or action group is required.
 */
export var ActionRequiredBehaviorValueSetEnum;
(function (ActionRequiredBehaviorValueSetEnum) {
    /**
     * could: An action with this behavior may be included in the set of actions processed by the end user.
     */
    ActionRequiredBehaviorValueSetEnum["Could"] = "could";
    /**
     * must: An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.
     */
    ActionRequiredBehaviorValueSetEnum["Must"] = "must";
    /**
     * must-unless-documented: An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.
     */
    ActionRequiredBehaviorValueSetEnum["MustUnlessDocumented"] = "must-unless-documented";
})(ActionRequiredBehaviorValueSetEnum || (ActionRequiredBehaviorValueSetEnum = {}));
//# sourceMappingURL=ActionRequiredBehaviorValueSet.js.map