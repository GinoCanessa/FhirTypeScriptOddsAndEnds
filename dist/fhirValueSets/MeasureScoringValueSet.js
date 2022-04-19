// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The scoring type of the measure.
 */
export const MeasureScoringValueSet = {
    /**
     * The measure is a cohort definition.
     */
    measure_scoring_Cohort: new Coding({
        code: "cohort",
        display: "Cohort",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring"
    }),
    /**
     * The score is defined by a calculation of some quantity.
     */
    measure_scoring_ContinuousVariable: new Coding({
        code: "continuous-variable",
        display: "Continuous Variable",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring"
    }),
    /**
     * The measure score is defined using a proportion.
     */
    measure_scoring_Proportion: new Coding({
        code: "proportion",
        display: "Proportion",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring"
    }),
    /**
     * The measure score is defined using a ratio.
     */
    measure_scoring_Ratio: new Coding({
        code: "ratio",
        display: "Ratio",
        system: "http://terminology.hl7.org/CodeSystem/measure-scoring"
    }),
};
//# sourceMappingURL=MeasureScoringValueSet.js.map