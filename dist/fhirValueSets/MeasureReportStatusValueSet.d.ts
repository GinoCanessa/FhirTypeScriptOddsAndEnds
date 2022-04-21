import { Coding } from '../fhir.js';
/**
 * The status of the measure report.
 */
export declare const MeasureReportStatusValueSet: {
    /**
     * complete: The report is complete and ready for use.
     */
    readonly Complete: Coding;
    /**
     * error: An error occurred attempting to generate the report.
     */
    readonly Error: Coding;
    /**
     * pending: The report is currently being generated.
     */
    readonly Pending: Coding;
};
/**
 * The status of the measure report.
 */
export declare type MeasureReportStatusValueSetType = typeof MeasureReportStatusValueSet;
/**
 * The status of the measure report.
 */
export declare enum MeasureReportStatusValueSetEnum {
    /**
     * complete: The report is complete and ready for use.
     */
    Complete = "complete",
    /**
     * error: An error occurred attempting to generate the report.
     */
    Error = "error",
    /**
     * pending: The report is currently being generated.
     */
    Pending = "pending"
}
//# sourceMappingURL=MeasureReportStatusValueSet.d.ts.map