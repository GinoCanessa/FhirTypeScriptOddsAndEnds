// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Defines selection frequency behavior for an action or group.
 */
export const ActionPrecheckBehaviorValueSet = {
  /**
   * An action with this behavior is one of the less frequent actions included by the end user, for the particular context in which the action occurs. The system displaying the actions to the end user would typically not "pre-check" such an action.
   */
  action_precheck_behavior_No: new Coding({
    code: "no",
    display: "No",
    system: "http://hl7.org/fhir/action-precheck-behavior"
  }),
  /**
   * An action with this behavior is one of the most frequent action that is, or should be, included by an end user, for the particular context in which the action occurs. The system displaying the action to the end user should consider "pre-checking" such an action as a convenience for the user.
   */
  action_precheck_behavior_Yes: new Coding({
    code: "yes",
    display: "Yes",
    system: "http://hl7.org/fhir/action-precheck-behavior"
  }),
};
