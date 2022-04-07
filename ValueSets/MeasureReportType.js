/**
 * The type of the measure report.
 */
export var MeasureReportType = {
    /**
     * A data collection report that contains data-of-interest for the measure.
     */
    measure_report_type_DataCollection: {
        code: "data-collection",
        display: "Data Collection",
        system: "http://hl7.org/fhir/measure-report-type"
    },
    /**
     * An individual report that provides information on the performance for a given measure with respect to a single subject.
     */
    measure_report_type_Individual: {
        code: "individual",
        display: "Individual",
        system: "http://hl7.org/fhir/measure-report-type"
    },
    /**
     * A subject list report that includes a listing of subjects that satisfied each population criteria in the measure.
     */
    measure_report_type_SubjectList: {
        code: "subject-list",
        display: "Subject List",
        system: "http://hl7.org/fhir/measure-report-type"
    },
    /**
     * A summary report that returns the number of members in each population criteria for the measure.
     */
    measure_report_type_Summary: {
        code: "summary",
        display: "Summary",
        system: "http://hl7.org/fhir/measure-report-type"
    }
};
