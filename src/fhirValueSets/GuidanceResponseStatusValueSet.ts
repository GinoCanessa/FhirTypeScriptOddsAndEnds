// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The status of a guidance response.
 */
export const GuidanceResponseStatusValueSet = {
  /**
   * The request was processed successfully, but more data may result in a more complete evaluation.
   */
  guidance_response_status_DataRequested: new Coding({
    code: "data-requested",
    display: "Data Requested",
    system: "http://hl7.org/fhir/guidance-response-status"
  }),
  /**
   * The request was processed, but more data is required to complete the evaluation.
   */
  guidance_response_status_DataRequired: new Coding({
    code: "data-required",
    display: "Data Required",
    system: "http://hl7.org/fhir/guidance-response-status"
  }),
  /**
   * The response was entered in error.
   */
  guidance_response_status_EnteredInError: new Coding({
    code: "entered-in-error",
    display: "Entered In Error",
    system: "http://hl7.org/fhir/guidance-response-status"
  }),
  /**
   * The request was not processed successfully.
   */
  guidance_response_status_Failure: new Coding({
    code: "failure",
    display: "Failure",
    system: "http://hl7.org/fhir/guidance-response-status"
  }),
  /**
   * The request is currently being processed.
   */
  guidance_response_status_InProgress: new Coding({
    code: "in-progress",
    display: "In Progress",
    system: "http://hl7.org/fhir/guidance-response-status"
  }),
  /**
   * The request was processed successfully.
   */
  guidance_response_status_Success: new Coding({
    code: "success",
    display: "Success",
    system: "http://hl7.org/fhir/guidance-response-status"
  }),
};
