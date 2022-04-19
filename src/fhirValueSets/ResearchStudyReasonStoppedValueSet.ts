// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes for why the study ended prematurely.
 */
export const ResearchStudyReasonStoppedValueSet = {
  /**
   * The study prematurely ended because the accrual goal was met.
   */
  research_study_reason_stopped_AccrualGoalMet: new Coding({
    code: "accrual-goal-met",
    display: "Accrual Goal Met",
    system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped"
  }),
  /**
   * The study prematurely ended due to lack of study progress.
   */
  research_study_reason_stopped_ClosedDueToLackOfStudyProgress: new Coding({
    code: "closed-due-to-lack-of-study-progress",
    display: "Closed due to lack of study progress",
    system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped"
  }),
  /**
   * The study prematurely ended due to toxicity.
   */
  research_study_reason_stopped_ClosedDueToToxicity: new Coding({
    code: "closed-due-to-toxicity",
    display: "Closed due to toxicity",
    system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped"
  }),
  /**
   * The study prematurely ended temporarily per study design.
   */
  research_study_reason_stopped_TemporarilyClosedPerStudyDesign: new Coding({
    code: "temporarily-closed-per-study-design",
    display: "Temporarily closed per study design",
    system: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped"
  }),
};
