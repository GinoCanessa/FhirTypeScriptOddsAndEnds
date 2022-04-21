import { Coding } from '../fhir.js';
/**
 * The reported execution result.
 */
export declare const ReportResultCodesValueSet: {
    /**
     * fail: One or more test operations failed one or more asserts.
     */
    readonly Fail: Coding;
    /**
     * pass: All test operations successfully passed all asserts.
     */
    readonly Pass: Coding;
    /**
     * pending: One or more test operations is pending execution completion.
     */
    readonly Pending: Coding;
};
/**
 * The reported execution result.
 */
export declare type ReportResultCodesValueSetType = typeof ReportResultCodesValueSet;
/**
 * The reported execution result.
 */
export declare enum ReportResultCodesValueSetEnum {
    /**
     * fail: One or more test operations failed one or more asserts.
     */
    Fail = "fail",
    /**
     * pass: All test operations successfully passed all asserts.
     */
    Pass = "pass",
    /**
     * pending: One or more test operations is pending execution completion.
     */
    Pending = "pending"
}
//# sourceMappingURL=ReportResultCodesValueSet.d.ts.map