"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionLanguage = void 0;
/**
 * The media type of the expression language.
 */
exports.ExpressionLanguage = {
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
    },
};
//# sourceMappingURL=ExpressionLanguage.js.map