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
//# sourceMappingURL=ResourceSlicingRulesValueSetEnum.d.ts.map