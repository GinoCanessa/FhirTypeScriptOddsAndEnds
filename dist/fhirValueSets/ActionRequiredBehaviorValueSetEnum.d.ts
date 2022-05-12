/**
 * Defines expectations around whether an action or action group is required.
 */
export declare enum ActionRequiredBehaviorValueSetEnum {
    /**
     * could: An action with this behavior may be included in the set of actions processed by the end user.
     */
    Could = "could",
    /**
     * must: An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.
     */
    Must = "must",
    /**
     * must-unless-documented: An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.
     */
    MustUnlessDocumented = "must-unless-documented"
}
//# sourceMappingURL=ActionRequiredBehaviorValueSetEnum.d.ts.map