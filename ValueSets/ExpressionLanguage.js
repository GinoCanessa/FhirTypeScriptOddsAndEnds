/**
 * The media type of the expression language.
 */
export var ExpressionLanguage = {
    /**
     * FHIR's RESTful query syntax - typically independent of base URL.
     */
    expression_language_FHIRQuery: {
        code: "application/x-fhir-query",
        display: "FHIR Query",
        system: "http://hl7.org/fhir/expression-language"
    },
    /**
     * Clinical Quality Language.
     */
    expression_language_CQL: {
        code: "text/cql",
        display: "CQL",
        system: "http://hl7.org/fhir/expression-language"
    },
    /**
     * FHIRPath.
     */
    expression_language_FHIRPath: {
        code: "text/fhirpath",
        display: "FHIRPath",
        system: "http://hl7.org/fhir/expression-language"
    }
};
