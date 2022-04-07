/**
 * The current status of the test report.
 */
export var ReportStatusCodes = {
    /**
     * All test operations have completed.
     */
    report_status_codes_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/report-status-codes"
    },
    /**
     * This test report was entered or created in error.
     */
    report_status_codes_EnteredInError: {
        code: "entered-in-error",
        display: "Entered In Error",
        system: "http://hl7.org/fhir/report-status-codes"
    },
    /**
     * A test operations is currently executing.
     */
    report_status_codes_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/report-status-codes"
    },
    /**
     * The test script execution was manually stopped.
     */
    report_status_codes_Stopped: {
        code: "stopped",
        display: "Stopped",
        system: "http://hl7.org/fhir/report-status-codes"
    },
    /**
     * A test operation is waiting for an external client request.
     */
    report_status_codes_Waiting: {
        code: "waiting",
        display: "Waiting",
        system: "http://hl7.org/fhir/report-status-codes"
    }
};
