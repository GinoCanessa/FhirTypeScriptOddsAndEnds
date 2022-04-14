"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMeasure = void 0;
/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
exports.GroupMeasure = {
    /**
     * Aggregated using Mean of participant values.
     */
    group_measure_Mean: {
        code: "mean",
        display: "Mean",
        system: "http://hl7.org/fhir/group-measure"
    },
    /**
     * Aggregated using Mean of study mean values.
     */
    group_measure_MeanOfStudyMeans: {
        code: "mean-of-mean",
        display: "Mean of Study Means",
        system: "http://hl7.org/fhir/group-measure"
    },
    /**
     * Aggregated using Mean of study median values.
     */
    group_measure_MeanOfStudyMedins: {
        code: "mean-of-median",
        display: "Mean of Study Medins",
        system: "http://hl7.org/fhir/group-measure"
    },
    /**
     * Aggregated using Median of participant values.
     */
    group_measure_Median: {
        code: "median",
        display: "Median",
        system: "http://hl7.org/fhir/group-measure"
    },
    /**
     * Aggregated using Median of study mean values.
     */
    group_measure_MedianOfStudyMeans: {
        code: "median-of-mean",
        display: "Median of Study Means",
        system: "http://hl7.org/fhir/group-measure"
    },
    /**
     * Aggregated using Median of study median values.
     */
    group_measure_MedianOfStudyMedians: {
        code: "median-of-median",
        display: "Median of Study Medians",
        system: "http://hl7.org/fhir/group-measure"
    },
};
//# sourceMappingURL=GroupMeasure.js.map