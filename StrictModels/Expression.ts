// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export class Expression extends fhirModels.Element implements fhirInterfaces.IExpression {
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * An expression in the specified language that returns a value.
   */
  expression?: string|undefined;
  _expression?: fhirModels.Element|undefined;
  /**
   * The media type of the language for the expression.
   */
  language: string;
  _language?: fhirModels.Element|undefined;
  /**
   * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * If both a reference and an expression is found, the reference SHALL point to the same expression.
   */
  reference?: string|undefined;
  _reference?: fhirModels.Element|undefined;
  /**
   * Default constructor for Expression from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IExpression) {
    super(source);
    if (source["description"] !== undefined) {
      this.description = source.description;
    }
    if (source["_description"] !== undefined) {
      this._description = new fhirModels.Element(source._description);
    }
    if (source["expression"] !== undefined) {
      this.expression = source.expression;
    }
    if (source["_expression"] !== undefined) {
      this._expression = new fhirModels.Element(source._expression);
    }
    {
      this.language = source.language;
    }
    if (source["_language"] !== undefined) {
      this._language = new fhirModels.Element(source._language);
    }
    if (source["name"] !== undefined) {
      this.name = source.name;
    }
    if (source["_name"] !== undefined) {
      this._name = new fhirModels.Element(source._name);
    }
    if (source["reference"] !== undefined) {
      this.reference = source.reference;
    }
    if (source["_reference"] !== undefined) {
      this._reference = new fhirModels.Element(source._reference);
    }
  }
}
/**
 * Code Values for the Expression.language field
 */
export enum ExpressionLanguageEnum {
  TEXT_CQL = "text/cql",
  TEXT_FHIRPATH = "text/fhirpath",
  APPLICATION_X_FHIR_QUERY = "application/x-fhir-query",
}