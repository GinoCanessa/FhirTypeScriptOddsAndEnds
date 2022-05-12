import { Coding } from '../fhir.js';
/**
 * The type of action to be performed.
 */
export declare const ActionTypeValueSet: {
    /**
     * create: The action is to create a new resource.
     */
    readonly Create: Coding;
    /**
     * fire-event: The action is to fire a specific event.
     */
    readonly FireEvent: Coding;
    /**
     * remove: The action is to remove an existing resource.
     */
    readonly Remove: Coding;
    /**
     * update: The action is to update an existing resource.
     */
    readonly Update: Coding;
};
/**
 * The type of action to be performed.
 */
export declare type ActionTypeValueSetType = typeof ActionTypeValueSet;
/**
 * The type of action to be performed.
 */
//# sourceMappingURL=ActionTypeValueSet.d.ts.map