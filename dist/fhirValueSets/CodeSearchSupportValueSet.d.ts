import { Coding } from '../fhir';
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export declare const CodeSearchSupportValueSet: {
    /**
     * The search for code on ValueSet only includes all codes based on the expansion of the value set.
     */
    code_search_support_ImplicitCodes: Coding;
    /**
     * The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.
     */
    code_search_support_ExplicitCodes: Coding;
};
//# sourceMappingURL=CodeSearchSupportValueSet.d.ts.map