// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/action-grouping-behavior|4.0.1
/**
 * Defines organization behavior of a group.
 */
export var ActionGroupingBehaviorValueSetEnum;
(function (ActionGroupingBehaviorValueSetEnum) {
    /**
     * logical-group: A group with this behavior logically groups its sub-elements, and may be shown as a visual group to the end user, but it is not required to do so.
     */
    ActionGroupingBehaviorValueSetEnum["LogicalGroup"] = "logical-group";
    /**
     * sentence-group: A group of related alternative actions is a sentence group if the target referenced by the action is the same in all the actions and each action simply constitutes a different variation on how to specify the details for the target. For example, two actions that could be in a SentenceGroup are "aspirin, 500 mg, 2 times per day" and "aspirin, 300 mg, 3 times per day". In both cases, aspirin is the target referenced by the action, and the two actions represent different options for how aspirin might be ordered for the patient. Note that a SentenceGroup would almost always have an associated selection behavior of "AtMostOne", unless it's a required action, in which case, it would be "ExactlyOne".
     */
    ActionGroupingBehaviorValueSetEnum["SentenceGroup"] = "sentence-group";
    /**
     * visual-group: Any group marked with this behavior should be displayed as a visual group to the end user.
     */
    ActionGroupingBehaviorValueSetEnum["VisualGroup"] = "visual-group";
})(ActionGroupingBehaviorValueSetEnum || (ActionGroupingBehaviorValueSetEnum = {}));
//# sourceMappingURL=ActionGroupingBehaviorValueSetEnum.js.map