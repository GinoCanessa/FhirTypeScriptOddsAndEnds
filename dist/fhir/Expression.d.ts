import * as fhir from '../fhir.js';
import { ExpressionLanguageValueSetType } from '../fhirValueSets/ExpressionLanguageValueSet.js';
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export declare type IExpression = fhir.IFhirElement & {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * The media type of the language for the expression.
     */
    language: string | null;
    /**
     * Extended properties for primitive element: Expression.language
     */
    _language?: fhir.IFhirElement | undefined;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.expression
     */
    _expression?: fhir.IFhirElement | undefined;
    /**
     * If both a reference and an expression is found, the reference SHALL point to the same expression.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.reference
     */
    _reference?: fhir.IFhirElement | undefined;
};
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export declare class Expression extends fhir.FhirElement implements IExpression {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * The media type of the language for the expression.
     */
    language: string | null;
    /**
     * Extended properties for primitive element: Expression.language
     */
    _language?: fhir.FhirElement | undefined;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.expression
     */
    _expression?: fhir.FhirElement | undefined;
    /**
     * If both a reference and an expression is found, the reference SHALL point to the same expression.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Expression.reference
     */
    _reference?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Expression - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExpression>);
    /**
     * Extensible-bound Value Set for language
     */
    languageExtensibleValueSet(): ExpressionLanguageValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Expression.d.ts.map