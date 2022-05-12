import * as fhir from '../fhir.js';
import { ExpressionLanguageValueSetType } from '../fhirValueSets/ExpressionLanguageValueSet.js';
/**
 * Valid arguments for the Expression type.
 */
export interface ExpressionArgs extends fhir.FhirElementArgs {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: fhir.FhirId | string | undefined;
    /**
     * The media type of the language for the expression.
     */
    language: fhir.FhirCode | string | undefined;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * If both a reference and an expression is found, the reference SHALL point to the same expression.
     */
    reference?: fhir.FhirUri | string | undefined;
}
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export declare class Expression extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
     */
    name?: fhir.FhirId | undefined;
    /**
     * The media type of the language for the expression.
     */
    language: fhir.FhirCode | null;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * If both a reference and an expression is found, the reference SHALL point to the same expression.
     */
    reference?: fhir.FhirUri | undefined;
    /**
     * Default constructor for Expression - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpressionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for language
     */
    static languageExtensibleValueSet(): ExpressionLanguageValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Expression.d.ts.map