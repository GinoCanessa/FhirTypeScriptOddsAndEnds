/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export var CodeSearchSupport = {
    /**
     * The search for code on ValueSet only includes all codes based on the expansion of the value set.
     */
    code_search_support_ImplicitCodes: {
        code: "all",
        display: "Implicit Codes",
        system: "http://hl7.org/fhir/code-search-support"
    },
    /**
     * The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.
     */
    code_search_support_ExplicitCodes: {
        code: "explicit",
        display: "Explicit Codes",
        system: "http://hl7.org/fhir/code-search-support"
    }
};
