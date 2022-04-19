import { Coding } from '../fhir';
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export declare const SynthesisTypeValueSet: {
    /**
     * An approach describing a body of evidence by categorically classifying individual studies (eg 3 studies showed beneft and 2 studied found no effect).
     */
    synthesis_type_ClassifcationOfResults: Coding;
    /**
     * An composite meta-analysis derived from direct comparisons and indirect comparisons in a network meta-analysis.
     */
    synthesis_type_CombinedDirectPlusIndirectNetworkMetaAnalysis: Coding;
    /**
     * An indirect meta-analysis derived from 2 or more direct comparisons in a network meta-analysis.
     */
    synthesis_type_IndirectNetworkMetaAnalysis: Coding;
    /**
     * A meta-analysis of the individual participant data from individual studies or data sets.
     */
    synthesis_type_IndividualPatientDataMetaAnalysis: Coding;
    /**
     * A range of results across a body of evidence.
     */
    synthesis_type_RangeOfResults: Coding;
    /**
     * A meta-analysis of the summary data of estimates from individual studies or data sets.
     */
    synthesis_type_SummaryDataMetaAnalysis: Coding;
};
//# sourceMappingURL=SynthesisTypeValueSet.d.ts.map