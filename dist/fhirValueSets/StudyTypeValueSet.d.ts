import { Coding } from '../fhir.js';
/**
 * Types of research studies (types of research methods).
 */
export declare const StudyTypeValueSet: {
    /**
     * case-control: case-control study.
     */
    readonly CaseControlStudy: Coding;
    /**
     * case-report: a single case report.
     */
    readonly CaseReport: Coding;
    /**
     * CCT: controlled (but not randomized) trial.
     */
    readonly ControlledTrialNonRandomized: Coding;
    /**
     * cohort: observational study comparing cohorts.
     */
    readonly ComparativeCohortStudy: Coding;
    /**
     * mixed: a combination of 1 or more types of studies.
     */
    readonly MixedMethods: Coding;
    /**
     * RCT: randomized controlled trial.
     */
    readonly RandomizedTrial: Coding;
    /**
     * series: uncontrolled cohort or case series.
     */
    readonly UncontrolledCohortOrCaseSeries: Coding;
};
/**
 * Types of research studies (types of research methods).
 */
export declare type StudyTypeValueSetType = typeof StudyTypeValueSet;
/**
 * Types of research studies (types of research methods).
 */
//# sourceMappingURL=StudyTypeValueSet.d.ts.map