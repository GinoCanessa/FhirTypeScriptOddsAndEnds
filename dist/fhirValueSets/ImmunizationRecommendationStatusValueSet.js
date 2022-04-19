// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export const ImmunizationRecommendationStatusValueSet = {
    /**
     * The patient is fully protected and no further doses are recommended.
     */
    immunization_recommendation_status_Complete: new Coding({
        code: "complete",
        display: "Complete",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    }),
    /**
     * The patient is contraindicated for futher doses.
     */
    immunization_recommendation_status_Contraindicated: new Coding({
        code: "contraindicated",
        display: "Contraindicated",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    }),
    /**
     * The patient is due for their next vaccination.
     */
    immunization_recommendation_status_Due: new Coding({
        code: "due",
        display: "Due",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    }),
    /**
     * The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    immunization_recommendation_status_Immune: new Coding({
        code: "immune",
        display: "Immune",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    }),
    /**
     * The patient is considered overdue for their next vaccination.
     */
    immunization_recommendation_status_Overdue: new Coding({
        code: "overdue",
        display: "Overdue",
        system: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status"
    }),
};
//# sourceMappingURL=ImmunizationRecommendationStatusValueSet.js.map