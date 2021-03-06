import { Coding } from '../fhir.js';
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export declare const SynthesisTypeValueSet: {
    /**
     * classification: An approach describing a body of evidence by categorically classifying individual studies (eg 3 studies showed beneft and 2 studied found no effect).
     */
    readonly ClassifcationOfResults: Coding;
    /**
     * combined-NMA: An composite meta-analysis derived from direct comparisons and indirect comparisons in a network meta-analysis.
     */
    readonly CombinedDirectPlusIndirectNetworkMetaAnalysis: Coding;
    /**
     * indirect-NMA: An indirect meta-analysis derived from 2 or more direct comparisons in a network meta-analysis.
     */
    readonly IndirectNetworkMetaAnalysis: Coding;
    /**
     * IPD-MA: A meta-analysis of the individual participant data from individual studies or data sets.
     */
    readonly IndividualPatientDataMetaAnalysis: Coding;
    /**
     * range: A range of results across a body of evidence.
     */
    readonly RangeOfResults: Coding;
    /**
     * std-MA: A meta-analysis of the summary data of estimates from individual studies or data sets.
     */
    readonly SummaryDataMetaAnalysis: Coding;
};
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export declare type SynthesisTypeValueSetType = typeof SynthesisTypeValueSet;
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
//# sourceMappingURL=SynthesisTypeValueSet.d.ts.map