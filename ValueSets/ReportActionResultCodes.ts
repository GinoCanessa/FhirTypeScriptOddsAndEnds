// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * The results of executing an action.
 */
export const ReportActionResultCodes = {
  /**
   * The action encountered a fatal error and the engine was unable to process.
   */
  report_action_result_codes_Error: {
    code: "error",
    display: "Error",
    system: "http://hl7.org/fhir/report-action-result-codes"
  } as Coding,
  /**
   * The action failed.
   */
  report_action_result_codes_Fail: {
    code: "fail",
    display: "Fail",
    system: "http://hl7.org/fhir/report-action-result-codes"
  } as Coding,
  /**
   * The action was successful.
   */
  report_action_result_codes_Pass: {
    code: "pass",
    display: "Pass",
    system: "http://hl7.org/fhir/report-action-result-codes"
  } as Coding,
  /**
   * The action was skipped.
   */
  report_action_result_codes_Skip: {
    code: "skip",
    display: "Skip",
    system: "http://hl7.org/fhir/report-action-result-codes"
  } as Coding,
  /**
   * The action passed but with warnings.
   */
  report_action_result_codes_Warning: {
    code: "warning",
    display: "Warning",
    system: "http://hl7.org/fhir/report-action-result-codes"
  } as Coding,
};
