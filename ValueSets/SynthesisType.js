/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export var SynthesisType = {
    /**
     * An approach describing a body of evidence by categorically classifying individual studies (eg 3 studies showed beneft and 2 studied found no effect).
     */
    synthesis_type_ClassifcationOfResults: {
        code: "classification",
        display: "classifcation of results",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    },
    /**
     * An composite meta-analysis derived from direct comparisons and indirect comparisons in a network meta-analysis.
     */
    synthesis_type_CombinedDirectPlusIndirectNetworkMetaAnalysis: {
        code: "combined-NMA",
        display: "combined direct plus indirect network meta-analysis",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    },
    /**
     * An indirect meta-analysis derived from 2 or more direct comparisons in a network meta-analysis.
     */
    synthesis_type_IndirectNetworkMetaAnalysis: {
        code: "indirect-NMA",
        display: "indirect network meta-analysis",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    },
    /**
     * A meta-analysis of the individual participant data from individual studies or data sets.
     */
    synthesis_type_IndividualPatientDataMetaAnalysis: {
        code: "IPD-MA",
        display: "individual patient data meta-analysis",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    },
    /**
     * A range of results across a body of evidence.
     */
    synthesis_type_RangeOfResults: {
        code: "range",
        display: "range of results",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    },
    /**
     * A meta-analysis of the summary data of estimates from individual studies or data sets.
     */
    synthesis_type_SummaryDataMetaAnalysis: {
        code: "std-MA",
        display: "summary data meta-analysis",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    }
};
