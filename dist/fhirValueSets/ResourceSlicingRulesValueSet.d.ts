import { Coding } from '../fhir.js';
/**
 * How slices are interpreted when evaluating an instance.
 */
export declare const ResourceSlicingRulesValueSet: {
    /**
     * closed: No additional content is allowed other than that described by the slices in this profile.
     */
    readonly Closed: Coding;
    /**
     * open: Additional content is allowed anywhere in the list.
     */
    readonly Open: Coding;
    /**
     * openAtEnd: Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.
     */
    readonly OpenAtEnd: Coding;
};
/**
 * How slices are interpreted when evaluating an instance.
 */
export declare type ResourceSlicingRulesValueSetType = typeof ResourceSlicingRulesValueSet;
/**
 * How slices are interpreted when evaluating an instance.
 */
export declare enum ResourceSlicingRulesValueSetEnum {
    /**
     * closed: No additional content is allowed other than that described by the slices in this profile.
     */
    Closed = "closed",
    /**
     * open: Additional content is allowed anywhere in the list.
     */
    Open = "open",
    /**
     * openAtEnd: Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.
     */
    OpenAtEnd = "openAtEnd"
}
//# sourceMappingURL=ResourceSlicingRulesValueSet.d.ts.map