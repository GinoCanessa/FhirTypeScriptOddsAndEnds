import { Coding } from '../strictmodels';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRecommendationStatus: {
    /**
     * The patient is fully protected and no further doses are recommended.
     */
    immunization_recommendation_status_Complete: Coding;
    /**
     * The patient is contraindicated for futher doses.
     */
    immunization_recommendation_status_Contraindicated: Coding;
    /**
     * The patient is due for their next vaccination.
     */
    immunization_recommendation_status_Due: Coding;
    /**
     * The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    immunization_recommendation_status_Immune: Coding;
    /**
     * The patient is considered overdue for their next vaccination.
     */
    immunization_recommendation_status_Overdue: Coding;
};
//# sourceMappingURL=ImmunizationRecommendationStatus.d.ts.map