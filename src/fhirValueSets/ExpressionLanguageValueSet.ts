// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The media type of the expression language.
 */
export const ExpressionLanguageValueSet = {
  /**
   * FHIR's RESTful query syntax - typically independent of base URL.
   */
  expression_language_FHIRQuery: Coding.FromStrict({
    code: "application/x-fhir-query",
    display: "FHIR Query",
    system: "http://hl7.org/fhir/expression-language"
  }),
  /**
   * Clinical Quality Language.
   */
  expression_language_CQL: Coding.FromStrict({
    code: "text/cql",
    display: "CQL",
    system: "http://hl7.org/fhir/expression-language"
  }),
  /**
   * FHIRPath.
   */
  expression_language_FHIRPath: Coding.FromStrict({
    code: "text/fhirpath",
    display: "FHIRPath",
    system: "http://hl7.org/fhir/expression-language"
  }),
};