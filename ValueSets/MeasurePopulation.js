/**
 * The type of population.
 */
export var MeasurePopulation = {
    /**
     * The lower portion of a fraction used to calculate a rate, proportion, or ratio. The denominator can be the same as the initial population, or a subset of the initial population to further constrain the population for the purpose of the measure.
     */
    measure_population_Denominator: {
        code: "denominator",
        display: "Denominator",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    },
    /**
     * Denominator exceptions are conditions that should remove a patient or event from the denominator of a measure only if the numerator criteria are not met. Denominator exception allows for adjustment of the calculated score for those providers with higher risk populations. Denominator exception criteria are only used in proportion measures.
     */
    measure_population_DenominatorException: {
        code: "denominator-exception",
        display: "Denominator Exception",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    },
    /**
     * Denominator exclusion criteria define patients or events that should be removed from the denominator before determining if numerator criteria are met. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator. For example, patients with bilateral lower extremity amputations would be listed as a denominator exclusion for a measure requiring foot exams.
     */
    measure_population_DenominatorExclusion: {
        code: "denominator-exclusion",
        display: "Denominator Exclusion",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    },
    /**
     * The initial population refers to all patients or events to be evaluated by a quality measure involving patients who share a common set of specified characterstics. All patients or events counted (for example, as numerator, as denominator) are drawn from the initial population.
     */
    measure_population_InitialPopulation: {
        code: "initial-population",
        display: "Initial Population",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    },
    /**
     * Defines the individual observation to be performed for each patient or event in the measure population. Measure observations for each case in the population are aggregated to determine the overall measure score for the population.
     */
    measure_population_MeasureObservation: {
        code: "measure-observation",
        display: "Measure Observation",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    },
    /**
     * Measure population criteria define the patients or events for which the individual observation for the measure should be taken. Measure populations are used for continuous variable measures rather than numerator and denominator criteria.
     */
    measure_population_MeasurePopulation: {
        code: "measure-population",
        display: "Measure Population",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    },
    /**
     * Measure population criteria define the patients or events that should be removed from the measure population before determining the outcome of one or more continuous variables defined for the measure observation. Measure population exclusion criteria are used within continuous variable measures to help narrow the measure population.
     */
    measure_population_MeasurePopulationExclusion: {
        code: "measure-population-exclusion",
        display: "Measure Population Exclusion",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    },
    /**
     * The upper portion of a fraction used to calculate a rate, proportion, or ratio. Also called the measure focus, it is the target process, condition, event, or outcome. Numerator criteria are the processes or outcomes expected for each patient, or event defined in the denominator. A numerator statement describes the clinical action that satisfies the conditions of the measure.
     */
    measure_population_Numerator: {
        code: "numerator",
        display: "Numerator",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    },
    /**
     * Numerator exclusion criteria define patients or events to be removed from the numerator. Numerator exclusions are used in proportion and ratio measures to help narrow the numerator (for inverted measures).
     */
    measure_population_NumeratorExclusion: {
        code: "numerator-exclusion",
        display: "Numerator Exclusion",
        system: "http://terminology.hl7.org/CodeSystem/measure-population"
    }
};
