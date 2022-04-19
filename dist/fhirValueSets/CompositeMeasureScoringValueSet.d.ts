import { Coding } from '../fhir';
/**
 * The composite scoring method of the measure.
 */
export declare const CompositeMeasureScoringValueSet: {
    /**
     * All-or-nothing scoring includes an individual in the numerator of the composite measure if they are in the numerators of all of the component measures in which they are in the denominator.
     */
    composite_measure_scoring_AllOrNothing: Coding;
    /**
     * Linear scoring gives an individual a score based on the number of numerators in which they appear.
     */
    composite_measure_scoring_Linear: Coding;
    /**
     * Opportunity scoring combines the scores from component measures by combining the numerators and denominators for each component.
     */
    composite_measure_scoring_Opportunity: Coding;
    /**
     * Weighted scoring gives an individual a score based on a weighted factor for each component numerator in which they appear.
     */
    composite_measure_scoring_Weighted: Coding;
};
//# sourceMappingURL=CompositeMeasureScoringValueSet.d.ts.map