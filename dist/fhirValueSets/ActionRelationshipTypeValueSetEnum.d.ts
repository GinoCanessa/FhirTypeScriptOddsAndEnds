/**
 * Defines the types of relationships between actions.
 */
export declare enum ActionRelationshipTypeValueSetEnum {
    /**
     * after: The action must be performed after the related action.
     */
    After = "after",
    /**
     * after-end: The action must be performed after the end of the related action.
     */
    AfterEnd = "after-end",
    /**
     * after-start: The action must be performed after the start of the related action.
     */
    AfterStart = "after-start",
    /**
     * before: The action must be performed before the related action.
     */
    Before = "before",
    /**
     * before-end: The action must be performed before the end of the related action.
     */
    BeforeEnd = "before-end",
    /**
     * before-start: The action must be performed before the start of the related action.
     */
    BeforeStart = "before-start",
    /**
     * concurrent: The action must be performed concurrent with the related action.
     */
    Concurrent = "concurrent",
    /**
     * concurrent-with-end: The action must be performed concurrent with the end of the related action.
     */
    ConcurrentWithEnd = "concurrent-with-end",
    /**
     * concurrent-with-start: The action must be performed concurrent with the start of the related action.
     */
    ConcurrentWithStart = "concurrent-with-start"
}
//# sourceMappingURL=ActionRelationshipTypeValueSetEnum.d.ts.map