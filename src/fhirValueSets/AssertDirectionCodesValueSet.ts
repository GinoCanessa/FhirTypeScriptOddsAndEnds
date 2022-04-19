// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The type of direction to use for assertion.
 */
export const AssertDirectionCodesValueSet = {
  /**
   * The assertion is evaluated on the request.
   */
  assert_direction_codes_Request: Coding.FromStrict({
    code: "request",
    display: "request",
    system: "http://hl7.org/fhir/assert-direction-codes"
  }),
  /**
   * The assertion is evaluated on the response. This is the default value.
   */
  assert_direction_codes_Response: Coding.FromStrict({
    code: "response",
    display: "response",
    system: "http://hl7.org/fhir/assert-direction-codes"
  }),
};
