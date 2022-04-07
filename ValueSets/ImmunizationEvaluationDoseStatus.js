/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 */
export var ImmunizationEvaluationDoseStatus = {
    /**
     * The dose does not count toward fulfilling a path to immunity for a patient.
     */
    immunization_evaluation_dose_status_NotValid: {
        code: "notvalid",
        display: "Not valid",
        system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status"
    },
    /**
     * The dose counts toward fulfilling a path to immunity for a patient, providing protection against the target disease.
     */
    immunization_evaluation_dose_status_Valid: {
        code: "valid",
        display: "Valid",
        system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status"
    }
};
