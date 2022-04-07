/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 */
export var ImmunizationSubpotentReason = {
    /**
     * The vaccine experienced a cold chain break.
     */
    immunization_subpotent_reason_ColdChainBreak: {
        code: "coldchainbreak",
        display: "Cold Chain Break",
        system: "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason"
    },
    /**
     * The full volume of the dose was not administered to the patient.
     */
    immunization_subpotent_reason_PartialDose: {
        code: "partial",
        display: "Partial Dose",
        system: "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason"
    },
    /**
     * The vaccine was recalled by the manufacturer.
     */
    immunization_subpotent_reason_ManufacturerRecall: {
        code: "recall",
        display: "Manufacturer Recall",
        system: "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason"
    }
};
