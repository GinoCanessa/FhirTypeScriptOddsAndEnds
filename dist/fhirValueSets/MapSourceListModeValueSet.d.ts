import { Coding } from '../fhir.js';
/**
 * If field is a list, how to manage the source.
 */
export declare const MapSourceListModeValueSet: {
    /**
     * first: Only process this rule for the first in the list.
     */
    readonly First: Coding;
    /**
     * last: Only process this rule for the last in the list.
     */
    readonly Last: Coding;
    /**
     * not_first: Process this rule for all but the first.
     */
    readonly AllButTheFirst: Coding;
    /**
     * not_last: Process this rule for all but the last.
     */
    readonly AllButTheLast: Coding;
    /**
     * only_one: Only process this rule is there is only item.
     */
    readonly EnforceOnlyOne: Coding;
};
/**
 * If field is a list, how to manage the source.
 */
export declare type MapSourceListModeValueSetType = typeof MapSourceListModeValueSet;
/**
 * If field is a list, how to manage the source.
 */
export declare enum MapSourceListModeValueSetEnum {
    /**
     * first: Only process this rule for the first in the list.
     */
    First = "first",
    /**
     * last: Only process this rule for the last in the list.
     */
    Last = "last",
    /**
     * not_first: Process this rule for all but the first.
     */
    AllButTheFirst = "not_first",
    /**
     * not_last: Process this rule for all but the last.
     */
    AllButTheLast = "not_last",
    /**
     * only_one: Only process this rule is there is only item.
     */
    EnforceOnlyOne = "only_one"
}
//# sourceMappingURL=MapSourceListModeValueSet.d.ts.map