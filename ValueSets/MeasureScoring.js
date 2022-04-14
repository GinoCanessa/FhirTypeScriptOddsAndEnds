"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureScoring = void 0;
/**
 * The scoring type of the measure.
 */
exports.MeasureScoring = {
    /**
     * The measure is a cohort definition.
     */
    measure_scoring_Cohort: {
        code: "cohort",
        display: "Cohort",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring"
    },
    /**
     * The score is defined by a calculation of some quantity.
     */
    measure_scoring_ContinuousVariable: {
        code: "continuous-variable",
        display: "Continuous Variable",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring"
    },
    /**
     * The measure score is defined using a proportion.
     */
    measure_scoring_Proportion: {
        code: "proportion",
        display: "Proportion",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring"
    },
    /**
     * The measure score is defined using a ratio.
     */
    measure_scoring_Ratio: {
        code: "ratio",
        display: "Ratio",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring"
    },
};
//# sourceMappingURL=MeasureScoring.js.map