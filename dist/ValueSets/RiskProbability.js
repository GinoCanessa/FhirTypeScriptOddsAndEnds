"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProbability = void 0;
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
exports.RiskProbability = {
    /**
     * The specified outcome is effectively guaranteed.
     */
    risk_probability_Certain: {
        code: "certain",
        display: "Certain",
        system: "http://terminology.hl7.org/CodeSystem/risk-probability"
    },
    /**
     * The specified outcome is more likely to occur than not.
     */
    risk_probability_HighLikelihood: {
        code: "high",
        display: "High likelihood",
        system: "http://terminology.hl7.org/CodeSystem/risk-probability"
    },
    /**
     * The specified outcome is possible but unlikely.
     */
    risk_probability_LowLikelihood: {
        code: "low",
        display: "Low likelihood",
        system: "http://terminology.hl7.org/CodeSystem/risk-probability"
    },
    /**
     * The specified outcome has a reasonable likelihood of occurrence.
     */
    risk_probability_ModerateLikelihood: {
        code: "moderate",
        display: "Moderate likelihood",
        system: "http://terminology.hl7.org/CodeSystem/risk-probability"
    },
    /**
     * The specified outcome is exceptionally unlikely.
     */
    risk_probability_NegligibleLikelihood: {
        code: "negligible",
        display: "Negligible likelihood",
        system: "http://terminology.hl7.org/CodeSystem/risk-probability"
    },
};
//# sourceMappingURL=RiskProbability.js.map