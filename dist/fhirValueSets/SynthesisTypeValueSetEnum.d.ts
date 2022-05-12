/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export declare enum SynthesisTypeValueSetEnum {
    /**
     * classification: An approach describing a body of evidence by categorically classifying individual studies (eg 3 studies showed beneft and 2 studied found no effect).
     */
    ClassifcationOfResults = "classification",
    /**
     * combined-NMA: An composite meta-analysis derived from direct comparisons and indirect comparisons in a network meta-analysis.
     */
    CombinedDirectPlusIndirectNetworkMetaAnalysis = "combined-NMA",
    /**
     * indirect-NMA: An indirect meta-analysis derived from 2 or more direct comparisons in a network meta-analysis.
     */
    IndirectNetworkMetaAnalysis = "indirect-NMA",
    /**
     * IPD-MA: A meta-analysis of the individual participant data from individual studies or data sets.
     */
    IndividualPatientDataMetaAnalysis = "IPD-MA",
    /**
     * range: A range of results across a body of evidence.
     */
    RangeOfResults = "range",
    /**
     * std-MA: A meta-analysis of the summary data of estimates from individual studies or data sets.
     */
    SummaryDataMetaAnalysis = "std-MA"
}
//# sourceMappingURL=SynthesisTypeValueSetEnum.d.ts.map