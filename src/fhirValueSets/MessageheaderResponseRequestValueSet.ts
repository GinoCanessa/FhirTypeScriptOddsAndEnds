// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export const MessageheaderResponseRequestValueSet = {
  /**
   * initiator expects a response for this message.
   */
  messageheader_response_request_Always: Coding.FromStrict({
    code: "always",
    display: "Always",
    system: "http://hl7.org/fhir/messageheader-response-request"
  }),
  /**
   * initiator does not expect a response.
   */
  messageheader_response_request_Never: Coding.FromStrict({
    code: "never",
    display: "Never",
    system: "http://hl7.org/fhir/messageheader-response-request"
  }),
  /**
   * initiator expects a response only if in error.
   */
  messageheader_response_request_ErrorRejectConditionsOnly: Coding.FromStrict({
    code: "on-error",
    display: "Error/reject conditions only",
    system: "http://hl7.org/fhir/messageheader-response-request"
  }),
  /**
   * initiator expects a response only if successful.
   */
  messageheader_response_request_SuccessfulCompletionOnly: Coding.FromStrict({
    code: "on-success",
    display: "Successful completion only",
    system: "http://hl7.org/fhir/messageheader-response-request"
  }),
};
