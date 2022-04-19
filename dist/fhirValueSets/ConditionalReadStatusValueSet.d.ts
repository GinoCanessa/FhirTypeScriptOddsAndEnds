import { Coding } from '../fhir';
/**
 * A code that indicates how the server supports conditional read.
 */
export declare const ConditionalReadStatusValueSet: {
    /**
     * Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
     */
    conditional_read_status_FullSupport: Coding;
    /**
     * Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
     */
    conditional_read_status_IfModifiedSince: Coding;
    /**
     * Conditional reads are supported, but only with the If-None-Match HTTP Header.
     */
    conditional_read_status_IfNoneMatch: Coding;
    /**
     * No support for conditional reads.
     */
    conditional_read_status_NotSupported: Coding;
};
//# sourceMappingURL=ConditionalReadStatusValueSet.d.ts.map