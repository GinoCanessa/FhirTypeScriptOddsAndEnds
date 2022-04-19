import * as fhir from '../fhir';
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export declare type IExpression = fhir.IFhirElement & {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string | undefined;
    _expression?: fhir.IFhirElement | undefined;
    /**
     * The media type of the language for the expression.
     */
    language: string | null;
    _language?: fhir.IFhirElement | undefined;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * If both a reference and an expression is found, the reference SHALL point to the same expression.
     */
    reference?: string | undefined;
    _reference?: fhir.IFhirElement | undefined;
};
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export declare class Expression extends fhir.FhirElement implements fhir.IExpression {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string | undefined;
    _expression?: fhir.FhirElement | undefined;
    /**
     * The media type of the language for the expression.
     */
    language: string | null;
    _language?: fhir.FhirElement | undefined;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * If both a reference and an expression is found, the reference SHALL point to the same expression.
     */
    reference?: string | undefined;
    _reference?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Expression - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExpression>);
    /**
     * Check if the current Expression contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Expression from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExpression): Expression;
}
/**
 * Code Values for the Expression.language field
 */
export declare enum ExpressionLanguageEnum {
    TEXT_CQL = "text/cql",
    TEXT_FHIRPATH = "text/fhirpath",
    APPLICATION_X_FHIR_QUERY = "application/x-fhir-query"
}
//# sourceMappingURL=Expression.d.ts.map