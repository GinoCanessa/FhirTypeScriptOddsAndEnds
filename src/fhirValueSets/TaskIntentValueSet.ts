// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Distinguishes whether the task is a proposal, plan or full order.
 */
export const TaskIntentValueSet = {
  /**
   * The intent is not known.  When dealing with Task, it's not always known (or relevant) how the task was initiated - i.e. whether it was proposed, planned, ordered or just done spontaneously.
   */
  task_intent_Unknown: new Coding({
    code: "unknown",
    display: "Unknown",
    system: "http://hl7.org/fhir/task-intent"
  }),
};
