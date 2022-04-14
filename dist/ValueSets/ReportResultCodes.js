"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportResultCodes = void 0;
/**
 * The reported execution result.
 */
exports.ReportResultCodes = {
    /**
     * One or more test operations failed one or more asserts.
     */
    report_result_codes_Fail: {
        code: "fail",
        display: "Fail",
        system: "http://hl7.org/fhir/report-result-codes"
    },
    /**
     * All test operations successfully passed all asserts.
     */
    report_result_codes_Pass: {
        code: "pass",
        display: "Pass",
        system: "http://hl7.org/fhir/report-result-codes"
    },
    /**
     * One or more test operations is pending execution completion.
     */
    report_result_codes_Pending: {
        code: "pending",
        display: "Pending",
        system: "http://hl7.org/fhir/report-result-codes"
    },
};
//# sourceMappingURL=ReportResultCodes.js.map