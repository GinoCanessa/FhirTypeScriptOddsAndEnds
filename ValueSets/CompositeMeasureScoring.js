/**
 * The composite scoring method of the measure.
 */
export var CompositeMeasureScoring = {
    /**
     * All-or-nothing scoring includes an individual in the numerator of the composite measure if they are in the numerators of all of the component measures in which they are in the denominator.
     */
    composite_measure_scoring_AllOrNothing: {
        code: "all-or-nothing",
        display: "All-or-nothing",
        system: "http://terminology.hl7.org/CodeSystem/composite-measure-scoring"
    },
    /**
     * Linear scoring gives an individual a score based on the number of numerators in which they appear.
     */
    composite_measure_scoring_Linear: {
        code: "linear",
        display: "Linear",
        system: "http://terminology.hl7.org/CodeSystem/composite-measure-scoring"
    },
    /**
     * Opportunity scoring combines the scores from component measures by combining the numerators and denominators for each component.
     */
    composite_measure_scoring_Opportunity: {
        code: "opportunity",
        display: "Opportunity",
        system: "http://terminology.hl7.org/CodeSystem/composite-measure-scoring"
    },
    /**
     * Weighted scoring gives an individual a score based on a weighted factor for each component numerator in which they appear.
     */
    composite_measure_scoring_Weighted: {
        code: "weighted",
        display: "Weighted",
        system: "http://terminology.hl7.org/CodeSystem/composite-measure-scoring"
    }
};
