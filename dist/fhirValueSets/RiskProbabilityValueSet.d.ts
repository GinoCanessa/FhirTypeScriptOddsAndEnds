import { Coding } from '../fhir';
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare const RiskProbabilityValueSet: {
    /**
     * The specified outcome is effectively guaranteed.
     */
    risk_probability_Certain: Coding;
    /**
     * The specified outcome is more likely to occur than not.
     */
    risk_probability_HighLikelihood: Coding;
    /**
     * The specified outcome is possible but unlikely.
     */
    risk_probability_LowLikelihood: Coding;
    /**
     * The specified outcome has a reasonable likelihood of occurrence.
     */
    risk_probability_ModerateLikelihood: Coding;
    /**
     * The specified outcome is exceptionally unlikely.
     */
    risk_probability_NegligibleLikelihood: Coding;
};
//# sourceMappingURL=RiskProbabilityValueSet.d.ts.map