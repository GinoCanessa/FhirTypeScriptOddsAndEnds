/**
 * The composite scoring method of the measure.
 */
export declare enum CompositeMeasureScoringValueSetEnum {
    /**
     * all-or-nothing: All-or-nothing scoring includes an individual in the numerator of the composite measure if they are in the numerators of all of the component measures in which they are in the denominator.
     */
    AllOrNothing = "all-or-nothing",
    /**
     * linear: Linear scoring gives an individual a score based on the number of numerators in which they appear.
     */
    Linear = "linear",
    /**
     * opportunity: Opportunity scoring combines the scores from component measures by combining the numerators and denominators for each component.
     */
    Opportunity = "opportunity",
    /**
     * weighted: Weighted scoring gives an individual a score based on a weighted factor for each component numerator in which they appear.
     */
    Weighted = "weighted"
}
//# sourceMappingURL=CompositeMeasureScoringValueSetEnum.d.ts.map