import { Coding } from '../fhir.js';
/**
 * Defines the types of relationships between actions.
 */
export declare const ActionRelationshipTypeValueSet: {
    /**
     * after: The action must be performed after the related action.
     */
    readonly After: Coding;
    /**
     * after-end: The action must be performed after the end of the related action.
     */
    readonly AfterEnd: Coding;
    /**
     * after-start: The action must be performed after the start of the related action.
     */
    readonly AfterStart: Coding;
    /**
     * before: The action must be performed before the related action.
     */
    readonly Before: Coding;
    /**
     * before-end: The action must be performed before the end of the related action.
     */
    readonly BeforeEnd: Coding;
    /**
     * before-start: The action must be performed before the start of the related action.
     */
    readonly BeforeStart: Coding;
    /**
     * concurrent: The action must be performed concurrent with the related action.
     */
    readonly Concurrent: Coding;
    /**
     * concurrent-with-end: The action must be performed concurrent with the end of the related action.
     */
    readonly ConcurrentWithEnd: Coding;
    /**
     * concurrent-with-start: The action must be performed concurrent with the start of the related action.
     */
    readonly ConcurrentWithStart: Coding;
};
/**
 * Defines the types of relationships between actions.
 */
export declare type ActionRelationshipTypeValueSetType = typeof ActionRelationshipTypeValueSet;
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
//# sourceMappingURL=ActionRelationshipTypeValueSet.d.ts.map