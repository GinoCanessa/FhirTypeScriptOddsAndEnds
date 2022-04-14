"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmunizationRecommendationStatus = void 0;
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
exports.ImmunizationRecommendationStatus = {
    /**
     * The patient is fully protected and no further doses are recommended.
     */
    immunization_recommendation_status_Complete: {
        code: "complete",
        display: "Complete",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    },
    /**
     * The patient is contraindicated for futher doses.
     */
    immunization_recommendation_status_Contraindicated: {
        code: "contraindicated",
        display: "Contraindicated",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    },
    /**
     * The patient is due for their next vaccination.
     */
    immunization_recommendation_status_Due: {
        code: "due",
        display: "Due",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    },
    /**
     * The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    immunization_recommendation_status_Immune: {
        code: "immune",
        display: "Immune",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    },
    /**
     * The patient is considered overdue for their next vaccination.
     */
    immunization_recommendation_status_Overdue: {
        code: "overdue",
        display: "Overdue",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    },
};
//# sourceMappingURL=ImmunizationRecommendationStatus.js.map