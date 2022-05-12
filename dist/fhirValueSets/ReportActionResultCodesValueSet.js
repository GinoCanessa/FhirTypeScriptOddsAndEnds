// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-action-result-codes|4.0.1
import { Coding } from '../fhir.js';
/**
 * The results of executing an action.
 */
export const ReportActionResultCodesValueSet = {
    /**
     * error: The action encountered a fatal error and the engine was unable to process.
     */
    Error: new Coding({
        display: "Error",
        code: "error",
        system: "http://hl7.org/fhir/report-action-result-codes",
    }),
    /**
     * fail: The action failed.
     */
    Fail: new Coding({
        display: "Fail",
        code: "fail",
        system: "http://hl7.org/fhir/report-action-result-codes",
    }),
    /**
     * pass: The action was successful.
     */
    Pass: new Coding({
        display: "Pass",
        code: "pass",
        system: "http://hl7.org/fhir/report-action-result-codes",
    }),
    /**
     * skip: The action was skipped.
     */
    Skip: new Coding({
        display: "Skip",
        code: "skip",
        system: "http://hl7.org/fhir/report-action-result-codes",
    }),
    /**
     * warning: The action passed but with warnings.
     */
    Warning: new Coding({
        display: "Warning",
        code: "warning",
        system: "http://hl7.org/fhir/report-action-result-codes",
    }),
};
/**
 * The results of executing an action.
 */
//# sourceMappingURL=ReportActionResultCodesValueSet.js.map