// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Whether an operation is a normal operation or a query.
 */
export const OperationKindValueSet = {
  /**
   * This operation is invoked as an operation.
   */
  operation_kind_Operation: Coding.FromStrict({
    code: "operation",
    display: "Operation",
    system: "http://hl7.org/fhir/operation-kind"
  }),
  /**
   * This operation is a named query, invoked using the search mechanism.
   */
  operation_kind_Query: Coding.FromStrict({
    code: "query",
    display: "Query",
    system: "http://hl7.org/fhir/operation-kind"
  }),
};
