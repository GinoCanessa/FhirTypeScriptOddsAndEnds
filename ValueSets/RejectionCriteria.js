/**
 * Criterion for rejection of the specimen by laboratory.
 */
export var RejectionCriteria = {
    /**
     * specimen container broken.
     */
    rejection_criteria_BrokenSpecimenContainer: {
        code: "broken",
        display: "broken specimen container",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria"
    },
    /**
     * specimen clotted.
     */
    rejection_criteria_SpecimenClotted: {
        code: "clotted",
        display: "specimen clotted",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria"
    },
    /**
     * blood specimen hemolized.
     */
    rejection_criteria_HemolizedSpecimen: {
        code: "hemolized",
        display: "hemolized specimen",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria"
    },
    /**
     * insufficient quantity of specimen.
     */
    rejection_criteria_InsufficientSpecimenVolume: {
        code: "insufficient",
        display: "insufficient specimen volume",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria"
    },
    /**
     * specimen temperature inappropriate.
     */
    rejection_criteria_SpecimenTemperatureInappropriate: {
        code: "wrong-temperature",
        display: "specimen temperature inappropriate",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria"
    }
};
