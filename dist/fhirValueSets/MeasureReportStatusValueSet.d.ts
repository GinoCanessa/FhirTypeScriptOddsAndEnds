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
//# sourceMappingURL=MeasureReportStatusValueSet.d.ts.map