import { Coding } from '../fhir.js';
/**
 * The type of relations between entries.
 */
export declare const RelationTypeValueSet: {
    /**
     * is-replaced-by: the related entry represents an item that replaces the current retired item.
     */
    readonly ReplacedBy: Coding;
    /**
     * triggers: the related entry represents an activity that may be triggered by the current item.
     */
    readonly Triggers: Coding;
};
/**
 * The type of relations between entries.
 */
export declare type RelationTypeValueSetType = typeof RelationTypeValueSet;
/**
 * The type of relations between entries.
 */
//# sourceMappingURL=RelationTypeValueSet.d.ts.map