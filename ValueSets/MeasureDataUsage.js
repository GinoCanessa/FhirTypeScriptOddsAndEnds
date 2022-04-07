/**
 * The intended usage for supplemental data elements in the measure.
 */
export var MeasureDataUsage = {
    /**
     * The data is intended to be used to calculate and apply a risk adjustment model for the measure.
     */
    measure_data_usage_RiskAdjustmentFactor: {
        code: "risk-adjustment-factor",
        display: "Risk Adjustment Factor",
        system: "http://terminology.hl7.org/CodeSystem/measure-data-usage"
    },
    /**
     * The data is intended to be provided as additional information alongside the measure results.
     */
    measure_data_usage_SupplementalData: {
        code: "supplemental-data",
        display: "Supplemental Data",
        system: "http://terminology.hl7.org/CodeSystem/measure-data-usage"
    }
};
