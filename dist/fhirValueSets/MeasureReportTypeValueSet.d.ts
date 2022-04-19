import { Coding } from '../fhir';
/**
 * The type of the measure report.
 */
export declare const MeasureReportTypeValueSet: {
    /**
     * A data collection report that contains data-of-interest for the measure.
     */
    measure_report_type_DataCollection: Coding;
    /**
     * An individual report that provides information on the performance for a given measure with respect to a single subject.
     */
    measure_report_type_Individual: Coding;
    /**
     * A subject list report that includes a listing of subjects that satisfied each population criteria in the measure.
     */
    measure_report_type_SubjectList: Coding;
    /**
     * A summary report that returns the number of members in each population criteria for the measure.
     */
    measure_report_type_Summary: Coding;
};
//# sourceMappingURL=MeasureReportTypeValueSet.d.ts.map