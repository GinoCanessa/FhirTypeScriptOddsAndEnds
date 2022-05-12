// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conditional-read-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * A code that indicates how the server supports conditional read.
 */
export const ConditionalReadStatusValueSet = {
    /**
     * full-support: Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
     */
    FullSupport: new Coding({
        display: "Full Support",
        code: "full-support",
        system: "http://hl7.org/fhir/conditional-read-status",
    }),
    /**
     * modified-since: Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
     */
    IfModifiedSince: new Coding({
        display: "If-Modified-Since",
        code: "modified-since",
        system: "http://hl7.org/fhir/conditional-read-status",
    }),
    /**
     * not-match: Conditional reads are supported, but only with the If-None-Match HTTP Header.
     */
    IfNoneMatch: new Coding({
        display: "If-None-Match",
        code: "not-match",
        system: "http://hl7.org/fhir/conditional-read-status",
    }),
    /**
     * not-supported: No support for conditional reads.
     */
    NotSupported: new Coding({
        display: "Not Supported",
        code: "not-supported",
        system: "http://hl7.org/fhir/conditional-read-status",
    }),
};
/**
 * A code that indicates how the server supports conditional read.
 */
//# sourceMappingURL=ConditionalReadStatusValueSet.js.map