/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export var PrecisionEstimateType = {
    /**
     * confidence interval.
     */
    precision_estimate_type_ConfidenceInterval: {
        code: "CI",
        display: "confidence interval",
        system: "http://terminology.hl7.org/CodeSystem/precision-estimate-type"
    },
    /**
     * interquartile range.
     */
    precision_estimate_type_InterquartileRange: {
        code: "IQR",
        display: "interquartile range",
        system: "http://terminology.hl7.org/CodeSystem/precision-estimate-type"
    },
    /**
     * standard deviation.
     */
    precision_estimate_type_StandardDeviation: {
        code: "SD",
        display: "standard deviation",
        system: "http://terminology.hl7.org/CodeSystem/precision-estimate-type"
    },
    /**
     * standard error.
     */
    precision_estimate_type_StandardError: {
        code: "SE",
        display: "standard error",
        system: "http://terminology.hl7.org/CodeSystem/precision-estimate-type"
    }
};
