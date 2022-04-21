import { Coding } from '../fhir.js';
/**
 * The media type of the expression language.
 */
export declare const ExpressionLanguageValueSet: {
    /**
     * application/x-fhir-query: FHIR's RESTful query syntax - typically independent of base URL.
     */
    readonly FHIRQuery: Coding;
    /**
     * text/cql: Clinical Quality Language.
     */
    readonly CQL: Coding;
    /**
     * text/fhirpath: FHIRPath.
     */
    readonly FHIRPath: Coding;
};
/**
 * The media type of the expression language.
 */
export declare type ExpressionLanguageValueSetType = typeof ExpressionLanguageValueSet;
/**
 * The media type of the expression language.
 */
export declare enum ExpressionLanguageValueSetEnum {
    /**
     * application/x-fhir-query: FHIR's RESTful query syntax - typically independent of base URL.
     */
    FHIRQuery = "application/x-fhir-query",
    /**
     * text/cql: Clinical Quality Language.
     */
    CQL = "text/cql",
    /**
     * text/fhirpath: FHIRPath.
     */
    FHIRPath = "text/fhirpath"
}
//# sourceMappingURL=ExpressionLanguageValueSet.d.ts.map