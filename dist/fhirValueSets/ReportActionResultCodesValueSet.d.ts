import { Coding } from '../fhir.js';
/**
 * The results of executing an action.
 */
export declare const ReportActionResultCodesValueSet: {
    /**
     * error: The action encountered a fatal error and the engine was unable to process.
     */
    readonly Error: Coding;
    /**
     * fail: The action failed.
     */
    readonly Fail: Coding;
    /**
     * pass: The action was successful.
     */
    readonly Pass: Coding;
    /**
     * skip: The action was skipped.
     */
    readonly Skip: Coding;
    /**
     * warning: The action passed but with warnings.
     */
    readonly Warning: Coding;
};
/**
 * The results of executing an action.
 */
export declare type ReportActionResultCodesValueSetType = typeof ReportActionResultCodesValueSet;
/**
 * The results of executing an action.
 */
export declare enum ReportActionResultCodesValueSetEnum {
    /**
     * error: The action encountered a fatal error and the engine was unable to process.
     */
    Error = "error",
    /**
     * fail: The action failed.
     */
    Fail = "fail",
    /**
     * pass: The action was successful.
     */
    Pass = "pass",
    /**
     * skip: The action was skipped.
     */
    Skip = "skip",
    /**
     * warning: The action passed but with warnings.
     */
    Warning = "warning"
}
//# sourceMappingURL=ReportActionResultCodesValueSet.d.ts.map