import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export declare class Expression extends fhirModels.Element implements fhirInterfaces.IExpression {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string | undefined;
    _expression?: fhirModels.Element | undefined;
    /**
     * The media type of the language for the expression.
     */
    language?: string | undefined;
    _language?: fhirModels.Element | undefined;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * If both a reference and an expression is found, the reference SHALL point to the same expression.
     */
    reference?: string | undefined;
    _reference?: fhirModels.Element | undefined;
    /**
     * Default constructor for Expression from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExpression>);
    /**
     * Factory function to create a Expression from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExpression): Expression;
    /**
     * Check if the current Expression contains all required elements.
     */
    checkRequiredElements(): string[];
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