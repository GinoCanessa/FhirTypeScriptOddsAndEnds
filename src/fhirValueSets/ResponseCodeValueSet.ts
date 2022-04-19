// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The kind of response to a message.
 */
export const ResponseCodeValueSet = {
  /**
   * The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.
   */
  response_code_FatalError: new Coding({
    code: "fatal-error",
    display: "Fatal Error",
    system: "http://hl7.org/fhir/response-code"
  }),
  /**
   * The message was accepted and processed without error.
   */
  response_code_OK: new Coding({
    code: "ok",
    display: "OK",
    system: "http://hl7.org/fhir/response-code"
  }),
  /**
   * Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
   */
  response_code_TransientError: new Coding({
    code: "transient-error",
    display: "Transient Error",
    system: "http://hl7.org/fhir/response-code"
  }),
};
