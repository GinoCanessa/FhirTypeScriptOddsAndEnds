import { Coding } from '../fhir.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRecommendationStatusValueSet: {
    /**
     * complete: The patient is fully protected and no further doses are recommended.
     */
    readonly Complete: Coding;
    /**
     * contraindicated: The patient is contraindicated for futher doses.
     */
    readonly Contraindicated: Coding;
    /**
     * due: The patient is due for their next vaccination.
     */
    readonly Due: Coding;
    /**
     * immune: The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    readonly Immune: Coding;
    /**
     * overdue: The patient is considered overdue for their next vaccination.
     */
    readonly Overdue: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRecommendationStatusValueSetType = typeof ImmunizationRecommendationStatusValueSet;
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export declare enum ImmunizationRecommendationStatusValueSetEnum {
    /**
     * complete: The patient is fully protected and no further doses are recommended.
     */
    Complete = "complete",
    /**
     * contraindicated: The patient is contraindicated for futher doses.
     */
    Contraindicated = "contraindicated",
    /**
     * due: The patient is due for their next vaccination.
     */
    Due = "due",
    /**
     * immune: The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    Immune = "immune",
    /**
     * overdue: The patient is considered overdue for their next vaccination.
     */
    Overdue = "overdue"
}
//# sourceMappingURL=ImmunizationRecommendationStatusValueSet.d.ts.map