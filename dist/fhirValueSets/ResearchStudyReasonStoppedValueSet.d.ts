import { Coding } from '../fhir.js';
/**
 * Codes for why the study ended prematurely.
 */
export declare const ResearchStudyReasonStoppedValueSet: {
    /**
     * accrual-goal-met: The study prematurely ended because the accrual goal was met.
     */
    readonly AccrualGoalMet: Coding;
    /**
     * closed-due-to-lack-of-study-progress: The study prematurely ended due to lack of study progress.
     */
    readonly ClosedDueToLackOfStudyProgress: Coding;
    /**
     * closed-due-to-toxicity: The study prematurely ended due to toxicity.
     */
    readonly ClosedDueToToxicity: Coding;
    /**
     * temporarily-closed-per-study-design: The study prematurely ended temporarily per study design.
     */
    readonly TemporarilyClosedPerStudyDesign: Coding;
};
/**
 * Codes for why the study ended prematurely.
 */
export declare type ResearchStudyReasonStoppedValueSetType = typeof ResearchStudyReasonStoppedValueSet;
/**
 * Codes for why the study ended prematurely.
 */
export declare enum ResearchStudyReasonStoppedValueSetEnum {
    /**
     * accrual-goal-met: The study prematurely ended because the accrual goal was met.
     */
    AccrualGoalMet = "accrual-goal-met",
    /**
     * closed-due-to-lack-of-study-progress: The study prematurely ended due to lack of study progress.
     */
    ClosedDueToLackOfStudyProgress = "closed-due-to-lack-of-study-progress",
    /**
     * closed-due-to-toxicity: The study prematurely ended due to toxicity.
     */
    ClosedDueToToxicity = "closed-due-to-toxicity",
    /**
     * temporarily-closed-per-study-design: The study prematurely ended temporarily per study design.
     */
    TemporarilyClosedPerStudyDesign = "temporarily-closed-per-study-design"
}
//# sourceMappingURL=ResearchStudyReasonStoppedValueSet.d.ts.map