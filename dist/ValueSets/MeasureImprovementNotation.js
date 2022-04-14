"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureImprovementNotation = void 0;
/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 */
exports.MeasureImprovementNotation = {
    /**
     * Improvement is indicated as a decrease in the score or measurement (e.g. Lower score indicates better quality).
     */
    measure_improvement_notation_DecreasedScoreIndicatesImprovement: {
        code: "decrease",
        display: "Decreased score indicates improvement",
        system: "http://terminology.hl7.org/CodeSystem/measure-improvement-notation"
    },
    /**
     * Improvement is indicated as an increase in the score or measurement (e.g. Higher score indicates better quality).
     */
    measure_improvement_notation_IncreasedScoreIndicatesImprovement: {
        code: "increase",
        display: "Increased score indicates improvement",
        system: "http://terminology.hl7.org/CodeSystem/measure-improvement-notation"
    },
};
//# sourceMappingURL=MeasureImprovementNotation.js.map