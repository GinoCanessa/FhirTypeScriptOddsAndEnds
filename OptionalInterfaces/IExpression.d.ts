// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export interface IExpression extends fhirInterfaces.IElement {
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: string|undefined;
  _description?: fhirInterfaces.IElement|undefined;
  /**
   * An expression in the specified language that returns a value.
   */
  expression?: string|undefined;
  _expression?: fhirInterfaces.IElement|undefined;
  /**
   * The media type of the language for the expression.
   */
  language?: string|undefined;
  _language?: fhirInterfaces.IElement|undefined;
  /**
   * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
   */
  name?: string|undefined;
  _name?: fhirInterfaces.IElement|undefined;
  /**
   * If both a reference and an expression is found, the reference SHALL point to the same expression.
   */
  reference?: string|undefined;
  _reference?: fhirInterfaces.IElement|undefined;
}
/**
 * Code Values for the Expression.language field
 */
export enum ExpressionLanguageEnum {
  TEXT_CQL = "text/cql",
  TEXT_FHIRPATH = "text/fhirpath",
  APPLICATION_X_FHIR_QUERY = "application/x-fhir-query",
}