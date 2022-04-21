import { Coding } from '../fhir.js';
/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 */
export declare const HttpVerbValueSet: {
    /**
     * DELETE: HTTP DELETE Command.
     */
    readonly DELETE: Coding;
    /**
     * GET: HTTP GET Command.
     */
    readonly GET: Coding;
    /**
     * HEAD: HTTP HEAD Command.
     */
    readonly HEAD: Coding;
    /**
     * PATCH: HTTP PATCH Command.
     */
    readonly PATCH: Coding;
    /**
     * POST: HTTP POST Command.
     */
    readonly POST: Coding;
    /**
     * PUT: HTTP PUT Command.
     */
    readonly PUT: Coding;
};
/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 */
export declare type HttpVerbValueSetType = typeof HttpVerbValueSet;
/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 */
export declare enum HttpVerbValueSetEnum {
    /**
     * DELETE: HTTP DELETE Command.
     */
    DELETE = "DELETE",
    /**
     * GET: HTTP GET Command.
     */
    GET = "GET",
    /**
     * HEAD: HTTP HEAD Command.
     */
    HEAD = "HEAD",
    /**
     * PATCH: HTTP PATCH Command.
     */
    PATCH = "PATCH",
    /**
     * POST: HTTP POST Command.
     */
    POST = "POST",
    /**
     * PUT: HTTP PUT Command.
     */
    PUT = "PUT"
}
//# sourceMappingURL=HttpVerbValueSet.d.ts.map