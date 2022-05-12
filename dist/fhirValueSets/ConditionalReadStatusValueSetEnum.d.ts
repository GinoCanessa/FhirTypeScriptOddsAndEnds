/**
 * A code that indicates how the server supports conditional read.
 */
export declare enum ConditionalReadStatusValueSetEnum {
    /**
     * full-support: Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
     */
    FullSupport = "full-support",
    /**
     * modified-since: Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
     */
    IfModifiedSince = "modified-since",
    /**
     * not-match: Conditional reads are supported, but only with the If-None-Match HTTP Header.
     */
    IfNoneMatch = "not-match",
    /**
     * not-supported: No support for conditional reads.
     */
    NotSupported = "not-supported"
}
//# sourceMappingURL=ConditionalReadStatusValueSetEnum.d.ts.map