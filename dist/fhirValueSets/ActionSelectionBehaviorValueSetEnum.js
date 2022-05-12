// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/action-selection-behavior|4.0.1
/**
 * Defines selection behavior of a group.
 */
export var ActionSelectionBehaviorValueSetEnum;
(function (ActionSelectionBehaviorValueSetEnum) {
    /**
     * all: All the actions in the group must be selected as a single unit.
     */
    ActionSelectionBehaviorValueSetEnum["All"] = "all";
    /**
     * all-or-none: All the actions in the group are meant to be chosen as a single unit: either all must be selected by the end user, or none may be selected.
     */
    ActionSelectionBehaviorValueSetEnum["AllOrNone"] = "all-or-none";
    /**
     * any: Any number of the actions in the group may be chosen, from zero to all.
     */
    ActionSelectionBehaviorValueSetEnum["Any"] = "any";
    /**
     * at-most-one: The end user may choose zero or at most one of the actions in the group.
     */
    ActionSelectionBehaviorValueSetEnum["AtMostOne"] = "at-most-one";
    /**
     * exactly-one: The end user must choose one and only one of the selectable actions in the group. The user SHALL NOT choose none of the actions in the group.
     */
    ActionSelectionBehaviorValueSetEnum["ExactlyOne"] = "exactly-one";
    /**
     * one-or-more: The end user must choose a minimum of one, and as many additional as desired.
     */
    ActionSelectionBehaviorValueSetEnum["OneOrMore"] = "one-or-more";
})(ActionSelectionBehaviorValueSetEnum || (ActionSelectionBehaviorValueSetEnum = {}));
//# sourceMappingURL=ActionSelectionBehaviorValueSetEnum.js.map