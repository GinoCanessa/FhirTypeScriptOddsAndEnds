// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export const SynthesisTypeValueSet = {
    /**
     * An approach describing a body of evidence by categorically classifying individual studies (eg 3 studies showed beneft and 2 studied found no effect).
     */
    synthesis_type_ClassifcationOfResults: Coding.FromStrict({
        code: "classification",
        display: "classifcation of results",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    }),
    /**
     * An composite meta-analysis derived from direct comparisons and indirect comparisons in a network meta-analysis.
     */
    synthesis_type_CombinedDirectPlusIndirectNetworkMetaAnalysis: Coding.FromStrict({
        code: "combined-NMA",
        display: "combined direct plus indirect network meta-analysis",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    }),
    /**
     * An indirect meta-analysis derived from 2 or more direct comparisons in a network meta-analysis.
     */
    synthesis_type_IndirectNetworkMetaAnalysis: Coding.FromStrict({
        code: "indirect-NMA",
        display: "indirect network meta-analysis",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    }),
    /**
     * A meta-analysis of the individual participant data from individual studies or data sets.
     */
    synthesis_type_IndividualPatientDataMetaAnalysis: Coding.FromStrict({
        code: "IPD-MA",
        display: "individual patient data meta-analysis",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    }),
    /**
     * A range of results across a body of evidence.
     */
    synthesis_type_RangeOfResults: Coding.FromStrict({
        code: "range",
        display: "range of results",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    }),
    /**
     * A meta-analysis of the summary data of estimates from individual studies or data sets.
     */
    synthesis_type_SummaryDataMetaAnalysis: Coding.FromStrict({
        code: "std-MA",
        display: "summary data meta-analysis",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type"
    }),
};
//# sourceMappingURL=SynthesisTypeValueSet.js.map