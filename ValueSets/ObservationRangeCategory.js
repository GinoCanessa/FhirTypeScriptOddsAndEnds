/**
 * Codes identifying the category of observation range.
 */
export var ObservationRangeCategory = {
    /**
     * Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
     */
    observation_range_category_AbsoluteRange: {
        code: "absolute",
        display: "absolute range",
        system: "http://hl7.org/fhir/observation-range-category"
    },
    /**
     * Critical Range for Ordinal and Continuous Observations.
     */
    observation_range_category_CriticalRange: {
        code: "critical",
        display: "critical range",
        system: "http://hl7.org/fhir/observation-range-category"
    },
    /**
     * Reference (Normal) Range for Ordinal and Continuous Observations.
     */
    observation_range_category_ReferenceRange: {
        code: "reference",
        display: "reference range",
        system: "http://hl7.org/fhir/observation-range-category"
    }
};
