/**
 * The kind of dose or rate specified.
 */
export var DoseRateType = {
    /**
     * The dose specified is calculated by the prescriber or the system.
     */
    dose_rate_type_Calculated: {
        code: "calculated",
        display: "Calculated",
        system: "http://terminology.hl7.org/CodeSystem/dose-rate-type"
    },
    /**
     * The dose specified is as ordered by the prescriber.
     */
    dose_rate_type_Ordered: {
        code: "ordered",
        display: "Ordered",
        system: "http://terminology.hl7.org/CodeSystem/dose-rate-type"
    }
};
