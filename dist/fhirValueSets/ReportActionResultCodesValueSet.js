// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The results of executing an action.
 */
export const ReportActionResultCodesValueSet = {
    /**
     * The action encountered a fatal error and the engine was unable to process.
     */
    report_action_result_codes_Error: Coding.FromStrict({
        code: "error",
        display: "Error",
        system: "http://hl7.org/fhir/report-action-result-codes"
    }),
    /**
     * The action failed.
     */
    report_action_result_codes_Fail: Coding.FromStrict({
        code: "fail",
        display: "Fail",
        system: "http://hl7.org/fhir/report-action-result-codes"
    }),
    /**
     * The action was successful.
     */
    report_action_result_codes_Pass: Coding.FromStrict({
        code: "pass",
        display: "Pass",
        system: "http://hl7.org/fhir/report-action-result-codes"
    }),
    /**
     * The action was skipped.
     */
    report_action_result_codes_Skip: Coding.FromStrict({
        code: "skip",
        display: "Skip",
        system: "http://hl7.org/fhir/report-action-result-codes"
    }),
    /**
     * The action passed but with warnings.
     */
    report_action_result_codes_Warning: Coding.FromStrict({
        code: "warning",
        display: "Warning",
        system: "http://hl7.org/fhir/report-action-result-codes"
    }),
};
//# sourceMappingURL=ReportActionResultCodesValueSet.js.map