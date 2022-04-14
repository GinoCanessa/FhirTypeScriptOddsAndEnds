"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyType = void 0;
/**
 * Types of research studies (types of research methods).
 */
exports.StudyType = {
    /**
     * case-control study.
     */
    study_type_CaseControlStudy: {
        code: "case-control",
        display: "case-control study",
        system: "http://terminology.hl7.org/CodeSystem/study-type"
    },
    /**
     * a single case report.
     */
    study_type_CaseReport: {
        code: "case-report",
        display: "case report",
        system: "http://terminology.hl7.org/CodeSystem/study-type"
    },
    /**
     * controlled (but not randomized) trial.
     */
    study_type_ControlledTrialNonRandomized: {
        code: "CCT",
        display: "controlled trial (non-randomized)",
        system: "http://terminology.hl7.org/CodeSystem/study-type"
    },
    /**
     * observational study comparing cohorts.
     */
    study_type_ComparativeCohortStudy: {
        code: "cohort",
        display: "comparative cohort study",
        system: "http://terminology.hl7.org/CodeSystem/study-type"
    },
    /**
     * a combination of 1 or more types of studies.
     */
    study_type_MixedMethods: {
        code: "mixed",
        display: "mixed methods",
        system: "http://terminology.hl7.org/CodeSystem/study-type"
    },
    /**
     * randomized controlled trial.
     */
    study_type_RandomizedTrial: {
        code: "RCT",
        display: "randomized trial",
        system: "http://terminology.hl7.org/CodeSystem/study-type"
    },
    /**
     * uncontrolled cohort or case series.
     */
    study_type_UncontrolledCohortOrCaseSeries: {
        code: "series",
        display: "uncontrolled cohort or case series",
        system: "http://terminology.hl7.org/CodeSystem/study-type"
    },
};
//# sourceMappingURL=StudyType.js.map