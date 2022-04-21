import { Coding } from '../fhir.js';
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare const CodeSearchSupportValueSet: {
    /**
     * all: The search for code on ValueSet only includes all codes based on the expansion of the value set.
     */
    readonly ImplicitCodes: Coding;
    /**
     * explicit: The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.
     */
    readonly ExplicitCodes: Coding;
};
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare type CodeSearchSupportValueSetType = typeof CodeSearchSupportValueSet;
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare enum CodeSearchSupportValueSetEnum {
    /**
     * all: The search for code on ValueSet only includes all codes based on the expansion of the value set.
     */
    ImplicitCodes = "all",
    /**
     * explicit: The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.
     */
    ExplicitCodes = "explicit"
}
//# sourceMappingURL=CodeSearchSupportValueSet.d.ts.map