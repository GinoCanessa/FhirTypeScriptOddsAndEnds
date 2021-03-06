// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/immunization-recommendation-status|4.0.1
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export var ImmunizationRecommendationStatusValueSetEnum;
(function (ImmunizationRecommendationStatusValueSetEnum) {
    /**
     * complete: The patient is fully protected and no further doses are recommended.
     */
    ImmunizationRecommendationStatusValueSetEnum["Complete"] = "complete";
    /**
     * contraindicated: The patient is contraindicated for futher doses.
     */
    ImmunizationRecommendationStatusValueSetEnum["Contraindicated"] = "contraindicated";
    /**
     * due: The patient is due for their next vaccination.
     */
    ImmunizationRecommendationStatusValueSetEnum["Due"] = "due";
    /**
     * immune: The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    ImmunizationRecommendationStatusValueSetEnum["Immune"] = "immune";
    /**
     * overdue: The patient is considered overdue for their next vaccination.
     */
    ImmunizationRecommendationStatusValueSetEnum["Overdue"] = "overdue";
})(ImmunizationRecommendationStatusValueSetEnum || (ImmunizationRecommendationStatusValueSetEnum = {}));
//# sourceMappingURL=ImmunizationRecommendationStatusValueSetEnum.js.map