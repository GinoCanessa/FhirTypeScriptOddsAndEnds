"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchStudyPhase = void 0;
/**
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 */
exports.ResearchStudyPhase = {
    /**
     * Designation for optional exploratory trials conducted in accordance with the United States Food and Drug Administration's (FDA) 2006 Guidance on Exploratory Investigational New Drug (IND) Studies. Formerly called Phase 0.
     */
    research_study_phase_EarlyPhase1: {
        code: "early-phase-1",
        display: "Early Phase 1",
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase"
    },
    /**
     * Trials without phases (for example, studies of devices or behavioral interventions).
     */
    research_study_phase_NA: {
        code: "n-a",
        display: "N/A",
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase"
    },
    /**
     * Includes initial studies to determine the metabolism and pharmacologic actions of drugs in humans, the side effects associated with increasing doses, and to gain early evidence of effectiveness; may include healthy participants and/or patients.
     */
    research_study_phase_Phase1: {
        code: "phase-1",
        display: "Phase 1",
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase"
    },
    /**
     * Trials that are a combination of phases 1 and 2.
     */
    research_study_phase_Phase1Phase2: {
        code: "phase-1-phase-2",
        display: "Phase 1/Phase 2",
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase"
    },
    /**
     * Includes controlled clinical studies conducted to evaluate the effectiveness of the drug for a particular indication or indications in participants with the disease or condition under study and to determine the common short-term side effects and risks.
     */
    research_study_phase_Phase2: {
        code: "phase-2",
        display: "Phase 2",
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase"
    },
    /**
     * Trials that are a combination of phases 2 and 3.
     */
    research_study_phase_Phase2Phase3: {
        code: "phase-2-phase-3",
        display: "Phase 2/Phase 3",
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase"
    },
    /**
     * Includes trials conducted after preliminary evidence suggesting effectiveness of the drug has been obtained, and are intended to gather additional information to evaluate the overall benefit-risk relationship of the drug.
     */
    research_study_phase_Phase3: {
        code: "phase-3",
        display: "Phase 3",
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase"
    },
    /**
     * Studies of FDA-approved drugs to delineate additional information including the drug's risks, benefits, and optimal use.
     */
    research_study_phase_Phase4: {
        code: "phase-4",
        display: "Phase 4",
        system: "http://terminology.hl7.org/CodeSystem/research-study-phase"
    },
};
//# sourceMappingURL=ResearchStudyPhase.js.map