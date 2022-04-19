// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The current status of the test report.
 */
export const ReportStatusCodesValueSet = {
  /**
   * All test operations have completed.
   */
  report_status_codes_Completed: new Coding({
    code: "completed",
    display: "Completed",
    system: "http://hl7.org/fhir/report-status-codes"
  }),
  /**
   * This test report was entered or created in error.
   */
  report_status_codes_EnteredInError: new Coding({
    code: "entered-in-error",
    display: "Entered In Error",
    system: "http://hl7.org/fhir/report-status-codes"
  }),
  /**
   * A test operations is currently executing.
   */
  report_status_codes_InProgress: new Coding({
    code: "in-progress",
    display: "In Progress",
    system: "http://hl7.org/fhir/report-status-codes"
  }),
  /**
   * The test script execution was manually stopped.
   */
  report_status_codes_Stopped: new Coding({
    code: "stopped",
    display: "Stopped",
    system: "http://hl7.org/fhir/report-status-codes"
  }),
  /**
   * A test operation is waiting for an external client request.
   */
  report_status_codes_Waiting: new Coding({
    code: "waiting",
    display: "Waiting",
    system: "http://hl7.org/fhir/report-status-codes"
  }),
};
