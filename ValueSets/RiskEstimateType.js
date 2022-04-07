/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export var RiskEstimateType = {
    /**
     * descriptive measure reported as total number of items.
     */
    risk_estimate_type_Count: {
        code: "count",
        display: "count",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type"
    },
    /**
     * A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    risk_estimate_type_DerivedProportion: {
        code: "derivedProportion",
        display: "derivedProportion",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type"
    },
    /**
     * descriptive measure reported as narrative.
     */
    risk_estimate_type_Descriptive: {
        code: "descriptive",
        display: "descriptive",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type"
    },
    /**
     * continuous numerical measure reported as an average.
     */
    risk_estimate_type_Mean: {
        code: "mean",
        display: "mean",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type"
    },
    /**
     * continuous numerical measure reported as the middle of the range.
     */
    risk_estimate_type_Median: {
        code: "median",
        display: "median",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type"
    },
    /**
     * dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
     */
    risk_estimate_type_Proportion: {
        code: "proportion",
        display: "proportion",
        system: "http://terminology.hl7.org/CodeSystem/risk-estimate-type"
    }
};
