"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllergyIntoleranceCriticality = void 0;
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
exports.AllergyIntoleranceCriticality = {
    /**
     * Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
     */
    allergy_intolerance_criticality_HighRisk: {
        code: "high",
        display: "High Risk",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality"
    },
    /**
     * Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
     */
    allergy_intolerance_criticality_LowRisk: {
        code: "low",
        display: "Low Risk",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality"
    },
    /**
     * Unable to assess the worst case result of a future exposure.
     */
    allergy_intolerance_criticality_UnableToAssessRisk: {
        code: "unable-to-assess",
        display: "Unable to Assess Risk",
        system: "http://hl7.org/fhir/allergy-intolerance-criticality"
    },
};
//# sourceMappingURL=AllergyIntoleranceCriticality.js.map